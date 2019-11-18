# Personnaliser un site e-commerce



## Architecture des pages

Comme toute application basée sur la techno WebForms, les pages du site e-commerce sont composées de plusieurs éléments :

- un "modèle", appelé MasterPage, qui contient tous les éléments communs à l'ensemble des pages 
- la page en elle même qui contient le code spécifique
- un ensemble de contrôles qui permettent de réutiliser du code.

### Masterpage



### Contrôles

Le module e-commerce étant basé sur WebForms, il contient de nombreux contrôles, dans le namespace `CPointSoftware.ECommerce.Tools` qui sont à utiliser pour afficher des données dynamiques, provenant de la base de données ou d'un calcul serveur. Ces controles sont à "simplement" poser dans le code source de la page. 

Par exemple, le code suivant ajoute un controle qui affiche une liste de 10 produits venant d'une "vitrine" (une sélection de produits) :
 ``` HTML
<div class="leftCol">
    <ecom:VitrinesListeProduits 
        ID="listeVitrine" runat="server" 
        CodeVitrine="CODEVITRINE"
        ProductTemplateSkinID="ProduitSurLaHome"
        NombreArticles="10" TypeAffichage="Flux" />
</div>
```

Les contrôles spécifiques à la solution ecommerce sont regroupé sous le prefixe <ecom:... /> (là où les contrôles standard ASP.net sont sous <asp:... />). Vous trouverez une liste des éléments disponibles [dans la partie "contrôles e-commerce" de la référence de classe](../ecommerce/index.md). 

>[!Warning]
Certains contrôles ont des conditions d'utilisations spécifiques qui sont décrit dans la documentation du contrôle.

### Pages standards

path|description
---|---
/default.aspx|La home page générale du site

## Contenu personnalisable

### Publicités



### Espaces SEO

Les espaces SEO sont des emplacements personnalisables dans vos pages qui, à la différences ces publicités ci-dessus, ne sont pas destinés à être modifiés en fonction d'un planning commercial. On peut par exemple retrouver dans ces emplacements un contenu de footer, de la rassurance, des contenus spécialisés dans le référencement, etc.
Pour déclarer un emplacement SEO, vous devez l'insérer dans le fichier de thème (cf. ci-dessous) et l'intégrer dans vos fichiers de personnalisations.

Prenons comme exemple un espace de bas de page destiné à fournir des informations sur votre société :

``` HTML
<p>
    <ecom:SeoContent runat="server" 
      CodeEmplacement="DescSocieteFooter"  />
</p>
```

En complément de l'ajout dans vos fichiers de personnalisations .skin, vous devez déclarer l'emplacement dans votre fichier de thème, sous la forme :

``` XML
<Theme xmlns="http://simplement-e.com/ecommerce/theme/theme.xsd">
...
  <Seo>
    <Emplacement code="DescSocieteFooter" 
        libelle="Bloc de description de la société">
      <SurTypePage type="Page" />
    </Emplacement>
    ....
  </Seo>
...
</Theme>
```

## Themes

La personnalisation de l'aspect général d'un site e-commerce se fait via la création d'un thème.  Comme le module e-commerce est basé, plus ou moins, sur asp.net webforms, la création d'un thème se base sur les "skins" de cette technologie. Pour définir l'apparence d'un site, il "suffit" de :

- créer un ensemble de .skin personnalisant la présentation du contenu
- ainsi que les css et les js correspondants
- ajouter d'éventuels controles personnalisés spécifiques
- compléter le tout par un fichier de description et des images illustrant le thème

### Skins

Il est assez simple de modifier l'apparence d'un site en utilisant un ensemble de fichier .skin dans lequel vous pouvez placer des apparences "remplaçant" celles présentes dans les différentes pages.

