# Traitement des commandes

Le traitement de commande est une étape complexe, faisant intervenir plusieurs notions :

- les commandes en elles-même, qui passeront par plusieurs étapes de traitements
- chaque commmande peut être préparé en plusieurs opérations, par exemple en expédiant depuis plusieurs entrepots ou via plusieurs fournisseurs _drop shipping_
- chacun de ces ordres de préparation pouvant amener à une ou plusieurs expédition

> [!WARNING]
> Les informations présentées dans cette page ne sont disponibles que pour les [_commandes complètes_](typescommandes.md#commandes-completes)

## Rails de traitement d'une commande

Les différentes étapes permettant de passer d'une commande à une livraison sont regroupées dans ce que nous appelons un _Rail_. Chaque _Rail_ correspond à une suite d'actions, automatiques ou non, qui permettront de réaliser toutes les opérations nécessaires pour livrer le client. Vous pouvez, bien entendu, créer plusieurs _rails_ différents, en fonction de la méthode d'obtention, par exemple.

Lorsqu'une commande entre dans le module de préparation OMS, on parle d'un [commande _complète_](https://aide.altazion.com/fr-fr/guide/ventes/commandes/completes.html)


