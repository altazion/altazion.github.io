# E.gestcom_facturesfournisseurs

Aucune description pour cette table

Colonne|Type|Description
---|---|---
fcf_pk|decimal(9,0)|
fcf_rjs_id|int|La raison juridique concernée 
fcf_frn_pk|int|
fcf_ref_fact_frn|varchar(20)|
fcf_date|datetime|
fcf_montant_ht|decimal(19,4)|
fcf_montant_ttc|decimal(19,4)|
fcf_exporte_compta|tinyint|
fcf_etat_reglement|tinyint|
fcf_associated_idDocument|bigint|
fcf_montant_restant|decimal(18,2)|
fcf_fbc_guid|uniqueidentifier|
fcf_etat_edition|bit|
fcf_uxid_editeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
fcf_horodatage_validation|datetimeoffset|
fcf_horodatage_signature|varchar(100)|
fcf_url_document|varchar(500)|
