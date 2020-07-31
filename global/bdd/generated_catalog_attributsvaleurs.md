# E.catalog_attributsvaleurs

Contient les différentes valeurs possibles pour les attributs de type énumérés.

Colonne|Type|Description
---|---|---
atv_atd_pk|uniqueidentifier|L'identifiant de la définition d'attribut personnalisé (dans [catalog_attributsdefinitions](generated_catalog_attributsdefinitions.md)) 
atv_valeur|int|L'identifiant de la valeur 
atv_libelle|nvarchar(1000)|Le libellé 
atv_url_perso|varchar(200)|La partie d'url à utiliser pour le (module d'url-rewriting)[../articles/ecommerce-contenuetseo.md#url-rewriting] 
atv_importance|int|L'importance de cette valeur pour tri dans les filtres 
atv_valeur_num|decimal(18,4)|La valeur numérique associée à cette valeur énumérée 
atv_code_externe|varchar(200)|Le code externe (utilisé lorsque les valeurs sont importées depuis un flux EDI) 
atv_valeur_url|nvarchar(1000)|L'url associée à cette valeur (par exemple l'url d'une pastille) 
atv_valeur_sync|nvarchar(1000)|La valeur de cette données avant synchronisation (dans le cadre du serveur local) 
atv_entete_html|nvarchar(MAX)|L'entete HTML/SEO à afficher sur le site/les bornes lorsqu'une descente est concentrée sur cette valeur d'énumération. 
atv_url_redirection|varchar(500)|
