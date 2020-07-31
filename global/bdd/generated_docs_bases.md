# docbase.docs_bases

Contient les bases documentaires configurées

Colonne|Type|Description
---|---|---
bdo_guid|uniqueidentifier|L'identifiant de la base documentaire 
bdo_libelle|nvarchar(500)|Le nom de la base 
bdo_description|nvarchar(MAX)|La description 
bdo_creator_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
bdo_app_version_major|int|Le numéro de version de la base documentaire 
bdo_app_version_minor|int|Le numéro de révision de l'application 
bdo_code|varchar(15)|Le code de la base 
bdo_workspace_id|int|La raison juridique concernée (`rjs_id` dans [params_raisonsjuridiques](generated_params_raisonsjuridiques.md)) 
