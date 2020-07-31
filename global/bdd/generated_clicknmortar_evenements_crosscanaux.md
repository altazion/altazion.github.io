# E.clicknmortar_evenements_crosscanaux

Continent les événements auxquels peuvent participer les magasins d'un client.

Colonne|Type|Description
---|---|---
evc_guid|uniqueidentifier|L'identifiant de l’événement. 
evc_rjs_id|int|La raison juridique concernée. 
evc_libelle|varchar(255)|Le nom de l’événement. 
evc_date|datetime|La date à laquelle se déroulera l’événement. 
evc_categorie|varchar(10)|La catégorie de l’événement: "Ouverture", "Fermeture", "Animation" etc... 
evc_descriptif|varchar(MAX)|Description de l'événement. 
evc_est_archive|bit|Boolean pour déterminer si l’événement est archivé ou non. 
evc_message|varchar(MAX)|Message de l'événement. 
evc_obligatoire_pour_integres|bit|Boolean pour préciser si l'événement est obligatoire pour les magasins intégrés du client. 
evc_obligatoire_pour_affillies|bit|Boolean pour préciser si l'événement est obligatoire pour les magasins affiliés du client. 
evc_path_url|varchar(250)|

## Remarques
Les événements peuvent être une ouverture ou une fermeture exceptionnelle, ou encore une animation. Les magasins indiquent s'il participe à tel ou tel événement.
