# E.stock_lignesentrees

Cette table contient le détail des entrées en stock

Colonne|Type|Description
---|---|---
lms_guid|uniqueidentifier|L'identifiant de la ligne d'entrée 
lms_rjs_id|int|La raison juridique concernée 
lms_type|char|Le type de ligne 
lms_oms_guid|uniqueidentifier|L'identifiant de l'entrée en stock (dans [stock_entrees](generated_stock_entrees.md)) 
lms_stk_guid|uniqueidentifier|L'identifiant du stock impacté (dans [stock_stocks](generated_stock_stocks.md)) 
lms_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
lms_qte|decimal(18,4)|La quantité entrée en stock 
lms_pu|decimal(18,6)|Le prix unitaire des articles mis en stock 
lms_frais_annexes_unitaires|decimal(18,6)|Les frais annexes associés aux articles (pour détail de la valorisation du stock) 
lms_lcf_guid|uniqueidentifier|L'identifiant de la ligne de commande fournisseur (dans [fournisseurs_lignescommandes](generated_fournisseurs_lignescommandes.md)) 
lms_lfb_guid|uniqueidentifier|
lms_ltr_guid|uniqueidentifier|
