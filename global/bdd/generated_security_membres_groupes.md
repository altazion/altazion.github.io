# E.security_membres_groupes

Cette table contient les associations entre groupes de sécurité et utilisateurs

Colonne|Type|Description
---|---|---
mbr_guid|uniqueidentifier|L'identifiant de la ligne 
mbr_grp_guid|uniqueidentifier|L'identifiant du groupe de sécurité (dans [security_groupes](generated_security_groupes.md)) 
mbr_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
