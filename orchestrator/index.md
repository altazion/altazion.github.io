# Orchestrator

Orchestrator rempli plusieurs grands rôles :

- Module de préparation de commande (OMS)
- Gestion du stock unifié
- Expédition et suivi des colis

Il se base en partie, comme Office et Hub sur notre scheduler de traitement interne, _Otoma_ qui est responsable d'activer et de définir l'ordonnacement des tâches entre les différents composants de la solution.

## Préparation de commande

L'utilisation du composant OMS d'Orchestrator lui confère les rôles :

- de déterminer la meilleure façon de traiter une commande, en suivant un [process que vous pouvez configurer](traitementcommande.md)
- d'assurer l'aide à la préparation, en optimisant [le choix de la meilleure façon de préparer une commande](rules/index.md), le picking, la fabrication, la commande fournisseur ou tout autre mode d'approvisionnement
- de centraliser les retours et de déterminer les éléments expédiés, ceux facturables, ceux en reliquat ou à rembourser
- d'établir les pièces de ventes (factures, avoirs, etc.) et d'en faire découler toutes les opérations financières tels que les captures de montants CB, l'émission de lettres chèques, etc.

Si tout ou partie de votre préparation est réalisé par un tiers ou au travers d'un système informatique séparé, vous pouvez choisir d'établir un système EDI [en utilisant nos formats d'échanges](https://aide.altazion.com/fr-fr/administration/edi/index.html), ou de développer un module _Hub_ d'interconnexion.

## Gestion du stock unifié



## Expédition et suivi des colis

En complément de la partie OMS, Orchestrator propose un module d'expédition permettant d'intégrer les procédures d'expédition et de suivi de la livraison.

