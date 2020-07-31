# E.stock_entrees

Contient les entrées en stock

Colonne|Type|Description
---|---|---
oms_guid|uniqueidentifier|L'identifiant de l'entrée en stock 
oms_rjs_id|int|La raison juridique concernée 
oms_date|datetime|La date de l'opération 
oms_libelle|varchar(250)|Le libellé de l'opération 
oms_est_confirme|bit|`true` si l'entrée en stock est confirmée 
oms_est_termine|bit|`true` si le traitement de l'opération est terminée 
oms_type|char|Le type de mise en stock 
oms_cfr_guid|uniqueidentifier|L'identifiant de la commande fournisseur (dans [fournisseurs_commandes](generated_fournisseurs_commandes.md)) associée à cette entrée 
oms_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) ayant fait l'entrée en stock 
oms_commentaire|nvarchar(MAX)|Commentaires saisis sur l'opération 
