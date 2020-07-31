# E.catalog_marques

Contient les marques

Colonne|Type|Description
---|---|---
mar_pk|int|Identifiant de la marque 
mar_rjs_id|int|La raison juridique concernée 
mar_libelle|nvarchar(500)|Libellé de la marque 
mar_code_externe|varchar(50)|Code externe (par exemple pour import de données) 
mar_url_perso|varchar(150)|Partie de l'url représentant la marque dans l'url rewriting 
mar_description|nvarchar(MAX)|Description de la marque (interne) 
mar_commentaire_public|nvarchar(MAX)|Description publique de la marque 
mar_importance|int|Niveau d'importance de la marque pour tri dans les facettes de recherche 
mar_est_marque_interne|bit|`true` si il s'agit d'une marque interne/éditée par la rjs 
mar_url_site_marque|varchar(250)|Url du site de la marque 
mar_url_image|varchar(250)|Url d'une image représentant la marque 
mar_code|varchar(50)|Code interne de la marque 
mar_entete_html|nvarchar(MAX)|Entete HTML/SEO à afficher en haut de page d'une descente 
mar_url_redirection|varchar(500)|