Si l'on prend une page telle que la home, son contenu par défaut est extrêmement réduit : 

 ``` XML
<asp:Content ContentPlaceHolderID="BeforeContent" 
runat="server" ID="BeforeContent1">
    <ecom:ThemablePanelControl 
        ID="ThemablePanelControl1" runat="server" SkinID="HomePageBeforeContent">
    </ecom:ThemablePanelControl>
</asp:Content>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManagerProxy 
        ID="ScriptManagerProxy1" runat="server">
    </asp:ScriptManagerProxy>
    <ecom:ThemablePanelControl runat="server" 
        SkinID="HomePagePanel" ID="HomePagePanel">
        <Content>
            <!-- placez le contenu de votre home ici -->
        </Content>
    </ecom:ThemablePanelControl>
</asp:Content>

<asp:Content 
    ContentPlaceHolderID="AfterContent" runat="server" ID="Content2">
    <ecom:ThemablePanelControl 
        ID="ThemablePanelControl2" 
        runat="server" SkinID="HomePageAfterContent">
    </ecom:ThemablePanelControl>
</asp:Content>
```

Pour placer du contenu dans cette page via un fichier skin, il faut reprendre le contrôle de type `<ecom:ThemablePanelControl />` et de l'utiliser dans un fichier .skin (si le contrôle d'origine a un `ID`, vous devrez l'omettre dans ce fichier). Par exemple :

Fichier `home.skin` :

 ``` XML
<ecom:ThemablePanelControl runat="server" 
    SkinID="HomePagePanel">
    <Content>
        <div class='home-main-pub'>
            <ecom:CampagnePublicite runat="server"
                TypeOperation="CARROUS"  />
        </div>
    </Content>
</ecom:ThemablePanelControl>
```

Pour connaitre les noms des différentes zones personnalisables, il vous faudra regarder dans le fichier `.aspx` que vous souhaitez personnaliser. Tous les contrôles portant un SkinID sont personnalisables de façon spécifique. 

A l'intérieur de ces personnalisations, vous pouvez poser : 
- du code HTML simple
- des contrôles WebForms
- des contrôles spécifiques au module e-commerce
- des controles personnalisés (`.ascx`)

#### Apparence des pages

Page | Détails
---|---
[MasterPage](personnalisation/ecommerce-masterpage.md)|Contient les éléments communs à toutes les pages (header et footer par exemple)
[Home](personnalisation/ecommerce-homepage.md)|La page d'accueil du site
[Descente](personnalisation/ecommerce-descente.md)|Les pages de listes de produits (descentes multi-facettes, recherches, etc.)
[Fiche produit](personnalisation/ecommerce-ficheproduit.md)|La fiche produit
Panier|
Login|
Confirmation Commande|
Recu Commande|
Espace Client|
Suivi Commandes|


#### Apparence multiples pour les produits

Il existe plusieurs emplacements où il est possible d'avoir une liste de produits :

1. dans la descente / page de recherche
2. dans un bloc d'affichage d'une selection

Pour pouvoir définir des affichages différents en fonction de où se trouve affichés ces produits, il suffit de créer plusieurs templates en leur donnant des noms de `SkinID` différents. cf. [Personnaliser les affichages des produits](personnalisation/ecommerce-descente.md)

Le même principe est utilisé pour créer des modèles de fiches produits.

### CSS

### Javascript

### Contrôles personnalisés

### Fichier de thème

#### Emplacements SEO

Pour définir un emplacement utilisables dans les blocs SEO, vous devez :
- dans le fichier de thème, décrire les différents emplacements et leur cas d'utilisation
- positionner dans la (ou les pages) correspondantes, le contrôle 

``` xml
<Seo>
    <Emplacement code="DESCBLOCHOME" libelle="Emplacement description sur la home">
      <SurTypePage type="Page" />
    </Emplacement>
</Seo>
```

Le `code` sera à réutiliser dans le contrôle d'affichage et doit être unique. Vous devez ensuite définir sur quel(s) type(s) de pages le contrôle peut s'afficher, vous pouvez utiliser :
- `Descente` pour les pages de recherches et de descentes produits. La configuration du contenu se fera, dans ce cas, dans la partie "SEO"
- `Article` pour une fiche produit, vous devrez saisir les informations de ces blocs, directement dans les pages d'édition e-commerce de chaque produit
- `Home` : pour affichage uniquement sur la HomePage
- `Page` : pour un bloc qui sera affiché sur toutes les pages incluant le tag (utilisez cette valeur si vous souhaitez positionner le contrôle sur toutes les pages)