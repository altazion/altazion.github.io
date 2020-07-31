# E.marketplace_config

Contient les informations de groupe et de configuration pour un type de marketplace

Colonne|Type|Description
---|---|---
mkp_guid|uniqueidentifier|L'identifiant du groupe de marketplace 
mkp_rjs_id|int|La raison juridique concernée 
mkp_sit_pk_associe|int|L'identifiant du site web associé au groupe de marketplace disponible dans la table sitesweb 
mkp_libelle|nvarchar(500)|Le libellé du groupe de marketplace 
mkp_type_regles_commission|char|Le type de regle de comission à appliquer à ce groupe de marketplace ('P' pour Pourcentage) 
mkp_periode_commission|char|La période de comission à appliquer à ce groupe de marketplace ('W' pour Hebdomadaire; 'M' pour Mensuel; 'T' pour Trimestriel) 
mkp_type|varchar(30)|Le type de groupe de marketplace ('WEB' pour Web; 'PHYGITAL' pour Phygital; 'SMB' pour Small business) 
