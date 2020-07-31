# E.catalog_vitrines

Cette table contient les sélections de produits

Colonne|Type|Description
---|---|---
vit_guid|uniqueidentifier|L'identifiant de la sélection 
vit_pk|bigint|L'identifiant (ancien format) de la sélection 
vit_rjs_id|int|La raison juridique concernée 
vit_code|nvarchar(30)|Code de la selection 
vit_libelle|nvarchar(100)|Le nom de la sélection 
vit_type|char|Type de sélections : `N` pour les sélections crées par les utilisateurs, `A` pour les vitrines créées par les outils d'animation commerciale, `C` pour les vitrines de support de fonctionnalités 
vit_pub_skyscrapper|varchar(250)|[Obsolète, ne plus utiliser] 
vit_pub_wide_skyscrapper|varchar(250)|[Obsolète, ne plus utiliser] 
vit_pub_leaderboard|varchar(250)|[Obsolète, ne plus utiliser] 
vit_pub_full_banner|varchar(250)|[Obsolète, ne plus utiliser] 
vit_pub_half_banner|varchar(250)|[Obsolète, ne plus utiliser] 
vit_pub_medium_rect|varchar(250)|[Obsolète, ne plus utiliser] 
vit_pub_vertical_rect|varchar(250)|[Obsolète, ne plus utiliser] 
vit_image_big|varchar(250)|[Obsolète, ne plus utiliser] 
vit_image_small|varchar(250)|[Obsolète, ne plus utiliser] 
vit_vignette|varchar(250)|[Obsolète, ne plus utiliser] 
vit_bandeau|varchar(250)|[Obsolète, ne plus utiliser] 
vit_seg_pk|decimal(8,0)|L'identifiant de la segmentation (dans [catalog_segmentations](generated_catalog_segmentations.md)) 
vit_groupe|varchar(50)|Le groupe de la sélection (saisie libre par l'utilisateur) 
vit_url_perso|varchar(250)|Le "code" à utiliser dans le moteur de rewriting pour identifier cette selection 
vit_sit_pk|int|L'identifiant du site e-commerce (par [params_siteswebs](generated_params_siteswebs.md)) associé à la sélection ou `null` pour une sélection globale. 
vit_est_active|bit|`false` si la vitrine est archivée 
vit_est_automatique|bit|`true` si la vitrine est calculé automatiquement 
vit_automatisation_clauses|nvarchar(MAX)|Les clauses de calcul du contenu pour une vitrine automatique. Cf. Remarques 
vit_date_creation|datetime|LA date de création de la selection 
vit_automatisation_delai_en_minutes|int|Délai de rafraichissement souhaité 
vit_automatisation_timestamp|datetime|Date de la dernière mise à jour 
vit_cmp_guid|uniqueidentifier|Identifiant de la campagne commerciale (dans [commercial_campagnes](generated_commercial_campagnes.md)) à laquelle cette sélection est ratachée 
vit_entete_html|nvarchar(MAX)|Contenu HTML à afficher en entête dans le cadre d'un site e-commerce. 
