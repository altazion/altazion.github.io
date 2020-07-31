# E.ecommerce_microtransactions

Aucune description pour cette table

Colonne|Type|Description
---|---|---
mtr_guid|uniqueidentifier|
mtr_rjs_id|int|La raison juridique concernée 
mtr_sit_pk|int|
mtr_type|varchar(30)|
mtr_date|datetime|
mtr_ecl_guid|uniqueidentifier|L'identifiant du compte client ecommerce (dans [ecommerce_clients](generated_ecommerce_clients.md)) 
mtr_etat_rails|char|
mtr_est_annule|bit|
mtr_montant_ht|decimal(18,4)|
mtr_montant_ttc|decimal(18,4)|
mtr_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
mtr_type_article|char|
mtr_qte|decimal(18,4)|
mtr_qte_prep_encours|decimal(18,4)|
mtr_qte_preparee|decimal(18,4)|
mtr_qte_facturee|decimal(18,4)|
mtr_mrg_guid|uniqueidentifier|
mtr_num_piece_reglement|varchar(100)|
mtr_erreur_reglement|varchar(100)|
mtr_est_reglement_confirme|bit|
mtr_est_reglement_modifie|bit|
mtr_est_reglement_valide|bit|
mtr_montant_ht_prepare|decimal(18,4)|
mtr_montant_ttc_prepare|decimal(18,4)|
mtr_fac_guid|uniqueidentifier|
mtr_dev_guid|uniqueidentifier|
mtr_pu_ht|decimal(18,4)|
mtr_pu_ttc|decimal(18,4)|
mtr_infocompl_articles|varchar(MAX)|
