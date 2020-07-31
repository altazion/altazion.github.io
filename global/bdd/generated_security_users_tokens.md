# E.security_users_tokens

Cette table contient les tokens (oauth, par exemple) des utilisateurs pour accèder à des services externes

Colonne|Type|Description
---|---|---
tok_guid|uniqueidentifier|L'identifiant du token 
tok_rjs_id|int|La raison juridique concernée 
tok_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) associé à ce token (ou Guid.Empty pour un identifiant général à la raison juridique) 
tok_type|varchar(50)|Le type de token 
tok_token|varchar(5000)|Le token d'accès 
tok_permissions|varchar(5000)|Les permissions associées à ce token 
tok_refresh_token|varchar(5000)|Le refresh token pour les token oAuth 
tok_refresh_after|datetime|La date à partir de laquel le refresh est obligatoire 
