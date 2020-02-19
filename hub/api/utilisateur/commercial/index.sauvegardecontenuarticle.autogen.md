## <span id='sauvegardecontenuarticle'>Sauvegarder un contenu article</span>

Sauvegarde un contenu article

Url :`[POST] `

Paramètres : 

- en tant que body, un objet ContenuData

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
