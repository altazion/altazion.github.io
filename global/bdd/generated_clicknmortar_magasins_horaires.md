# E.clicknmortar_magasins_horaires

Contient les horaires des magasins

Colonne|Type|Description
---|---|---
mhr_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
mhr_jour|char|Le jour de la semaine en numérique (1 pour Lundi et 7 pour Dimanche) 
mhr_ouverture_am|varchar(50)|Les horaires d'ouverture du matin  
mhr_ouverture_pm|varchar(50)|Les horaires d'ouverture de l'après midi 

## Remarques
Cette table est utilisé pour afficher les horaires à titre d'information pour les clients. Elle est remplie de façon automatique (batch) à partir de la table E.[pos_magasins](generated_pos_magasins.md)_horaires.
