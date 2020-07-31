# E.gestcom_clients

Contient les clients

Colonne|Type|Description
---|---|---
cli_pk|int|Identifiant du client 
cli_guid|uniqueidentifier|Contient l'identifiant général du client, à utiliser dans les nouvelles tables en tant que clef de liaison à la place de `cli_pk` 
cli_rjs_id|int|La raison juridique concernée 
cli_type|smallint|Le type de client. Cette colonne contient un identifiant `tcl_pk` de la table [`params_types_clients`](generated_params_types_clients.md) 
cli_civilite|varchar(15)|
cli_nom|nvarchar(500)|
cli_adresse|nvarchar(MAX)|
cli_cp|nvarchar(50)|
cli_ville|nvarchar(500)|
cli_tel|varchar(30)|
cli_compte_compta|varchar(15)|
cli_type_delai_paiement|tinyint|
cli_delai_paiement|smallint|
cli_email|nvarchar(500)|
cli_password|varchar(250)|
cli_societe|nvarchar(500)|
cli_tva_ue|varchar(25)|
cli_pay_pk|char|
cli_est_confirme|bit|
cli_est_generique|bit|
cli_est_archive|bit|
cli_date_creation|datetime|
cli_importance|tinyint|
cli_suivi_outlook|bit|
cli_est_prefacturable|bit|
cli_prenom_seul|varchar(200)|
cli_exonere_relance|bit|
cli_mobile|varchar(30)|
cli_ptn_guid|uniqueidentifier|
cli_facture_partenaire|bit|
cli_type_reglement_prefere|int|
cli_score_risque|int|
cli_nom_seul|nvarchar(500)|
