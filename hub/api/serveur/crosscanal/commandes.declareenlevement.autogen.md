## <span id='declareenlevement'>Déclarer l'enlèvement</span>

Déclare l'enlèvement d'une commande

Url :`[PUT] app/crosscanal/commandes/{siteId:int}/{bcdGuid:guid}/paiement/confirmer`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue
- **bcdGuid** (Guid) : L'identifiant interne de la commande

Type de retour : `BonCommandeDetails`

Type(s) de données :

```csharp
class BonCommandeDetails
{
	Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Etat { get; set; }
	string EtatDetaille { get; set; }
	string Numero { get; set; }
	decimal MontantCommande { get; set; }
	decimal? MontantExpedie { get; set; }
	string EmailClient { get; set; }
	string NomClient { get; set; }
	string TelClient { get; set; }
	string Tel2Client { get; set; }
	AdresseClientProcess AdresseLivraison { get; set; }
	PointLivraisonProcess PointDeLivraison { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+BonCommandeLigne[] Lignes { get; set; }
	GestomWebApi.CrossCanal.CommandesForAppController+BonCommandeColis[] Colis { get; set; }
}

```
