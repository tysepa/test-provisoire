// DriveRwanda - Rwandan Road Sign Catalog (Ibyapa by'omuhanda mu Rwanda)

export const SIGNS_DATA = [
  // --- DANGER / WARNING SIGNS (Ibyapa by'Inkubaguzi / Inkwarning) ---
  {
    id: "sign_danger_turn_right",
    category: "danger",
    code: "A, 1a",
    name: {
      rw: "Ikoni ry'iseke ry kuryo",
      en: "Sharp curve to the right",
      fr: "Virage dangereux à droite"
    },
    description: {
      rw: "Kigaragaza ikoni rikomeye ugana iburyo. Umutwara agomba kugabanya umuvuduko no kumva neza icyerekezo.",
      en: "Warns drivers of a sharp right curve ahead. Slow down and maintain lane discipline.",
      fr: "Avertit d'un virage serré à droite. Réduisez votre vitesse."
    },
    svgType: "danger_turn_right"
  },
  {
    id: "sign_danger_turn_left",
    category: "danger",
    code: "A, 1b",
    name: {
      rw: "Ikoni ry'iseke ry kumoso",
      en: "Sharp curve to the left",
      fr: "Virage dangereux à gauche"
    },
    description: {
      rw: "Kigaragaza ikoni rikomeye ugana ibumoso. Gabanya umuvuduko.",
      en: "Warns drivers of a sharp left curve ahead. Reduce speed.",
      fr: "Avertit d'un virage serré à gauche. Réduisez la vitesse."
    },
    svgType: "danger_turn_left"
  },
  {
    id: "sign_danger_double_curve",
    category: "danger",
    code: "A, 2a",
    name: {
      rw: "Amakoni yikurikiranya (Iriburyo bwa mbere)",
      en: "Double curve (First to right)",
      fr: "Succession de virages dont le premier est à droite"
    },
    description: {
      rw: "Kikwereka ko hari amakoni abiri cyangwa menshi yikurikiranya. Ikoni rya mbere rirema iburyo.",
      en: "Series of dangerous curves ahead, starting with a right turn.",
      fr: "Série de virages dangereux dont le premier est à droite."
    },
    svgType: "danger_double_curve"
  },
  {
    id: "sign_danger_pedestrian",
    category: "danger",
    code: "A, 13",
    name: {
      rw: "Ahantu hagenewe abanyamaguru",
      en: "Pedestrian crossing ahead",
      fr: "Passage pour piétons"
    },
    description: {
      rw: "Kikwereka ko ugana abanyamaguru bambuka umuhanda. Ba maso kandi witegure guhagarara.",
      en: "Indicates a pedestrian crossing ahead. Yield to pedestrians.",
      fr: "Indique la présence d'un passage pour piétons."
    },
    svgType: "danger_pedestrian"
  },
  {
    id: "sign_danger_children",
    category: "danger",
    code: "A, 14",
    name: {
      rw: "Ahantu haba abana (Ishuri cyangwa ikibuga)",
      en: "Children crossing / School zone",
      fr: "Endroit fréquenté par des enfants"
    },
    description: {
      rw: "Gikunze kuba hafi y'amashuri. Gabanya umuvuduko cyane kuko abana bashobora kwinjira mu muhanda batabitekereje.",
      en: "School zone or playground. Drive extra cautiously as children may run onto the road.",
      fr: "Zone scolaire. Soyez extrêmement vigilant."
    },
    svgType: "danger_children"
  },
  {
    id: "sign_danger_steep_descent",
    category: "danger",
    code: "A, 3",
    name: {
      rw: "Manuka ikomeye (Descente dangereuse)",
      en: "Steep descent / Steep hill down",
      fr: "Descente dangereuse"
    },
    description: {
      rw: "Manuka y'umuvuduko. Koresha feri y'umutego (frein moteur) kugirango feri z'ibiziga zitashya.",
      en: "Steep slope downwards. Use engine braking to avoid brake overheating.",
      fr: "Descente à forte pente. Utilisez le frein moteur."
    },
    svgType: "danger_steep_descent"
  },
  {
    id: "sign_danger_road_narrows",
    category: "danger",
    code: "A, 4a",
    name: {
      rw: "Umuhanda urafungana no ku mpande zose",
      en: "Road narrows from both sides",
      fr: "Chaussée rétrécie des deux côtés"
    },
    description: {
      rw: "Umuhanda uri imbere uba mutoya nko ku mpande zombi. Banza urebe ko urimo kunyuranwa mu mutekano.",
      en: "Road width decreases ahead on both left and right sides.",
      fr: "La chaussée se rétrécit des deux côtés."
    },
    svgType: "danger_road_narrows"
  },

  // --- PROHIBITION SIGNS (Ibyapa Bibuza) ---
  {
    id: "sign_prohib_no_entry",
    category: "prohibition",
    code: "B, 1",
    name: {
      rw: "Ntabwo ubwemererwa kwinjira (Sens Interdit)",
      en: "No entry for all vehicles",
      fr: "Accès interdit à tout véhicule"
    },
    description: {
      rw: "Kibujijwe kwinjira mu muhanda uwo ari wo wose w'ibinyabiziga uhereye kuri iki cyapa.",
      en: "Prohibits all vehicles from entering the street from this direction.",
      fr: "Interdiction d'entrer pour tous les véhicules."
    },
    svgType: "prohib_no_entry"
  },
  {
    id: "sign_prohib_speed_50",
    category: "prohibition",
    code: "B, 4",
    name: {
      rw: "Umuvuduko ntarengwa wa 50 km/h",
      en: "Speed limit 50 km/h",
      fr: "Limitation de vitesse 50 km/h"
    },
    description: {
      rw: "Bibuza kurenza umuvuduko wa kilometero 50 mu isaha. Kuri zone y'umujyi mu Rwanda.",
      en: "Maximum speed limit of 50 km/h. Mandatory inside urban areas in Rwanda.",
      fr: "Vitesse maximale autorisée 50 km/h."
    },
    svgType: "prohib_speed_50"
  },
  {
    id: "sign_prohib_no_overtaking",
    category: "prohibition",
    code: "B, 3",
    name: {
      rw: "Bibujijwe kunyuranaho ku binyabiziga bihinguranya",
      en: "No overtaking allowed",
      fr: "Interdiction de dépasser"
    },
    description: {
      rw: "Bibuza ikinyabiziga icyo ari cyose kurenza ikindi gifite moteri, uretse amagare cyangwa velomoteurs z'ibiziga biwirije.",
      en: "Overtaking motor vehicles is strictly forbidden.",
      fr: "Interdiction de dépasser tous les véhicules à moteur."
    },
    svgType: "prohib_no_overtaking"
  },
  {
    id: "sign_prohib_no_parking",
    category: "prohibition",
    code: "B, 7a",
    name: {
      rw: "Bibujijwe guhagarara umwanya munini (Stationnement interdit)",
      en: "No parking",
      fr: "Stationnement interdit"
    },
    description: {
      rw: "Bibuza ikinyabiziga guhagarara umwanya munini. Guhagarara akanya gato gusa bizewe.",
      en: "Parking is forbidden. Temporary stopping to drop off passengers is allowed.",
      fr: "Stationnement interdit."
    },
    svgType: "prohib_no_parking"
  },
  {
    id: "sign_prohib_no_stopping",
    category: "prohibition",
    code: "B, 7b",
    name: {
      rw: "Bibujijwe guhagarara akanya gato n'akanini (Arrêt et stationnement interdits)",
      en: "No stopping or parking",
      fr: "Arrêt et stationnement interdits"
    },
    description: {
      rw: "Bibuza guhagarara burundu, habe n'akanya gato gashoboka.",
      en: "Stopping for any reason is completely prohibited.",
      fr: "Arrêt et stationnement strictement interdits."
    },
    svgType: "prohib_no_stopping"
  },

  // --- MANDATORY / OBLIGATION SIGNS (Ibyapa Bihatira) ---
  {
    id: "sign_mand_right_turn",
    category: "mandatory",
    code: "C, 1a",
    name: {
      rw: "Icyerekezo gitegetswe iburyo",
      en: "Mandatory right turn",
      fr: "Direction obligatoire à droite"
    },
    description: {
      rw: "Gihata abatwara ibinyabiziga kukatira iburyo kuri icyo ihuriro.",
      en: "Drivers must turn right at the intersection.",
      fr: "Obligation de tourner à droite."
    },
    svgType: "mand_right_turn"
  },
  {
    id: "sign_mand_roundabout",
    category: "mandatory",
    code: "C, 3",
    name: {
      rw: "Ihuriro ry'inzira zizengurutse (Rond-point)",
      en: "Compulsory roundabout",
      fr: "Sens obligatoire giratoire"
    },
    description: {
      rw: "Gihata kugenda uzenguruka ugana k'umoso w'ikitegererezo.",
      en: "Mandatory roundabout movement. Vehicles already in the roundabout have priority.",
      fr: "Carrefour à sens giratoire obligatoire."
    },
    svgType: "mand_roundabout"
  },
  {
    id: "sign_mand_min_speed_30",
    category: "mandatory",
    code: "C, 4",
    name: {
      rw: "Umuvuduko muto usabwa 30 km/h",
      en: "Minimum speed 30 km/h",
      fr: "Vitesse minimale obligatoire 30 km/h"
    },
    description: {
      rw: "Gihata kuguhamya umuvuduko utari munsi ya 30 km/h.",
      en: "Vehicles must maintain a minimum speed of at least 30 km/h.",
      fr: "Vitesse minimale obligatoire de 30 km/h."
    },
    svgType: "mand_min_speed_30"
  },

  // --- PRIORITY SIGNS (Ibyapa by'Ubusumbane) ---
  {
    id: "sign_priority_stop",
    category: "priority",
    code: "B, 2a",
    name: {
      rw: "STOP - Hagarara unarihereze inzira",
      en: "STOP sign - Full stop mandatory",
      fr: "STOP - Arrêt obligatoire"
    },
    description: {
      rw: "Bitegetswe guhagarara burundu imbere y'umurongo wa STOP unaza umuhanda munini.",
      en: "Drivers must come to a complete stop and yield to all traffic on the main road.",
      fr: "Arrêt obligatoire et céder le passage à tous les véhicules."
    },
    svgType: "priority_stop"
  },
  {
    id: "sign_priority_give_way",
    category: "priority",
    code: "B, 1",
    name: {
      rw: "Tanga inzira (Cédez le passage)",
      en: "Yield / Give Way",
      fr: "Céder le passage"
    },
    description: {
      rw: "Tanga inzira ku binyabiziga bizaza mu muhanda ugaragiye. Guhagarara biba ngombwa niba hari ikinyabiziga cyaza.",
      en: "Yield right of way to vehicles on the intersecting road. Stop if necessary.",
      fr: "Cédez le passage aux véhicules circulant sur la voie prioritaire."
    },
    svgType: "priority_give_way"
  },
  {
    id: "sign_priority_main_road",
    category: "priority",
    code: "D, 1a",
    name: {
      rw: "Umuhanda ufite ubusumbane (Route prioritaire)",
      en: "Priority road",
      fr: "Route prioritaire"
    },
    description: {
      rw: "Umushoferi ari mu muhanda ufite uburenganzira bwo kunyura mbele ku mahuriro yose abonetse.",
      en: "Grants right of way at upcoming intersections.",
      fr: "Indique que la route bénéficie du caractère prioritaire."
    },
    svgType: "priority_main_road"
  }
];
