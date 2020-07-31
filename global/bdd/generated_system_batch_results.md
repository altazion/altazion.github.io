# E.system_batch_results

Cette table contient le dernier résultat de chaque batch ou traitement asynchrone dont le code demande un suivi.

Colonne|Type|Description
---|---|---
brs_guid|uniqueidentifier|L'identifiant du batch 
brs_rjs_id|int|La raison juridique concernée 
brs_type|varchar(200)|Le type de batch (la plupart du temps, le AssemblyQualifiedName de la classe de batch) 
brs_piece_associee_guid|uniqueidentifier|Le guid de la pièce associée 
brs_date|datetimeoffset|La date de dernière exécution du batch 
brs_result|varchar(MAX)|Le résultat de la dernière exécution 
brs_etat|varchar(100)|

## Remarques
Le contenu de cette table est destiné à plusieurs choses :
- à connaitre la dernière fois qu'un batch a été réalisé (dans le cadre des taskchains par exemple)
- à en connaître le résultat (attention, il n'y a pas de vraie convention pour le contenu de ce résultat, chaque batch determinera pour lui même les information à y stocker)
