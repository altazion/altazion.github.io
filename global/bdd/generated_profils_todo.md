# E.profils_todo

Cette table contient les todos des utilisateurs

Colonne|Type|Description
---|---|---
tdo_guid|uniqueidentifier|L'identifiant du todo 
tdo_rjs_id|int|La raison juridique concernée 
tdo_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
tdo_grp_guid|uniqueidentifier|
tdo_type|uniqueidentifier|
tdo_cible_guid|uniqueidentifier|
tdo_cible_type|varchar(100)|
tdo_url|varchar(250)|
tdo_libelle|varchar(150)|
tdo_details|varchar(MAX)|
tdo_echeance|datetime|
tdo_urgent|bit|
tdo_parent_tdo_guid|uniqueidentifier|
tdo_date_effectue|datetime|
tdo_uxid_demandeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
tdo_urgence|int|
tdo_commentaire_1|varchar(500)|
tdo_commentaire_2|varchar(500)|
tdo_commentaire_3|varchar(500)|
tdo_date_creation|datetime|
tdo_xml_data|varchar(MAX)|
