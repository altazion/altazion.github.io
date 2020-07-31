# E.pos_tickets

Aucune description pour cette table

Colonne|Type|Description
---|---|---
tck_guid|uniqueidentifier|
tck_rjs_id|int|La raison juridique concernée 
tck_pod_guid|uniqueidentifier|
tck_numero|varchar(50)|
tck_nombre_impression|smallint|
tck_date|datetimeoffset|
tck_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
tck_signature|varchar(250)|
tck_fac_guid|uniqueidentifier|
tck_avo_guid|uniqueidentifier|
tck_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) 
tck_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
tck_status|int|
tck_tags|nvarchar(500)|
tck_post_validation|nvarchar(2000)|
tck_parent_tck_guid|uniqueidentifier|
