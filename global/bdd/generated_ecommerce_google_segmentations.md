# E.ecommerce_google_segmentations

Table contenant le mapping des catégories Google et des catégories internes

Colonne|Type|Description
---|---|---
sgg_guid|uniqueidentifier|L'identifiant de la ligne 
sgg_rjs_id|int|La raison juridique concernée 
sgg_seg_pk|decimal(8,0)|L'identifiant de la segmentation (dans [catalog_segmentations](generated_catalog_segmentations.md)) 
sgg_categorie_google|nvarchar(500)|La catégories Google si en dehors de la (taxonomie Google)[https://support.google.com/merchants/answer/6324436?hl=fr] 
sgg_gtx_id|varchar(15)|L'identifiant de la taxonomie Google (dans [ecommerce_google_taxonomie](generated_ecommerce_google_taxonomie.md)) 
