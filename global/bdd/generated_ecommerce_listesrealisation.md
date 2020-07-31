# E.ecommerce_listesrealisation

Aucune description pour cette table

Colonne|Type|Description
---|---|---
lra_guid|uniqueidentifier|
lra_rjs_id|int|La raison juridique concernée 
lra_lis_guid|uniqueidentifier|
lra_titre|varchar(500)|
lra_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
lra_message|varchar(MAX)|
lra_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) qui a conduit à la réalisation de cet/ces item(s) 
lra_tck_guid|uniqueidentifier|
lra_fac_pk|numeric(18,0)|
lra_etat_notification|char|
lra_date|datetimeoffset|
