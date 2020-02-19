## <span id='avis'>Obtenir les avis clients sur un produits</span>

Récupère les avis d'un articles

Url :`[GET] v2/catalogue/get/{reference}/reviews`

Paramètres : 

- **reference** (string)

Url :`[GET] v2/catalogue/get/{reference}/reviews?articleGuid={articleGuid:Guid}`

Paramètres : 

- **reference** (string)
- **articleGuid** (Guid)

Type de retour : `AvisClient[]`

Type(s) de données :

```csharp
class AvisClient
{
	Guid Guid { get; set; }
	Guid ArticleGuid { get; set; }
	string Nom { get; set; }
	string Message { get; set; }
	Guid? ClientGuid { get; set; }
	string Email { get; set; }
	bool EstValide { get; set; }
	DateTime Date { get; set; }
	decimal Note { get; set; }
}

```
