# E.catalog_articles_fournisseurs

Cette table permet d'associer des articles à des fournisseurs

Colonne|Type|Description
---|---|---
afa_pk|uniqueidentifier|Identifiant de l'association 
afa_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
afa_far_guid|uniqueidentifier|Identifiant de l' _article fournisseur_ (dans [fournisseurs_articles](generated_fournisseurs_articles.md)) 
afa_prix_negocie|decimal(18,5)|Le prix négocié actuel du produit 
afa_priorite|smallint|La priorité de l'association, plus un fournisseur à une association elevée avec un article, plus il a de chance d'être le fournisseur principal 

## Remarques
Utilisez cette table pour définir des associations entre les informations des produits de vos fournisseurs et votre catalogue de vente. Si vous faites du _drop shipping_, cette liaison est très importante puisqu'elle definit permet d'alimenter facilement votre référentiel produit à partir de données fournisseurs. 
