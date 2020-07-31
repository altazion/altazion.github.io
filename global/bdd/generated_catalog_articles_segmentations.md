# E.catalog_articles_segmentations

Table permettant de définir dans quelle(s) segmentation(s) un produit est placé

Colonne|Type|Description
---|---|---
sar_seg_pk|decimal(8,0)|L'identifiant de la segmentation (dans [catalog_segmentations](generated_catalog_segmentations.md)) 
sar_art_pk|int|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
sar_pertinence|decimal(6,4)|Score de pertinence de l'article dans cette catégorie 
sar_mis_en_avant|bit|`true` pour marque l'article comme mis en avant dans la catégorie 
sar_principale|bit|`true` pour marquer la catégorie principale de l'article. Il ne peut y avoir qu'une seule catégorie principale pour un article. 
