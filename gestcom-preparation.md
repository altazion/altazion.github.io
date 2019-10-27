# Gestion des commandes

Altazion Orchestrator est notre outil OMS. Celui-ci a encore besoin d'être industrialisé et plus packagé, mais contient déjà de nombreuses fonctionnalités.

Il existe 3 grands types de commandes dans nos outils : 

- les commandes "simples", sont enregistrées par les outils "front" (site e-commerce, bornes, tablettes, etc.). Elles peuvent soit être préparée manuellement (ou réalisé via API) ou être ensuite transformées en commandes "complètes".
- les commandes "complètes", qui sont l'objet principal de l'OMS
- les commmandes "inter structures" destinées à être utilisées lors du passage de réservation ou d'achats entre plusieurs entités telles que des magasins, entrepôts, etc.


## Gestion des commandes simples

Les commandes simples sont stockées dans la table [`e.ecommerce_bonscommandes`](../database/generated_ecommerce_bonscommandes.md) (la première itération de ce type de commande ayant été imaginée pour le module e-commerce). C'est dans cette table que les modules Altazion Store & Altazion Commerce crééent les commandes passées par les clients.

Ces commandes sont utilisées soit : 

- pour alimenter les commandes "complètes" et déclencher des workflows de préparation
- ou, dans le cadre de solution plus simples et ne demandant pas de traitements poussés des commandes, pour être traitées et préparées manuellement.

### Traitement simple

Si les commandes ne sont pas destinées à alimenter l'OMS, La colonne `ebc_etat` de cette table correspond à l'état de la commande entre :

- 0 : en cours d'élaboration, la commande n'est pas encore validée par le client
- 1 : validée, la commande a été confirmée par le client
- 2 : prêt à être traitée/envoyée
- 3 : préparée/envoyée
- 4 : archivée

