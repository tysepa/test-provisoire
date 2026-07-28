export const SIGNS_DATA = [
  {
    id: "sign_danger_turn_right",
    category: "danger",
    code: "A, 1a",
    name: { rw: "Ikoni ry'iseke ry kuryo", en: "Sharp curve to the right", fr: "Virage dangereux à droite" },
    description: { rw: "Kigaragaza ikoni rikomeye ugana iburyo. Gabanya umuvuduko.", en: "Warns drivers of a sharp right curve ahead.", fr: "Avertit d'un virage serré à droite." },
    svgType: "danger_turn_right"
  },
  {
    id: "sign_danger_pedestrian",
    category: "danger",
    code: "A, 13",
    name: { rw: "Ahantu hagenewe abanyamaguru", en: "Pedestrian crossing ahead", fr: "Passage pour piétons" },
    description: { rw: "Kikwereka ko ugana abanyamaguru bambuka umuhanda.", en: "Indicates a pedestrian crossing ahead.", fr: "Indique un passage piétons." },
    svgType: "danger_pedestrian"
  },
  {
    id: "sign_prohib_no_entry",
    category: "prohibition",
    code: "B, 1",
    name: { rw: "Ntabwo ubwemererwa kwinjira", en: "No entry for all vehicles", fr: "Accès interdit" },
    description: { rw: "Kibujijwe kwinjira mu muhanda w'ibinyabiziga.", en: "Prohibits all vehicles from entering.", fr: "Interdiction d'entrer." },
    svgType: "prohib_no_entry"
  },
  {
    id: "sign_prohib_speed_50",
    category: "prohibition",
    code: "B, 4",
    name: { rw: "Umuvuduko ntarengwa wa 50 km/h", en: "Speed limit 50 km/h", fr: "Vitesse 50 km/h" },
    description: { rw: "Bibuza kurenza umuvuduko wa 50 km/h mu mujyi.", en: "Max speed limit of 50 km/h in urban areas.", fr: "Vitesse maximale 50 km/h." },
    svgType: "prohib_speed_50"
  },
  {
    id: "sign_mand_roundabout",
    category: "mandatory",
    code: "C, 3",
    name: { rw: "Ihuriro ry'inzira zizengurutse (Rond-point)", en: "Compulsory roundabout", fr: "Sens giratoire" },
    description: { rw: "Gihata kugenda uzenguruka ku rond-point.", en: "Mandatory roundabout movement.", fr: "Sens giratoire obligatoire." },
    svgType: "mand_roundabout"
  },
  {
    id: "sign_priority_stop",
    category: "priority",
    code: "B, 2a",
    name: { rw: "STOP - Hagarara unarihereze inzira", en: "STOP sign - Full stop mandatory", fr: "STOP - Arrêt obligatoire" },
    description: { rw: "Bitegetswe guhagarara burundu imbere ya STOP.", en: "Mandatory full stop and yield right of way.", fr: "Arrêt obligatoire à l'intersection." },
    svgType: "priority_stop"
  }
];
