# E.system_events

Contient les instances des évènements applicatifs

Colonne|Type|Description
---|---|---
evt_guid|uniqueidentifier|L'identifiant de l'évènement 
evt_rjs_id|int|La raison juridique concernée 
evt_date_depot|datetime|La date de création de l'évènement 
evt_date_max|datetime|La date maximale avant laquelle l'évènement doit être traité. Si il ne l'est pas, l'évènement sera ignoré. 
evt_debut_traitement|datetime|La date de début de traitement 
evt_fin_traitement|datetime|La date de fin de traitement 
evt_instance_traitement|uniqueidentifier|L'instance qui est en train ou qui a réalisé le traitement de l'évènement 
evt_ett_guid|uniqueidentifier|L'identifiant du type d'évènement (dans [sysparams_events_types](generated_sysparams_events_types.md)) 
evt_data|varchar(MAX)|Les datas (sous forme d'une chaine JSON) de l'évènement 
evt_message_erreur|varchar(MAX)|Le message d'erreur si le dernier essai de traitement s'est terminé sur une erreur 
evt_etape_termine|int|Le numéro de la dernière étape terminée (pour le cas de traitement multi-étapes) 
