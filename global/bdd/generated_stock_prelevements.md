# E.stock_prelevements

Aucune description pour cette table

Colonne|Type|Description
---|---|---
ops_guid|uniqueidentifier|
ops_rjs_id|int|La raison juridique concernée 
ops_date|datetime|
ops_libelle|varchar(250)|
ops_est_confirme|bit|
ops_est_termine|bit|
ops_type|char|
ops_bpr_guid|uniqueidentifier|L'identifiant du bon de préparation (dans [logistique_bonspreparation](generated_logistique_bonspreparation.md)) 
ops_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
ops_commentaire|nvarchar(MAX)|
