# E.catalog_articles_evenements

Contient les différents évènements survenus dans la vie d'un article

Colonne|Type|Description
---|---|---
evt_guid|uniqueidentifier|L'identifiant de l'évènement 
evt_art_guid|uniqueidentifier|L'identifiant de l'article (dans [catalog_articles](generated_catalog_articles.md)) 
evt_date|datetime|La date de l'évènement 
evt_type|varchar(20)|Le type d'évènement 
evt_message|nvarchar(400)|Le descriptif de l'évènement 
evt_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) qui a déclenché l'évènement 
