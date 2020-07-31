# E.ecommerce_avis

Aucune description pour cette table

Colonne|Type|Description
---|---|---
avi_guid|uniqueidentifier|
avi_rjs_id|int|La raison juridique concernée 
avi_sit_pk|int|
avi_date|datetime|
avi_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
avi_email|varchar(200)|
avi_ecl_guid|uniqueidentifier|L'identifiant du compte client ecommerce (dans [ecommerce_clients](generated_ecommerce_clients.md)) 
avi_note|decimal(5,2)|
avi_message|varchar(MAX)|
avi_est_valide|bit|
avi_uxid_valideur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
avi_date_validation|datetime|
avi_vote_nb|int|
avi_vote_pertinence|decimal(5,2)|
avi_nom|varchar(250)|
avi_qin_guid|uniqueidentifier|
avi_type_cible_associee|varchar(25)|
avi_guid_cible_associee|uniqueidentifier|
avi_id_cible_associee|varchar(500)|
