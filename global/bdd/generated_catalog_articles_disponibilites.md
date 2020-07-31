# E.catalog_articles_disponibilites

Table d'optimisation contenant un agrégats des différentes disponibilités des articles

Colonne|Type|Description
---|---|---
ads_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
ads_rjs_id|int|La raison juridique concernée 
ads_en_stock|decimal(18,4)|La quantité en stock "utilisable" 
ads_reserve_stock|decimal(18,4)|La quantité du stock "utilisable" déjà réservée pour des opérations en cours 
ads_en_entree_stock|decimal(18,4)|La quantité qui est en cours d'entrée en stock (commande fournisseur à recevoir rapidement, ou quantité en cours de rangement par exemple) 
ads_en_fabrication|decimal(18,4)|La quantité en fabrication (déclenchée) 
ads_fabrication_possible|decimal(18,4)|La quantité restant possible en fabrication sur l'unité de temps de fabrication en cours 
ads_frn_dispo|decimal(18,4)|La quantité "utilisable" chez le(s) fournisseur(s), en cas de drop shipping : chez le fournisseur principal 
ads_reserve_frn|decimal(18,4)|La quantité déjà réservée pour des opérations en cours (à déduire de ads_frn_dispo) 
ads_frn_sous_15j|decimal(18,4)|Informatif : la quantité annoncée par le(s) fournisseur(s) comme étant disponible sous 15j 
ads_frn_sous_30j|decimal(18,4)|Informatif : la quantité annoncée par le(s) fournisseur(s) comme étant disponible sous 30j 
