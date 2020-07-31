# E.gestcom_banque_journaltransactions

Aucune description pour cette table

Colonne|Type|Description
---|---|---
trs_guid|uniqueidentifier|
trs_rjs_id|int|La raison juridique concernée 
trs_mrg_guid|uniqueidentifier|
trs_num_transact|varchar(100)|
trs_etat|char|
trs_reponse|varchar(5)|
trs_reponse_compl|varchar(MAX)|
trs_debit_credit|char|
trs_montant_orig|decimal(18,4)|
trs_montant_com_orig|decimal(18,4)|
trs_montant_actuel|decimal(18,4)|
trs_montant_com_actuel|decimal(18,4)|
trs_mef_doc_origine|uniqueidentifier|
trs_mef_doc_finalisation|uniqueidentifier|
trs_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) 
trs_irg_guid|uniqueidentifier|
trs_tck_guid|uniqueidentifier|
trs_fac_pk|decimal(18,0)|
trs_reg_pk|decimal(18,0)|
trs_ecb_pk|uniqueidentifier|
trs_code_anomalie|varchar(10)|
trs_ignore_anomalie|bit|
trs_date_update|datetime|
trs_niveau_anomalie|varchar(100)|
