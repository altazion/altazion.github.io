# E.marketplace_operations

Contient les informations des opérations financière effectué sur une marketplace.

Colonne|Type|Description
---|---|---
mko_guid|uniqueidentifier|L'identifiant de l'opération financière  
mko_rjs_id|int|La raison juridique concernée 
mko_ptn_guid|uniqueidentifier|L'identifiant du partenaire disponible dans la table [gestcom_partenaires](generated_gestcom_partenaires.md) 
mko_date|datetimeoffset|La date de création de l'opérartion financière (datetimeoffset) 
mko_type_operation|char|Le type d'opération financière ('ACH' pour Operation Achats; 'CMM' pour Operation Commisions; 'CSO' pour Operation Cashout) 
mko_guid_piece_associee|uniqueidentifier|L'identifiant de la pièce comptable associée 
mko_montant|decimal(18,4)|Le montant de l'opération 
mko_guid_realisation|uniqueidentifier|L'identifiant de la réalisation de l'opération 
mko_mrg_guid|uniqueidentifier|L'identifiant du mode de règlement utilisé de la table [params_modesreglement](generated_params_modesreglement.md) 
mko_transaction_id|varchar(100)|L'identifiant externe de l'operation 
mko_itn_rgt_guid|uniqueidentifier|
mko_est_a_transferer|bit|Indique si l'opération est à transférer  
mko_est_valide|bit|Indique si l'opération est valide 
mko_montant_original|decimal(18,4)|Le montant original de l'opération 
mko_code_erreur|varchar(50)|Un code en cas d'erreur 
mko_message_erreur|varchar(MAX)|Le message d'erreur 
mko_date_echeance|datetimeoffset|La date d'échéance de l'opérartion financière (datetimeoffset) 
