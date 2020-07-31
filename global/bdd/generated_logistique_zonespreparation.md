# E.logistique_zonespreparation

Contient les zones de préparation

Colonne|Type|Description
---|---|---
zpr_guid|uniqueidentifier|L'identifiant de la zone de préparation 
zpr_libelle|varchar(250)|Le nom de la zone de préparation 
zpr_nom_court|varchar(50)|Le code/nom court de la zone 
zpr_est_par_defaut|bit|`true` pour la zone par défaut 
zpr_est_active|bit|`false` pour archiver la zone 
zpr_delai_en_j|int|Délai de préparation en jours ouvrés pleins (0 pour une préparation dans la journée, 1 pour une préparation d'ici demain soir, etc.) 
zpr_rjs_id|int|La raison juridique concernée 
zpr_nom|varchar(250)|Contient la partie "nom" de l'adresse physique de la zone de préparation 
zpr_adresse|varchar(MAX)|Adresse de la zone de préparation 
zpr_cp|varchar(20)|Code postal de l'adresse de la zone 
zpr_ville|varchar(250)|Ville de l'adresse de la zone 
zpr_pay_pk|char|Identifiant du pays (dans [params_pays](generated_params_pays.md))  de l'adresse de la zone 
zpr_tel|varchar(30)|Numéro de téléphone de contact de la zone 
zpr_email|varchar(150)|Email de contact de la zone 
