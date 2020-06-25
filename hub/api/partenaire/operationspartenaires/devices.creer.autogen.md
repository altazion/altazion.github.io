## <span id='creer'>Créer une nouveau device</span>

Créer un nouveau device et en récupère les infos

Url :`[PUT] api/partners/saas/tenants/{tenantId:int}/devices`

Paramètres : 

- **tenantId** (int) : L'identifiant du tenant
- en tant que body, un objet DeviceCreationData : Les infos du device à créer

Type de retour : `DeviceData`

Type(s) de données :

```csharp
class DeviceData
{
	Guid Guid { get; set; }
	string Name { get; set; }
	string StoreName { get; set; }
	string StoreCode { get; set; }
	Guid? StoreGuid { get; set; }
	PosteTypeEcran Kind { get; set; }
	string DeviceCode { get; set; }
}

class DeviceCreationData
{
	string DeviceName { get; set; }
	Guid StoreGuid { get; set; }
	Guid DeviceTypeGuid { get; set; }
}

```
