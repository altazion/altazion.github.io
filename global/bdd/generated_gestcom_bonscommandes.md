# E.gestcom_bonscommandes

Aucune description pour cette table

Colonne|Type|Description
---|---|---
bcd_guid|uniqueidentifier|L'identifiant de la commande 
bcd_rjs_id|int|La raison juridique concernée 
bcd_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
bcd_adc_guid|uniqueidentifier|
bcd_date|datetime|
bcd_origine|char|
bcd_numero|varchar(50)|
bcd_ordre|smallint|
bcd_montant_ttc|decimal(18,2)|
bcd_montant_ht|decimal(18,2)|
bcd_montant_ht_hors_remise|decimal(8,2)|
bcd_montant_ttc_hors_remise|decimal(18,2)|
bcd_rem_total_ht|decimal(18,2)|
bcd_rem_total_ttc|decimal(18,2)|
bcd_rem_globale_ht|decimal(18,2)|
bcd_rem_globale_ttc|decimal(18,2)|
bcd_uin_pk|int|
bcd_etat_rails|char|
bcd_est_locke_traitement|bit|
bcd_est_confirme|bit|
bcd_est_approuve|bit|
bcd_est_declenche|bit|
bcd_est_termine|bit|
bcd_est_archive|bit|
bcd_est_en_erreur|bit|
bcd_est_commande_ouverte|bit|
bcd_est_commande_interne|bit|
bcd_est_apporte|bit|
bdc_ebc_guid|uniqueidentifier|L'identifiant du bon de commande e-commerce (dans [ecommerce_bonscommandes](generated_ecommerce_bonscommandes.md)) 
bcd_est_annule|bit|
bcd_plv_guid|uniqueidentifier|
bcd_montant_ht_prepare|decimal(18,2)|
bcd_montant_ttc_prepare|decimal(18,2)|
bcd_mlv_guid|uniqueidentifier|
bcd_message_client|varchar(MAX)|
bcd_message_client_origine|varchar(MAX)|
bcd_annule_par_client|bit|
bcd_raison_annulation|varchar(20)|
bcd_plv_nom_destinataire|varchar(200)|
bcd_adc_guid_facturation|uniqueidentifier|
bcd_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
bcd_type|varchar(30)|
bcd_mode_guest|bit|
bcd_ptn_guid|uniqueidentifier|
bcd_parent_bcd_guid|uniqueidentifier|L'identifiant de la commande parent (si il s'agit d'une sous commande ou d'une commande ouverte, par exemple) 
bcd_pod_guid|uniqueidentifier|
bcd_date_traitement_max|datetimeoffset|
