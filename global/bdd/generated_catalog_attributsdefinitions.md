# E.catalog_attributsdefinitions

Contient les définitions d'attributs personnalisés

Colonne|Type|Description
---|---|---
atd_pk|uniqueidentifier|L'identifiant de l'attribut 
atd_rjs_id|int|La raison juridique concernée 
atd_type|char|Type d'attribut (cf. remarques) 
atd_libelle|nvarchar(100)|Le nom de l'attribut personnalisé 
atd_valeurs_enumerees|bit|`true` si les valeurs de cet attribut sont à choisir dans une liste (les valeurs possibles étant stockées dans [catalog_attributsvaleurs](generated_catalog_attributsvaleurs.md)) 
atd_valeurs_texte|bit|`true` si l'attribut est un attribut de type texte 
atd_valeurs_texte_long|bit|`true` si l'attribut est un attribut de type texte long 
atd_valeurs_boolean|bit|`true` si l'attribut est un attribut de type booléen 
atd_valeurs_decimal|bit|`true` si l'attribut est un attribut de type numérique 
atd_valeurs_date|bit|`true` si l'attribut est un attribut de type date 
atd_url_perso|varchar(200)|Partie de l'url représentant l'attribut dans l'url rewriting en cas d'utilisation en tant que critère 
atd_est_publique|bit|`true` pour que cet article soit marqué comme visible par les clients, `false` pour en faire un attribut à usage interne 
atd_groupe|varchar(150)|Libellé d'un groupe d'attribut pour regroupement dans les écrans 
atd_est_obligatoire|bit|`true` si cet attribut doit être renseigné 
atd_code_externe|varchar(50)|Code externe utilisé dans les imports de données 
atd_tar_pk|int|L'identifiant du type d'article (cans [params_types_articles](generated_params_types_articles.md)) si l'attribut n'est définit que pour un type d'article spécifique 
atd_est_differentiant|bit|`true` si cet attribut est un attribut servant de différentiant entre des versions d'un même article déclinable (par exemple la taille pour des vêtements) 
atd_valeurs_fixes|bit|
atd_recopie_valeur|char|
atd_langues|varchar(200)|Liste des codes langues pour lesquelles cet attribut est utilisable. `null` pour toutes les langues 

## Remarques
Pour en savoir plus, posez la question à Dylan
