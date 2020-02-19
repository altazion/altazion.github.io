## <span id='obtenir'>Obtenir l'animation commerciale</span>

Récupère l'animation commerciale active pour un device

Url :`[GET] v2/animation/get`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `AnimationData`

Type(s) de données :

```csharp
class AnimationData
{
	DateTime? TestDate { get; set; }
	HomePageSettings Home { get; set; }
	PhygitalSite.Commercial.AnimationController+AdPanel[] HomePageAds { get; set; }
	PhygitalSite.Commercial.AnimationController+AdPanel[] ScreenSaverAds { get; set; }
	PhygitalSite.Commercial.AnimationController+AdPanel[] InteractiveCatalogs { get; set; }
}

class HomePageSettings
{
	string BackgroundImageUrl { get; set; }
	string Title { get; set; }
	string BackgroundColor { get; set; }
	PhygitalSite.Commercial.AnimationController+HomePagePanel[] Panels { get; set; }
	HomePagePanel HeroView { get; set; }
}

class HomePagePanel
{
	string Label { get; set; }
	LinkType PanelType { get; set; }
	ContexteRechercheValeur Search { get; set; }
	string Url { get; set; }
	string ImageBigUrl { get; set; }
	string ImageSmallUrl { get; set; }
	Guid Guid { get; set; }
	Guid ProductGuid { get; set; }
	Guid TargetGuid { get; set; }
}

enum LinkType
{
	Search, // =0
	Product, // =1
	Url, // =2
	Survey, // =3
	InteractiveDisplay, // =4
}

class ContexteRechercheValeur
{
	CPointSoftware.Equihira.Extensibility.RechercheCritereValeur[] Criteres { get; set; }
	CPointSoftware.Equihira.Extensibility.RechercheSegmentation[] Segmentations { get; set; }
	CPointSoftware.Equihira.Extensibility.RechercheMarque[] Marques { get; set; }
	System.String[] Keywords { get; set; }
	Guid? VitrineGuid { get; set; }
	string OriginalRequest { get; set; }
}

class RechercheCritereValeur
{
	string ValueLabel { get; set; }
	Guid ValueGuid { get; set; }
	decimal? MinValue { get; set; }
	decimal? MaxValue { get; set; }
	int Ordre { get; set; }
	string UrlPerso { get; set; }
	int Count { get; set; }
	int Importance { get; set; }
	Guid CritereGuid { get; set; }
	string ValueText { get; set; }
	string AtvValeur { get; set; }
	string CriType { get; set; }
}

class RechercheSegmentation
{
	decimal Id { get; set; }
	int Level { get; set; }
	decimal? ParentId { get; set; }
	string Label { get; set; }
	string Code { get; set; }
	int Count { get; set; }
}

class RechercheMarque
{
	int Id { get; set; }
	string Label { get; set; }
	string Code { get; set; }
	int Count { get; set; }
	int Importance { get; set; }
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

class AdPanelContext
{
	String[] Keywords { get; set; }
	decimal? SegmentId { get; set; }
	Dictionary<System.Guid,System.Guid> Facets { get; set; }
	System.Int32? BrandId { get; set; }
	Guid[] ProductGuids { get; set; }
}

```
