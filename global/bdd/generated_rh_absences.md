# E.rh_absences

Absence des employés (congés)

Colonne|Type|Description
---|---|---
abs_guid|uniqueidentifier|Identifiant unique de la demande de congés. 
abs_rjs_id|int|La raison juridique concernée 
abs_emp_guid|uniqueidentifier|Identifiant de l'employé. 
abs_type|char|Le type de congés peut-être: - cngpn : congés payés normaux - cngef: congés exceptionnels pour événement familial - cngss: congés sans solde - cngof: congés offerts (les demande de congés offerts ne peut être faites que par l'employeur)  
abs_date_debut|datetime|Premier jour de congés de la période demandée. 
abs_date_fin|datetime|Dernier jour de congés de la période demandée. 
abs_compte|int|Total des jours ouvrés de la période de congés demandée (jour de weekend et jours fériés exclus) 

## Remarques
Une ligne correspond à une demande de congés qui doit être validé ou refusé par l'employeur.
