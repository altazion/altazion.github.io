# E.catalog_articles_vitrines

Table permettant de définir quels articles font partie d'une sélection (vitrine)

Colonne|Type|Description
---|---|---
var_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
var_vit_guid|uniqueidentifier|L'identifiant de la sélection (dans [catalog_vitrines](generated_catalog_vitrines.md)) 
var_pertinence|decimal(6,4)|Pertinence du produit dans cette selection 
var_image_big|varchar(250)|[Obsolète] 
var_image_small|varchar(250)|[Obsolète] 
var_vignette|varchar(250)|[Obsolète] 
