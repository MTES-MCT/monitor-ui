import type { TreeOption } from '../../src/fields/CheckTreePicker/types'

/**
 * Generates a large tree dataset for performance testing.
 *
 * With default parameters (25 categories, 8 subcategories, 3 items each),
 * this produces 25 + 200 + 600 = 825 total nodes.
 */
export function generateLargeTreeOptions(
  categoryCount: number = 25,
  subcategoriesPerCategory: number = 8,
  itemsPerSubcategory: number = 3
): TreeOption[] {
  const CATEGORY_PREFIXES = [
    'Réglementation', 'Contrôle', 'Surveillance', 'Protection', 'Gestion',
    'Inspection', 'Conservation', 'Exploitation', 'Navigation', 'Sécurité',
    'Transport', 'Environnement', 'Biodiversité', 'Pollution', 'Prévention',
    'Recherche', 'Formation', 'Équipement', 'Infrastructure', 'Communication',
    'Coordination', 'Planification', 'Observation', 'Intervention', 'Analyse',
    'Évaluation', 'Certification', 'Normalisation', 'Documentation', 'Signalement'
  ]

  const CATEGORY_SUFFIXES = [
    'maritime', 'côtière', 'portuaire', 'hauturière', 'littorale',
    'sous-marine', 'fluviale', 'estuarienne', 'insulaire', 'pélagique',
    'benthique', 'halieutique', 'aquacole', 'océanique', 'lagunaire'
  ]

  const SUBCATEGORY_THEMES = [
    'Obligations déclaratives', 'Mesures techniques', 'Contrôle opérationnel',
    'Suivi des captures', 'Marquage et identification', 'Zones réglementées',
    'Périodes autorisées', 'Engins conformes', 'Documentation requise',
    'Système de surveillance', 'Traçabilité', 'Certification',
    'Débarquement', 'Transbordement', 'Quotas et limites',
    'Espèces protégées', 'Tailles minimales', 'Rejets obligatoires'
  ]

  const categories: TreeOption[] = []

  for (let i = 0; i < categoryCount; i++) {
    const prefix = CATEGORY_PREFIXES[i % CATEGORY_PREFIXES.length]!
    const suffix = CATEGORY_SUFFIXES[i % CATEGORY_SUFFIXES.length]!
    const categoryLabel = `${prefix} ${suffix}`
    const categoryValue = `cat_${i}`

    const subcategories: TreeOption[] = []

    for (let j = 0; j < subcategoriesPerCategory; j++) {
      const themeIndex = (i * subcategoriesPerCategory + j) % SUBCATEGORY_THEMES.length
      const theme = SUBCATEGORY_THEMES[themeIndex]!
      const subLabel = `${theme} - ${categoryLabel}`
      const subValue = `sub_${i}_${j}`

      const items: TreeOption[] = []

      for (let k = 0; k < itemsPerSubcategory; k++) {
        const code = 10000 + i * 1000 + j * 10 + k
        items.push({
          label: `${code} - ${theme} : disposition ${k + 1} relative à ${categoryLabel.toLowerCase()}`,
          value: code
        })
      }

      subcategories.push({
        children: items,
        label: subLabel,
        value: subValue
      })
    }

    categories.push({
      children: subcategories,
      label: categoryLabel,
      value: categoryValue
    })
  }

  return categories
}
