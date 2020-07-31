# E.logistique_planning

Contient les exceptions de planing pour une zone de préparation

Colonne|Type|Description
---|---|---
pln_guid|uniqueidentifier|L'identifiant de l'item de planing 
pln_date|datetime|La date 
pln_zpr_guid|uniqueidentifier|La zone de préparation concernée 
pln_pct_fonctionnement|smallint|Le %age de service par rapport à une journée "normale" (cf. remarques) 
pln_sans_enlevement|bit|`true` si la journée est normalement travaillée pour la préparation mais n'est pas une journée d'enlèvement par les transporteurs. 

## Remarques
Cette table permet de définir les jours où la préparation ne respecte pas le quota habituel. Par exemple, un jour de fermeture (férié, week-end, etc.) devra être présent dans cette table avec un pourcentage de fonctionnement à 0. Une journée continue de préparation pourra, elle, avoir un pourcentage de fonctionnement > 100%
