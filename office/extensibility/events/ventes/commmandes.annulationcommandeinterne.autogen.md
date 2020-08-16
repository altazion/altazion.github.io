## <span id='annulationcommandeinterne'>Annulation Commande interne</span>

Cet évènement est déclenché lorsqu'une commande interne est annulée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : AnnulationCin
 - **Classe de données** : AnnulationCommandeInterneEventData

Type(s) de données :

```csharp
enum TypeAnnulationCommandeInterne
{
	ParRjs, // =0
	ParClient, // =1
}

class AnnulationCommandeInterneEventData
{
	Guid CinGuid { get; set; }
	TypeAnnulationCommandeInterne TypeAnnulation { get; set; }
	string CodeRaisonAnnulation { get; set; }
	Guid? Uxid { get; set; }
}

```
