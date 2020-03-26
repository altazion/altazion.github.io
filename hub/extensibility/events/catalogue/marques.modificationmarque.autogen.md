## <span id='modificationmarque'>Modification Marque</span>

Cet évènement est déclenché lorsqu'une marque est modifiée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : ModificationMarque
 - **Classe de données** : ModificationMarqueEventData

Type(s) de données :

```csharp
class ModificationMarqueEventData
{
	int MarPk { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	bool EstInterne { get; set; }
}

```
