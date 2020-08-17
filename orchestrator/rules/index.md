# Moteur de règles de préparation

## Fonctionnement général

## Règles standards

Il existe quelques règles pré-définies, que vous pouvez configurer au travers d'Office. Ces règles sont [consultables sur le site d'aide général](https://aide.altazion.com/fr-fr/orchestrator/prepa-mep.html)

## Ecrire des règles personnalisées

La création de règles personnalisées se fait via l'écriture d'un fichier RuleSet contenant à la fois :

- vos règles
- la définition des conditions de priorisations entre-elles.

### Fichier de ruleset

```xml
<OrderSplitOptions>

    <Rule code="maRegle">
        <Step id="ClickNCollect" customizable="false"><![CDATA[
            # votre code powershell de mise en préparation
        ]]></Step>        
    </Rule>

    <Ruleset prefer="Priority">
        <Rule code="maRegle" />
    </Ruleset>

</OrderSplitOptions>
```



### Cmdlet standards


|Commandes|Description|
|---|---|
|Confirm-OmsFullFilment||
|[Exit-OmsRule](cmdlets/exit-omsrule.md)|Termine l'exécution de la règle actuelle, par défaut sans enregistrer le résultat.|
|Invoke-OmsExternalApi|Invoke une api externe pour traiter un bon de commande|
|[Get-OmsSortAlgorithm](cmdlets/get-omssortalgorithm.md)|-|
|[Get-OmsSupplier](cmdlets/get-omssupplier.md)|Obtient une liste de fournisseur de marchandises|
|[New-OmsFulfillment](cmdlets/new-omsfulfillment.md)|Crée un nouvel ordre de préparation|
|[Select-OmsOrderLines](cmdlets/select-omsorderlines.md)|Obtient un ensemble de ligne de commandes, en les associants éventuellement à un sourcing|
|[Trace-OmsOnOrder](cmdlets/trace-omsonorder.md)|Ajoute une trace dans le dossier du bon de commande|
|[Update-OmsFulfillment](cmdlets/update-omsfulfillment.md)|Met à jour un ordre de préparation|
|[Update-OmsOrder](cmdlets/update-omsorder.md)|Met à jour un bon de commande|



> [!NOTE]
> Vous pouvez aussi étendre la solution en implémentant [vos propres Cmdlets](extensibilite.md).

### Deployer vos règles

#### SaaS

Si vous utilisez notre solution en mode SaaS, vous pouvez tout simplement utiliser notre interface de configuration dans _Paramètres_ > _Logistique_ > _Règles de préparation_ et de passer en mode _Avancé_ pour accèder à l'écran de configuration des règles.

Celui-ci vous permettra de coller votre fichier de configuration, et de le renseigner un ensemble de commandes de tests pour valider le comportement. N'hésitez pas à tester et finaliser vos règles dans l'interface.

#### OnPremise

En solution onPremise, vous pouvez utiliser deux procédures pour déployer vos règles :

- comme pour le mode Saas, vous pouvez utiliser l'interface d'Altazion Office pour écrire vos règles
- vous pouvez créer et déposer un fichier dans votre dossier [d'extensibilité "logistique"](https://aide.altazion.com/fr-fr/administration/onpremise/dossier.html#dossiers-dextensibilit%C3%A9). Le fichier devra se nommer :

    {EXTFOLDER}\bin\oms-rulesets.xml

> [!NOTE]
> Vous pourrez utiliser cette seconde solution pour réaliser des déploiements depuis un système de gestion de source via un build CI/DevOps par exemple. 

