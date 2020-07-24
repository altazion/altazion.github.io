Le règlement est la phase clef du tunnel de conversion d'un site e-commerce, mais c'est aussi l'une des phases les plus compliquées techniquement. La quasi intégralité des moyens de paiement sur le web sont des plateformes hébergées par des organismes financiers et demandant donc une intégration API et EDI pour être exploitables.

A quelques exceptions près, le fonctionnement d'un mode de règlement est le suivant :

1. Le site prépare une demande de prise en charge d'un paiement en fabriquant un formulaire html dans lequel sont regroupées des informations permettant à l'organisme financier de préparer le paiement. Ce formulaire doit aussi contenir toutes les mesures de sécurité demandées par la plateforme de paiement.
2. Lorsque l'utilisateur "valide" le règlement (en postant le formulaire), il est redirigé vers le site de la solution de paiement
3. Le client réalise le paiement sur le site externe
4. Lorsqu'il a terminé, le site de l'organisme renvoie le client sur une page spécifique du site, en passant (dans la plupart des cas), des informations permettant de savoir si le paiement s'est bien passé ou non.
5. Le site doit traiter ce retour pour savoir si le client doit être amené vers une page de reçu de commande ou une page d'erreur
6. Dans la grande majorité des cas, l'organisme financier appelle, de façon asynchrone et dans une session HTTP totalement différente, un point API du site pour lui donner plus d'informations sur le paiement

C'est cette 6ème étape qui est le garant le plus sûr du fait que le paiement ait bien été pris en compte : les étapes 4 et 5 pouvant être plus facilement détournées.

## Affichage sur le site

Le module e-commerce intègre un certain nombre de règles pour définir quels sont les modes de règlement disponibles pour payer un panier. Le choix des modes disponibles est fonction d'un certain nombre de critères :

- le fait que le module soit activé ou non pour un site e-commerce 
- et pour le type de panier (web "pur", click'n'mortar, marketplace...)
- le montant du panier
- le pays de destination des produits
