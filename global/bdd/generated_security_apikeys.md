# E.security_apikeys

Les clefs API générées pour l'accès aux API

Colonne|Type|Description
---|---|---
aky_guid|uniqueidentifier|L'identifiant de la clef API 
aky_rjs_id|int|La raison juridique concernée 
aky_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) associé à cette clef 
ak_libelle|varchar(1000)|Le libellé de la clef (la raison de sa création) 
aky_value|varchar(100)|La valeur de la clef 
aky_secret|varchar(100)|Le secret associé à la clef 
