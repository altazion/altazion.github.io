## <span id='creer'>Nouvelle opération publicitaire</span>

Créé une nouvelle opération commerciale de type publicité

Url :`[POST] api/commercial/opecom/publicite/new`

Paramètres : 

- en tant que body, un objet NouvellePublicite

Type de retour : `Guid`

Type(s) de données :

```csharp
class NouvellePublicite
{
	Guid DestinationGuid { get; set; }
	Guid CampagneGuid { get; set; }
	string TypeOpe { get; set; }
	string Libelle { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
}

```
