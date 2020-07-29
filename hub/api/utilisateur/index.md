# API Utilisateur

Les APIs "Utilisateurs" sont destinées à être utilisée dans des applications réalisant des opérations au nom d'un utilisateur, par exemple :

- une application de saisie de dépense
- une application de réception de colis

Elle est basée sur REST et est sécurisée par l'utilisation d'une identification BASIC au travers d'une connexion HTTPS. Elle est disponible aux urls :

- https://api.altazion.com
- sur le port 8000 sur un serveur local magasin

Afin de garantir la sécurité des appels, les identifiants utilisés ne sont ceux de l'utilisateur, qui n'a ainsi pas à partager son mot de passe avec l'application, mais au travers d'un ensemble key/secret spécifiquement crée pour une application.

## Gestion des clefs API

Pour authentifier vos appels, vous devrez passer, sous forme d'authentification BASIC, un couple API Key/Api Secret. Ces clefs peuvent être trouvée dans vos paramètres, sous la rubrique "Clefs API". Si vous souhaitez développer une application/un service pour un utilisateur spécifique, vous pouvez créer vos identifiants dans cette page.

Pour réaliser une application générique, qui permet à chaque utilisateur de se connecter, vous devez suivre le protocole d'authentification des applications utilisateurs.

## Appeler une méthode API

Pour sécuriser l'accès à l'API, chaque appel devra être réalisé en HTTPS et fournir les informations de connexion sous forme d'un header Authentication de type BASIC. Par exemple :

``` console
GET https://api.altazion.com/api/commercial/planning HTTP/1.1
Authorization: basic:U2..........289
Host: api.altazion.com
Connection: Keep-Alive
```

La très grande majorité des opérations de l'API retourne simplement un flux JSON. Pour l'exemple ci-dessus, la réponse du serveur sera :

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

|code|signification|
|---|---|
|400|Une erreur métier s'est produite
|404|la ressource demandée n'existe pas, vérifiez que tous les paramètres correspondent bien à des éléments existants|
|503|vous n'avez pas l'autorisation de réaliser cette opération|

La documentation de chaque méthode API décrira les codes supplémentaires qu'elle peut retourner, ou donnera eventuellement des précisions sur les erreurs ci-dessus.