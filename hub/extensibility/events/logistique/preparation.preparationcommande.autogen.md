## <span id='preparationcommande'>Preparation Commande</span>

Cet évènement est déclenché lorsqu'une commande change d'état de préparation

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : PreparationBpr
 - **Classe de données** : PreparationCommandeEventData

Type(s) de données :

```csharp
class PreparationCommandeEventData
{
	Guid BcdGuid { get; set; }
	Guid BprGuid { get; set; }
	string BprType { get; set; }
}

```
