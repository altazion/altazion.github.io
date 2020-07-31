# E.ecommerce_lignesbonscommandes

Contient les lignes des bons de commande 'ecommerce' (paniers ou commandes simples)

Colonne|Type|Description
---|---|---
elb_guid|uniqueidentifier|L'identifiant de la ligne 
elb_elb_guid_parent|uniqueidentifier|L'identifiant de la ligne dont cette ligne est une ligne "enfants" ou null. 
elb_ebc_guid|uniqueidentifier|L'identifiant du bon de commande e-commerce (dans [ecommerce_bonscommandes](generated_ecommerce_bonscommandes.md)) 
elb_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
elb_type|char|Le type de ligne, selon l'énumération MetaTypeArticle 
elb_qte|decimal(18,4)|La quantité commandée 
elb_pu_ht|decimal(18,2)|Le prix unitaire HT 
elb_pu_ttc|decimal(18,2)|Le prix unitaire TTC 
elb_rem_uni_ht|decimal(18,2)|La remise unitaire HT 
elb_rem_uni_ttc|decimal(18,2)|La remise unitaire TTC 
elb_pu_avant_rem_ht|decimal(18,2)|Le prix HT avant remise 
elb_pu_avant_rem_ttc|decimal(18,2)|Le prix TTC avant remise 
elb_ava_guid|uniqueidentifier|L'identifiant de l'avantage (dans [ecommerce_avantages](generated_ecommerce_avantages.md)) 
elb_commentaire_client|varchar(MAX)|Un commentaire client (par exemple pour impression sur le bon de préparation) 
elb_info_destinataire|varchar(MAX)|
elb_preparation_cadeau|bit|
elb_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
elb_groupe|varchar(10)|Code du groupe de panier 
elb_qte_traitee|decimal(18,4)|Quantité déjà traitée sur la commande. Utilisé dans la préparation simple et/ou pour marquer des produits déjà enlevés pour une commande mixte "en magasin / extension de gamme" 
elb_differentiant_1|varchar(250)|Détail du premier attribut différentiant lorsque l'article est une version (par exemple la couleur) 
elb_differentiant_2|varchar(250)|Détail du second attribut différentiant lorsque l'article est une version (par exemple la couleur) 
elb_personnalise_1|varchar(250)|Champ d'extensibilité 
elb_personnalise_2|varchar(250)|Champ d'extensibilité 
elb_frais_1|varchar(250)|Champ pour conserver les frais à afficher dans le panier mais déjà comptabilisé dans le PU (par exemple ECOTAXE). Au format "NOMTAXE=Valeur" 
elb_frais_2|varchar(250)|Champ pour conserver les frais à afficher dans le panier mais déjà comptabilisé dans le PU (par exemple ECOTAXE). Au format "NOMTAXE=Valeur" 
elb_ptn_guid|uniqueidentifier|Identifiant du partenaire (dans la table [gestcom_partenaires](generated_gestcom_partenaires.md)) auquel cette ligne est associée. Par exemple, l'identifiant d'un vendeur marketplace 
