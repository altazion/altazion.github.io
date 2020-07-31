# E.catalog_articles_associationstats

Table contenant les statistiques de visites croisées entre les articles.

Colonne|Type|Description
---|---|---
aas_guid|uniqueidentifier|Identifiant de la ligne 
aas_art_guid|uniqueidentifier|Identifiant de l'article visité 
aas_prev_art_guid|uniqueidentifier|Identifiant de l'article visité juste celui précisé par `aas_art_guid` 
aas_score|bigint|Score total du nombre de visites croisées 
