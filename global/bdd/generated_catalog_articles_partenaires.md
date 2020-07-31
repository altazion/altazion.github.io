# E.catalog_articles_partenaires

Cette table permet d'associer des articles à des partenaires, comme par exemple un vendeur Marketplace

Colonne|Type|Description
---|---|---
apr_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
apr_ptn_guid|uniqueidentifier|Identifiant du partenaire (dans [gestcom_partenaires](generated_gestcom_partenaires.md)) 
apr_est_dispo|bit|`true` si l'article est marqué comme disponible par le partenaire 
apr_url|varchar(500)|
apr_ref_partenaire|varchar(50)|Référence du produit chez le partenaire 
apr_pu_ht|decimal(18,4)|Prix de vente public (HT) défini par le partenaire 
apr_pu_ttc|decimal(18,4)|Prix de vente public (TTC) défini par le partenaire 
apr_pu_promo_ht|decimal(18,4)|Prix de vente promotionnel (HT) défini par le partenaire 
apr_pu_promo_ttc|decimal(18,4)|Prix de vente promotionnel (TTC) défini par le partenaire 
apr_date_debut_promo|datetime|Date de début de la promo définie par le partenaire 
apr_date_fin_promo|datetime|Date de fin de la promo définie par le partenaire 
apr_qte_disponible|decimal(18,4)|Quantité du produit définit comme disponible par le partenaire 
apr_qte_reservee|decimal(18,4)|Quantité réservée par des commandes non traitées par le partenaire 
apr_qte_en_appro|decimal(18,4)|Quantité déclarée comme "disponible sous peu" par le partenaire 
apr_est_archive|bit|`true` pour archiver cette association article <> partenaire 
