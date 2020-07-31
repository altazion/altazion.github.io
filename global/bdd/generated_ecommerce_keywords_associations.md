# E.ecommerce_keywords_associations

Table de liaison entre un Keyword et un autre keyword

Colonne|Type|Description
---|---|---
asso_kwrd_main_guid|uniqueidentifier|Identifiant du keyword principal [ecommerce_keywords](generated_ecommerce_keywords.md) 
asso_kwrd_lien_guid|uniqueidentifier|Identifiant du keyword lié [ecommerce_keywords](generated_ecommerce_keywords.md) 
asso_isStrong|bit|Est ce une liaison forte ?  True : ajouté le keyword principal, ajoutera automatiquement le keyword lié.  Sinon, le keyword lié sera simplement suggéré. 
