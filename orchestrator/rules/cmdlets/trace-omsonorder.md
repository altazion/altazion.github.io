# Trace-OmsOnOrder

Ajoute une trace dans la partie "évènements : logistique" du bon de commande.

```powershell
    Trace-OmsOnOrder
        $trace

        -Order {order}
```

Utilisée sans paramètre, cette Cmdlet ajoute une trace sur le bon de commande en train d'etre traité. Pour forcer la trace sur un autre bon de commande (par exemple la commande mère d'une commande ouverte), vous devez lui passer le paramètre -Order

## Paramètres

|Paramètre|Type|Description|
|---|---|---|
|$trace|Pipeline|La trace à ajouter|
|Order|DataObject|(optionnel) le bon de commande sur lequel effectuer la trace. valeur par défaut : le bon de commande actif|

## Exemples

```powershell
Trace-OmsOnOrder 'Création d''un bpr pour ' $drop.Supplier.Code ' : ' $bpr.Number
```