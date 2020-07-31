# E.ecommerce_keywords

Table de description des keywords

Colonne|Type|Description
---|---|---
kwrd_guid|uniqueidentifier|Identifiant du keyword 
kwrd_rjs_id|int|La raison juridique concernée 
kwrd_libelle|varchar(250)|Libelle du keyword 
kwrd_categorie|uniqueidentifier|Identifiant de la catégorie du keyword [ecommerce_keywords](generated_ecommerce_keywords.md)_categories 
kwrd_description|text|Description du keyword 
kwrd_isEnabled|bit|Keyword archivé ou non 
kwrd_dateDebut|datetimeoffset|Date de début de disponibilité du Keyword 
kwrd_dateFin|datetimeoffset|Date de fin de disponibilité du Keyword 
