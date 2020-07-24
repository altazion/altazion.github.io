## Implémenter un mode de règlement

>[!WARNING]
> Disponible uniquement en solution OnPremise

Un mode de règlement doit être implémenté en réalisant plusieurs composants :

* Implémenter l'interface `IModePaiement`
* éventuellement implémenter son complément : `IModePaiementAvantageClient`

De plus, si vous souhaitez utiliser ce moyen de paiement sur votre site e-commerce, vous devrez :

* Implémenter le contrôle interactif à présenter à l'utilisateur
* Implémenter les appels et réponses correspondant à votre prestataire.

## Module de paiement

### `IModePaiement`

[!include](ecommerce-reglements-sharedpublic-2.md)

## Intégration e-commerce

[!include](ecommerce-reglements-sharedpublic-1.md)
