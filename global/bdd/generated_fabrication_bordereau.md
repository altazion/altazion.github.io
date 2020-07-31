# E.fabrication_bordereau

Aucune description pour cette table

Colonne|Type|Description
---|---|---
fbd_guid|uniqueidentifier|
fbd_rjs_id|int|La raison juridique concernée 
fbd_date_creation|datetime|
fbd_date_mise_a_dispo|datetime|
fbd_est_a_la_demande|bit|
fbd_uxid_responsable|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
fbd_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
fbd_quantite_totale|decimal(18,4)|
fbd_quantite_deja_produite|decimal(18,4)|
fbd_est_en_production|bit|
fbd_est_en_test_qualite|bit|
fbd_est_termine|bit|
fbd_etat_rails|char|
fbd_est_annule|bit|
fbd_est_mis_en_stock|bit|
