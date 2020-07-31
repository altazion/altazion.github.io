# E.gestcom_devis

Aucune description pour cette table

Colonne|Type|Description
---|---|---
dev_pk|decimal(18,0)|
dev_numero|varchar(15)|
dev_origine|char|
dev_revision|int|
dev_rjs_id|int|La raison juridique concernée 
dev_cli_pk|int|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
dev_prt_pk|bigint|
dev_montant_ht|decimal(18,2)|
dev_montant_ttc|decimal(18,2)|
dev_date|datetime|
dev_associated_idDocument|bigint|
dev_date_fin_validite|datetime|
dev_etat_edition|tinyint|
dev_rem_globale_ht|decimal(18,2)|
dev_rem_globale_libelle|varchar(250)|
dev_rem_globale_ttc|decimal(18,2)|
dev_rem_total_ht|decimal(18,2)|
dev_rem_total_ttc|decimal(18,2)|
dev_nom|varchar(250)|
dev_adresse|varchar(MAX)|
dev_cp|varchar(20)|
dev_ville|varchar(50)|
dev_email|varchar(150)|
dev_etat|char|
dev_tcl_pk|smallint|
dev_uid|uniqueidentifier|
dev_code_validation|varchar(8)|
dev_libelle|varchar(250)|
dev_date_acceptation|datetime|
dev_source_acceptation|varchar(250)|
dev_psp_guid|uniqueidentifier|L'identifiant du prospect (dans [commercial_prospects](generated_commercial_prospects.md)) 
dev_date_rea_prev_debut|datetime|
dev_date_rea_prev_fin|datetime|
dev_date_rea_reel_debut|datetime|
dev_date_rea_reel_fin|datetime|
dev_numpiece_acceptation|varchar(200)|
dev_ctr_guid|uniqueidentifier|
