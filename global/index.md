# Etendre la solution

Les possibilités d'extension de la solution sont très différentes selon le fait que vous utilisiez nos outils en mode SaaS (hébergés par nos soins) ou OnPremise (installés sur vos serveurs)

## On Premise

A la différence du mode SaaS/Cloud, il est possible d'ajouter des personnalisations "codées" dans notre solution Cloud. En complément des solutions d'extensibilité utilisables en mode Cloud, il est aussi possible d'écrire des extensions sous forme de classes .net et d'utiliser [l'inversion de contrôle et l'injection de dépendance](https://medium.com/ividata-link/c-linjection-de-dépendances-di-et-l-inversion-de-contrôle-ioc-48dbe76cff6b) pour insérer du code personnalisé dans l'application. 

Ce mode d'extensibilité vous permet une plus grande liberté, mais vous demandera, aussi, de connaître plus en détail la solution : si votre traitement est incorrect, vous pourrez engendrer erreurs et instabilité.

Si vous n'êtes pas familier avec l'inversion de contrôle, le principe en est assez simple : dans de très nombreux endroits de notre solution, nous avons mis en place la possibilité pour vous d'écrire un "plug-in", sous la forme d'une interface à implémenter, pour que vous puissiez remplacer le comportement standard de la solution. 

Par exemple, lors de l'ajout au panier d'un article dans le module Commerce, nous effectuons une vérification de disponibilité du produit pour savoir quelle quantité maximale peut être commandé. Ce traitement a un comportement par défaut qui effectue une vérification dans la base de données. Toutefois, vous pouvez implémenter l'interface :

    ICheckStock

### Paths importants

La solution possède deux paths "importants" en configuration OnPremise :
- le(s) dossier(s) où se trouvent installés les différents modules de l'application (en règle générale : %ProgramFiles%\simplement-e\apps\{nom du module})
- le dossier sous lequel sera regroupé toutes les informations de configuration, et les fichiers spécifique à l'instance de la solution (en règle générale %ALLUSERSPROFILE%\Cpoint\[e]).

Le dossier se trouvant dans %ALLUSERSPROFILE% permet de configurer et personnaliser l'application, là où le dossier se trouvant sous %Program Files% contient notre applicatif "éditeur". 

#### Dossier extensibilité client

Lorsque vous développez des extensions, vous devez les  : 

**$ROOTEXTFOLDER$** = %ALLUSERSPROFILE%\Cpoint\[e]\ext

> [!NOTE]
> Le dossier `ext` peut être défini dans un autre emplacement en modifiant la configuration, si vous souhaitez, par exemple, placer un environnement de tests et un environnement de production sur le même serveur. Contactez notre service de support pour plus d'informations.

Les dossiers suivent un principe de découpage par module :

Module|Chemin 
---|---
Serveur Gestion commerciale | **$ROOTEXTFOLDER$**\services 
Serveur e-commerce | **$ROOTEXTFOLDER$**\ecommerce 
Serveur logistique | **$ROOTEXTFOLDER$**\logistique 
Serveur caisses / phygital | **$ROOTEXTFOLDER$**\POSCentral 
