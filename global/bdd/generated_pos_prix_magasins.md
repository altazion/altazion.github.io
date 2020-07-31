# E.pos_prix_magasins

Aucune description pour cette table

Colonne|Type|Description
---|---|---
ppm_guid|uniqueidentifier|
ppm_timestamp|timestamp|
ppm_rjs_id|int|La raison juridique concernée 
ppm_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
ppm_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
ppm_date_debut|datetime|
ppm_date_fin|datetime|
ppm_pu_ht|decimal(18,4)|
ppm_pu_ttc|decimal(18,4)|
ppm_pu_reference_ttc|decimal(18,4)|
ppm_pu_reference_ht|decimal(18,4)|
ppm_est_promo|bit|
ppm_est_forcage_local|bit|
