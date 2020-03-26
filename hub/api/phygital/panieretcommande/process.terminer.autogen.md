## <span id='terminer'>Finaliser une commande</span>

Valide une commande

Url :`[GET] v2/process/terminer?mode={mode:string}`

Paramètres : 

- **mode** (string) : A ne pas renseigner, prévu pour usage interne

Type de retour : `CommandeTermine`

Type(s) de données :

```csharp
class CommandeTermine
{
	LignePanier[] Articles { get; set; }
	string MessageConfirmation { get; set; }
	Guid ClientGuid { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	decimal MontantTTCRestant { get; set; }
	string MontantTTCRestantFormate { get; set; }
	Guid ModeLivraisonGuid { get; set; }
	string ModeLivraison { get; set; }
	decimal ModeLivraisonMontantTTC { get; set; }
	DateTime DateLivraisonPrevue { get; set; }
	bool DemandeAdresseLivraison { get; set; }
	bool DemandePointLivraison { get; set; }
	bool EstLivraisonMagasin { get; set; }
	string NomDestinataire { get; set; }
	bool EstValidable { get; set; }
	bool EstTerminee { get; set; }
	string NumeroCommande { get; set; }
	Guid GuidCommande { get; set; }
	String[] Tags { get; set; }
	AdresseClientProcess AdresseLivraison { get; set; }
	AdresseClientProcess AdresseFacturation { get; set; }
	PointLivraisonDetailProcess PointLivraisonAdresse { get; set; }
	ReglementProcess[] Reglements { get; set; }
}

class LignePanier
{
	MetaTypeArticle TypeArticle { get; set; }
	string Identifiant { get; set; }
	string IdentifiantLigneParent { get; set; }
	string Libelle { get; set; }
	string Reference { get; set; }
	Guid ArticleGuid { get; set; }
	decimal Quantite { get; set; }
	string GroupePanier { get; set; }
	decimal PuOriginalHT { get; set; }
	decimal PuOriginalTTC { get; set; }
	decimal PuFinalTTC { get; set; }
	decimal PuFinalHT { get; set; }
	decimal RemiseHT { get; set; }
	decimal RemiseTTC { get; set; }
	string ImageUrl { get; set; }
	bool LigneMiseAJour { get; set; }
	string Marque { get; set; }
	string PrixFormate { get; set; }
	string PrixOriginalFormate { get; set; }
	string RemiseFormatee { get; set; }
	Guid? MagasinGuid { get; set; }
	string Groupe { get; set; }
	bool NonModifiable { get; set; }
	String[] AttributsDifferentiants { get; set; }
	String[] DonneesPersonnalisees { get; set; }
	String[] DetailsFraisAnnexes { get; set; }
	System.Boolean? DisponibleMagasin { get; set; }
	System.Boolean? DisponibleCentrale { get; set; }
}

class AdresseClientProcess
{
	Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Prenom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string Mobile { get; set; }
	string CP { get; set; }
	string PayPk { get; set; }
	string Region { get; set; }
	string Email { get; set; }
}

class PointLivraisonDetailProcess
{
	PointLivraisonHoraireProcess[] Horaires { get; set; }
	string Commentaires { get; set; }
	Guid Guid { get; set; }
	string Civilite { get; set; }
	string Nom { get; set; }
	string Adresse { get; set; }
	string Ville { get; set; }
	string Telephone { get; set; }
	string CP { get; set; }
	string Email { get; set; }
	string Indication { get; set; }
	String[] Services { get; set; }
	GeoLocalisationPointLivraisonProcess Localisation { get; set; }
	bool EstActif { get; set; }
}

class ReglementProcess
{
	Guid Guid { get; set; }
	string Reference { get; set; }
	Guid ModeReglementGuid { get; set; }
	decimal Montant { get; set; }
	bool EstValide { get; set; }
}

```
