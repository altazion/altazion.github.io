# E.litiges_impayes

Aucune description pour cette table

Colonne|Type|Description
---|---|---
imp_guid|uniqueidentifier|
imp_rjs_id|int|La raison juridique concernée 
imp_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
imp_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) 
imp_fac_pk|decimal(18,0)|
imp_date|datetime|
imp_nom|varchar(250)|
imp_adresse|varchar(MAX)|
imp_cp|varchar(50)|
imp_ville|varchar(200)|
imp_pay_pk|char|
imp_date_prochaine_action|datetime|
imp_est_termine|bit|
imp_est_gagne|bit|
imp_est_envoye_contentieux|bit|
imp_est_faute_interne|bit|
imp_montant_impaye|decimal(18,4)|
imp_uxid_prochaine_action|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
