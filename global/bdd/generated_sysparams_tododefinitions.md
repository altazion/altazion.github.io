# E.sysparams_tododefinitions

Cette table permet de définir les options des todos, comme par exemple les destinataires, les classes de détections, etc.

Colonne|Type|Description
---|---|---
tdd_guid|uniqueidentifier|Identifiant de la ligne 
tdd_rjs_id|int|La raison juridique concernée 
tdd_message_guid|uniqueidentifier|Type de todo (sera repris dans la colonne tdo_type de [profils_todo](generated_profils_todo.md)) 
tdd_remise_a_un_groupe|bit|`true` pour une remise à un groupe (dans ce cas, tdd_uxid sera ignoré et tdd_grp_guid pris en compte) 
tdd_grp_guid|uniqueidentifier|Identifiant du groupe d'utilisateurs (dans [security_groupes](generated_security_groupes.md)) 
tdd_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
tdd_parametre|varchar(MAX)|Chaine de configuration passé au batch 
tdd_classe_batch|varchar(250)|Nom totalement qualifié (Namespace.Classe, Assembly) de la classe de détection 
tdd_classe_interactive|varchar(250)|Obsolète 
tdd_ignore|bit|`true` pour que le todo ne soit plus distribué (les colonnes tdd_remise_a_un_groupe, tdd_grp_guid et tdd_uxid seront alors ignoré). Attention, seuls les todo auto-affectés prendront en compte cette option 
tdd_libelle|varchar(250)|Le nom de la tâche 
tdd_pour_mobile|bit|Obsolète 
tdd_details|varchar(MAX)|La description de la tâche 
tdd_categorie|varchar(150)|
tdd_limiter_au_contexte|bit|
tdd_options|varchar(MAX)|

## Remarques
Pour plus de renseignements sur les todo, consultez [la page correspondante : Todo](../articles/gestcom-todo.html)
