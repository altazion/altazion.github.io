## <span id='supprimecontenuarticle'>Supprime un contenu article</span>

Supprime un contenu article

Url :`[DELETE] app/commercial/contenus`

Paramètres : 

- Cette url n'accepte aucun paramètre

Type de retour : `bool`

Type(s) de données :

```csharp
class ContenuData
{
	Guid GArticle { get; set; }
	string IDBillet { get; set; }
	string Contenu { get; set; }
	string TypeContenu { get; set; }
}

```
