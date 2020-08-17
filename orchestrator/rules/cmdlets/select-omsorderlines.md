# Select-OmsOrderLines

Selectionne une liste de lignes correspondant à des critères. Si l'un de ces critères permet d'associer les lignes à un mode et/ou à une source précise de préparation, les lignes retournées sont associées à celui-ci.

```powershell
    Select-OmsOrderLines
        $order

        # définit le type de filtre
        -FilterType {TypeDeFiltre}
        # et la valeur du filtre
        -FilterValue {ValeursAcceptees}
        
        # limite à 
```

Le type de retour de cette commande est un Order (ou un ensemble d'order si vous utilisez le switch -GroupBy, cf. ci-dessous) contenant uniquement les lignes selectionnées.

> [!NOTE]
> Les lignes déjà associées à un ordre de préparation "ferme" ne sont pas retournées par cette méthode, sauf si vous utilisez le paramètre `-IgnoreFulfillment`

## Paramètres

|Paramètre|Type|Description|
|---|---|---|
|$order|Pipeline|Le bon de commande dans lequel réaliser la sélection|
