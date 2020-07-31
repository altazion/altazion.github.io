# E.fournisseurs_commandes

Aucune description pour cette table

Colonne|Type|Description
---|---|---
cfr_guid|uniqueidentifier|
cfr_date|datetime|
cfr_numero|varchar(50)|
cfr_frn_guid|uniqueidentifier|
cfr_ref_externe|nvarchar(100)|
cfr_catalogue|nvarchar(100)|
cfr_total_ht_prev|decimal(18,4)|
cfr_total_ttc_prev|decimal(18,4)|
cfr_total_ht_final|decimal(18,4)|
cfr_total_ttc_final|decimal(18,4)|
cfr_port_ht_prev|decimal(18,4)|
cfr_port_ttc_prev|decimal(18,4)|
cfr_port_ht_final|decimal(18,4)|
cfr_port_ttc_final|decimal(18,4)|
cfr_autres_frais_ht|decimal(18,4)|
cfr_autres_frais_ttc|decimal(18,4)|
cfr_rjs_id|int|La raison juridique concernée 
cfr_etat_rails|char|
cfr_dpt_pk|int|
cfr_uxid_demandeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
cfr_date_reception_prevue|datetime|
