## <span id='liste'>Lister les tenants associés à votre compte</span>

Récupère la liste des tenants associés à votre compte partenaire

Url :`[GET] api/partners/saas/tenants`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `TenantData[]`

Type(s) de données :

```csharp
class TenantData
{
	int TenantId { get; set; }
	string Name { get; set; }
	string Code { get; set; }
	Guid MainLicenceGuid { get; set; }
	GestomWebApi.Integrations.PartenairesController+TenantStoreData[] Stores { get; set; }
	GestomWebApi.Integrations.PartenairesController+TenantCatalogData[] CatalogDatas { get; set; }
	TenantGlobalData GlobalData { get; set; }
}

class TenantStoreData
{
	Guid StoreGuid { get; set; }
	string StoreName { get; set; }
	string StoreCode { get; set; }
	TenantInStoreData InStoreData { get; set; }
}

class TenantInStoreData
{
	string UrlPosCentral { get; set; }
	String[] DeployedComponents { get; set; }
}

class TenantCatalogData
{
	CatalogKind Kind { get; set; }
	string Name { get; set; }
	string Url { get; set; }
	int Id { get; set; }
	string Code { get; set; }
}

enum CatalogKind
{
	ECommerce, // =0
	Logistics, // =1
}

class TenantGlobalData
{
	string UrlErp { get; set; }
	string UrlPosCentral { get; set; }
	String[] DeployedComponents { get; set; }
}

```
