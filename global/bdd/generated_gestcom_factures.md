# E.gestcom_factures

Cette table contient les entêtes de factures émises par une raison juridiques vers ses clients

Colonne|Type|Description
---|---|---
fac_pk|numeric(18,0)|Clef primaire de la table 
fac_rjs_id|int|La raison juridique concernée 
fac_cli_pk|int|Identifiant du client ([gestcom_clients](generated_gestcom_clients.md)) destinataire de la facture 
fac_cli_nom|varchar(150)|
fac_cli_adresse|varchar(MAX)|
fac_cli_cp|varchar(10)|
fac_cli_ville|varchar(200)|
fac_montant_ht|decimal(19,4)|
fac_montant_ttc|decimal(19,4)|
fac_date|datetime|
fac_exporte_compta|tinyint|
fac_etat_reglement|bit|
fac_associated_idDocument|bigint|
fac_montant_restant|decimal(19,4)|
fac_etat_edition|tinyint|
fac_ucl_pk_contrat|decimal(18,0)|
fac_date_livraison|datetime|
fac_rem_globale_ht|decimal(18,2)|
fac_rem_global_libelle|varchar(250)|
fac_rem_total_ht|decimal(18,2)|
fac_rem_total_ttc|decimal(18,2)|
fac_ref_client|varchar(250)|
fac_numero|varchar(20)|Numéro de facture 
fac_date_echeance|datetime|
fac_montant_ht_hors_remise|decimal(8,2)|
fac_montant_ttc_hors_remise|decimal(18,2)|
fac_rem_global_ttc|decimal(18,2)|
fac_origine|varchar(5)|
fac_annee|int|
fac_mois|int|
fac_jour|int|
fac_date_maj|datetime|
fac_suivi_outlook|bit|
fac_relance_ok|bit|
fac_relance_exonere|bit|
fac_relance_etat|tinyint|
fac_date_derniere_relance|datetime|
fac_ctr_guid|uniqueidentifier|
fac_type_reglement_prevu|int|
fac_date_reglement_prevu|datetime|
fac_cli_pk_final|decimal(18,0)|Identifiant du client final (lorsque les factures sont établies à un partenaire/revendeur, cet identifiant permet de suivre le client final) 
fac_est_acompte|bit|
fac_impression_premiere|datetimeoffset|
fac_email_compte|int|
fac_email_premier|datetimeoffset|
fac_email_dernier|datetimeoffset|
fac_impression_compte|int|
fac_uxid_editeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
fac_horodatage_validation|datetimeoffset|
fac_horodatage_signature|varchar(100)|
fac_impression_derniere|datetimeoffset|
