export const FISHING_REGULATIONS = (childrenKey: string = 'children', labelKey = 'label', valueKey = 'value') => [
  {
    [labelKey]: 'Mesures techniques et de conservation',
    [valueKey]: 'mesures_techniques_conservation',
    [childrenKey]: [
      {
        [labelKey]: 'Autorisation Débarquement',
        [valueKey]: 'autorisation_debarquement',
        [childrenKey]: [
          {
            [labelKey]: '27718 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors d\'un port désigné',
            [valueKey]: '27718'
          },
          {
            [labelKey]: '27715 – Débarquement sans autorisation de produits de la pêche maritime et de l\'aquaculture marine',
            [valueKey]: '27715'
          },
          {
            [labelKey]: '27721 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors des horaires autorises',
            [valueKey]: '27721'
          },
          {
            [labelKey]: '10400 – Débarquement de produits de pêche maritime et d\'aquaculture marine en dehors des lieux déterminés',
            [valueKey]: '10400'
          }
        ]
      },
      {
        [labelKey]: 'AIS',
        [valueKey]: 'ais',
        [childrenKey]: [
          {
            [labelKey]: '27718 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors d\'un port désigné',
            [valueKey]: '27718_ais'
          },
          {
            [labelKey]: '27715 – Débarquement sans autorisation de produits de la pêche maritime et de l\'aquaculture marine',
            [valueKey]: '27715_ais'
          },
          {
            [labelKey]: '27721 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors des horaires autorises',
            [valueKey]: '27721_ais'
          },
          {
            [labelKey]: '10400 – Débarquement de produits de pêche maritime et d\'aquaculture marine en dehors des lieux déterminés',
            [valueKey]: '10400_ais'
          }
        ]
      }
    ]
  },
  {
    [labelKey]: 'Obligation déclaratives',
    [valueKey]: 'obligation_declaratives',
    [childrenKey]: [
      {
        [labelKey]: 'Autorisation Débarquement',
        [valueKey]: 'autorisation_debarquement_ob',
        [childrenKey]: [
          {
            [labelKey]: '27718 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors d\'un port désigné',
            [valueKey]: '27718_ob'
          },
          {
            [labelKey]: '27715 – Débarquement sans autorisation de produits de la pêche maritime et de l\'aquaculture marine',
            [valueKey]: '27715_ob'
          },
          {
            [labelKey]: '27721 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors des horaires autorises',
            [valueKey]: '27721_ob'
          },
          {
            [labelKey]: '10400 – Débarquement de produits de pêche maritime et d\'aquaculture marine en dehors des lieux déterminés',
            [valueKey]: '10400_ob'
          }
        ]
      },
      {
        [labelKey]: 'AIS',
        [valueKey]: 'ais_ob',
        [childrenKey]: [
          {
            [labelKey]: '27718 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors d\'un port désigné',
            [valueKey]: '27718_ais_ob'
          },
          {
            [labelKey]: '27715 – Débarquement sans autorisation de produits de la pêche maritime et de l\'aquaculture marine',
            [valueKey]: '27715_ais_ob'
          },
          {
            [labelKey]: '27721 – Débarquement de produits de la pêche maritime et de l\'aquaculture marine hors des horaires autorises',
            [valueKey]: '27721_ais_ob'
          },
          {
            [labelKey]: '10400 – Débarquement de produits de pêche maritime et d\'aquaculture marine en dehors des lieux déterminés',
            [valueKey]: '10400_ais_ob'
          }
        ]
      }
    ]
  }
]
