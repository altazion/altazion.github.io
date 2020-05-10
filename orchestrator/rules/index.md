# Moteur de règles de préparation

## Fonctionnement général

## Règles standards

## Ecrire une règle personnalisée

### Cmdlet standards

|Commandes|Description|
|---|---|
|Confirm-OmsFullFilment||
|[Exit-OmsRule](../cmdlets/exit-omsrule.md)|Termine l'exécution de la règle actuelle, si la commande n'est pas totalement préparée, les produits restants sont placés en reliquat. _remplace Exit-OmsRuleSet_|
|Invoke-OmsExternalApi||
|[Get-OmsSortAlgorithm](../cmdlets/get-omssortalgorithm.md)||
|[Get-OmsSuppliers](../cmdlets/get-omssuppliers.md)||
|[New-OmsFulfillment](../cmdlets/new-omsfulfillment.md)||
|[Select-OmsOrderLines](../cmdlets/select-omsorderlines.md)||
|[Trace-OmsOnOrder](../cmdlets/trace-omsonorder.md)||
|[Update-OmsFulfillment](../cmdlets/update-omsfulfillment.md)||
|[Update-OmsOrder](../cmdlets/update-omsorder.md)||

### Développer une nouvelle Cmdlet

=> module powershell core
=> doit être hébérgé sur le cloud pour le SaaS
=> Onprem : doit être dans le dossier bin ou dans le dossier ext de la partie logistique

### Intégrer un service externe

### Deployer votre règle