Pour plus de renseignements sur les [commandes simples et leur fonctionnement, consultez l'aide en ligne publique](http://aide.commerce-hub.io/administration/concepts/ventes/commandes/commandessimples.aspx).

La progression entre les états ne se fait que de façon "manuelle", au travers soit du back-office, soit de points API.

### Envoi vers l'OMS

Dans le cas le plus fréquent, les commandes générées par les outils "front", sont ensuite injectées dans l'OMS de façon à suivre un ou plusieurs workflows de préparation.

## Gestion des commandes complètes

Les commandes _complètes_ sont destinées à pouvoir subir des processus de préparation complexes, dont tout ou partie est automatisé.

Elles sont stockées dans la table [`e.gestcom_bonscommandes`](../database/generated_gestcom_bonscommandes.md), et leur état (bcd_etat_rails) progresse selon 8 étapes :

- 0 : entrée, la commande est en cours d'intégration ou de saisie
- 1 : intégration, phase de traitement de vérification "techniques". Par exemple : vérification que la commande contient bien des produits, que le client n'est pas archivé, etc.
- 2 : prise en compte, correspond à la phase de validation "commerciale" de la commande. On peut y vérifier le risque, l'en-cours du client, etc.
- 3 : mise en préparation, calcul de la préparation à réaliser pour pouvoir expédier/traiter la commande, avec création des bons de préparation correspondant
- 4 : préparation, attente de la préparation de la commande
- 5 : validation, prise en compte des éléments préparés et mise à jour de la commande en fonction de ceux-ci
- 6 : finalisation, modification commerciale de la commande après la fin de la préparation. On peut par exemple y annuler les manquants, modifier le règlement, facturer, etc.
- 7 : archivage, derniers traitements pour finaliser la commande 

Les états 2, 4, 6 et 7 peuvent ne pas être "instantannés". L'étape 4, par exemple, dure pendant toute la préparation de la commande, ce qui peut représenter plusieurs jours. Les autres états sont par nature plutôt transitoires et ne devraient pas durer plus que quelques minutes.

Au cours de la préparation, les commandes vont déclencher un certain nombre d'autres éléments :
- des *bons de préparation* qui sont les ordres envoyés aux différentes entités qui préparent les produits
- des *colis* pour les éléments envoyés
- des *ordres de prélèvement sur stock* pour les produits expédiés depuis un stock
- des *ordres de fabrication* pour ceux fabriqués à la demande ou à façon


### (batchs)
>[!Important]
Ce processus est obsolète et sera retiré en 2019. Elle est remplacée par une préparation de commande via de Events.

La préparation des commande est réalisée au travers d'un ensemble de batchs correspondant aux différents états de progression d'une [commande _complète_](http://aide.commerce-hub.io/administration/concepts/ventes/commandes/completes.aspx).

Chaque état de commande a son propre batch : 

- 0 - Entrée / Saisie : **EntreeRail**
- 1 - Validation technique : **IntegrationRail**
- 2 - Prise en compte / validation commerciale : **PriseEnCompteRail**
- 3 - Mise en préparation : **MiseEnPrepaRail**
- 4 - Préparation : **PreparationRail**
- 5 - Validation : **ValidationRail**
- 6 - Finalisation : **FinalisationRail**
- 7 - Archivage : **ArchivageRail**

Chacun de ces batchs contient du code standard, principalement destiné à assurer la progression des commandes au travers de l'état, et permet de charger, via une inversion de controle, des _modules_ personnalisables. Cette personnalisation permet de définir des processus de préparation différents pour chaque Tenant et même plusieurs processus de préparation en fonction du type/de l'origine de la commande à l'intérieur d'un même Tenant.

Les modules à charger pour chaque étapes sont configurés, directement en base, au travers de la table _e.sysparams_rails_. L'activation de certaines fonctionnalités via la gestion commerciale ajoute automatiquement des lignes dans cette table (par exemple, les modules de gestion du risque ajoutent automatiquement des modules dans le rail 2 - Prise en compte)

Il existe un certain nombre de modules prédéfinis tels que la gestion du risque, le calcul des ordres de préparation à réaliser, l'entrée de commande depuis des fichiers externes, etc.

Créer un nouveau module participant à ces batchs est réalisé en développant une nouvelle classe implémentant _{EtapePreparation}BonCommandeBatchBase_ et en l'ajoutant dans le rail correspondant dans la table _e.sysparams_rails_. Par exemple :

    [FinalisationBonCommande("CalculFidelite")]
    public class FinalisationCalculFideliteModule : FinalisationBonCommandeBatchBase
    {
        public override int Do(TransactionContext ctxBaseE)
        {
            // Implémenter ici
            return 0;
        }
    }


## Bons préparations 

### EDI Sortant

L'envoi de bons de préparations à un partenaire se fait en 3 étapes:

1. La détection de bons préparation  
La classe `DeclencheursBPPartenaireGroupe` s'éxécute à des horraires définie, pour un partenaire spécifique.  
Elle vérifie si il y a des bons préparation dans la table `logistique_bonspreparation` qui ne sont pas terminé et dont la préparation n'est pas déclanchée pour le partenaire spécifié, et déclanche l'item de médiation suivant.

2. La préparation du fichier d'envoi format XML 
La classe `EnvoiBonsPreparationPartenaireMediator` récupérère tout les bons préparation de la table `logistique_bonspreparation` est leurs lignes `logistique_lignesbonspreparation` qui sont valide et dont la préparation n'est pas déclanchée pour le partenaire spécifié.
Elle récupére également toutes les informations de livraison pour chaques bons (dans les tables `gestcom_clients_adresses` et `logistique_pointslivraisons`) et les informations sur les articles des commandes (dans la table `catalog_articles`).
Une fois toutes les informations prisent, elle crée un fichier XML avec le schema [out-bp-soustraitance-2013](http://schemas.simplement-e.com/logistique/out-bp-soustraitance-2013.xsd) et le nom de fichier avec le format `BonsPreparationPartenaire-{0}_{1:yyyyMMddHHmmss}.xml`

3. Le fichier XML est envoyé :
	- par FTP :
	Le dépot sur un serveur FTP externe est géré par la classe `CopyToFtpOutput` et prend en paramètre le domaine du serveur FTP, le path du dossier où déposer le fichier et un utilisateur / mot de passe.
	- par mail :  
	L'envoi par mail est géré par la classe `SendByMailOutput` qui est configuré avec l'adresse mail du receveur, le sujet, le corps et l'identifiant du compte mail qui est utilisé pour envoyer le mail (dans `params_mails_comptes`). L'envoi effective du mail est faite grâce à la classe `MailProtocol`


### EDI Entrant

La confirmation de préparation des commande se fait grâce à la classe `InBPPartenaireConfirmation` qui prend en entré un fichier XML avec le schema [in-bp-soustraitance-2019](http://schemas.simplement-e.com/logistique/in-bp-soustraitance-2019.xsd). En fonction de leur état les bons préparations progressent et les valeurs de préparation sont mise à jour, ou bien elles sont mise en attente.

