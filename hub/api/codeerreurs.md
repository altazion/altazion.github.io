# Codes d'erreurs

Toutes les opérations retourne l'état de leur résultat via un code HTTP standard. Si vous obtenez un code de la classe 4xx ou 5xx, l'appel à échoué.

Lorsqu'un appel échoue, le résultat contient la classe suivante, sérialisée en JSON :

```csharp
class WebServiceErrorDetails
{
    string Message { get; set; }
    int ErrorCode { get; set; }
    int? ErrorIdentifier { get; set; }
}
```

Le champ ErrorCode reprend le code de status HTTP.

Les codes status suivants sont utilisés de façon standard dans toute l'API :

|Code|Type|Description|
|---|---|---|
409|Conflict|Les données fournies pour identifier le tenant sont en conflit avec les données envoyées. Vérifiez vos identifiants
412|PréconditionFailed|Le serveur est dans un état invalide pour effectuer cette opération, il peut par exemple s'agir d'un problème de configuration
418|-|La cible de l'appel n'est pas valide
404|NotFound|L'un des éléments de l'appel n'a pas été trouvé
405|MethodNotAllowed|L'un des éléments de l'appel est dans un état ne permettant pas l'opération
403|Forbidden|Vous n'avez pas les autorisations pour réaliser cette opération
400|BadRequest|L'opération viole une règle de gestion

En complément du code HTTP général, le libellé vous donnera plus d'information. Afin de permettre la localisation des messages d'erreurs, le champ ErrorIdentifier est renseigné si plus d'informations sont nécessaires. Ce champ peut prendre les valeurs suivantes :

``` csharp
SiteInvalide = 5000;
MagasinInvalide = 5041;
ModuleRechercheInvalide = 5050;

PanierErreurManipulation = 5100;
PanierModeLivraisonIndisponible = 5101;
PanierCodeAvantageInvalide = 5113;
PanierRegleAvantageIncorrecte = 5115;
ClientNonConnecte = 5100;
AdresseDonneeManquante = 5107;
AdresseDonneeInvalide = 5108;
CommandeEtatInvalide = 5319;
```