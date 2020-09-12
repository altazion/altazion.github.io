## <span id='obtenircross-canaux'>Obtenir les évènements CrossCanaux</span>

Récupère les évènements Cross Canaux non archivés

Url :`[GET] app/magasins/evenements/crosscanal?date1={date1:DateTime?}&date2={date2:DateTime?}`

Paramètres : 

- **date1** (DateTime?)
- **date2** (DateTime?)

Type de retour : `EvenementCrossCanal[]`

Type(s) de données :

```csharp
class EvenementCrossCanal
{
	string Categorie { get; set; }
	string Descriptif { get; set; }
	bool ObligatoirePourIntegres { get; set; }
	bool ObligatoirePourAffilies { get; set; }
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Url { get; set; }
	DateTime Date { get; set; }
	string Message { get; set; }
}

```
