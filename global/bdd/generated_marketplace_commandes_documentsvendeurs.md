# E.marketplace_commandes_documentsvendeurs

Contient les documment relatif à une commande pour un partenaire 

Colonne|Type|Description
---|---|---
mcd_guid|uniqueidentifier|L'identifiant du document de commande  
mcd_rjs_id|int|La raison juridique concernée 
mcd_ptn_guid|uniqueidentifier|L'identifiant du partenaire disponible dans la table [gestcom_partenaires](generated_gestcom_partenaires.md) 
mcd_bcd_guid|uniqueidentifier|L'identifiant de la commande (dans [gestcom_bonscommandes](generated_gestcom_bonscommandes.md)) 
mcd_bpr_guid|uniqueidentifier|L'identifiant du bon de préparation (dans [logistique_bonspreparation](generated_logistique_bonspreparation.md)) 
mcd_type|varchar(100)|Le type de document  
mcd_numero|varchar(100)|Le numero  
mcd_url|varchar(MAX)|L'url où récupérer le document 
