# E.commercial_prospects

Aucune description pour cette table

Colonne|Type|Description
---|---|---
psp_guid|uniqueidentifier|L'identifiant du prospect 
psp_rjs_id|int|La raison juridique concernée 
psp_est_virtuel|bit|
psp_pertinence|int|
psp_email|varchar(250)|Son e-mail 
psp_civilite|varchar(15)|
psp_nom|varchar(250)|Son nom 
psp_adresse|varchar(MAX)|Son adresse 
psp_cp|varchar(25)|Son code postal 
psp_ville|varchar(250)|Sa ville 
psp_pay_pk|char|Le code pays (dans [params_pays](generated_params_pays.md)) du prospect 
psp_telephone|varchar(30)|Son numéro de téléphone 
psp_telephone2|varchar(30)|Son numéro de téléphone (n°2 : par exemple fixe) 
psp_societe|varchar(250)|Le nom de la société 
psp_contact|varchar(250)|
psp_telephone_contact|varchar(30)|
psp_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
psp_prenom_seul|varchar(250)|Le prénom (extrait du nom complet) du prospect 
