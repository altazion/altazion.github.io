# E.logistique_colis

Aucune description pour cette table

Colonne|Type|Description
---|---|---
col_guid|uniqueidentifier|
col_rjs_id|int|La raison juridique concernée 
col_date|datetime|
col_num_colis|varchar(50)|
col_code_barre|varchar(50)|
col_ptp_pk|int|
col_bpr_guid|uniqueidentifier|L'identifiant du bon de préparation (dans [logistique_bonspreparation](generated_logistique_bonspreparation.md)) 
col_sav_guid|uniqueidentifier|
col_date_prelevement|datetime|
col_brd_guid|uniqueidentifier|
col_poids_en_g|decimal(18,2)|
col_est_en_erreur|bit|
col_est_pris_en_compte|bit|
col_est_en_livraison|bit|
col_est_livre|bit|
col_est_en_retour|bit|
col_valeur_informative|decimal(18,2)|
col_valeur_assuree|decimal(18,2)|
col_valeur_contre_remboursement|decimal(18,2)|
col_civilite|nvarchar(100)|
col_nom|nvarchar(500)|
col_adresse|varchar(MAX)|
col_cp|nvarchar(40)|
col_ville|nvarchar(400)|
col_pay_pk|char|
col_plv_guid|uniqueidentifier|
col_zpr_guid|uniqueidentifier|
col_lss_guid|uniqueidentifier|
col_cout_ttc|decimal(18,4)|
col_cout_ht|decimal(18,4)|
col_fex_guid|uniqueidentifier|
col_fsa_guid|uniqueidentifier|
col_date_reception|datetime|
col_rcp_guid|uniqueidentifier|
col_url_suivi|varchar(MAX)|
col_url_etiquette|varchar(MAX)|
col_tcl_guid|uniqueidentifier|
col_date_derniere_verification|datetimeoffset|
col_etat_transporteur|nvarchar(MAX)|
col_dernier_msg_etat|nvarchar(MAX)|
col_type_anomalie|nvarchar(MAX)|
