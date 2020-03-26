## <span id='commandesenattente'>Commandes en attente</span>

Récupère la liste des 50 dernières commandes 'magasin'

Url :`[GET] app/crosscanal/commandes/enattente/{siteId:int}/instore/local`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue

Url :`[GET] app/crosscanal/commandes/enattente/{siteId:int}/instore/{magasinGuid:guid}`

Paramètres : 

- **siteId** (int) : L'identifiant du catalogue
- **magasinGuid** (Guid) : L'identifiant du magasin

Type de retour : `CommandeEnAttente[]`

Type(s) de données :

```csharp
class CommandeEnAttente
{
	Guid Guid { get; set; }
	DateTime Date { get; set; }
	string Numero { get; set; }
	string NomLivraison { get; set; }
	string Tags { get; set; }
	CommandeEtat Etat { get; set; }
	string DestinationLivraison { get; set; }
	string IdentifiantPreparation { get; set; }
	bool EstProcessComplet { get; set; }
	EtatPreparation ResultatPreparation { get; set; }
}

enum CommandeEtat
{
	EnAttente, // =0
	EnTraitement, // =1
	Traite, // =2
	Termine, // =3
}

enum EtatPreparation
{
	Inconnu, // =0
	Annulee, // =1
	PrepareIntegralement, // =2
	PreparePartiellement, // =3
}

```
