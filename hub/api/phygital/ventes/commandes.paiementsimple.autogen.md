## <span id='paiementsimple'>Valider le paiement</span>

Valide le règlement associé à une commande

Url :`[PUT] v2/orders/{bcdGuid:guid}/payment/confirm`

Paramètres : 

- **bcdGuid** (Guid) : L'identifiant de la commande

Type de retour : `BonCommandeDetails`

Type(s) de données :

```csharp
class BonCommandeDetails
{
	string OrigineLibelle { get; set; }
	AdresseClientProcess AdresseLivraison { get; set; }
	PointLivraisonProcess PointDeLivraison { get; set; }
	PhygitalSite.Clients.BonCommandeLigne[] Lignes { get; set; }
	PhygitalSite.Clients.BonCommandeColis[] Colis { get; set; }
	string MetaType { get; set; }
	string ModeCommande { get; set; }
	Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Origine { get; set; }
	string Etat { get; set; }
	string EtatDetaille { get; set; }
	string Numero { get; set; }
	decimal MontantCommande { get; set; }
	decimal? MontantExpedie { get; set; }
	string EmailClient { get; set; }
	string NomClient { get; set; }
	string TelClient { get; set; }
	string Tel2Client { get; set; }
	string NomDestinataire { get; set; }
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

class PointLivraisonProcess
{
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

class BonCommandeLigne
{
	Guid Guid { get; set; }
	Guid ArticleGuid { get; set; }
	string Reference { get; set; }
	string Libelle { get; set; }
	decimal Quantite { get; set; }
	decimal QuantiteExpediee { get; set; }
	decimal PuTtc { get; set; }
	bool EnCommande { get; set; }
	string Type { get; set; }
}

class BonCommandeColis
{
	Guid Guid { get; set; }
	string Transporteur { get; set; }
	DateTime DateEnvoi { get; set; }
	bool EstLivre { get; set; }
}

```
