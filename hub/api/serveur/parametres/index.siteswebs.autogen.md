## <span id='siteswebs'>Récupérer les sites web</span>

Récupère la liste des sites webs déclarés pour la raison juridique active.

Url :`[GET] app/tenant/websites`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `SiteWebData[]`

Type(s) de données :

```csharp
class SiteWebData
{
	System.String[] Urls { get; set; }
	string Code { get; set; }
	int Id { get; set; }
	string Libelle { get; set; }
	string Theme { get; set; }
	string CssTheme { get; set; }
	string MasterPage { get; set; }
	int RjsId { get; set; }
	int SegmentRacineId { get; set; }
	System.Int32? DefaultNewsletterId { get; set; }
	string UrlPrincipale { get; set; }
	string TelephoneServiceClient { get; set; }
	string EmailServiceClient { get; set; }
	string HorairesServiceClient { get; set; }
	string DefaultCP { get; set; }
	string DefaultPaysPk { get; set; }
	Guid? DefaultDevise { get; set; }
	System.Int32? SiteParentId { get; set; }
	Guid? VitrineTopVentesGuid { get; set; }
	Guid? VitrineHomeGuid { get; set; }
	Guid? VitrineNouveautesGuid { get; set; }
	bool EstEcommerce { get; set; }
	bool EstEnProduction { get; set; }
	Guid ZonePreparationParDefautGuid { get; set; }
	string Description { get; set; }
	string Titre { get; set; }
	bool EstBlog { get; set; }
	bool EstPrive { get; set; }
	string RootSearchPath { get; set; }
	string RootProductPath { get; set; }
	string RootPath { get; set; }
	Guid? ThemeGuid { get; set; }
	bool UtiliseMobilePages { get; set; }
	string MobileTheme { get; set; }
}

```
