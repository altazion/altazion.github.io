# E.catalog_traductions_2

Cette table contient les traductions pour les tables ayant un int comme identifiant

Colonne|Type|Description
---|---|---
trd_guid|uniqueidentifier|L'identifiant de la traduction 
trd_rjs_id|int|La raison juridique concernée 
trd_langue|varchar(8)|La langue de la traduction 
trd_cible_type|char|Le type de cible 
trd_cible_pk|decimal(18,0)|L'identifiant de la cible 
trd_traduction_libelle|varchar(MAX)|La traduction du libellé 
trd_traduction_description|varchar(MAX)|La traduction de la description 
