# E.catalog_articles_documents

Contient les liasons entre les articles et les documents (images, videos, notices, etc.)

Colonne|Type|Description
---|---|---
doa_guid|uniqueidentifier|L'identifiant du document 
doa_rjs_id|int|La raison juridique concernée 
doa_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
doa_url_imagette|varchar(250)|L'url vers une imagette représentant le document 
doa_url_document|varchar(250)|L'url du document 
doa_mime|varchar(50)|Le type mime du document (par exemple `image/png`) 
doa_url_sync|varchar(500)|L'url d'origine du document (utilisé pour les processus de synchronisation des serveurs locaux, par exemple) 
doa_affichage_largeur|int|Pour certains types mimes : largeur "préférée" de l'afficheur (par exemple, la résolution "width" d'une video) 
doa_affichage_hauteur|int|Pour certains types mimes : hauteur "préférée" de l'afficheur (par exemple, la résolution "width" d'une video) 
doa_affichage_typelecteur|varchar(500)|Pour certains types mimes : le type de lecteur à prévoir 
