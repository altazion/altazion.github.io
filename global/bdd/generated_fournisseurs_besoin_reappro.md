# E.fournisseurs_besoin_reappro

Aucune description pour cette table

Colonne|Type|Description
---|---|---
bra_guid|uniqueidentifier|
bra_rjs_id|int|La raison juridique concernée 
bra_ara_guid|uniqueidentifier|
bra_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
bra_qte|decimal(18,4)|
bra_uxid_createur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
bra_uxid_traitement|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
bra_est_traite|bit|
bra_lcf_guid|uniqueidentifier|
bra_raison_nonreappro|varchar(MAX)|
