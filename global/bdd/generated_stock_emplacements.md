# E.stock_emplacements

Cette table contient les différents emplacements des dépôts de stock

Colonne|Type|Description
---|---|---
emp_pk|int|L'identifiant de l'emplacement 
emp_rjs_id|int|La raison juridique concernée 
emp_dpt_pk|int|L'identifiant du dépôt (dans [stock_depots](generated_stock_depots.md)) dans lequel cet emplacement se trouve 
emp_code|varchar(20)|Le code de l'emplacement 
emp_libelle|varchar(250)|Le libellé de l'emplacement 
emp_est_archive|bit|`true` si cet emplacement est archivé 
