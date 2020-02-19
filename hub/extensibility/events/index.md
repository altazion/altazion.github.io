# Évènements

En utilisant les évènements, vous pourrez ajouter des traitements personnalisés lorsque certaines modifications ont lieu ou au cours de certains process. Par exemple, vous pourrez réagir à l'annulation d'une commande, à la création d'une nouvelle marque, etc.

## Comment utiliser les évènements ?

### En solution OnPremise

En plus de permettre l'utilisation des webhooks (voir ci-dessous), les solutions déployées en OnPremise permettent d'ajouter du code personnalisé spécifique.

### En solution cloud / SaaS

Si vous utilisez nos solutions en mode hébergé, vous devez forcément utiliser le mode des webhooks pour réaliser vos personnalisations. Un webhook est simplement un appel à une API ou à un service externe qui sera déclenché par la solution lors de l'évènement.

Il existe plusieurs connecteurs vers des services externes "standards" vous permettant de démarrer rapidement, avec un minimum de développement l'intégration de vos personnalisations.

## Webhooks sortants

Un _webhook sortant_ est un appel à un service externe déclenché lorsqu'un évènement se produit. Il vous permet d'étendre la solution sous la forme d'un modèle d'exécution à la demande, très adaptés à des environnements de type Serverless (Amazon Lambda, Azure Functions, Google Cloud Functions, etc.) ou à des outils d'orchestration tels que Zapier, IFTTT ou Microsoft Flow.

### Webhooks API REST

Il s'agit de la solution la plus ouverte en termes de possibilités et probablement aussi la plus simple : lors de chaque évènement, un appel API est lancé vers une url externe avec le détail de l'évènement.

- au format REST
- sans authentification ou avec une authentification BASIC ou BEARER
- avec un playload au format JSON

Vous pouvez utliser votre propre serveur et réaliser une simple Web API pour gérer les évènements ou utiliser des solutions Serverless telles que :

- [AWZ Lambda](https://aws.amazon.com/fr/lambda/)
- [Azure Functions](https://azure.microsoft.com/fr-fr/services/functions/)
- [Google Cloud Functions](https://cloud.google.com/functions/)
etc.

#### Implémenter un gestionnaire de webhook

Vous pouvez utiliser n'importe quel language pour implémenter un service web gérant vos évènements. Il suffit pour cela que votre service soit accessible sur une url publique, accepte un playload json et retourne un code HTTP 200 en fin de traitement pour valider que le webhook a fonctionné. 

Les données de l'évènement sont envoyées dans un objet JSON prenant la forme :

``` json
{
  "EventKind":".. le code du type d'évènement...",
  "EventCategory":"... la catégorie de l'évènement...",
  "Data" : {
     /*... l'objet de donnée spécifique à l'évènement ...*/
  }
}
```

dans lequel :

- **EventKind** correspond au code de l'évènement
- **EventCategory** correspond à la catégorie de l'évènement
- **Data** contient l'objet spécifique à l'évènement.

Par exemple, pour une [création de marque](catalogue/marques.md), le playpload prendra la forme : 

``` json
{
  "EventKind":"CreationMarque",
  "EventCategory":"e/rp",
  "Data" : {
     "MarPk":1478,
     "Libelle":"Marque démo",
     "Code":null,
     "EstInterne":false
  }
}
```

#### Exemples d'implémentations

Un exemple "simple" réalisé sur **Azure Functions** :

``` csharp
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;

namespace Altazion.DemoWebhook
{
    public static class DemoWebhookAzureFunction
    {
        class EventData
        {
            public string EventKind {get; set;}
            public string EventCategory {get; set;}
            public CreationMarqueEventData Data {get; set;}
        }

        class CreationMarqueEventData
        {
            public int MarPk { get; set; }
            public string Libelle { get; set; }
            public string Code { get; set; }
            public bool EstInterne { get; set; }
        }

        [FunctionName("DemoWebhookAzureFunction")]
        public static async Task<object> Run([HttpTrigger(WebHookType = "genericJson")]HttpRequestMessage req, TraceWriter log)
        {
            string jsonContent = await req.Content.ReadAsStringAsync();
            EventData eventData = JsonConvert.DeserializeObject<EventData>(jsonContent);

           if(eventData.EventKind.Equals("CreationMarque")) {
               // faire le traitement associé à la création
                int marque_pk = eventData.Data.MarPk;
           }

            return req.CreateResponse(HttpStatusCode.OK, new
            {
                result="OK"
            });
        }
    }
}
```


### Azure Service Bus

#### Exemples d'implémentations

Un exemple "simple" réalisé via le connecteur Azure Service Bus de **Azure functions**:

``` csharp
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.ServiceBus.Messaging;
using Newtonsoft.Json;

namespace Altazion.DemoServiceBus
{
    public static class DemoServiceBus
    {
        class EventData
        {
            public string EventKind {get; set;}
            public string EventCategory {get; set;}
            public CreationMarqueEventData Data {get; set;}
        }

        class CreationMarqueEventData
        {
            public int MarPk { get; set; }
            public string Libelle { get; set; }
            public string Code { get; set; }
            public bool EstInterne { get; set; }
        }

        [FunctionName("DemoServiceBus")]
        public static void Run([ServiceBusTrigger("Marques", AccessRights.Listen, Connection = "test-altazion_SERVICEBUS")]string myQueueItem, TraceWriter log)
        {
            EventData eventData = JsonConvert.DeserializeObject<EventData>(myQueueItem);
            if(eventData.EventKind.Equals("CreationMarque")) {
               // faire le traitement associé à la création
                int marque_pk = eventData.Data.MarPk;
           }
        }
    }
}
```