# E.ecommerce_avantages

Cette table contient les avantages utilisables sur le module e-commerce

Colonne|Type|Description
---|---|---
ava_guid|uniqueidentifier|Identifiant du code avantage 
ava_rjs_id|int|La raison juridique concernée 
ava_sit_pk|int|L'identifiant `sit_pk` du site e-commerce ([`params_siteswebs`](generated_params_siteswebs.md)) sur lequel ce code avantage est utilisable 
ava_est_automatique|bit|`true`si le code avantage est appliqué automatiquement (code avantage par défaut) 
ava_est_fidelite|bit|`true` si ce code sert de base à une opération de fidélité 
ava_est_valide|bit|
ava_est_actif|bit|
ava_code|nvarchar(100)|Le code à saisir pour déclencher l'avantage 
ava_libelle|varchar(250)|Le libellé de l'avantage 
ava_libelle_public|nvarchar(500)|Le libellé présenté au client de l'avantage 
ava_est_cumulable_avec_autres|bit|`true` si cet avantage peut être cumulé avec d'autres 
ava_date_debut|datetime|Date de début de validité de l'avantage 
ava_date_fin|datetime|Date de fin de validité de l'avantage 
ava_cmp_guid|uniqueidentifier|L'identifiant de la campagne ([`commercial_campagnes`](generated_commercial_campagnes.md)) dans laquelle cet avantage a été placé 
ava_est_archive|bit|
ava_type|varchar(10)|
