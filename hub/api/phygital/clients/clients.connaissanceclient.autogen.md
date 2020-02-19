## <span id='connaissanceclient'>Obtenir les données de connaissance client</span>

Obtient les données de connaissance client

Url :`[GET] v2/customers/{personGuid:guid}/knowledge/details`

Paramètres : 

- **personGuid** (Guid)

Type de retour : `PersonDetails`

Type(s) de données :

```csharp
class PersonDetails
{
	Guid Guid { get; set; }
	string FullName { get; set; }
	string FirstName { get; set; }
	string FamilyName { get; set; }
	LoyaltyInfo LoyaltyInfos { get; set; }
	CPointSoftware.Equihira.Business.Crm.PersonInterests[] Interests { get; set; }
	CPointSoftware.Equihira.Business.Crm.PersonCategory[] Categories { get; set; }
	CPointSoftware.Equihira.Business.Crm.PersonLinkedPerson[] LinkedPersons { get; set; }
}

class LoyaltyInfo
{
	CPointSoftware.Equihira.Business.Crm.LoyaltyDevice[] Devices { get; set; }
}

class LoyaltyDevice
{
	LoyaltyDeviceKind Kind { get; set; }
	string Id { get; set; }
	DateTime? LastCheck { get; set; }
	DateTime? EndOfValidity { get; set; }
}

enum LoyaltyDeviceKind
{
	LoyaltyCart, // =0
	RfidNumber, // =1
	CustomerNumber, // =2
	PhoneIdentifier, // =3
	BeaconIdentifier, // =4
}

class PersonInterests
{
	string Code { get; set; }
	String[] Keywords { get; set; }
	Guid? InterestGuid { get; set; }
}

class PersonCategory
{
	Guid CategoryGuid { get; set; }
	string Label { get; set; }
	string Code { get; set; }
}

class PersonLinkedPerson
{
	LinkedPersonKind Kind { get; set; }
	Guid? Guid { get; set; }
	Guid? PersonGuid { get; set; }
	string CustomDataKind { get; set; }
	string FullName { get; set; }
	string FirstName { get; set; }
	string FamilyName { get; set; }
	string CustomData { get; set; }
}

enum LinkedPersonKind
{
	OtherAccount, // =0
	ParentAccount, // =1
	SubAccount, // =2
	ExternalLink, // =3
	CustomData, // =4
}

```
