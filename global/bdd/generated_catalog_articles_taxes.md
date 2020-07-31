# E.catalog_articles_taxes

Contient le détail des différentes taxes des articles

Colonne|Type|Description
---|---|---
atx_guid|uniqueidentifier|Identifiant du détail des taxes 
atx_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
atx_tax_guid|uniqueidentifier|Identifiant de la taxe (dans [params_taxes](generated_params_taxes.md)) 
atx_montant|decimal(18,4)|Montant de la taxe pour cet article 
