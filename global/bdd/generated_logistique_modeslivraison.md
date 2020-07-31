# E.logistique_modeslivraison

Aucune description pour cette table

Colonne|Type|Description
---|---|---
mlv_guid|uniqueidentifier|
mlv_rjs_id|int|La raison juridique concernée 
mlv_ptp_pk|int|
mlv_ordre|int|
mlv_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
mlv_volume_max|decimal(18,2)|
mlv_poids_max|decimal(18,2)|
mlv_valeur_max|decimal(18,2)|
mlv_hauteur_max|decimal(18,2)|
mlv_largeur_max|decimal(18,2)|
mlv_profondeur_max|decimal(18,2)|
mlv_autorise_plusieurs_colis|bit|
mlv_est_exceptionnel|bit|
mlv_est_actif|bit|
mlv_volume_marge|decimal(5,4)|
mlv_max_developpe|decimal(18,2)|
mlv_delai_moyen_en_j|smallint|
mlv_est_points_livraison|bit|
mlv_poids_minimum|decimal(18,2)|
mlv_nombre_maxi_par_periode|int|
mlv_type_periode|char|
mlv_duree_periode|int|
mlv_sit_pk|int|
mlv_sit_url_validation|varchar(250)|
mlv_valeur_minimum|decimal(18,2)|
mlv_libelle|varchar(100)|
mlv_cout_ttc_moyen|decimal(18,4)|
mlv_cout_ht_moyen|decimal(18,4)|
mlv_dispo_ecommerce|bit|
mlv_dispo_pos|bit|
mlv_dispo_clicknmortar|bit|
mlv_priorite|int|
mlv_type_livraison|varchar(4)|
