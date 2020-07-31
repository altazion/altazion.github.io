# E.ecommerce_clients

Contient les comptes utilisateurs e-commerce

Colonne|Type|Description
---|---|---
ecl_guid|uniqueidentifier|L'identifiant du compte client ecommerce 
ecl_sit_pk|int|L'identifiant du site (dans [params_siteswebs](generated_params_siteswebs.md)) 
ecl_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
ecl_email|varchar(150)|L'email 
ecl_password|varchar(150)|Le mot de passe hashé 
ecl_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
ecl_nom|varchar(250)|Le nom du client 
ecl_rjs_id|int|La raison juridique concernée 
ecl_anonymous_user|bit|
ecl_anonymous_token|varchar(500)|
ecl_date_dernier_login|datetime|Date de dernier login 
ecl_type_password|varchar(20)|Le type de hash du mot de passe (`null` pour la dernière version du hashage, `'OLD'` pour l'encryptage près 2013, `'PRESTASHOP'` pour les comptes migrés de cette plateforme). 
