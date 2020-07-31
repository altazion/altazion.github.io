# E.system_jobs

Aucune description pour cette table

Colonne|Type|Description
---|---|---
job_guid|uniqueidentifier|
job_rjs_id|int|La raison juridique concernée 
job_uxid_demandeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
job_libelle|varchar(500)|
job_date_depot|datetime|
job_date_max|datetime|
job_debut_traitement|datetime|
job_fin_traitement|datetime|
job_instance_traitement|uniqueidentifier|
job_categorie|uniqueidentifier|
job_data|varchar(MAX)|
job_message_erreur|varchar(MAX)|
