# E.marketplace_reglescommissions

Contient les règles de commissions pour un partenaire.

Colonne|Type|Description
---|---|---
mrc_guid|uniqueidentifier|L'identifiant de la règle de commissions 
mrc_rjs_id|int|La raison juridique concernée 
mrc_mkp_guid|uniqueidentifier|L'identifiant du groupe de marketplace 
mrc_priorite|int|La priorité de la règle de commissions ( 1 étant plus prioritaire que 999) 
mrc_type_unite|varchar(5)|Le type d'unité de la règle de commission ('EURO' 'QTE') 
mrc_minimum|decimal(18,4)|Le minimum d'unité 
mrc_maximum|decimal(18,4)|Le maximum d'unité 
mrc_taux|decimal(18,6)|Le taux de commissions 
mrc_fixe|decimal(18,4)|Le Montant Fixe de la commissions 
mrc_types_produits_concernes|varchar(20)|Le type de produits concernés 
mrc_prelevement_mini|decimal(18,4)|Le montant minimum de la commissions 
mrc_ptn_guid|uniqueidentifier|L'identifiant du partenaire disponible dans la table [gestcom_partenaires](generated_gestcom_partenaires.md) 
