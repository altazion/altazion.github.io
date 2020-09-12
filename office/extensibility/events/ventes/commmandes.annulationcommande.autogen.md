## <span id='annulationcommande'>Annulation Commande</span>

Cet évènement est déclenché lorsqu'une commande est annulée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : AnnulationBcd
 - **Classe de données** : AnnulationCommandeEventData

Type(s) de données :

```csharp
enum TypeAnnulationCommande
{
	ParRjs, // =0
	ParClient, // =1
	Fraude, // =2
}

class AnnulationCommandeEventData
{
	Guid BcdGuid { get; set; }
	TypeAnnulationCommande TypeAnnulation { get; set; }
	string CodeRaisonAnnulation { get; set; }
	Guid? Uxid { get; set; }
}

```
