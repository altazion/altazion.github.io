## <span id='detailscatalogue'>Obtenir le détail d'un catalogue interactif</span>

Récupère les détails d'un catalogue interactif

Url :`[GET] v2/animation/catalogue/{cataGuid:guid}`

Paramètres : 

- **cataGuid** (Guid) : L'identifiant du catalogue

Type de retour : `OpeCatalogue`

Type(s) de données :

```csharp
class OpeCatalogue
{
	CPointSoftware.Equihira.Business.Crm.TypeOperationCatalogue+OpeCataloguePageCustom[] Pages { get; set; }
	PhygitalSite.Commercial.AnimationController+AdPanel[] Publicites { get; set; }
	bool EstValide { get; set; }
	string Libelle { get; set; }
	Guid Guid { get; set; }
	string TypeOpe { get; set; }
	DateTime DateDebut { get; set; }
	DateTime DateFin { get; set; }
}

class OpeCataloguePageCustom
{
	CPointSoftware.Equihira.Business.Crm.TypeOperationCatalogue+OpeCataloguePageItem[] Items { get; set; }
	string CustomXmlData { get; set; }
	string ImageUrl { get; set; }
	string CriteresUrl { get; set; }
	string Title { get; set; }
}

class OpeCataloguePageItem
{
	Guid ArticleGuid { get; set; }
	string ArticleLibelle { get; set; }
	decimal Pertinence { get; set; }
}

class AdPanel
{
	string Label { get; set; }
	LinkType AdType { get; set; }
	ContexteRechercheValeur Search { get; set; }
	string Url { get; set; }
	string ImageUrl { get; set; }
	Guid ProductGuid { get; set; }
	Guid Guid { get; set; }
	Guid TargetGuid { get; set; }
	string Emplacement { get; set; }
	AdPanelContext Context { get; set; }
}

```
