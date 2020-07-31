# E.catalog_criteresvaleurs

Contient les valeurs distinctes des critères (facets) de recherche

Colonne|Type|Description
---|---|---
crv_guid|uniqueidentifier|L'identifiant de la valeur de critère 
crv_cri_guid|uniqueidentifier|L'identifiant du critère (dans [catalog_criteres](generated_catalog_criteres.md)) 
crv_ordre|smallint|L'ordre d'affichage de cette valeur 
crv_label|nvarchar(500)|Le libellé de la valeur 
crv_val_mini|decimal(18,5)|Dans le cadre de critères numérique, la borne basse à prendre en compte 
crv_val_maxi|decimal(18,5)|Dans le cadre d'un attribut de type 'N', la borne haute à prendre en compte 
crv_val_texte|nvarchar(500)|La valeur texte dans le cadre d'un attribut de type T 
crv_val_boolean|bit|La valeur booléenne dans le cadre d'un attribut de type B 
crv_val_date_mini|datetime|Dans le cadre de critères de date, la borne basse à prendre en compte 
crv_val_date_maxi|datetime|Dans le cadre de critères de date, la borne haute à prendre en compte 
crv_val_url_perso|varchar(250)|Le "code" à utiliser dans le moteur de rewriting pour identifier cette valeur. 
crv_date_creation|datetime|La date de création de la valeur 
crv_importance|int|L'importance de la valeur, pour effectuer un tri en fonction du nombre de résultat et de la pertinence de celui ci 
crv_atv_valeur|int|La valeur associée dans [catalog_attributsvaleurs](generated_catalog_attributsvaleurs.md), lorsque le critère est de type "Version disponible" (type L) 

## Remarques
Si le critère de recherche est positionné sur un attribut de type "valeurs énumérées", les différentes valeurs ne sont pas dupliquées dans cette tables mais sont récupérées directement depuis [`catalog_attributsvaleurs`](generated_catalog_attributsvaleurs.md)
