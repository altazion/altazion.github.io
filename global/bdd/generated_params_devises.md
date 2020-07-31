# E.params_devises

Contient les différentes devises utilisées.

Colonne|Type|Description
---|---|---
dvs_guid|uniqueidentifier|L'identifiant de la devise 
dvs_rjs_id|int|La raison juridique concernée 
dvs_code|varchar(10)|Le code ISO de la devise 
dvs_symbole|nvarchar(20)|Le symbole à utiliser pour représenter la devise 
dvs_format|nvarchar(60)|Le format à utiliser pour formater des montants dans cette devise. 
dvs_libelle|varchar(200)|Le nom de la devise 
dvs_est_monnaie_princ|bit|`true` pour la devise principale 
dvs_taux_achat_dev_princ|decimal(18,7)|Le taux d'achat de cette de cette devise en fonction de la devise principale 
dvs_taux_vente_dev_princ|decimal(18,7)|Le taux auquel est vendu cette devise en fonction de la devise principale. 
dvs_frais_achats_en_princ|decimal(18,7)|Les frais d'achats complémentaires fixes de cette devise (en montant dans la devise principale) à appliquer une fois à chaque opération de change 
dvs_frais_vente_en_princ|decimal(18,7)|Les frais de ventes complémentaires fixe de cette devise (en montant dans la devise principale) à appliquer une fois à chaque opération de change 
dvs_derniere_maj_taux|datetime|La date de dernier passage du batch de mise à jour des taux. 
