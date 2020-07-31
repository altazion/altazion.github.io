# E.rh_employes

La table de employés d'un magasin.

Colonne|Type|Description
---|---|---
emp_guid|uniqueidentifier|
emp_rjs_id|int|La raison juridique concernée 
emp_nom_seul|varchar(200)|Nom de famille. 
emp_prenom_seul|varchar(200)|Prénom. 
emp_num_public1|varchar(100)|Numéro de téléphone au nom de l'entreprise. 
emp_num_public2|varchar(100)|
emp_num_public3|varchar(100)|
emp_adresse|varchar(MAX)|Adresse postale de l'employé. 
emp_cp|varchar(20)|Code postale de l'adresse de l'employé. 
emp_ville|varchar(200)|Ville de résidence. 
emp_pay_pk|varchar(3)|Code du pays de résidence (ex: France = FRA ) 
emp_date_entree|datetime|Date de début de contrat de l'employé. 
emp_date_sortie|datetime|Date de fin de contrat. NULL si la fin n'est pas prévue. 
emp_uxid|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
emp_type_affectation|varchar(3)|Endroit de l'entreprise où est affecté l'employé (ex: entrepôt, magasin, siège social etc...) 
emp_mag_guid_affectation|uniqueidentifier|
emp_zmg_guid_affectation|uniqueidentifier|
emp_email_public|varchar(200)|Adresse mail professionnelle. 
emp_email_interne|varchar(200)|Adresse mail personnelle. 
emp_nom_jeunefille|varchar(200)|
emp_tel_interne1|varchar(50)|Numéro de téléphone personnel de l'employé. 
emp_tel_interne2|varchar(50)|
emp_tel_interne3|varchar(50)|
