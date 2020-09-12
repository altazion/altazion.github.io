## <span id='validationcommande'>Validation Commande</span>

Cet évènement est déclenché lorsqu'une commande e-commerce passe dans l'état validé (1)

Informations sur l'évènement : 

 - **Catégorie** : e/commerce
 - **Code** : CommandeValidee
 - **Classe de données** : CommandeValideeEventData

Type(s) de données :

```csharp
class CommandeValideeEventData
{
	Guid CommandeGuid { get; set; }
	Guid ClientGuid { get; set; }
	string CommandeNumero { get; set; }
	string CommandeIP { get; set; }
	string ClientEmail { get; set; }
	decimal CommandeMontantTotal { get; set; }
	Guid ModeLivraisonGuid { get; set; }
	Guid? PointLivraisonGuid { get; set; }
	Guid? MagasinAssocieGuid { get; set; }
}

```
