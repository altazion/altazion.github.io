## <span id='obtenir'>Obtenir les évènements magasin</span>

Récupère les évènements magasins

Url :`[GET] api/magasins/{magasin_guid:Guid}/evenements`

Paramètres : 

- **magasin_guid** (Guid) : L'identifiant du magasin

Type de retour : `EvenementMagasin[]`

Type(s) de données :

```csharp
class EvenementMagasin
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Description { get; set; }
	EvenementCrossCanalBase InfoEventCrossCanal { get; set; }
}

class EvenementCrossCanalBase
{
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Url { get; set; }
	DateTime Date { get; set; }
	string Message { get; set; }
}

```
