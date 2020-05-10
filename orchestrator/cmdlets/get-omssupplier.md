# Get-OmsSupplier

Obtient les fournisseurs de marchandises actifs pour une utilisation en drop-shipping ou en ré-approvisionnement.

```powershell
    Get-OmsSupplier
                
        # filtre les fournisseurs retournés
        -Type {TypeFournisseur}
```

## Paramètres

|Paramètre|Type|Description|
|---|---|---|
|Type|Enum|Définit le type de fournisseurs à récupérer. Par défaut : All|

Les types de fournisseurs reconnus :

- `All` : Tous les fournisseurs, quelque soit leur type
- `External`: exclus de la liste les fournisseurs "internes" tels qu'un service d'un groupe

