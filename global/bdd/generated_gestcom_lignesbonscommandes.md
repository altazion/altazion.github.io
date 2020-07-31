# E.gestcom_lignesbonscommandes

Aucune description pour cette table

Colonne|Type|Description
---|---|---
lbc_guid|uniqueidentifier|
lbc_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) 
lbc_num_ligne|decimal(9,0)|
lbc_type_ligne|char|
lbc_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
lbc_ava_guid|uniqueidentifier|L'identifiant de l'avantage (dans [ecommerce_avantages](generated_ecommerce_avantages.md)) 
lbc_pu_ht|decimal(18,2)|
lbc_pu_ttc|decimal(18,2)|
lbc_qte|decimal(18,4)|
lbc_qte_prep_encours|decimal(18,4)|
lbc_qte_prep_manquant|decimal(18,4)|
lbc_qte_prep_expediable|decimal(18,4)|
lbc_qte_prep_expedie|decimal(18,4)|
lbc_qte_deja_facture|decimal(18,4)|
lbc_qte_a_facturer|decimal(18,4)|
lbc_qte_a_rembourser|decimal(18,4)|
lbc_qte_deja_rembourse|decimal(18,4)|
lbc_qte_annule_commercial|decimal(18,4)|
lbc_commentaire_client|varchar(MAX)|
lbc_remise_unit_ht|decimal(18,2)|
lbc_remise_unit_ttc|decimal(18,2)|
lbc_info_destinataire|varchar(MAX)|
lbc_preparation_cadeau|bit|
lbc_pu_hors_remise_ht|decimal(18,2)|
lbc_pu_hors_remise_ttc|decimal(18,2)|
lbc_ptn_guid|uniqueidentifier|
