## <span id='creationlot'>Création Lot</span>

Cet évènement est déclenché lorsqu'un lot est créé

Informations sur l'évènement : 

 - **Catégorie** : e/commercial
 - **Code** : CreationLot
 - **Classe de données** : CreationLotEventData

Type(s) de données :

```csharp
class CreationLotEventData
{
	Guid PmlGuid { get; set; }
	string PmlRef { get; set; }
	string PmlLibelle { get; set; }
	Guid PmlGplGuid { get; set; }
}

```
