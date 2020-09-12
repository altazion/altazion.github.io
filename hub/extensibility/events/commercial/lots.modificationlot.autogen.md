## <span id='modificationlot'>Modification Lot</span>

Cet évènement est déclenché lorsqu'un lot est modifié

Informations sur l'évènement : 

 - **Catégorie** : e/commercial
 - **Code** : ModificationLot
 - **Classe de données** : ModificationLotEventData

Type(s) de données :

```csharp
class ModificationLotEventData
{
	Guid PmlGuid { get; set; }
	string PmlRef { get; set; }
	string PmlLibelle { get; set; }
	Guid PmlGplGuid { get; set; }
}

```
