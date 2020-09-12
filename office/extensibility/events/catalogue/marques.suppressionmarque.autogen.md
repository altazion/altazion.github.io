## <span id='suppressionmarque'>Suppression Marque</span>

Cet évènement est déclenché lorsqu'une marque est supprimée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : SuppressionMarque
 - **Classe de données** : SuppressionMarqueEventData

Type(s) de données :

```csharp
class SuppressionMarqueEventData
{
	int MarPk { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	bool EstInterne { get; set; }
}

```
