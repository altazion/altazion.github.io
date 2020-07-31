# E.pos_commandesinternes

Cette table contient les commandes de type "inter-structures"

Colonne|Type|Description
---|---|---
cin_guid|uniqueidentifier|
cin_rjs_id|int|La raison juridique concernée 
cin_mag_guid_demandeur|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou [pos_magasins](generated_pos_magasins.md)) ayant effectué la demande. `Guid.Empty` dans le cadre d'une commande envoyée en magasin par la centrale. 
cin_mag_guid_destinataire|uniqueidentifier|L'identifiant du magasin (dans [clicknmortar_magasins](generated_clicknmortar_magasins.md) ou [pos_magasins](generated_pos_magasins.md)) destinataire de la commande 
cin_date|datetime|La date de la commande 
cin_numero|varchar(50)|Le numéro de la commande 
cin_montant_ht|decimal(18,2)|Le montant HT de la commande 
cin_montant_ttc|decimal(18,2)|Le montant TTC de la commande 
cin_etat_rails|char|L'état de progression de la commande 
cin_est_annule|bit|`true` si la commande est annulée 
cin_nom_client|varchar(500)|Le nom du client 
cin_adresse_client|varchar(MAX)|L'adresse du client 
cin_tel_client|varchar(MAX)|Le téléphone du client 
cin_email_client|varchar(250)|L'email du client 
cin_uxid_demandeur|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) qui a lancé la commande 
cin_commentaires|varchar(MAX)|Les commentaires associés à la commande 
cin_resultat_rail_1|varchar(250)|Le code du résultat du rail 1 
cin_resultat_rail_2|varchar(250)|Le code du résultat du rail 2 
cin_resultat_rail_3|varchar(250)|Le code du résultat du rail 3 
cin_resultat_rail_4|varchar(250)|Le code du résultat du rail 4 
cin_date_rail_1|datetime|La date de traitement du rail 1 
cin_date_rail_2|datetime|La date de traitement du rail 2 
cin_date_rail_3|datetime|La date de traitement du rail 3 
cin_date_rail_4|datetime|La date de traitement du rail 4 
cin_est_valide|bit|`true` si la commande est valide, `false` si elle est encore en cours d'enregistrement 
cin_montant_ttc_suppl|decimal(18,2)|Le montant supplémentaire TTC (pour statistiques) des produits achetés par le client lorsqu'il est venu retirer cette commande 
cin_montant_ht_suppl|decimal(18,2)|Le montant supplémentaire HT (pour statistiques) des produits achetés par le client lorsqu'il est venu retirer cette commande 
cin_cli_guid|uniqueidentifier|L'identifiant du client (dans [gestcom_clients](generated_gestcom_clients.md)) 
cin_region_client|varchar(250)|La région du client 
cin_cp_client|varchar(25)|Le code postal du client 
cin_ville_client|varchar(250)|La ville du client 
cin_mobile_client|varchar(30)|Le téléphone mobile du client 
cin_tags|varchar(1000)|Une liste de tags associés à la commande, séparés par des | 
cin_raison_annulation|varchar(20)|Code de raison d'annulation 
cin_mode_guest|bit|`true` si cette commande a été placé par un client générique 
cin_type|varchar(150)|Le type de commande interne 

## Remarques
Pour plus d'informations sur les différents type de commandes, consultez la documentation publique ou la page sur Orchestrator.
