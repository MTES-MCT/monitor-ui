import { Mission } from '../Mission'

import type { Administration } from '../Administration'
import type { DepartmentArea } from '../DepartmentArea'
import type { Station } from '../Station'

export namespace ControlUnit {
  export interface ControlUnit {
    administration: Administration.AdministrationData
    administrationId: number
    /** Area of intervention for this unit. */
    areaNote: string | undefined
    controlUnitContactIds: number[]
    controlUnitContacts: ControlUnitContactData[]
    controlUnitResourceIds: number[]
    // `ControlUnitResource` and not `ControlUnitResourceData` because we need `base` data for each resource
    controlUnitResources: ControlUnitResource[]
    departmentArea: DepartmentArea.DepartmentArea | undefined
    /** `departmentAreaInseeCode` is the `departmentArea` ID. */
    departmentAreaInseeCode: string | undefined
    id: number
    isArchived: boolean
    name: string
    /** Conditions under which this unit should be contacted. */
    termsNote: string | undefined
  }

  export interface ControlUnitContact {
    controlUnit: ControlUnitData
    controlUnitId: number
    email: string | undefined
    id: number
    isEmailSubscriptionContact: boolean
    isSmsSubscriptionContact: boolean
    name: string
    phone: string | undefined
  }

  export interface ControlUnitResource {
    controlUnit: ControlUnitData
    controlUnitId: number
    id: number
    isArchived: boolean
    name: string
    note: string | undefined
    /** Base64 Data URI. */
    photo: string | undefined
    station: Station.StationData
    stationId: number
    type: ControlUnitResourceType
  }

  // ---------------------------------------------------------------------------
  // Constants

  export enum ControlUnitContactPredefinedName {
    ADJUNCT = 'Adjoint',
    BRIDGE = 'Passerelle',
    COMMANDER = 'Commandant',
    COMMANDER_A = 'Commandant bordée A',
    COMMANDER_B = 'Commandant bordée B',
    CREW_A = 'Équipage A',
    CREW_B = 'Équipage B',
    DML = 'DML',
    DOCK = 'Quai',
    LAND = 'Terre',
    LAND_ON_CALL = 'Permanence terre',
    NEAR_COAST = 'Proche côte',
    OFFICE = 'Bureau de l’unité',
    ONBOARD_PHONE = 'Téléphone de bord',
    ON_CALL = 'Permanence',
    OPERATIONAL_CENTER = 'Centre opérationnel',
    OPERATIONAL_CENTER_HNO = 'Centre opérationnel - HNO', // Heures Non-Ouvrées
    OPERATIONAL_CENTER_HO = 'Centre opérationnel - HO', // Heures Ouvrées
    PERMANENT_CONTACT_ONBOARD = 'Contact permanent à bord',
    SEA = 'Mer',
    SECRETARIAT = 'Secrétariat',
    SERVICE_CHIEF = 'Chef de service',
    UNIT_CHIEF = 'Chef d’unité',
    UNKNOWN = 'Nom de contact à renseigner'
  }

  export enum ControlUnitResourceCategory {
    AIR = 'AIR',
    LAND = 'LAND',
    SEA = 'SEA'
  }
  export const ControlUnitResourceCategoryLabel: Record<ControlUnitResourceCategory, string> = {
    [ControlUnitResourceCategory.AIR]: 'Aérien',
    [ControlUnitResourceCategory.LAND]: 'Terrestre',
    [ControlUnitResourceCategory.SEA]: 'Maritime'
  }

