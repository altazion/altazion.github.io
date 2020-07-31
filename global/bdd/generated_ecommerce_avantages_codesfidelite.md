# E.ecommerce_avantages_codesfidelite

Contient les codes à usages uniques utilisés

Colonne|Type|Description
---|---|---
cfi_guid|uniqueidentifier|L'identifiant du code fidélité 
cfi_rjs_id|int|La raison juridique concernée 
cfi_cli_pk|int|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
cfi_ava_guid|uniqueidentifier|L'identifiant de l'avantage (dans [ecommerce_avantages](generated_ecommerce_avantages.md)) 
cfi_nb_utilisation_possibles|int|Nb d'utilisations possibles de ce code 
cfi_nb_utilisations|int|Nb d'utilisations déjà réalisées 
cfi_code|nvarchar(100)|Code à saisir 
cfi_raison|varchar(500)|La raison pour la création de ce code (pour différencier plusieurs attributions du même avantage) 
cfi_date_debut|datetime|Date de début de validité du code 
cfi_date_fin|datetime|Date de fin de validité du code 
cfi_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
cfi_email|varchar(500)|L'email associé à ce code 
cfi_bcd_guid_bloquante|uniqueidentifier|Identifiant de la commande non terminée utilisant le code et bloquant donc son utilisation tant que non terminée ou abandonnée pour éviter les doublons 
cfi_date_blocage|datetime|Date du blocage (pour déblocage automatique) 
cfi_import_guid|uniqueidentifier|Identifiant de l'import / du batch de création en masse de bons fidélité 
