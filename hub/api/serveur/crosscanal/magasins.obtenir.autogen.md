## <span id='obtenir'>Obtenir un magasin</span>

Récupère un magasin depuis son code.

Url :`[GET] app/magasins/{code}`

Paramètres : 

- **code** (string) : Le code du magasin

Type de retour : `MagasinInfo`

Type(s) de données :

```csharp
class MagasinInfo
{
	CPointSoftware.Equihira.Common.MagasinInfo+Horaire[] Horaires { get; set; }
	CPointSoftware.Equihira.Common.MagasinInfo+Service[] Services { get; set; }
	decimal Lattitude { get; set; }
	decimal Longitude { get; set; }
	Guid Guid { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	string CodePostal { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string AdressesIP { get; set; }
	string Telephone { get; set; }
	string Fax { get; set; }
	string Email { get; set; }
	string Pays { get; set; }
	bool ActifPourCrossCanal { get; set; }
}

```
