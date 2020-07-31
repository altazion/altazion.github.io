# E.security_devices_tokens

Contient les tokens de sécurité utilisés par les devices pour se connecter aux API

Colonne|Type|Description
---|---|---
tkd_guid|uniqueidentifier|Identifiant du token 
tkd_rjs_id|int|La raison juridique concernée 
tkd_pod_guid|uniqueidentifier|Identifiant du device dans ([pos_devices](generated_pos_devices.md)) 
tkd_type|varchar(50)|Le type de token 
tkd_token|varchar(5000)|La valeur du token 
tkd_expires_at|datetime|Date d'expiration du token 
