export const TAGS = (childrenKey: string = 'children', labelKey = 'label', valueKey = 'value') => [
  {
    [labelKey]: 'Pollution marine',
    [valueKey]: 'pollution_marine',
    [childrenKey]: [
      { [labelKey]: 'Déchets plastiques', [valueKey]: 'dechets_plastiques' },
      { [labelKey]: 'Marées noires', [valueKey]: 'marees_noires' },
      { [labelKey]: 'Rejets industriels', [valueKey]: 'rejets_industriels' },
      { [labelKey]: 'Pollution chimique', [valueKey]: 'pollution_chimique' },
      { [labelKey]: 'Microplastiques', [valueKey]: 'microplastiques' },
      { [labelKey]: 'Contamination radioactive', [valueKey]: 'contamination_radioactive' },
      { [labelKey]: 'Pollution sonore sous-marine', [valueKey]: 'pollution_sonore' },
      { [labelKey]: 'Eutrophisation', [valueKey]: 'eutrophisation' }
    ]
  },
  {
    [labelKey]: 'Biodiversité marine',
    [valueKey]: 'biodiversite_marine',
    [childrenKey]: [
      { [labelKey]: 'Protection des coraux', [valueKey]: 'protection_coraux' },
      { [labelKey]: 'Espèces en danger', [valueKey]: 'especes_en_danger' },
      { [labelKey]: 'Écosystèmes marins', [valueKey]: 'ecosystemes_marins' },
      { [labelKey]: 'Pêche durable', [valueKey]: 'peche_durable' },
      { [labelKey]: 'Faune abyssale', [valueKey]: 'faune_abyssale' },
      { [labelKey]: 'Récifs artificiels', [valueKey]: 'recifs_artificiels' },
      { [labelKey]: 'Herbiers marins', [valueKey]: 'herbiers_marins' },
      { [labelKey]: 'Migrations animales marines', [valueKey]: 'migrations_animales' }
    ]
  },
  {
    [labelKey]: 'Changement climatique et océan',
    [valueKey]: 'changement_climatique_ocean',
    [childrenKey]: [
      { [labelKey]: 'Acidification des océans', [valueKey]: 'acidification_oceans' },
      { [labelKey]: 'Réchauffement des eaux', [valueKey]: 'rechauffement_eaux' },
      { [labelKey]: 'Montée du niveau de la mer', [valueKey]: 'montee_niveau_mer' },
      { [labelKey]: 'Blanchissement des coraux', [valueKey]: 'blanchissement_coraux' },
      { [labelKey]: 'Fonte des glaciers', [valueKey]: 'fonte_glaciers' },
      { [labelKey]: 'Changements de courants marins', [valueKey]: 'changements_courants' },
      { [labelKey]: 'Perturbation des cycles de reproduction', [valueKey]: 'perturbation_reproduction' },
      { [labelKey]: 'Émissions de gaz à effet de serre marins', [valueKey]: 'emissions_gaz_marins' }
    ]
  },
  {
    [labelKey]: 'Activités humaines et océan',
    [valueKey]: 'activites_humaines_ocean',
    [childrenKey]: [
      { [labelKey]: 'Tourisme responsable', [valueKey]: 'tourisme_responsable' },
      { [labelKey]: 'Énergies marines renouvelables', [valueKey]: 'energies_marines' },
      { [labelKey]: 'Transport maritime durable', [valueKey]: 'transport_maritime' },
      { [labelKey]: 'Aquaculture responsable', [valueKey]: 'aquaculture_responsable' },
      { [labelKey]: 'Exploitation minière sous-marine', [valueKey]: 'exploitation_miniere' },
      { [labelKey]: 'Réglementation des eaux internationales', [valueKey]: 'reglementation_eaux' },
      { [labelKey]: 'Protection des zones marines', [valueKey]: 'protection_zones_marines' },
      { [labelKey]: 'Gestion des ressources marines', [valueKey]: 'gestion_ressources_marines' }
    ]
  },
  {
    [labelKey]: 'Technologies et innovations marines',
    [valueKey]: 'technologies_innovations_marines',
    [childrenKey]: [
      { [labelKey]: 'Robotique sous-marine', [valueKey]: 'robotique_sous_marine' },
      { [labelKey]: 'Cartographie des fonds marins', [valueKey]: 'cartographie_fonds_marins' },
      { [labelKey]: 'Biotechnologies marines', [valueKey]: 'biotechnologies_marines' },
      { [labelKey]: 'Surveillance des océans', [valueKey]: 'surveillance_oceans' }
    ]
  },
  {
    [labelKey]: 'Éducation et sensibilisation',
    [valueKey]: 'education_sensibilisation'
  }
]
