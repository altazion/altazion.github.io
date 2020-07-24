L'interface [`IModePaiement`](../api/CPointSoftware.Equihira.Extensibility.Process.IModePaiement.html) est le noyau dur de l'objet métier. Les méthodes de cette interface permettent de savoir si un règlement est modifiable, calculer la possibilité d'un règlement, vérifier l'état d'un règlement, effectuer une annulation ou un remboursement, valider ou simuler un règlement et une méthode qui permet d'initialiser le mode de règlement. Les méthodes à implémenter et leurs contenus sont fonction des capacité de votre mode de paiement et du prestataire associé.

    void Init(ModeReglement parameters);

Cette méthode est à implémenter pour initialiser le module, en fonction de ce qui est stocké en base en termes d'informations de configuration (par exemple les identifiants de connexion).

    bool EstModifiable(IntentionReglementBase reglement);

Lorsque vous implémentez cette méthode, vous devrez simplement renvoyer _true_ si le règlement qui vous est passé est modifiable.

    decimal CaculerConsommationPossible(IntentionReglementBase reglement, decimal montantAConsommer);

Cette méthode est à implémenter pour permettre à la gestion commerciale de déterminer comment optimiser les possibilités de modification des règlements. Il vous faudra y calculer le montant le plus proche auquel vous pouvez placer le règlement pour s'approcher du montant à consommer.

Par exemple, si vous aviez un règlement unique sur une commande, d'un montant de 80€ et qu'un manquant s'est produit pour 25€, vous recevrez un appel :

`votreMode.CaculerConsommationPossible(reglement /* = votre reg à 80€ */, 55M);`

Vous pourrez répondre : 

- le même montant que votre montant d'origine (80€) si vous n'êtes pas/plus en mesure de modifier le règlement
- le montant demandé si vous pouvez modifier le règlement pour le porter à 55€
- ou un montant spécifique à votre fonctionnement interne, par exemple, si vous ne gérez que des bons d'achats de 20€, vous pouvez renvoyer 60€ pour vous rapprocher le plus possible du montant demandé.

    EtatReglement VerifierEtat(IntentionReglementBase reglement);

L'implémentation de cette méthode doit aller vérifier l'état du règlement et retourner une valeur parmis :
- Regle
- PartiellementRegle
- EcheanceInconnue
- Confirme
- Recu

La plupart des implémentations de l'interface lancent un `NotImplementedException`.

    ResultatValidationPaiement Valider(IntentionReglementBase[] reglement, DateTime nouvelleEcheance, decimal nouveauMontant, bool mettreEnRemise);

Il s'agit de la méthode principale du module : vous recevez un ensemble de règlement correspondant à une seule et unique opération de vente (commande ou facture), un nouveau montant et une nouvelle échéance. Votre module doit alors essayer d'appliquer le montant correspondant sur les règlements (et le partager entre ces règlements). Pour cela, vous devez faire toutes les modifications nécessaires auprès du prestataire de paiement et les lister dans les opérations réalisées.

Par exemple, l'implémentation pour Paypal est la suivante :

    public ResultatValidationPaiement Valider(IntentionReglementBase[] reglement, DateTime nouvelleEcheance, decimal nouveauMontant, bool mettreEnRemise)
    {
        if (reglement.Length == 0)
            return null;

        ResultatValidationPaiement pm = new ResultatValidationPaiement(reglement[0].ModeReglementGuid, "", nouveauMontant);
        decimal current = GetCurrentAmount(reglement[0].NumPiece, reglement[0].DateEcheance);
        if (current <= nouveauMontant)
        {
            // le montant est déjà OK
            return pm;
        }
        else
        {
            // on calcule le montant à rembourser et on 
            // déclenche l'opération
            decimal aRbs = current - nouveauMontant;
            decimal montantRembourse;
            if (Rembourser(reglement[0].NumPiece, reglement[0].DateEcheance, aRbs, nouveauMontant==0, out montantRembourse))
            {
                if (montantRembourse >= 0M)
                {
                    if (montantRembourse == aRbs)
                    {
                        pm.Operations.Add(new OperationValidationPaiement(reglement[0].Guid, TypeOperation.Remboursement, aRbs, reglement[0].DateEcheance, null));
                    }
                    else
                        throw new BusinessException(CPointSoftware.Equihira.Business.Strings.Error_Paypal_ModifAVerifier);
                }
                else
                    throw new BusinessException(CPointSoftware.Equihira.Business.Strings.Error_Paypal_ModifAVerifier);
            }
            else 
            {
                throw new BusinessException(CPointSoftware.Equihira.Business.Strings.Error_Paypal_NonModifiable);
            }
        }

        return pm;
    }

La méthode `Simuler` est identique mais est à implémenter sans réaliser les opérations de modifications : elle sera appelée dans des cas assez rares pour estimer le résultat d'une validation.

    public OperationValidationPaiement[] Rembourser(IntentionReglementBase[] reglement, decimal montantARembourser)

Cette méthode est similaire à celle de validation, mais forcent le fait de réaliser un remboursement. Elle sera par exemple utilisé lors du traitement d'un SAV, en tant que remboursement d'un avoir.

    public OperationValidationPaiement[] Annuler(IntentionReglementBase[] reglement)

Implémentez cette méthode pour annuler totalement les intentions de règlement passées en paramètre. Vous n'avez aucune vérification à faire : cette méthode ne sera jamais appelée pour autre chose que pour retirer tous les règlements.
