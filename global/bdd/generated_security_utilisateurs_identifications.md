# E.security_utilisateurs_identifications

Contient les identifiants externes de l'utilisateurs

Colonne|Type|Description
---|---|---
uii_guid|uniqueidentifier|L'identifiant de la table 
uii_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
uii_type|varchar(20)|Le type d'identifiant externe 
uii_identifiant|varchar(150)|La valeur de l'identifiant externe 
uii_val1|varchar(500)|Valeur supplémentaire d'identifiant renvoyé par le système externe 
uii_val2|varchar(500)|Valeur supplémentaire d'identifiant renvoyé par le système externe 
uii_val3|varchar(500)|Valeur supplémentaire d'identifiant renvoyé par le système externe 

## Remarques
Sert à conserver les identifiants externes (par exemple pour un login Azure Active Directory, Google, etc.)
