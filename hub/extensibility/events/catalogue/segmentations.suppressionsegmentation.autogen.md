## <span id='suppressionsegmentation'>Suppression Segmentation</span>

Cet évènement est déclenché lorsqu'une segmentation est supprimée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : SuppressionSeg
 - **Classe de données** : SuppressionSegmentationEventData

Type(s) de données :

```csharp
class SuppressionSegmentationEventData
{
	int SegPk { get; set; }
	string SegLibelle { get; set; }
	string SegType { get; set; }
	System.Int32? SegParentSegPk { get; set; }
	System.Int32? SegPkRemplacement { get; set; }
}

```
