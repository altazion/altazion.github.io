# E.sysparams_events_handler

Contient les enregistrements des gestionnaires d'évènements applicatifs (cf ../articles/technique-events-et-jobs.html)

Colonne|Type|Description
---|---|---
evh_guid|uniqueidentifier|L'identifiant du gestionnaire d'évènement 
evh_rjs_id|int|La raison juridique concernée 
evh_est_production|bit|`true` si le gestionnaire est actif 
evh_ett_guid|uniqueidentifier|L'identifiant du type d'évènement (dans [sysparams_events_types](generated_sysparams_events_types.md)) 
evh_type_sources|varchar(10)|Un code représentant le type de composant utilisé pour traiter l'évènement 
evt_sources|varchar(MAX)|Le code source ou tout autre élément permettant de créer le gestionnaire dans le code, le contenu de cette colonne peut varier grandement en fontion du evh_type_sources 
