# E.ecommerce_bonscommandes

Contient les bons de commandes (les paniers) issus des modules Commerce, Store & Signage.

Colonne|Type|Description
---|---|---
ebc_guid|uniqueidentifier|L'identifiant du bon de commande e-commerce 
ebc_sit_pk|int|L'identifiant du site sur lequel la commade a été passée. 
ebc_rjs_id|int|La raison juridique concernée 
ebc_date|datetime|La date de commande (attention, il s'agit de la date du clic sur le bouton valider, pas forcément la date de finalisation de la commande) 
ebc_numero|varchar(50)|Le numéro de commande 
ebc_ecl_guid|uniqueidentifier|L'identifiant du compte client ecommerce (dans [ecommerce_clients](generated_ecommerce_clients.md)) 
ebc_adr_guid_facturation|uniqueidentifier|L'identifiant de l'adresse de facturation à utiliser (dans [gestcom_clients](generated_gestcom_clients.md)_adresses) 
ebc_adr_guid_livraison|uniqueidentifier|L'identifiant de l'adresse de livraison à utiliser (dans [gestcom_clients](generated_gestcom_clients.md)_adresses) 
ebc_montant_ttc|decimal(18,4)|Le montant TTC de la commande. (cf. remarques pour les montants) 
ebc_montant_ht|decimal(18,4)|Le montant HT de la commande. (cf. remarques pour les montants) 
ebc_etat|tinyint|L'état de la commande. 
ebc_erreur|varchar(250)|L'erreur en cours sur la commande. 
ebc_mlv_guid|uniqueidentifier|L'identifiant du mode de livraison (dans [logistique_modeslivraison](generated_logistique_modeslivraison.md)) pour la commande. Guid.Empty si aucun mode de livraison n'est nécessaire 
ebc_plv_guid|uniqueidentifier|L'identifiant du point de livraison (dans [logistique_pointslivraisons](generated_logistique_pointslivraisons.md)) pour la commande. Uniquement renseigné si le mode de livraison est de type "point relai" ou "magasin". 
ebc_adresse_ip|varchar(25)|L'adresse IP de l'utilisateur ayant passé la commande 
ebc_message_client|varchar(MAX)|Un message laissé par le client sur la commande pour impression sur un bon de livraison ou une carte cadeau 
ebc_message_client_origine|varchar(MAX)|La signature à ajouter au message 
ebc_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
ebc_plv_nom_destinataire|varchar(200)|Le nom de la personne destinataire de la commande. A utiliser pour les livraisons en point relai ou en magasin pour vérifier l'identité ou à ajouter au message personnnalisé 
ebc_tags|varchar(1000)|Les différents tags de la commande 
ebc_emp_guid_vendeur|uniqueidentifier|L'identifiant (dans [rh_employes](generated_rh_employes.md)) du vendeur ayant aidé à passer la commande 
ebc_pod_guid|uniqueidentifier|L'identifiant du device (dans [pos_devices](generated_pos_devices.md)) sur lequel a été passé la commande dans le cadre de Store ou Signage 
ebc_langue|varchar(3)|La langue associée à la commande. Sous forme iso. 
ebc_type|varchar(150)|Le type de commande. 
ebc_prepa_zone|varchar(150)|Un code de zone de préparation pouvant être associé à la commande. Destiné à l'intégration d'un système de prepa externe ou à une configuration spécifique de l'OMS. 
ebc_prepa_identifiant_externe|varchar(250)|L'identifiant externe de la commande, destiné à l'intégration d'un système de prépa externe via Hub. 
ebc_prepa_resultat|varchar(250)|Le résultat de la préparation tel que remonté par un système de prépa externe. 
ebc_mode_guest|bit|true si la commande est passée en mode invité (sans connexion ou sans conservation des données) 
ebc_ptn_guid|uniqueidentifier|L'identifiant (dans [gestcom_partenaires](generated_gestcom_partenaires.md)) du partenaire ayant participé à la commande. 

## Remarques
Les montants HT et TTC peuvent ne pas inclure les produits "magasins" si vous autorisez les commandes mixtes web/reservation en magasin. Ce comportement est paramètrable.

L'état des commandes varie entre :

* 0 : panier non validé
* 1,2,3 : commande validée
* 127 : commande en cours de paiement
* 255 : commande en cours de suppression.

Pour plus de détail sur les états de commande, [consultez la page dédiée](https://e-doc-dev.azurewebsites.net/documentation/articles/gestcom-preparation.html#gestion-des-commandes-simples) ou [l'aide en ligne publique](https://aide.altazion.com/fr-fr/guide/index.html)
