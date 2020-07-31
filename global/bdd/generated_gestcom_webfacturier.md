# E.gestcom_webfacturier

Aucune description pour cette table

Colonne|Type|Description
---|---|---
wfc_guid|uniqueidentifier|
wfc_rjs_id|int|La raison juridique concernée 
wfc_date|datetimeoffset|
wfc_wfm_guid|uniqueidentifier|
wfc_frn_pk|decimal(18,0)|
wfc_montant_ht|decimal(18,4)|
wfc_montant_ttc|decimal(18,4)|
wfc_tdp_pk|int|
wfc_libelle|nvarchar(500)|
wfc_type_document_associe|varchar(20)|
wfc_url_document_associe|varchar(500)|
wfc_uxid_deposant|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
wfc_ctr_guid|uniqueidentifier|
wfc_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
wfc_url_originelle|varchar(500)|
wfc_date_validation|datetimeoffset|
wfc_uxid_validation|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
wfc_fcf_pk|decimal(18,0)|
