# Update-OmsOrder

Applique un ou des ordre(s) de préparation sur un bon de commande afin de mettre à jour ses lignes.

```powershell
    Update-OmsOrder
        $order

        # pour marquer des lignes comme mise en préparation 
        -SetCompleted $ordreprepa
        
        # Annule les lignes restantes (une fois le SetCompleted éventuel appliqué)
        -CancelRemaining
```

## Paramètres

|Paramètre|Type|Description|
|---|---|---|
|$order|Pipeline|(optionel) Le bon de commande à mettre à jour. valeur par défaut : le bon de commande actif|
|SetCompleted|DataObject| (optionel, l'un et/ou l'autre des paramètres SetCompleted, CancelRemaining doit être définit) Applique le flag "mis en préparation" sur toutes les lignes qui matchent entre le bon de commande et l'objet passé en paramètre|
|CancelRemaining|Switch|(optionel, l'un et/ou l'autre des paramètres SetCompleted, CancelRemaining doit être définit) Annule toutes les lignes du bon de commande qui n'ont pas déjà été marquées comme mise en préparation|

> [!NOTE]
> Si le paramètre $order n'est pas fourni, le bon de commande actif est utilisé.

> [!IMPORTANT]
> Si vous passez à la fois -SetCompleted et -CancelRemaining, la validation de la mise en préparation est prioritaire sur l'annulation des lignes.