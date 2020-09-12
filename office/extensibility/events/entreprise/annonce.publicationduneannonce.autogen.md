## <span id='publicationduneannonce'>Publication d'une annonce</span>

Cet évènement est déclenché lorsqu'une publication va être rendue publique

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : PublicationAnnonce
 - **Classe de données** : PublicationAnnonceEventData

Type(s) de données :

```csharp
class PublicationAnnonceEventData
{
	Guid AnnonceGuid { get; set; }
	DateTimeOffset DateDebut { get; set; }
}

```
