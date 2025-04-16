export const TAGS = (childrenKey: string = 'children') => [
  {
    label: 'Pollution marine',
    value: 'pollution_marine',
    [childrenKey]: [
      { label: 'Déchets plastiques', value: 'dechets_plastiques' },
      { label: 'Marées noires', value: 'marees_noires' },
      { label: 'Rejets industriels', value: 'rejets_industriels' },
      { label: 'Pollution chimique', value: 'pollution_chimique' },
      { label: 'Microplastiques', value: 'microplastiques' },
      { label: 'Contamination radioactive', value: 'contamination_radioactive' },
      { label: 'Pollution sonore sous-marine', value: 'pollution_sonore' },
      { label: 'Eutrophisation', value: 'eutrophisation' }
    ]
  },
  {
    label: 'Biodiversité marine',
    value: 'biodiversite_marine',
    [childrenKey]: [
      { label: 'Protection des coraux', value: 'protection_coraux' },
      { label: 'Espèces en danger', value: 'especes_en_danger' },
      { label: 'Écosystèmes marins', value: 'ecosystemes_marins' },
      { label: 'Pêche durable', value: 'peche_durable' },
      { label: 'Faune abyssale', value: 'faune_abyssale' },
      { label: 'Récifs artificiels', value: 'recifs_artificiels' },
      { label: 'Herbiers marins', value: 'herbiers_marins' },
      { label: 'Migrations animales marines', value: 'migrations_animales' }
    ]
  },
  {
    label: 'Changement climatique et océan',
    value: 'changement_climatique_ocean',
    [childrenKey]: [
      { label: 'Acidification des océans', value: 'acidification_oceans' },
      { label: 'Réchauffement des eaux', value: 'rechauffement_eaux' },
      { label: 'Montée du niveau de la mer', value: 'montee_niveau_mer' },
      { label: 'Blanchissement des coraux', value: 'blanchissement_coraux' },
      { label: 'Fonte des glaciers', value: 'fonte_glaciers' },
      { label: 'Changements de courants marins', value: 'changements_courants' },
      { label: 'Perturbation des cycles de reproduction', value: 'perturbation_reproduction' },
      { label: 'Émissions de gaz à effet de serre marins', value: 'emissions_gaz_marins' }
    ]
  },
  {
    label: 'Activités humaines et océan',
    value: 'activites_humaines_ocean',
    [childrenKey]: [
      { label: 'Tourisme responsable', value: 'tourisme_responsable' },
      { label: 'Énergies marines renouvelables', value: 'energies_marines' },
      { label: 'Transport maritime durable', value: 'transport_maritime' },
      { label: 'Aquaculture responsable', value: 'aquaculture_responsable' },
      { label: 'Exploitation minière sous-marine', value: 'exploitation_miniere' },
      { label: 'Réglementation des eaux internationales', value: 'reglementation_eaux' },
      { label: 'Protection des zones marines', value: 'protection_zones_marines' },
      { label: 'Gestion des ressources marines', value: 'gestion_ressources_marines' }
    ]
  },
  {
    label: 'Technologies et innovations marines',
    value: 'technologies_innovations_marines',
    [childrenKey]: [
      { label: 'Robotique sous-marine', value: 'robotique_sous_marine' },
      { label: 'Cartographie des fonds marins', value: 'cartographie_fonds_marins' },
      { label: 'Biotechnologies marines', value: 'biotechnologies_marines' },
      { label: 'Surveillance des océans', value: 'surveillance_oceans' }
    ]
  },
  {
    label: 'Éducation et sensibilisation',
    value: 'education_sensibilisation'
  }
]
