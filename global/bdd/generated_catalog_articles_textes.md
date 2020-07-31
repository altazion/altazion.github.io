# E.catalog_articles_textes

Contient les textes supplémentaires pour les articles

Colonne|Type|Description
---|---|---
atx_guid|uniqueidentifier|Identifiant du texte supplémentaire 
atx_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
atx_ptt_guid|uniqueidentifier|
atx_texte|nvarchar(MAX)|Contenu du texte supplémentaire 
atx_source|varchar(250)|Identifiant permettant de distinguer plusieurs source pour un même type de texte 
atx_date|datetime|Date de création du texte supplémentaire 
