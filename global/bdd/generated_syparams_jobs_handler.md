# E.syparams_jobs_handler

Cette table contient les noms des classes c# utilisées pour [traiter les jobs (traitements asynchrones)](../articles/technique-events-et-jobs.md#jobs)

Colonne|Type|Description
---|---|---
jhl_guid|uniqueidentifier|Identifiant de la ligne 
jhl_rjs_id|int|La raison juridique concernée 
jhl_categorie|uniqueidentifier|La catégorie (le type) du job qui est traité 
jhl_classe|varchar(500)|Le nom de la classe c# (le nom complet : `Namespace.Classe, Assembly`) implémentant `IJobHandler` 
jhl_libelle|varchar(250)|Le libellé décrivant le handler 

## Remarques
>[!Warning]
> Attention à la faute de frappe sur le nom de la table : il manque le S de sy_S_params

Pour plus d'informations sur les Jobs, [consultez l'article sur les events, jobs et webhooks](../articles/technique-events-et-jobs.md)

