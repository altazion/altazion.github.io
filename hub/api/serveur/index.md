# API Serveur

L'API "Serveur à Serveur" est destinée à être utilisée dans des applications réalisant des opérations non associées à un utilisateur, par exemple :

- l'import / export de données
- l'intégration d'un service externe tel que livraison, gestion de stock ...

Elle est basée sur REST et est sécurisée par l'utilisation d'une identification BASIC au travers d'une connexion HTTPS. Elle est disponible aux urls :

- https://api.simplement-e.com
- https://api.server.commerce-hub.io
- sur le port 8000 sur un serveur local magasin

## Création d'une application

Pour pouvoir utiliser l’API et authentifier vos appels, la première chose à créer est une application connectée dans le back-office. Vous obtiendrez ainsi des identifiants permettant de réaliser vos opérations.

La procédure est assez simple : vous devez avoir des droits d’administration des fonctionnalités et accèder à l’écran _Paramètres_ > _Extensibilité_ > _Applications connectées_. Créez une nouvelle application :

---- image à refaire ----

Conservez l'identifiant et la clef, ils vous serviront à établir la connexion avec l'API.

## Appeler une méthode API

Pour sécuriser l'accès à l'API, chaque appel devra être réalisé en HTTPS et fournir les informations de connexion sous forme d'un header Authentication de type BASIC. Par exemple :

``` console
GET https://api.simplement-e.com/app/security/apps/self HTTP/1.1
Authorization: basic:U2FtcGxlQXBwOj........XBadHgvVEZXd289
Host: simplement-e-api-beta.azurewebsites.net
Connection: Keep-Alive
```

La très grande majorité des opérations de l'API retourne simplement un flux JSON. Pour l'exemple ci-dessus, la réponse du serveur sera :

``` console
HTTP/1.1 200 OK
Cache-Control: no-cache
Pragma: no-cache
Content-Length: 67
Content-Type: application/json; charset=utf-8
Expires: -1
Server: Microsoft-IIS/8.0
X-AspNet-Version: 4.0.30319
X-Powered-By: ASP.NET
Set-Cookie: ARRAffinity=b21............4f9b7fb5;Path=/;Domain=api.simplement-e.com
Date: Thu, 05 Nov 2015 10:12:29 GMT

{"Libelle":"Sample App","UrlRacine":"http://aide.simplement-e.com"}
```

### Gestion des erreurs

Si une erreur se produit dans le traitement du coté serveur, la réponse sera associée à un code HTTP d'erreur, et vous trouverez dans le corp de la réponse, le détail de l'erreur sous la forme d'un objet JSON. 

``` console
HTTP/1.1 400 Bad Request
Cache-Control: no-cache
Pragma: no-cache
Content-Length: 125
Content-Type: application/json; charset=utf-8
Expires: -1
Server: Microsoft-IIS/8.0
X-AspNet-Version: 4.0.30319
X-Powered-By: ASP.NET
Set-Cookie: ARRAffinity=e.....eb63c;Path=/;Domain=api.simplement-e.com
Date: Thu, 05 Nov 2015 12:28:24 GMT

{"Message":"Le client doit être renseigné, ou un client générique doit être configuré dans votre gestion commerciale."}
```

Les codes d'erreurs génériques suivant sont les plus utilisés :

|Code|Description|
|---|---|
|400|Une erreur métier s'est produite|
|404|la ressource demandée n'existe pas, vérifiez que tous les paramètres correspondent bien à des éléments existants|
|503|vous n'avez pas l'autorisation de réaliser cette opération|

La documentation de chaque méthode API décrira les codes supplémentaires qu'elle peut retourner, ou donnera eventuellement des précisions sur les erreurs ci-dessus.
