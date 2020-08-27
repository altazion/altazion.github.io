## <span id='obtenir'>Obtenir un magasin</span>

Récupère un magasin depuis son guid.

Url :`[GET] api/parametres/magasins/{code}`

Paramètres : 

- **code** (string) : Le code du magasin

Url :`[GET] api/parametres/magasins/{guid:Guid}`

Paramètres : 

- **guid** (Guid) : L'identifiant du magasin

Type de retour : `MagasinBase`

Type(s) de données :

```csharp
class MagasinBase
{
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