  // Don't forget to mirror any update here in both Postgre & Backend enums.
  export enum ControlUnitResourceType {
    AIRPLANE = 'AIRPLANE',
    BARGE = 'BARGE',
    CAR = 'CAR',
    DRONE = 'DRONE',
    EQUESTRIAN = 'EQUESTRIAN',
    FAST_BOAT = 'FAST_BOAT',
    FRIGATE = 'FRIGATE',
    HELICOPTER = 'HELICOPTER',
    HYDROGRAPHIC_SHIP = 'HYDROGRAPHIC_SHIP',
    KAYAK = 'KAYAK',
    LIGHT_FAST_BOAT = 'LIGHT_FAST_BOAT',
    MINE_DIVER = 'MINE_DIVER',
    MOTORCYCLE = 'MOTORCYCLE',
    NET_LIFTER = 'NET_LIFTER',
    NO_RESOURCE = 'NO_RESOURCE',
    OTHER = 'OTHER',
    PATROL_BOAT = 'PATROL_BOAT',
    PEDESTRIAN = 'PEDESTRIAN',
    PIROGUE = 'PIROGUE',
    RIGID_HULL = 'RIGID_HULL',
    SEA_SCOOTER = 'SEA_SCOOTER',
    SEMI_RIGID = 'SEMI_RIGID',
    SUPPORT_SHIP = 'SUPPORT_SHIP',
    TRAINING_SHIP = 'TRAINING_SHIP',
    TUGBOAT = 'TUGBOAT'
  }
  export const ControlUnitResourceTypeLabel: Record<ControlUnitResourceType, string> = {
    [ControlUnitResourceType.AIRPLANE]: 'Avion',
    [ControlUnitResourceType.BARGE]: 'Barge',
    [ControlUnitResourceType.CAR]: 'Voiture',
    [ControlUnitResourceType.DRONE]: 'Drône',
    [ControlUnitResourceType.EQUESTRIAN]: 'Équestre',
    [ControlUnitResourceType.FAST_BOAT]: 'Vedette',
    [ControlUnitResourceType.FRIGATE]: 'Frégate',
    [ControlUnitResourceType.HELICOPTER]: 'Hélicoptère',
    [ControlUnitResourceType.HYDROGRAPHIC_SHIP]: 'Bâtiment hydrographique',
    [ControlUnitResourceType.KAYAK]: 'Kayak',
    [ControlUnitResourceType.LIGHT_FAST_BOAT]: 'Vedette légère',
    [ControlUnitResourceType.MINE_DIVER]: 'Plongeur démineur',
    [ControlUnitResourceType.MOTORCYCLE]: 'Moto',
    [ControlUnitResourceType.NET_LIFTER]: 'Remonte-filets',
    [ControlUnitResourceType.NO_RESOURCE]: 'Aucun moyen',
    [ControlUnitResourceType.OTHER]: 'Autre',
    [ControlUnitResourceType.PATROL_BOAT]: 'Patrouilleur',
    [ControlUnitResourceType.PEDESTRIAN]: 'Pédestre',
    [ControlUnitResourceType.PIROGUE]: 'Pirogue',
    [ControlUnitResourceType.RIGID_HULL]: 'Coque rigide',
    [ControlUnitResourceType.SEA_SCOOTER]: 'Scooter de mer',
    [ControlUnitResourceType.SEMI_RIGID]: 'Semi-rigide',
    [ControlUnitResourceType.SUPPORT_SHIP]: 'Bâtiment de soutien',
    [ControlUnitResourceType.TRAINING_SHIP]: 'Bâtiment-école',
    [ControlUnitResourceType.TUGBOAT]: 'Remorqueur'
  }

  // List of PAM units identifiers
  // 10141 PAM Gyptis
  // 10404 PAM Iris
  // 10121 PAM Jeanne Barret
  // 10345 PAM Osiris
  // 10080 PAM Themis
  export const PAMControlUnitIds = [10141, 10404, 10121, 10345, 10080]

  // List of ULAM units identifiers
  // 10074 ULAM 2A
  // 10192 ULAM 2B
  // 10194 ULAM 06
  // 10039 ULAM 13
  // 10452 ULAM 14
  // 10255 ULAM 17
  // 10204 ULAM 22
  // 10457 ULAM 29 Brest
  // 10288  ULAM 29 Douarnenez
  // 10225 ULAM 33
  // 10420 ULAM 34/30
  // 10176 ULAM 35
  // 10428 ULAM 44
  // 10210 ULAM 50
  // 10449 ULAM 56
  // 10050 ULAM 59
  // 10318 ULAM 62/80
  // 10364 ULAM 64/40
  // 10303 ULAM 66/11
  // 10423 ULAM 76
  // 10166 ULAM 83
  // 10171 ULAM 85
  // 10169 ULAM 971 Guadeloupe
  // 10327 ULAM 972 Martinique
  // 10265 ULAM 973 Guyane
  // 10183 ULAM 974 Réunion
  // 10430 ULAM 976 Saint Pierre et Miquelon
  // 10047 ULAM 976 Mayotte
  export const ULAMControlUnitIds = [
    10074, 10192, 10194, 10039, 10452, 10255, 10204, 10457, 10288, 10225, 10420, 10176, 10428, 10210, 10449, 10050,
    10318, 10364, 10303, 10423, 10166, 10171, 10169, 10327, 10265, 10183, 10430, 10047
  ]

  // ---------------------------------------------------------------------------
  // Types

  export type ControlUnitData = Omit<
    ControlUnit,
    | 'administration'
    | 'controlUnitContactIds'
    | 'controlUnitContacts'
    | 'controlUnitResourceIds'
    | 'controlUnitResources'
    | 'departmentArea'
  >
  export type NewControlUnitData = Omit<ControlUnitData, 'id'>

  export type ControlUnitContactData = Omit<ControlUnitContact, 'controlUnit'>
  export type NewControlUnitContactData = Omit<ControlUnitContactData, 'id'>

  export type ControlUnitResourceData = Omit<ControlUnitResource, 'controlUnit' | 'station'>
  export type NewControlUnitResourceData = Omit<ControlUnitResourceData, 'id'>

  export type EngagedControlUnit = {
    controlUnit: ControlUnit
    missionSources: Mission.MissionSourceEnum[]
  }
}
