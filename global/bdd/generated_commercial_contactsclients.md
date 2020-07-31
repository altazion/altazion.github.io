# E.commercial_contactsclients

Aucune description pour cette table

Colonne|Type|Description
---|---|---
ctc_guid|uniqueidentifier|
ctc_rjs_id|int|La raison juridique concernée 
ctc_css_guid|uniqueidentifier|
ctc_ccg_guid|uniqueidentifier|
ctc_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
ctc_email|varchar(200)|
ctc_telephone|varchar(50)|
ctc_nom|varchar(200)|
ctc_parent_ctc_guid|uniqueidentifier|
ctc_date|datetime|
ctc_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
ctc_message|varchar(MAX)|
ctc_est_clos|bit|
ctc_est_succes|bit|
ctc_raison_echec|varchar(MAX)|
ctc_date_recontact|datetime|
ctc_grp_guid_recontact|uniqueidentifier|
ctc_uxid_recontact|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
ctc_bcd_guid|uniqueidentifier|
ctc_code_transfert|varchar(50)|
ctc_date_update|datetime|
