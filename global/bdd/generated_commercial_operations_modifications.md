# E.commercial_operations_modifications

Contient les opérations commerciales menant à une modification du catalogue produit, d'un contenu e-commerce (page, emplacement SEO, …), etc.

Colonne|Type|Description
---|---|---
com_guid|uniqueidentifier|L'identifiant de l 
com_rjs_id|int|La raison juridique concernée 
com_type|varchar(50)|Le type d'opération commerciale (cf [opérations commerciales](../articles/gestcom/gestcom-domaine-commercial-operations.md#Modifications)) 
com_vit_guid|uniqueidentifier|L'identifiant de la sélection (dans [catalog_vitrines](generated_catalog_vitrines.md)) 
com_cible_guid|uniqueidentifier|La cible de l'opération (cf. [opérations commerciales](../articles/gestcom/gestcom-domaine-commercial-operations.md#Modifications)) 
com_libelle|nvarchar(300)|Le nom de l'opération 
com_est_active|bit|`true` si l'opération est active 
com_date_debut|datetime|La date de début de l'opération 
com_date_fin|datetime|La date de fin de l'opération 
com_sit_pk|int|L'identifiant du site concerné (dans [params_siteswebs](generated_params_siteswebs.md)) 
com_cmp_guid|uniqueidentifier|L'identifiant de le campagne (dans [commercial_campagnes](generated_commercial_campagnes.md)) dans laquelle cette opération se trouve. 
