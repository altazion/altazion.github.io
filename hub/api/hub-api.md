# APIs du module HUB

Les api de notre module Hub sont disponibles sur :

*   https://api.simplement-e.com
*   https://api.server.commerce-hub.io
*   sur le port 8000 sur un [serveur local magasin](/fr-fr/administration/storeserver/)
*   selon votre configuration sur une installation OnPremise

## APIs Utilisateurs et APIs Serveurs

Il existe deux types de points APIs :

*   les points "Utilisateurs", destinés à être utilisé dans le contexte d'un utilisateurs : tous les appels que vous réaliserez sur ces points doivent être authentifié avec un compte utilisateur valide, au travers d'une clef API personnelle.
*   les points "Serveurs", destinés à des communications de serveur à serveur : tous les appels sont réalisées en tant que compte d'application partenaires

De nombreux points sont disponibles dans les deux modes, parfois avec quelques différences entre la version "Utilisateurs" et la version "Serveurs".

## Authentification

Pour chacun des deux types de points APIs, vous devrez fournir l'authentification correspondant au travers d'un header d'authentification Basic, sécurisé via HTTPS. Si vous n'utilisez pas le protocole HTTPS, seuls les APIs hébergées sur un serveur local magasin fonctionneront, et ceci exclusivement avec des appels réalisées depuis le réseau local du magasin et des adresse IPs autorisées.

Pour découvrir comment créer un jeu d'identifiant pour les APIs "Serveurs", consultez la page d'aide [Généralités sur les Apis Serveurs](serveur/)