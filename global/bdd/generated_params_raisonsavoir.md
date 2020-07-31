# E.params_raisonsavoir

Contient les raisons de création des avoirs

Colonne|Type|Description
---|---|---
rav_guid|uniqueidentifier|L'identifiant de la raison 
rav_rjs_id|int|La raison juridique concernée 
rav_libelle|varchar(250)|Le libellé 
rav_modele_lettre|varchar(250)|
rav_est_geste_commercial|bit|`true` si cette raison est une raison commerciale 
rav_est_remboursement_auto|bit|`true` si ces avoirs sont créés automatiquement par l'OMS 
rav_est_probleme_interne|bit|`true` pour les raisons dont l'origine est un problème interne à l'entreprise 
rav_est_pb_presta_reg|bit|`true` pour les avoirs établis à cause d'un souci de paiement. 
rav_est_pb_presta_liv|bit|
rav_est_retour|bit|
rav_est_automatique_manquant|bit|
rav_archive|bit|`true` si cette raison est archivée 
rav_modele_doc_guid|uniqueidentifier|
