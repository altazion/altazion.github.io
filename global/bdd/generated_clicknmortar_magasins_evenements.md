# E.clicknmortar_magasins_evenements

Contient les évènements magasins (ouvertures/fermetures exceptionnelles par exemple)

Colonne|Type|Description
---|---|---
evm_guid|uniqueidentifier|L'identifiant de l'évènement 
evm_rjs_id|int|La raison juridique concernée 
evm_mag_guid|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou dans [pos_magasins](generated_pos_magasins.md)) 
evm_date|datetime|La date de l'évènement 
evm_categorie|varchar(10)|La catégorie de l'évènement (`OUVERT`, 'FERME' …) 
evm_libelle|varchar(500)|Le nom de l'évènement 
evm_description_html|varchar(MAX)|La description de l'évènement 
evm_est_archive|bit|`true` si l'évènement est archivé 
evm_evc_guid|uniqueidentifier|L'identifiant de l'évènement cross-canal si cet évènement magasin en est une instance. 
evm_ouverture_exceptionnelle|varchar(100)|Horaires d'ouverture si l'évènement est une ouverture 
