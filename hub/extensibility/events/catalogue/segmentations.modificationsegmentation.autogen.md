## <span id='modificationsegmentation'>Modification Segmentation</span>

Cet évènement est déclenché lorsqu'une segmentation est modifiée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : ModificationSeg
 - **Classe de données** : ModificationSegmentationEventData

Type(s) de données :

```csharp
class ModificationSegmentationEventData
{
	int SegPk { get; set; }
	string SegLibelle { get; set; }
	string SegType { get; set; }
	System.Int32? SegParentSegPk { get; set; }
}

```
