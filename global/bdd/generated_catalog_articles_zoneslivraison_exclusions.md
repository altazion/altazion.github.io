# E.catalog_articles_zoneslivraison_exclusions

Table permettant d'empêcher la livraison de certains produits dans une zone géographique

Colonne|Type|Description
---|---|---
azl_guid|uniqueidentifier|Identifiant de l'exclusion 
azl_art_guid|uniqueidentifier|Identifiant de l'article (dans e.[catalog_articles](generated_catalog_articles.md)) 
azl_zlv_guid|uniqueidentifier|Identifiant de la zone de livraison (dans e.[params_zoneslivraison](generated_params_zoneslivraison.md)) 
