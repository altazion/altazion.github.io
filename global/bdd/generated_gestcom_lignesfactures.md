# E.gestcom_lignesfactures

Aucune description pour cette table

Colonne|Type|Description
---|---|---
lfc_pk|decimal(18,0)|
lfc_fac_pk|decimal(18,0)|
lfc_art_pk|bigint|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
lfc_art_libelle|nvarchar(500)|
lfc_qte|decimal(7,3)|
lfc_pu|decimal(19,4)|
lfc_pu_ttc|decimal(19,4)|
lfc_commentaire|nvarchar(MAX)|
lfc_prj_pk|bigint|
lfc_rem_ht|decimal(18,2)|
lfc_rem_libelle|nvarchar(500)|
lfc_stm_pk|decimal(18,0)|
lfc_pu_ht_ach|decimal(18,2)|
lfc_rem_ttc|decimal(18,2)|
lfc_pu_ttc_ach|decimal(18,2)|
lfc_afc_pk|decimal(18,0)|
lfc_ldv_pk|decimal(18,0)|
lfc_est_ligne_acompte|bit|
lfc_uxid_editeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
lfc_horodatage_validation|datetimeoffset|
lfc_horodatage_signature|varchar(100)|
