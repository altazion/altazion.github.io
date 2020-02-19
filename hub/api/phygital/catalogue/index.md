# Catalogue

L'API est conçue pour un parcours "classique" du catalogue produit : la recherche par facette de produit, avec possibilité d'affiner, puis l'affichage d'une fiche produit. Pour ce faire, nous vous conseillons le cheminement suivant :

1. à l'initialisation de l'application, obtenir la configuration du catalogue. Vous trouverez dans celle-ci la liste des différentes facettes disponibles, les options actives sur le catalogue ainsi que les propriétés (nom, type, etc.) des attributs personnalisés. Attention, la facette Categories, un peu particulière, a été séparée des autres facettes.
2. Lancer une descente produit, sur l'une des facettes. Le résultat d'une recherche comprend à la fois les produits (attention, la recherche est paginée : vous devrez peut être lancer plusieurs demandes pour obtenir tous les produits) et les facettes permettant de continuer la descente produit.
3. Afficher une fiche produit, à partir des informations détaillées du produit.

[!include[temp](index.autogen.md)]
