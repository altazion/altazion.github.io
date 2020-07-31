# E.catalog_articles_web

Contient les informations spécifiques _ecommerce_ des articles

Colonne|Type|Description
---|---|---
arw_art_pk|bigint|L'identifiant de l'article dans la table e.[catalog_articles](generated_catalog_articles.md) 
arw_sit_pk|int|L'identifiant du site dans la table e.[params_siteswebs](generated_params_siteswebs.md) 
arw_est_actif|bit|A `true` si l'article a été activé pour le ecommerce (ou a au moins été publié une fois) 
arw_est_dispo|bit|A `true` si l'article est considéré comme disponible à la vente 
arw_date_fin_nouveaute|datetime|
arw_date_debut_promo|datetime|Date de début de la promotion 
arw_date_fin_promo|datetime|Date de fin de la promotion 
arw_pu_ht|decimal(18,4)|Prix Unitaire HT du produit 
arw_pu_ttc|decimal(18,4)|Prix Unitaire TTC du produit 
arw_pu_promo_ht|decimal(18,4)|Prix Unitaire HT promotionnel 
arw_pu_promo_ttc|decimal(18,4)|Prix Unitaire TTC promotionnel 
arw_description_html|nvarchar(MAX)|Description du produit spécifique au site e-commerce (si `null`, la description provenant de e.[catalog_articles](generated_catalog_articles.md) sera utilisée) 
arw_url_img_big|varchar(250)|Url de l'image principale du produit 
arw_url_img_small|varchar(250)|Url de l'image de petite taille du produit 
arw_url_img_imagette|varchar(250)|Url de l'image pour les descentes produits 
arw_date_debut_affichage|datetime|Date à partir de laquelle le produit peut être affiché sur le site. 
arw_date_fin_affichage|datetime|Date à partir de laquelle le produit ne doit plus être affiché sur le site. 
arw_libelle|nvarchar(500)|Libellé du produit spécifique au site e-commerce (si `null`, le libellé provenant de e.[catalog_articles](generated_catalog_articles.md) sera utilisé) 
arw_est_publie|bit|`true` si le produit est publié et sera donc visible sur le site. L'attribut arw_est_actif doit toujours être à `true` si est_publié l'est aussi 
arw_qte_seuil_visibilite|decimal(18,4)|Quantité à partir de laquelle le produit sera rendu visible sur le site. En dessous de cette quantité, le produit est automatiquement dépublié. 
arw_qte_seuil_dispo|decimal(18,4)|Quantité à partir de laquelle le produit est considéré comme disponible. 
arw_url_perso|varchar(200)|Partie de l'url utilisé dans le [module d'url rewriting](../articles/articles/ecommerce-contenuetseo.html#url-rewriting) 
arw_url_img_tiny|varchar(200)|Url vers l'image de plus petit format 
arw_clc_est_actif|bit|Colonne calculée - ne pas utiliser 
arw_code|varchar(50)|[Obsolète] 
arw_url_img_intermediate|varchar(500)|Url vers l'image utilisée dans les descentes 
arw_meta_description|nvarchar(MAX)|Meta description de l'article 
arw_meta_keywords|varchar(500)|[Obsolète] 
arw_grt_guid_active|uniqueidentifier|Identifiant de la grille de tarif active (dans e.[params_grillestarifs](generated_params_grillestarifs.md)) 
arw_est_recherchable|bit|`false` si ce produit doit faire partie du référentiel du site mais ne pas apparaître dans les descentes et recherches 
arw_classe_css_perso|varchar(150)|Classe CSS à ajouter à la fiche produit 
arw_ata_guid|uniqueidentifier|
arw_importance|decimal(8,2)|Score d'importance de l'article pour tri dans les descentes. 
arw_info_vendeur|nvarchar(MAX)|
arw_code_dispo|varchar(50)|Type de disponibilité (`null` pour un mode de disponibilité "classique" : dispo/non dispo en fonction de arw_est_dispo, `PRECOMMANDE' pour les pré-commandes, 'ENAPPRO' pour les stocks à date) 
arw_emplacements|varchar(200)|
arw_url_externe|nvarchar(2000)|Url du produit sur un site externe (pour une utilisation dans le cadre de tablettes vendeurs par exemple) 
arw_qte_seuil_dispolimitee|decimal(18,4)|
arw_tgv_guid_1|uniqueidentifier|L'identifiant de la valeur de tag (dans [ecommerce_tags](generated_ecommerce_tags.md)_valeurs) en position 1 dans la descente 
arw_tgv_guid_2|uniqueidentifier|L'identifiant de la valeur de tag (dans [ecommerce_tags](generated_ecommerce_tags.md)_valeurs) en position 2 dans la descente 
arw_tgv_guid_3|uniqueidentifier|L'identifiant de la valeur de tag (dans [ecommerce_tags](generated_ecommerce_tags.md)_valeurs) en position 3 dans la descente 
arw_tgv_guid_4|uniqueidentifier|L'identifiant de la valeur de tag (dans [ecommerce_tags](generated_ecommerce_tags.md)_valeurs) en position 4 dans la descente 
arw_qte_commandable_max|decimal(18,4)|Quantité maximale commandable dans une seule commande. 
arw_data_figees|varchar(MAX)|Liste des codes des données qui ont été importées et ne sont pas modifiables 
arw_date_publi|datetimeoffset|Date de première publication de l'article. 
arw_date_modif_est_publie|datetimeoffset|Date de dernière modif de l'état de publication. 
arw_uxid_modif_est_publie|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) ayant modifié l'état de publication de l'article. Guid.Empty si il s'agit d'un batch. 
arw_affichage_max_lots|int|
