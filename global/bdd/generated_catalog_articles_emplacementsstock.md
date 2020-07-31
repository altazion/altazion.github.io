# E.catalog_articles_emplacementsstock

Cette table permet de forcer le stockage de certains produits dans des emplacements de stocks spécifiques

Colonne|Type|Description
---|---|---
ast_guid|uniqueidentifier|Identifiant de la ligne 
ast_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
ast_dpt_pk|int|Identifiant du dépôt de stock (dans [stock_depots](generated_stock_depots.md)) 
ast_emp_pk|int|Identifiant de l'emplacement de stock (dans [stock_emplacements](generated_stock_emplacements.md)) 
