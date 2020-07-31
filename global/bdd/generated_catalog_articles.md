# E.catalog_articles

Contient les informations générales des articles, communes à tous les modules.

Colonne|Type|Description
---|---|---
art_pk|bigint|L'identifiant (numérique) de l'article 
art_guid|uniqueidentifier|L'identifiant de l'article 
art_type|char|Le méta type de l'article (`N` pour les produits, `F`pour les produits financiers, `P` pour les frais de port…) cf [Articles dans le domaine applicatif gestcom](../articles/gestcom/gestcom-domaine-catalogue.html#selections) 
art_rjs_id|int|La raison juridique concernée 
art_tar_pk|smallint|L'identifiant du type d'articles (dans [params_types_articles](generated_params_types_articles.md)) 
art_libelle|nvarchar(500)|Le libellé de l'article 
art_descriptif|nvarchar(MAX)|La description (peut inclure des tags HTML simples tels que br, p, etc.) 
art_pu_ht|decimal(19,4)|Le prix unitaire Hors Taxes 
art_pu_ttc|decimal(19,4)|Le prix unitaire TTC 
art_type_stock|smallint|Type de stockage ( (0: non stockés, 1:immatériels, 2:FIFO, 3:PUMP, cf.  [Stockage](../articles/gestcom-pim.md#stockage) 
art_pu_promo_ht|decimal(18,2)|Prix unitaire HT promotionnel (entre art_date_debut_promo et art_date_fin_promo) 
art_pu_promo_ttc|decimal(18,2)|Prix unitaire TTC promotionnel (entre art_date_debut_promo et art_date_fin_promo) 
art_ref|nvarchar(40)|La référence de l'article (doit être unique pour une rjs_id donnée) 
art_fam_pk|int|Identifiant de la famille d'articles (dans [catalog_familles](generated_catalog_familles.md)) 
art_sfm_pk|int|Identifiant de la sous-famille d'articles (dans [catalog_sousfamilles](generated_catalog_sousfamilles.md)) 
art_est_prefacturable|bit|`true` si cet article peut servir dans le cadre de la pré-facturation 
art_est_compose|bit|`true` si l'article est composé (par exemple : un lot) 
art_est_decimal|bit|`true` si l'article peut être vendu en fraction d'unité (par exemple : un produit vendu au poids) 
art_est_multi_tarif|bit|`true` si l'article est vendu à plusieurs tarifs 
art_est_multi_version|bit|`true` si l'article existe en plusieurs versions 
art_est_immateriel|bit|`true` si l'article est immatériel (ce booléen est normalement synchronisé avec le type de stock dans `art_type_stock`) 
art_est_utilisable_internet|bit|`true` si l'article peut être utilisé dans le module e-commerce 
art_est_dispo|bit|`true` si l'article est à considérer comme disponible 
art_est_livrable|bit|`true` si l'article est livrable 
art_est_cadeau|bit|`true` si l'article est un article cadeau et ne doit pas être vendu 
art_est_partenaire|bit|`true` si l'article est géré par un partenaire (par exemple un vendeur marketplace) 
art_est_importe|bit|`true` si l'article n'a pas été créé manuellement mais importé depuis un système externe 
art_est_generique|bit|`true` si l'article est un article "parent", décliné en plusieurs versions 
art_est_valide|bit|`true` si l'article est finalisé, `false` si il est toujours en cours d'élaboration 
art_date_ajout|datetime|Date de création de l'article 
art_code_externe|varchar(50)|Code externe (en cas d'import) du produit 
art_uni_pk|int|Unité de vente 
art_qte_par_unite|decimal(18,4)|Quantité effective de produit par unité de vente (par exemple 1.23m² pour une boite) 
art_intance_de_art_pk|bigint|Si cet article est une version d'un produit générique, l'identifiant de l'article parent 
art_pu_conseille_ht|decimal(18,4)|Prix unitaire HT conseillé par le fabricant 
art_pu_conseille_ttc|decimal(18,4)|Prix unitaire TTC conseillé par le fabricant 
art_tva_pk|tinyint|Identifiant du taux de tva (dans [params_taux_tva](generated_params_taux_tva.md)) 
art_est_abonnement|bit|`true` si cet article est un abonnement 
art_est_forfait|bit|`true` si l'article est marqué comme un forfait 
art_score_risque|int|Score de risque. Cf. [Gestion du risque](../articles/gestcom-preparation.md#risque) 
art_date_debut_promo|datetime|Date de début de la promo 
art_date_fin_promo|datetime|Date de fin de la promo 
art_est_simplifie|bit|`true` pour les articles qui n'ont pas besoin de l'intégralité des fonctionnalités 
art_mar_pk|int|Identifiant de la marque (mar_pk dans [catalog_marques](generated_catalog_marques.md)) 
art_a_conditions_zone_liv|bit|`true` si l'article a des conditions de livraisons spécifiques 
art_a_conditions_presta_liv|bit|`true` si l'article a des conditions d'expédition spécifiques 
art_a_conditions_stockage|bit|`true` si l'article a des conditions de stockage spécifiques 
art_est_supprime|bit|`true` si l'article est archivé 
art_clc_est_sur_internet|bit|Colonne calculée 
art_uxid_bloque|uniqueidentifier|Identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) ayant posé un "lock" sur cet article 
art_etat_creation|tinyint|Etat de progression de la création (10 étant l'état "final") 
art_last_sync|datetime|Date de la dernière synchro pour les articles ayant des données importées 
art_qte_figee|decimal(18,4)|
art_ptn_guid_principal|uniqueidentifier|Identifiant du partenaire (dans [gestcom_partenaires](generated_gestcom_partenaires.md)) marqué comme "principal" pour cet article. Par exemple, pour un article Marketplace : le vendeur par défaut 
art_data_figees|varchar(MAX)|Liste des informations, séparées par des virgules ou des points virgules qui sont bloquées et ne doivent pas pouvoir être éditées 
art_date_import|datetimeoffset|Date du dernier import des datas sur cet article 
art_type_composition|nvarchar(60)|
