# E.gestcom_lignesavoirs

Contient les lignes des avoirs

Colonne|Type|Description
---|---|---
lav_guid|uniqueidentifier|L'identifiant de la ligne 
lav_avo_guid|uniqueidentifier|L'identifiant de l'avoir (dans [gestcom_avoirs](generated_gestcom_avoirs.md)) 
lav_lfc_pk|decimal(18,0)|L'identifiant de la ligne de facture (dans [gestcom_lignesfactures](generated_gestcom_lignesfactures.md)) associée 
lav_art_pk|bigint|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
lav_art_libelle|nvarchar(500)|Le libellé de l'article 
lav_qte|decimal(7,3)|La quantité en avoir 
lav_pu|decimal(19,4)|Le prix unitaire HT 
lav_pu_ttc|decimal(19,4)|Le prix unitaire TTC 
lav_commentaire|nvarchar(MAX)|Le descriptif/commentaire de la ligne 
lav_prj_pk|bigint|[obsolète] 
lav_stm_pk|decimal(18,0)|
lav_type|char|Le type de ligne ('N' pour les articles, 'P' pour les frais de ports, etc. cf [les meta-types d'articles](../articles/gestcom-pim.html#metatypes)) 
lav_uxid_editeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
lav_horodatage_validation|datetimeoffset|Horodatage de validation de la ligne 
lav_horodatage_signature|varchar(100)|Signature numérique de la ligne 
