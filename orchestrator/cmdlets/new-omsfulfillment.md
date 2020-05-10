# New-OmsFullfilment

Créé un nouvel ordre de préparation (un BPR ou un BPF) à partir d'une liste de lignes de commandes et d'une source d'approvisionnement

Si vous avez déjà calculé une suggestion de préparation pour un ensemble de lignes (par exemple, via Select-OmsOrderLines), vous pouvez simplement créer l'ordre de prépa :

```powershell
    New-OmsFullfilment
        
        $suggestionrows
        
        # valide automatiquement l'ordre de prépa
        -AutoConfirm
```

Si vos lignes n'ont pas encore été affecté à un mode de préparation, vous pouvez créer un ordre en définissant la source :

```powershell
    New-OmsFullfilment
        
        $orderrows
        
        # Le fournisseur drop-shipping qui préparera la commande
        -Supplier $supplier

        # OU le magasin 
        -Store $store

        # OU le dépot de stock
        -Warehouse $depot
        -UseDefaultWarehouse

        # valide automatiquement l'ordre de prépa
        -AutoConfirm
```
> [!WARNING]
> Si vous utilisez cette signature sur des lignes ayant déjà été pré-associées à un mode de préparation, vous remplacerez cette suggestion par la valeur forcée.


## Paramètres

Pour des lignes pré-associées :

|Paramètre|Type|Description|
|---|---|---|
|$suggestion|Pipeline|Une liste de ligne pré-associées à un ou plusieurs modes de préparation. _Vous pouvez aussi passer un objet Order entier_|

Pour des lignes non associées à un mode de prépa :

|Paramètre|Type|Description|
|---|---|---|
|$orderrows|Pipeline|Les lignes à traiter pour créer l'ordre de prépa. Si ces lignes sont pré-associé à un autre mode, celui-ci sera remplacé._Vous pouvez aussi passer un objet Order entier_|
|UseDefaultWarehouse|Switch|[Ne peut pas être utilisé avec les autres Switchs de cette table] Affecte toutes les lignes à une préparation sur stock, dans le dépot par défaut/principal|
|Warehouse|DataObject|[Ne peut pas être utilisé avec les autres Switchs de cette table] Affecte toutes les lignes à une prépa sur stock réalisé dans le dépot passé en valeur de ce paramètre|
|Store|DataObject|[Ne peut pas être utilisé avec les autres Switchs de cette table] Affecte toutes les lignes à une prépa dans le magasin passé en valeur|
|Supplier|DataObject|[Ne peut pas être utilisé avec les autres Switchs de cette table] Affecte toutes les lignes à une prépa Drop-shipping associé au fournisseur passé en tant que valeur|


> [!NOTE]
> Le résultat de Select-OmsOrderLine est un tableau d'objet Order. Si celui-ci ne contient qu'une ligne, vous pouvez le passer en paramètre à New-OmsFulfillmentOrder. Si le paramètre pipeline en entrée contient plus d'un Order, cette commande lancera une exception InvalidOperationException.

> [!IMPORTANT]
> Vous ne pouvez, bien entendu, n'utiliser qu'un seul des paramètres suivants pour un même appel à New-OmsFullfilment :
>    
>    - Store
>    - Supplier
>    - Warehouse
>    - DefaultWarehouse
>
> L'utilisation de plus d'une de ces options résultera en une exception ArgumentException.

Les paramètres communs : 

|Paramètre|Type|Description|
|---|---|---|
|AutoConfirm|Switch|Valide automatiquement l'ordre de préparation pour qu'il soit envoyé ou mis à réalisation|

## Exemple