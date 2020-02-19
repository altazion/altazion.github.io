## <span id='connexioncreation'>Créer un nouveau client</span>

Créé un nouveau client et l'affecte à la commande

Url :`[PUT] v2/process/client?mode={mode:string}`

Paramètres : 

- en tant que body, un objet CompteEtAdresseClientProcess : Les informations du client
- **mode** (string) : le mode de création. Seule la valeur 'order' est autorisé actuellement

Url :`[POST] v2/process/client/new?mode={mode:string}`

Paramètres : 

- en tant que body, un objet CompteEtAdresseClientProcess : Les informations du client
- **mode** (string) : le mode de création. Seule la valeur 'order' est autorisé actuellement

Type de retour : `ResumeProcess`

Type(s) de données :

```csharp
class ResumeProcess
{
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

class CompteEtAdresseClientProcess
{
	string Password { get; set; }
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

```
