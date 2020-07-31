# E.catalog_articles_associes

Cette table contient les associations entres articles

Colonne|Type|Description
---|---|---
aas_art_guid_princ|uniqueidentifier|Identifiant de l'article (dans e.[catalog_articles](generated_catalog_articles.md)) qui est l'article principal 
aas_art_guid_sec|uniqueidentifier|Identifiant de l'article (dans e.[catalog_articles](generated_catalog_articles.md)) qui est associé à l'article principal. Il n'y a pas de notion d'association réciproque. 
aas_qte_sec_par_princ|decimal(9,2)|Quantité de l'article secondaire qui est à associer à chaque unité de l'article principal (par exemple : 2 blister de piles LR06 pour 1 voiture radio commandée) 
aas_type_association|varchar(10)|Le type d'association (`taa_code` dans e.[params_types_associationsarticles](generated_params_types_associationsarticles.md)) 
aas_raison|varchar(250)|La raison de l'association (permet de définir un code identifiant la relation, cf. les remarques ci-dessous) 
aas_importance|int|Le niveau d'importance de la relation, permettant de mettre en avant certains produits associés avant d'autres 

## Remarques
Chaque association entre des produits se fait avec deux informations importantes :
- le type d'association (qui est définit dans la table e.[params_types_associationsarticles](generated_params_types_associationsarticles.md), qui contient à la fois des types "standards" et des types définis par l'utilisateurs)
- la quantité d'article secondaire par unité de l'article principal.

**Attention**, une association est toujours à sens unique : associer le produit BBB au produit principal AAA n'établi pas automatiquement l'association dans le sens inverse.

Afin d'identifier une relation entre des articles et d'en définir la raison, il est possible d'utiliser le champ aas_raison correspondant. Cela permet, si vous avez plusieurs produits avec un même type de relation, de définir la nature exacte de la relation. Par exemple, dans le cadre de l'association standard _VARIATION_ qui permet de définir les différentes variantes d'un même produit, on pourrait par exemple avoir les associations suivantes :

|Princ.|Sec.|Type|Raison|
|---|---|---|---|
|ART1RED|ART1BLUE|VARIATION|Bleu|
|ART1RED|ART1GREEN|VARIATION|Vert|
|ART1BLUE|ART1GREEN|VARIATION|Vert|
