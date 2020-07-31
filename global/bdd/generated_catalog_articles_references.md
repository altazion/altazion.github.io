# E.catalog_articles_references

Contient les références secondaires (EAN, IBAN, etc.) des articles

Colonne|Type|Description
---|---|---
rar_guid|uniqueidentifier|L'identifiant de la référence 
rar_type|varchar(20)|Le type de référence (EAN13, IBAN, etc.) 
rar_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
rar_rjs_id|int|La raison juridique concernée 
rar_reference|varchar(50)|La référence 
rar_est_principal|bit|`true` si cette référence doit être considérée comme la première du type 
