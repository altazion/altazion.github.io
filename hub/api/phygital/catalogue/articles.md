# Articles

[!include[avis](articles.avis.autogen.md)]

[!include[configurationcatalogue](articles.configurationcatalogue.autogen.md)]

[!include[disponibilites](articles.disponibilites.autogen.md)]

[!include[fichearticle](articles.fichearticle.autogen.md)]

### Remarques fiches produits

Les attributs (propriétés  `Attributs` et `AttributsPrives`) ne vous donnent pas les noms des attributs : la clef est un guid. Si vous souhaitez afficher le nom de l'attribut, vous devrez le matcher avec la liste Attributes de l'objet de configuration du catalogue.

La liste Instances contient toutes les déclinaisons connues du produit, si celui-ci est un article générique. Pour chaque instance, vous trouverez les attributs "différentiants" (c'est à dire tout ceux qui sont, à priori, différents d'une instance à l'autre) dans les propriétés `Attributs` et `AttributsPrives`.

Les propriétés `DisponibleCentrale`, `DisponibleMagasin` vous permettent de connaitre la disponibilité du produit en stock central et dans le magasin associé à votre device/panier.

La propriété `DisponibleCommande` est à true si le produit peut être ajouté au panier, dans le cas contraire, tout appel à la méthode Add du panier vous retournera une erreur.

[!include[fichearticleauhasard](articles.fichearticleauhasard.autogen.md)]

cf. ci-dessus pour les remarques

[!include[fichearticledepublie](articles.fichearticledepublie.autogen.md)]

cf. ci-dessus pour les remarques

[!include[imageprincipale](articles.imageprincipale.autogen.md)]

[!include[marques](articles.marques.autogen.md)]

[!include[obtenirquick](articles.obtenirquick.autogen.md)]

### Remarques obtenir infos principales

Dans l'objet de retour : 
- Les propriétés `DisponibleCentrale`, `DisponibleMagasin` vous permette de connaitre la disponibilité du produit en stock central et dans le magasin associé à votre device/panier.
  
- La propriété `DisponibleCommande` est à true si le produit peut être ajouté au panier, dans le cas contraire, tout appel à la méthode Add du panier vous retournera une erreur.

[!include[recherche](articles.recherche.autogen.md)]

### Remarques recherche

Le paramètre {facet} est le plus complexe à utiliser. Il s'agit d'une concaténation des différents critères de recherche (séparés par des virgules) à appliquer à la descente produit. Par exemple, l'appel :

    /v2/catalogue/search/segpk=255,FA0811C4EEF14F8D879CB8B9CE823027=true/0/25

lance une recherche dans la catégorie d'identifiant 255 et pour les produits dont l'attribut d'id FA0811C4EEF14F8D879CB8B9CE823027 est à true.

Vous pouvez obtenir les valeurs de ces différents critères à partir de la propriété SearchFacetValue de chaque valeur de facette possible.

Les différents critères possibles sont :
|Paramètre|Utilisation|
|---|---|
|keywords=...|Permet d'effectuer une recherche "fulltext". Les différents mots clefs à recherchés doivent être séparés par des espaces.
|vitguid=...|Permet d'effectuer une recherche dans une sélection produit (un vitrine) comme par exemple le top des ventes, ou les nouveautés. L'id d'une selection se présente sous la forme d'un uniqueidentifier
|marpk=...|Permet de lancer une recherche par marque
|segpk=...|Permet d'effectuer une recherche par catégorie (segment)
|{att}={val}|Permet de lancer une recherche sur l'attribut {att} pour les articles ayant la valeur d'attribut {val}

Dans les objets de retour : 

Les propriétés *DisponibleCentrale*, *DisponibleMagasin* vous permette de connaitre la disponibilité du produit en stock central et dans le magasin associé à votre device/panier.

La propriété *DisponibleCommande* est à true si le produit peut être ajouté au panier, dans le cas contraire, tout appel à la méthode `Add` du panier vous retournera une erreur.

### Exemple

``` http
GET http://miam-miam.demo-e-phygital.fr/v2/catalogue/search/segpk%3D4/0 HTTP/1.1 
Authorization: bearer MT.....== 
UserAgent: DemoApp 
Accept: application/json 
E_AppId: DemoApp 
Host: miam-miam.demo-e-phygital.fr 
```

``` json
{
  "Recherche": {
    "Criteres": [],
    "Segmentations": [
      {
        "Id": 4,
        "Level": 0,
        "ParentId": null,
        "Label": null,
        "Code": null,
        "Count": 0
      }
    ],
    "Marques": [],
    "Keywords": [],
    "VitrineGuid": null,
    "OriginalRequest": "segpk=4"
  },
  "Criteres": [
    {
      "Libelle": "Segmentation",
      "Code": "segpk",
      "CodeInterne": "segpk",
      "AutoriseMultiValeur": false,
      "TypeCritere": 1,
      "ValeursEnumerees": [
        {
          "Groupe": null,
          "Comptage": 34,
          "Libelle": "Gâteaux",
          "CodeInterne": "segpk=4",
          "Critere": "segpk",
          "Valeur": "4",
          "Importance": 0,
          "Min": null,
          "Max": null
        }
      ]
    },
    {
      "Libelle": "Marque",
      "Code": "marpk",
      "CodeInterne": "marpk",
      "AutoriseMultiValeur": false,
      "TypeCritere": 1,
      "ValeursEnumerees": [
        {
          "Groupe": null,
          "Comptage": 1,
          "Libelle": "Leonidas",
          "CodeInterne": "marpk=3681",
          "Critere": "marpk",
          "Valeur": "3681",
          "Importance": 0,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 1,
          "Libelle": "Kinder",
          "CodeInterne": "marpk=3683",
          "Critere": "marpk",
          "Valeur": "3683",
          "Importance": 0,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 1,
          "Libelle": "Solinest",
          "CodeInterne": "marpk=3686",
          "Critere": "marpk",
          "Valeur": "3686",
          "Importance": 0,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 1,
          "Libelle": "Malabar",
          "CodeInterne": "marpk=3687",
          "Critere": "marpk",
          "Valeur": "3687",
          "Importance": 0,
          "Min": null,
          "Max": null
        }
      ]
    },
    {
      "Libelle": "Saveur",
      "Code": "866ea818d711468099cf9d57cab392ff",
      "CodeInterne": "866ea818d711468099cf9d57cab392ff",
      "AutoriseMultiValeur": false,
      "TypeCritere": 1,
      "ValeursEnumerees": [
        {
          "Groupe": null,
          "Comptage": 1,
          "Libelle": "Café",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000007",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000007",
          "Importance": 100,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 2,
          "Libelle": "Vanille",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000012",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000012",
          "Importance": 100,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 2,
          "Libelle": "Fraise",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000015",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000015",
          "Importance": 100,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 2,
          "Libelle": "Différentes saveurs",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000016",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000016",
          "Importance": 100,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 3,
          "Libelle": "Fruits rouges",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000010",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000010",
          "Importance": 100,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 3,
          "Libelle": "exotique",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000013",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000013",
          "Importance": 100,
          "Min": null,
          "Max": null
        },
        {
          "Groupe": null,
          "Comptage": 8,
          "Libelle": "Chocolat",
          "CodeInterne": "866ea818d711468099cf9d57cab392ff=00000000000000000000000000000006",
          "Critere": "Saveur",
          "Valeur": "00000000-0000-0000-0000-000000000006",
          "Importance": 100,
          "Min": null,
          "Max": null
        }
      ]
    }
  ],
  "Articles": [
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/5d9974f824454f43843e50a64811fbb3/PIECEMONTE.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/9f4f080486b14266af088ec274a30307/small_PIECEMONTE.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62360,
      "Guid": "735a2335-bbb1-4961-a6e0-b6d6ce336c1c",
      "PuHT": 80,
      "PuTTC": 88,
      "PuPromoHT": null,
      "PuPromoTTC": null,
      "DateDebutPromo": null,
      "DateFinPromo": null,
      "Libelle": "Pièce montée",
      "Reference": "000032",
      "Description": "<p>Une pi&egrave;ce mont&eacute;e unique et personnalisable &agrave; souhaits, couleurs, go&ucirc;t, formes, marquage, rev&ecirc;tements : vous avez le choix ! Diff&eacute;rentes dimensions, tout est &agrave; votre disposition. Vous n'avez plus qu'&agrave; d&eacute;guster.</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": 81.82,
      "PuConseilleTTC": 90,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/e6493879b31244459fb1ec5809fb411f/DELICHOCO.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/2fcea7884b43453aac4102e992d185c0/small_DELICHOCO.jpg",
      "Tag": "MisEnAvant2",
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62319,
      "Guid": "7cd0d67e-68af-42b5-8212-4c8dc1107132",
      "PuHT": 18.14,
      "PuTTC": 19.95,
      "PuPromoHT": 14.51,
      "PuPromoTTC": 15.96,
      "DateDebutPromo": "2015-09-28T00:00:00",
      "DateFinPromo": "2015-12-13T00:00:00",
      "Libelle": "Délice au chocolat",
      "Reference": "000001",
      "Description": "<p>Petit pal&eacute;e craquant sur son lit de mousses intenses au chocolat, ravira tous les grand amateurs qui ne pourront c&eacute;der &agrave; l'harmonie de ces deux saveurs</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": 19.95,
      "PuConseilleTTC": 21.95,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/c1c99144260a45c4bc757b00bf01fbce/TARTEFRAISES.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/11b2ae8a7b01435b874aa2e6a5b126b5/small_TARTEFRAISES.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62366,
      "Guid": "4570dae0-d53a-47be-8bcc-360aa06247c3",
      "PuHT": 18.01,
      "PuTTC": 19,
      "PuPromoHT": 16.21,
      "PuPromoTTC": 17.1,
      "DateDebutPromo": "2015-10-06T00:00:00",
      "DateFinPromo": "2015-10-28T00:00:00",
      "Libelle": "Tarte aux fraises",
      "Reference": "000037",
      "Description": "<p>Tarte aux fraises exquises avec sa p&acirc;te sabl&eacute;e.</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": null,
      "PuConseilleTTC": null,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/750167c2f5554b26be6badb5821565b5/Gros Gateaux  A.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/5cbb2fa0e3044723abf44c7a2be155a2/small_Gros Gateaux  A.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62373,
      "Guid": "d1a5fdc8-e11c-4482-b0df-9f6711bcb837",
      "PuHT": 15.17,
      "PuTTC": 16,
      "PuPromoHT": null,
      "PuPromoTTC": null,
      "DateDebutPromo": null,
      "DateFinPromo": null,
      "Libelle": "Gateaux aux amandes ",
      "Reference": "000040",
      "Description": "<p>G&acirc;teaux aux &eacute;clats d&rsquo;amandes, douceur et l&eacute;g&egrave;ret&eacute; sont d&rsquo;actualit&eacute;. Soup&ccedil;ons de fraise des bois pour son cot&eacute; fruit&eacute;. A partager</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": null,
      "PuConseilleTTC": null,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": "Solinest",
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/f08c51f6f74e43ba8ab2f41e46c6064b/CESAR.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/b176388130c14e2cb25f0faa189889ce/small_CESAR.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62359,
      "Guid": "866c6628-c2c6-4f3a-be31-7925fd38a1b0",
      "PuHT": 14.22,
      "PuTTC": 15,
      "PuPromoHT": 11.38,
      "PuPromoTTC": 12,
      "DateDebutPromo": "2015-09-28T00:00:00",
      "DateFinPromo": "2015-12-13T00:00:00",
      "Libelle": "Le césar ",
      "Reference": "000031",
      "Description": "<p>D&eacute;licieux biscuit craquant saveur pistache encadr&eacute; d'une mousse de p&ecirc;ches et d'une mousse au nougat : ce sublime m&eacute;lange d'exotisme ravira tous les gourmets.</p>",
      "MarqueId": 3686,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": 12,
      "PuConseilleTTC": 12.66,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/3c96927605e541678aa1584d494cf28f/PARISBREST.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/cc806b2879164abba1f7a25304c8978e/small_PARISBREST.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62350,
      "Guid": "c39fc723-38a4-4f76-b93b-293e09ee9f77",
      "PuHT": 13.27,
      "PuTTC": 14,
      "PuPromoHT": null,
      "PuPromoTTC": null,
      "DateDebutPromo": null,
      "DateFinPromo": null,
      "Libelle": "Paris-brest",
      "Reference": "000024",
      "Description": "<p>Le paris-brest est v&ecirc;tue d&rsquo;une cr&egrave;me pralin&eacute;-noisettes et ses petits &eacute;clats de noisettes le tout recouvert d'une bonne p&acirc;te &agrave; choux. Un douceur extr&ecirc;me !</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": null,
      "PuConseilleTTC": null,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/9e076e9698cb48b595c57e991fac9234/trio de chocolat.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/805232bb9ad048a5839e7a3f36bd1759/small_trio de chocolat.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62364,
      "Guid": "919abafb-2ae7-4281-9a2e-6898b5572cb6",
      "PuHT": 13.26,
      "PuTTC": 13.99,
      "PuPromoHT": null,
      "PuPromoTTC": null,
      "DateDebutPromo": null,
      "DateFinPromo": null,
      "Libelle": "Trio de chocolats",
      "Reference": "000035",
      "Description": "<p>Mousse d&eacute;licate, aux trois chocolats, un plaisir &agrave; partages en familles, en amis, ou m&ecirc;me avec ses coll&egrave;gues</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": null,
      "PuConseilleTTC": null,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": null,
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/ebc2adc605444ebabac4874817d86868/CAFEARABICA.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/cd117619d2e84e9cacf9be6a737bfdf5/small_CAFEARABICA.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62352,
      "Guid": "811298f7-b69f-499d-a12d-f7e015641f70",
      "PuHT": 12.31,
      "PuTTC": 12.99,
      "PuPromoHT": 9.85,
      "PuPromoTTC": 10.39,
      "DateDebutPromo": "2015-09-28T00:00:00",
      "DateFinPromo": "2015-12-13T00:00:00",
      "Libelle": "Café arabica",
      "Reference": "000026",
      "Description": "<p>Un g&eacute;n&eacute;reux g&acirc;teau aux extraits naturels de caf&eacute; arabica. Ses ar&ocirc;mes cors&eacute;s et intenses, ses grains de caf&eacute; et son c&oelig;ur coulant vous feront fondre.</p>",
      "MarqueId": -1,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": null,
      "PuConseilleTTC": null,
      "MetaType": 0
    },
    {
      "IntermediateImage": null,
      "Marque": "Leonidas",
      "SegmentationPrincipalePk": 4,
      "MainImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/1d69b120aebc485cacffacfbf321e0ab/CANELLE.jpg",
      "SmallImage": "https://simplementedata.blob.core.windows.net/data-miam-2/Catalogue/433364e014cf48ad9c4fda3e4af6b6bb/small_CANELLE.jpg",
      "Tag": null,
      "DisponibleCommande": true,
      "DisponibleCentrale": true,
      "DisponibleMagasin": true,
      "TypeStockage": 0,
      "EstArchive": false,
      "EstLivrable": true,
      "ID": 62341,
      "Guid": "b3f29504-98a2-4911-8de3-5ab829a82503",
      "PuHT": 4.54,
      "PuTTC": 4.99,
      "PuPromoHT": 4.09,
      "PuPromoTTC": 4.49,
      "DateDebutPromo": "2015-10-06T00:00:00",
      "DateFinPromo": "2015-10-28T00:00:00",
      "Libelle": "Cannelés",
      "Reference": "000017",
      "Description": "<p>Petit g&acirc;teau individuel &agrave; p&acirc;te molle et tendre, parfum&eacute; d'un zeste de rhum et de vanille,recouvert d'une &eacute;paisse cro&ucirc;te caram&eacute;lis&eacute;e. Croquant &agrave; l'ext&eacute;rieur et fondant &agrave; l'int&eacute;rieur, m&eacute;lange sublime, pour r&eacute;veiller vos papilles.</p>",
      "MarqueId": 3681,
      "EstUtilisableInternet": false,
      "EstMultiversion": false,
      "EstGenerique": false,
      "EstCompose": false,
      "PuConseilleHT": 5,
      "PuConseilleTTC": 5.5,
      "MetaType": 0
    }
  ],
  "NombreTotalArticles": 34,
  "IndexDebutRecherche": 0
}
```

[!include[suggestionsrecherche](articles.suggestionsrecherche.autogen.md)]

[!include[versionsdeclinaisons](articles.versionsdeclinaisons.autogen.md)]











