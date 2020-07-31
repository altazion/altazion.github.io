# E.catalog_articles_tarifs

Contient les tarifs spécifiques d'un produit pour une grille de tarifs (pour un type de client, une opération promotionnelle, etc.)

Colonne|Type|Description
---|---|---
agt_guid|uniqueidentifier|L'identifiant du tarif spécifique 
agt_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
agt_grt_guid|uniqueidentifier|L'identifiant de la grille de tarifs (dans [params_grillestarifs](generated_params_grillestarifs.md)) 
agt_vat_guid|uniqueidentifier|Obsolète 
agt_pu_ht|decimal(18,4)|Le prix unitaire HT de l'article dans cette grille de tarif 
agt_pu_ttc|decimal(18,4)|Le prix unitaire TTC de l'article dans cette grille de tarif 
agt_pu_promo_ht|decimal(18,4)|Le prix unitaire promotionnel HT de l'article dans cette grille de tarif 
agt_pu_promo_ttc|decimal(18,4)|Le prix unitaire promotionnel TTC de l'article dans cette grille de tarif 
agt_debut_promo|datetime|Date de début de la promo dans cette grille de tarifs 
agt_fin_promo|datetime|Date de fin de la promo dans cette grille de tarifs 
