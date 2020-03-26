## <span id='ajouterreglement'>Ajouter un règlement</span>

Ajoute un règlement

Url :`[GET] v2/process/reglement/add/{guid:guid}?reference={reference:string}&montant={montant:decimal?}&valide={valide:System.Boolean?}`

Paramètres : 

- **guid** (Guid) : Le guid du mode de règlement
- **reference** (string) : Par exemple le numéro de transaction CB, ou l'identifiant du bon d'achat
- **montant** (decimal?) : Le montant du règlement (ne pas renseigner pour utiliser le montant restant à payer)
- **valide** (System.Boolean?) : True si le règlement est totalement terminée, false si des opérations ultérieures (par exemple une validation par un journal d'opération, ou la reception physique du règlement) sont nécessaires

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

```
