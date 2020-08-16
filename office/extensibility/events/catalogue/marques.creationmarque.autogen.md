## <span id='creationmarque'>Création Marque</span>

Cet évènement est déclenché lorsqu'une marque est créée

Informations sur l'évènement : 

 - **Catégorie** : e/rp
 - **Code** : CreationMarque
 - **Classe de données** : CreationMarqueEventData

Type(s) de données :

```csharp
class CreationMarqueEventData
{
	int MarPk { get; set; }
	string Libelle { get; set; }
	string Code { get; set; }
	bool EstInterne { get; set; }
}

```
