# E.gestcom_avoirs

Contient les avoirs

Colonne|Type|Description
---|---|---
avo_guid|uniqueidentifier|L'identifiant de l'avoir 
avo_est_automatique|bit|`true` si l'avoir a été créé automatiquement (par l'OMS par exemple) 
avo_rjs_id|int|La raison juridique concernée 
avo_fac_pk|numeric(18,0)|L'identifiant de la facture (dans [gestcom_factures](generated_gestcom_factures.md)) associée à la commande 
avo_rav_guid|uniqueidentifier|L'identifiant de la raison d'avoir (dans [params_raisonsavoir](generated_params_raisonsavoir.md)) 
avo_cli_pk|int|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
avo_cli_nom|varchar(150)|Le nom du client 
avo_cli_adresse|varchar(MAX)|L'adresse du client  
avo_cli_cp|varchar(10)|Le code postal du client 
avo_cli_ville|varchar(200)|La ville du client 
avo_montant_ht|decimal(19,4)|Le montant HT de l'avoir 
avo_montant_ttc|decimal(19,4)|Le montant TTC de l'avoir 
avo_date_demande|datetime|La date de demande de l'avoir (pour les avoirs créés avec validation manuelle) 
avo_date_creation|datetime|La date de création de l'avoir 
avo_exporte_compta|tinyint|`true` si l'avoir a été exporté en compta 
avo_associated_idDocument|bigint|
avo_etat_edition|tinyint|L'état d'édition de l'avoir ( 
avo_ucl_pk_contrat|decimal(18,0)|
avo_date_livraison|datetime|La date de livraison des éléments ayant fait l'objet de l'avoir 
avo_ref_client|varchar(250)|La référence client 
avo_numero|varchar(20)|Le numéro d'avoir 
avo_rem_global_ttc|decimal(18,2)|Le montant de remise de bas de document en TTC 
avo_origine|varchar(5)|L'origine (dans [params_origines](generated_params_origines.md)) de l'avoir 
avo_est_rembourse|bit|`true` si l'avoir a été traité : remboursé ou utilisé en tant qu'en-cours client. 
avo_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) 
avo_bpr_guid|uniqueidentifier|L'identifiant du bon de préparation (dans [logistique_bonspreparation](generated_logistique_bonspreparation.md)) 
avo_date_maj|datetime|La date de dernière mise à jour de l'avoir 
avo_annee|int|[obsolète] 
avo_mois|int|[obsolète] 
avo_jour|int|[obsolète] 
avo_est_remboursable|bit|`true` si l'avoir peut être remboursé ou `false` si il s'agit d'un avoir "administratif" 
avo_ctr_guid|uniqueidentifier|
avo_impression_compte|int|Nombre d'impression du document 
avo_uxid_editeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
avo_horodatage_validation|datetimeoffset|Horodatage de l'avoir (loi antifraudes à la TVA) 
avo_horodatage_signature|varchar(100)|Signature numérique de l'avoir (loi antifraudes à la TVA) 
avo_impression_derniere|datetimeoffset|Date de dernière impression de l'avoir 
