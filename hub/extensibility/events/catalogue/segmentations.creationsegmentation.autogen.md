## <span id='creationsegmentation'>Création Segmentation</span>

Cet évènement est déclenché lorsqu'une segmentation est créée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : CreationSeg
 - **Classe de données** : CreationSegmentationEventData

Type(s) de données :

```csharp
class CreationSegmentationEventData
{
	int SegPk { get; set; }
	string SegLibelle { get; set; }
	string SegType { get; set; }
	System.Int32? SegParentSegPk { get; set; }
}

```
