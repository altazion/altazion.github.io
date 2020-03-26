## <span id='fichearticleauhasard'>Obtenir un article au hasard</span>

Récupère une fiche produit, choisie au hasard, ou une liste de fiches produits

Url :`[GET] v2/catalogue/get/random-product?uniquementdispo={uniquementdispo:bool}`

Paramètres : 

- **uniquementdispo** (bool) : true pour ne récupérer que des produits disponibles

Url :`[GET] v2/catalogue/get/random-product/{count:int}?uniquementdispo={uniquementdispo:bool}`

Paramètres : 

- **uniquementdispo** (bool) : true pour ne récupérer que des produits disponibles
- **count** (int) : Le nombre de produits à récupérer

Type de retour : `ArticlePhygitalDetail[]`

Type(s) de données :

```csharp
class ArticlePhygitalDetail
{
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleReference[] AutresReferences { get; set; }
	EmplacementMagasin EmplacementStockMagasin { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalLot[] Lots { get; set; }
	ArticlePhygitalDimensions Dimensions { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalTaxe[] Taxes { get; set; }
	ArticlePhygitalBase Parent { get; set; }
	CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticleDispoDigiSign[] Disponibilites { get; set; }
	ArticlePhygitalVersion[] Instances { get; set; }
	String[] Documents { get; set; }
	String[] Videos { get; set; }
	ArticleImage[] MoreImages { get; set; }
	String[] Labels { get; set; }
	Dictionary<System.String,System.String> Attributs { get; set; }
	Dictionary<System.String,System.String> AttributsPrives { get; set; }
	String[] LogosUrls { get; set; }
	Dictionary<System.String,CPointSoftware.Equihira.Extensibility.PointOfSale.DigitalSignage.ArticlePhygitalAssocie[]> ArticlesAssocies { get; set; }
	ArticlePhygitalBase[] SuggestionsAuto { get; set; }
	ServicesComplementaires[] Services { get; set; }
	AvisClient[] Avis { get; set; }
	string Url { get; set; }
	string OriginalImageUrl { get; set; }
	ArticlePhygitalLogistiqueSpecificites LogistiqueSpecificites { get; set; }
	InfosMarketPlace MarketPlace { get; set; }
	decimal? AvisNote { get; set; }
	bool EstEnPromo { get; set; }
	decimal? PctRemise { get; set; }
	Guid[] AllTags { get; set; }
	string UrlExterne { get; set; }
	string IntermediateImage { get; set; }
	string Marque { get; set; }
	decimal? SegmentationPrincipalePk { get; set; }
	string MainImage { get; set; }
	string SmallImage { get; set; }
	Object MainImageObject { get; set; }
	string Tag { get; set; }
	bool DisponibleCommande { get; set; }
	bool DisponibleCentrale { get; set; }
	bool DisponibleMagasin { get; set; }
	TypeStock TypeStockage { get; set; }
	bool EstImmateriel { get; }
	bool EstArchive { get; set; }
	bool EstLivrable { get; set; }
	long ID { get; set; }
	Guid Guid { get; set; }
	decimal PuHT { get; set; }
	decimal PuTTC { get; set; }
	decimal PuTVA { get; }
	decimal? PuPromoHT { get; set; }
	decimal? PuPromoTTC { get; set; }
	DateTime? DateDebutPromo { get; set; }
	DateTime? DateFinPromo { get; set; }
	DateTime DateCreation { get; set; }
	string Libelle { get; set; }
	string Reference { get; set; }
	int FamilleID { get; set; }
	string Description { get; set; }
	System.Int32? SousFamilleId { get; set; }
	int MarqueId { get; set; }
	byte TauxTvaId { get; set; }
	short TypeArticleId { get; set; }
	bool EstUtilisableInternet { get; set; }
	bool EstPrefacturable { get; set; }
	bool EstMultiversion { get; set; }
	bool EstGenerique { get; set; }
	bool EstCompose { get; set; }
	bool EstPartenaire { get; set; }
	bool EstValide { get; set; }
	int EtatCreation { get; set; }
	decimal? PuConseilleHT { get; set; }
	decimal? PuConseilleTTC { get; set; }
	MetaTypeArticle MetaType { get; set; }
	bool PromoDefinie { get; }
	int ScoreRisque { get; set; }
}

```
