# E.sysparams_events_types

Contient les différents types d'évènements qui sont gérables dans la solution (cf ../articles/technique-events-et-jobs.html)

Colonne|Type|Description
---|---|---
ett_guid|uniqueidentifier|L'identifiant du type d'évènement 
ett_rjs_id|int|La raison juridique concernée 
ett_categorie|varchar(50)|La catégorie de l'évènement 
ett_code|varchar(100)|Le code de l'évènement 
ett_libelle|varchar(250)|Le libellé "pour l'utilisateur" de l'évènement 
ett_description|varchar(MAX)|La description "pour l'utilisateur" 
ett_namespaces|varchar(1000)|
ett_queue_name|varchar(100)|Le nom de la queue de traitement pour ces évènements 
