# E.catalog_articles_attributs

Contient les valeurs des attributs personnalisés des articles

Colonne|Type|Description
---|---|---
att_art_pk|bigint|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
att_atd_pk|uniqueidentifier|L'identifiant de la définition d'attribut personnalisé (dans [catalog_attributsdefinitions](generated_catalog_attributsdefinitions.md)) 
att_valeur_num|decimal(18,0)|La valeur si l'attribut est de type numérique 
att_valeur_texte|nvarchar(500)|La valeur si l'attribut est de type texte simple 
att_valeur_texte_long|nvarchar(MAX)|La valeur si l'attribut est de type texte long 
att_atv_valeur|int|L'identifiant de la valeur énumérée (dans la table [catalog_attributsvaleurs](generated_catalog_attributsvaleurs.md)) 
att_valeur_bool|bit|La valeur si l'attribut est de type booléen 
att_valeur_date|datetime|La valeur si l'attribut est de type date 
