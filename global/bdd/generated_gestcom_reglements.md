# E.gestcom_reglements

Aucune description pour cette table

Colonne|Type|Description
---|---|---
reg_pk|decimal(18,0)|
reg_rjs_id|int|La raison juridique concernée 
reg_date|datetime|
reg_cli_pk|int|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
reg_montant|money|
reg_type|tinyint|
reg_compte_compta|varchar(20)|
reg_depose|tinyint|
reg_bnq_pk|int|
reg_fcf_pk|decimal(18,0)|
reg_exporte_compta|tinyint|
reg_num_piece|varchar(50)|
reg_etat|char|
reg_dpb_pk|decimal(18,0)|
reg_erreur_code|varchar(50)|
reg_erreur_details|varchar(MAX)|
reg_montant_original|decimal(18,2)|
reg_est_confirme|bit|
reg_est_recu|bit|
reg_date_modification|datetime|
reg_date_validation|datetime|
reg_irg_guid|uniqueidentifier|
reg_mrg_guid|uniqueidentifier|
reg_etat_edition|bit|
reg_mgd_guid|uniqueidentifier|
reg_uxid_editeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
reg_horodatage_validation|datetimeoffset|
reg_horodatage_signature|varchar(100)|
