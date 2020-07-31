# E.clicknmortar_magasins

Contient les informations des magasins pouvant servir à afficher un storelocator

Colonne|Type|Description
---|---|---
mag_guid|uniqueidentifier|L'identifiant du magasin 
mag_rjs_id|int|La raison juridique concernée 
mag_libelle|nvarchar(400)|Le nom du magasin 
mag_adresse|nvarchar(MAX)|L'adresse du magasin 
mag_cp|nvarchar(40)|Le code postal du magasin 
mag_ville|nvarchar(400)|La ville du magasin 
mag_pay_pk|char|Le code pays (dans [params_pays](generated_params_pays.md)) du magasin 
mag_zone|varchar(50)|La zone géographique (région, département) du magasin. Spécifique à chaque pays 
mag_lattitude|decimal(9,5)|La latitude du magasin 
mag_longitude|decimal(9,5)|La longitude du magasin 
mag_tel|varchar(20)|Le numéro de téléphone public du magasin 
mag_fax|varchar(20)|Le numéro de fax public du magasin 
mag_code|varchar(20)|Le code magasin 
mag_message_clients|nvarchar(MAX)|Message d'accueil à afficher aux clients sur la fiche du magasin 
mag_dates_ouverture_1|varchar(50)|Dates d'ouvertures 
mag_dates_ouverture_2|varchar(50)|Dates d'ouvertures 
mag_dates_ouverture_3|varchar(50)|Dates d'ouvertures 
mag_url_site_specifique|varchar(500)|Url vers le site du magasin si il a un site spécifique 
mag_mag_guid_in_pos|uniqueidentifier|[Obsolète] 
mag_source_mortarapp|bit|`true` si le magasin est associé aux commandes cross-canal 
mag_ips|varchar(500)|Les adresses Ips connues du magasin, séparées par des virgules ou point virgules 
mag_pge_guid_home|uniqueidentifier|Guid de la home page (dans [ecommerce_pages](generated_ecommerce_pages.md)) du mini-site magasin 
mag_type_pages|char|
mag_pin_code|varchar(25)|
mag_domain_name|varchar(250)|
mag_uxid_delegation|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
mag_uxid_contacttech|uniqueidentifier|L'identifiant de l'utilisateur (dans [security_utilisateurs](generated_security_utilisateurs.md)) 
mag_est_archive|bit|`true` si le magasin est archivé 
mag_anonymous_user|varchar(500)|[Obsolète, ne plus utiliser] 
mag_anonymous_pwd|varchar(500)|[Obsolète, ne plus utiliser] 
mag_sit_pk|int|L'identifiant du site du magasin 
mag_accepte_enlevement|bit|'true' si le magasin accepte la e-réservation  
mag_est_point_livraison|bit|'true' si le magasin est un point de livraison en magasin 
mag_responsable_emp_guid|uniqueidentifier|
mag_responsable_emp_publication|bit|
mag_responsable_nom|varchar(200)|Le nom du responsable du magasin 
mag_responsable_email|varchar(200)|L'adresse email du responsable du magasin 
mag_reponsable_tel|varchar(50)|Le numéro de téléphone du responsable du magasin 
mag_email|varchar(200)|L'adresse email du magasin 
mag_ptn_guid|uniqueidentifier|L'identifiant du partenaire lié au magasin (dans le cadre d'un magasin franchisé) 
mag_type|varchar(5)|Le type de magasin (Franchisé ou Intégré) 
