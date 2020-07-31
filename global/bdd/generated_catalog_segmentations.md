# E.catalog_segmentations

Contient les catégories (publiques) des articles

Colonne|Type|Description
---|---|---
seg_pk|decimal(8,0)|L'identifiant de la segmentation 
seg_rjs_id|int|La raison juridique concernée 
seg_parent_seg_pk|decimal(8,0)|L'identifiant de la segmentation parente 
seg_libelle|nvarchar(500)|Le libellé de la segmentation 
seg_flag_internet|smallint|`true` pour utiliser cette catégorie sur un site e-commerce 
seg_type|char|Le type de segmentation ('P' pour les catégories principales) 
seg_image_big|varchar(250)|
seg_vignette|varchar(250)|
seg_bandeau|varchar(250)|
seg_url_perso|varchar(250)|Le "code" à utiliser dans le moteur de rewriting pour identifier cette segmentation 
seg_libelle_tri|nvarchar(500)|
seg_code_externe|varchar(50)|Code externe (dans les imports de données) 
seg_code|varchar(50)|
seg_categorie|varchar(50)|
seg_ata_guid|uniqueidentifier|
seg_importance|int|L'importance de la catégorie pour tri lors de l'affichage 
seg_commentaire_public|nvarchar(MAX)|La description (publique) de la segmentation 
seg_description|nvarchar(MAX)|La description (interne) de la segmentation 
seg_entete_html|nvarchar(MAX)|Contenu SEO spécifique à afficher pour cette segmentation 
seg_entete_sur_enfants|bit|`true` pour utiliser l'entête sur les segmentations enfants si elles n'en ont pas de définies 
seg_url_redirection|varchar(500)|
