# E.security_utilisateurs

Contient les utilisateurs

Colonne|Type|Description
---|---|---
uin_pk|decimal(18,0)|L'identifiant de l'utilisateur 
uin_nom|varchar(250)|Le nom de l'utilisateur 
uin_login|varchar(200)|L'identifiant utilisateur utilisé pour se connecter 
uin_password|varchar(200)|Le mot de passe encrypté de l'utilisateur 
uin_uxid|uniqueidentifier|L'identifiant général de l'utilisateur. 
uin_sso_username|varchar(250)|L'identifiant SSO de l'utilisateur pour une connexion LDAP ou similaire 
uin_rjs_id|int|La raison juridique concernée 
uin_code_pin|varchar(50)|
uin_est_master_admin|bit|`true` si l'utilisateur est le master admin de la solution 
uin_est_desactive|bit|`true` si l'utilisateur est désactivé 
uin_est_secondaire|bit|`true` si l'utilisateur est un utilisateur secondaire (par exemple un partenaire) 
uin_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
uin_zmg_guid|uniqueidentifier|L'identifiant de la zone de magasin (dans [pos_Z](generated_pos_Z.md)onesmagasins) 
uin_ptn_guid|uniqueidentifier|L'identifiant du partenaire (dans [gestcom_partenaires](generated_gestcom_partenaires.md)) associé à cet utilisateur 
uin_type|varchar(5)|Le type d'utilisateur 
