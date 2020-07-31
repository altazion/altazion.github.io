# E.catalog_articles_modeslivraison_exclusions

Cette table permet d'interdire la livraison de certains articles par des transporteurs spécifiques.

Colonne|Type|Description
---|---|---
aml_guid|uniqueidentifier|L'identifiant de l'interdiction 
aml_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
aml_mlv_guid|uniqueidentifier|L'identifiant du mode interdit (dans [logistique_modeslivraison](generated_logistique_modeslivraison.md)) 
