# E.ecommerce_reglesavantages

Aucune description pour cette table

Colonne|Type|Description
---|---|---
rav_guid|uniqueidentifier|
rav_ava_guid|uniqueidentifier|L'identifiant de l'avantage (dans [ecommerce_avantages](generated_ecommerce_avantages.md)) 
rav_type|char|
rav_montant_mini|decimal(18,2)|
rav_montant_maxi|decimal(18,2)|
rav_montant_calcul_avec_port|bit|
rav_qte_mini|decimal(18,4)|
rav_qte_maxi|decimal(18,4)|
rav_operateur|varchar(50)|
rav_regle1_rav_guid|uniqueidentifier|
rav_regle2_rav_guid|uniqueidentifier|
rav_montant_affichage_incentive|decimal(18,2)|
rac_incentive|varchar(200)|
rac_est_pourcentage|bit|
rac_pourcentage|decimal(9,4)|
rac_est_reduction_port|bit|
rac_est_declencheur_fidelite|bit|
rac_type_application|char|
rav_vit_guid|uniqueidentifier|L'identifiant de la sélection (dans [catalog_vitrines](generated_catalog_vitrines.md)) 
rav_vit_guid_cible|uniqueidentifier|
rav_xml_data|varchar(MAX)|
