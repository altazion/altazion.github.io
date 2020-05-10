# Moteur de règles de préparation

## Fonctionnement général

## Règles standards

## Ecrire une règle personnalisée

### Cmdlet standards

|Commandes|Description|
|---|---|
|Confirm-OmsFullFilment||
|[Exit-OmsRule](../cmdlets/exit-omsrule.md)|Termine l'exécution de la règle actuelle, par défaut sans enregistrer le résultat.|
|Invoke-OmsExternalApi|Invoke une api externe pour traiter un bon de commande|
|[Get-OmsSortAlgorithm](../cmdlets/get-omssortalgorithm.md)|-|
|[Get-OmsSupplier](../cmdlets/get-omssupplier.md)|Obtient une liste de fournisseur de marchandises|
|[New-OmsFulfillment](../cmdlets/new-omsfulfillment.md)|Crée un nouvel ordre de préparation|
|[Select-OmsOrderLines](../cmdlets/select-omsorderlines.md)|Obtient un ensemble de ligne de commandes, en les associants éventuellement à un sourcing|
|[Trace-OmsOnOrder](../cmdlets/trace-omsonorder.md)|Ajoute une trace dans le dossier du bon de commande|
|[Update-OmsFulfillment](../cmdlets/update-omsfulfillment.md)|Met à jour un ordre de préparation|
|[Update-OmsOrder](../cmdlets/update-omsorder.md)|Met à jour un bon de commande|

### Développer une nouvelle Cmdlet

=> module powershell core
=> doit être hébérgé sur le cloud pour le SaaS
=> Onprem : doit être dans le dossier bin ou dans le dossier ext de la partie logistique

### Intégrer un service externe

### Deployer votre règle