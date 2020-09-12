## <span id='archivagelot'>Archivage Lot</span>

Cet évènement est déclenché lorsqu'un lot est archivé

Informations sur l'évènement : 

 - **Catégorie** : e/commercial
 - **Code** : ArchivageLot
 - **Classe de données** : ArchivageLotEventData

Type(s) de données :

```csharp
class ArchivageLotEventData
{
	Guid PmlGuid { get; set; }
	string PmlRef { get; set; }
	string PmlLibelle { get; set; }
	Guid PmlGplGuid { get; set; }
}

```
