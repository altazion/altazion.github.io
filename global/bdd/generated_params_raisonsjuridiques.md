# E.params_raisonsjuridiques

Contient les raisons juridiques

Colonne|Type|Description
---|---|---
rjs_id|int|L'identifiant de la raison juridique 
rjs_raison_sociale|varchar(150)|Le nom de l'entreprise 
rjs_type|varchar(50)|La forme juridique de l'entreprise 
rjs_adresse|varchar(MAX)|L'adresse de l'entreprise 
rjs_siret|varchar(MAX)|Le n° de SIRET (ou équivalent) 
rjs_code_ape|varchar(MAX)|Le code d'activité (APE pour les entreprises françaises) 
rjs_tva_cee|varchar(20)|L'identifiant de TVA intra-communautaire 
rjs_numero_rcs|varchar(20)|Le numéro d'enregistrement au Registre du Commerce ou des Métiers ou tout organisme équivalent 
rjs_lieu_rcs|varchar(150)|Le lieu de l'enregistreent 
rjs_capital|decimal(18,0)|Le capital social 
rjs_est_micro_entreprise|bit|
rjs_est_particulier|bit|
rjs_nom_court|varchar(25)|Le nom court, utilisé dans le stockage, de la raison juridique 
rjs_ptn_guid|uniqueidentifier|L'identifiant du partenaire (dans la base de Creo) ayant apporté cette raison juridique 
rjs_est_archive|bit|`true` si la raison juridique est archivée 
rjs_pay_pk|char|Le code ISO du pays (dans [params_pays](generated_params_pays.md)) d'implantation du siège social de l'entreprise 
rjs_date_archivage|datetime|La date à laquelle la raison juridique a été archivée 
rjs_est_marketplace|bit|
rjs_telephone|varchar(20)|Le numéro de téléphone de contact (non public, destiné au support technique et aux services commerciaux de Creo). 

## Remarques
Cette table contient les différents _tenants_
