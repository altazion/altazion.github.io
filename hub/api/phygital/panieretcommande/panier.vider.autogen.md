## <span id='vider'>Vider le panier</span>

Vide le panier

Url :`[GET] v2/cart/clear`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `Panier`

Type(s) de données :

```csharp
class Panier
{
	LignePanier[] Lignes { get; set; }
	LignePanier FraisPort { get; set; }
	LignePanier[] Avantages { get; set; }
	bool EstValidable { get; set; }
	bool DemandeFraisPort { get; set; }
	string DestinationPrevueCodePostal { get; set; }
	string DestinationPrevueCodePays { get; set; }
	ErreurPanier ErreurPanier { get; set; }
	string Incitation { get; set; }
	string ModeLivraisonIdentifiant { get; set; }
	bool ModeLivraisonEstPointRetrait { get; set; }
	Guid ClientGuid { get; set; }
	string ClientNom { get; set; }
	bool EstClientConnecte { get; set; }
	decimal MontantTTCAvecMagasin { get; set; }
	string MontantTTCAvecMagasinFormate { get; set; }
	decimal MontantTTC { get; set; }
	string MontantTTCFormate { get; set; }
	string ProcessAPrivilegier { get; set; }
	PanierGroupe[] Groupes { get; set; }
	string CodeAvantageActif { get; set; }
}

```
