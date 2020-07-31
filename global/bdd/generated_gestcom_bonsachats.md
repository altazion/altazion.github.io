# E.gestcom_bonsachats

Aucune description pour cette table

Colonne|Type|Description
---|---|---
bac_guid|uniqueidentifier|
bac_rjs_id|int|La raison juridique concernée 
bac_date_creation|datetime|
bac_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
bac_email|varchar(200)|
bac_code|varchar(50)|
bac_montant_orig|decimal(18,2)|
bac_montant_utilise|decimal(18,2)|
bac_montant_bloque|decimal(18,2)|
bac_bcd_guid_bloquante|uniqueidentifier|
bac_libelle|varchar(MAX)|
bac_date_mini_utilisation|datetime|
bac_date_maxi_utilisation|datetime|
bac_montant_mini_utilisation|decimal(18,2)|
bac_montant_maxi_utilisation|decimal(18,2)|
bac_est_remboursable|bit|
bac_groupe|varchar(50)|
bac_art_guid_obligatoire|uniqueidentifier|
bac_fop_guid|uniqueidentifier|
bac_vit_guid_obligatoire|uniqueidentifier|
bac_tcl_pk_obligatoire|smallint|
bac_est_secable|bit|
