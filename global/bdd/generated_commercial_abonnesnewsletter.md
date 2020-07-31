# E.commercial_abonnesnewsletter

Contient les abonnements newsletters

Colonne|Type|Description
---|---|---
abn_guid|uniqueidentifier|L'identifiant de la table 
abn_nwl_pk|int|L'identifiant de la newsletters (dans [commercial_types_newsletters](generated_commercial_types_newsletters.md)) 
abn_rjs_id|int|La raison juridique concernée 
abn_email|varchar(250)|L'email de l'abonné 
abn_update_ts|timestamp|
abn_est_abonne|bit|`true` si l'email est abonné, `false` si l'email est désabonné 
abn_psp_guid|uniqueidentifier|L'identifiant du prospect (dans [commercial_prospects](generated_commercial_prospects.md)) 
abn_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
abn_date_modif|datetime|La date du dernier changement d'état de l'abonnement 
abn_niveau|tinyint|
abn_raison_desabo|varchar(250)|
abn_fiabilite|int|
abn_verification|char|
abn_source_modif|varchar(25)|Un code identifiant la source de la dernière modification. `Web` pour un site e-commerce. 
