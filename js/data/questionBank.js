// DriveRwanda Comprehensive Driving Exam Question Bank (Ikizamini cy'Icyarabu Question Pool)

export const QUESTION_BANK = [
  {
    id: "q1",
    category: "signs",
    question: {
      rw: "Iki cyapa cy'ishusho y'imfuruka nhatu ifite umurongo w'umutuku kirasobanura iki?",
      en: "What does a triangular road sign with a red border signify?",
      fr: "Que signifie un panneau de forme triangulaire à bord rouge?"
    },
    options: {
      rw: [
        "A. Icyapa kibuza",
        "B. Icyapa cy'inkwarning (DANGER)",
        "C. Icyapa gitegeka (Mandatory)",
        "D. Icyapa cy'amaparakinji"
      ],
      en: [
        "A. A prohibition sign",
        "B. A danger / warning sign",
        "C. A mandatory direction sign",
        "D. A parking recommendation"
      ],
      fr: [
        "A. Une interdiction",
        "B. Un danger / avertissement",
        "C. Une obligation",
        "D. Une zone de stationnement"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ibyapa byose by'imfuruka nhatu z'umutuku biba ari ibyapa by'inkwarning (danger) bitanga umuburo k'ibintu bishobora guteza akaga imbere.",
      en: "Triangular signs with red borders are universal danger/warning signs indicating hazards ahead.",
      fr: "Les panneaux triangulaires à bord rouge sont des panneaux de danger avertissant d'un risque imminent."
    }
  },
  {
    id: "q2",
    category: "priority",
    question: {
      rw: "Ku ihuriro ry'imihanda ryo mu ujyi adafite ibyapa cyangwa amatara, ni nde ufite ubusumbane (Priorité)?",
      en: "At an uncontrolled urban intersection without signs or lights, who has the right of way?",
      fr: "À un carrefour sans signalisation ni feux, qui a la priorité de passage?"
    },
    options: {
      rw: [
        "A. Ikinyabiziga cyihuta cyane",
        "B. Ikinyabiziga gituruka iburyo bwawe (Priorité à droite)",
        "C. Ikinyabiziga kinini cyane nka ikabisi",
        "D. Ikinyabiziga gituruka ibumoso"
      ],
      en: [
        "A. The fastest driving vehicle",
        "B. The vehicle coming from your right (Priority to the right)",
        "C. The largest vehicle such as a bus",
        "D. The vehicle approaching from the left"
      ],
      fr: [
        "A. Le véhicule le plus rapide",
        "B. Le véhicule venant de votre droite",
        "C. Le plus grand véhicule",
        "D. Le véhicule venant de gauche"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Kuri Article 12 y'amategeko y'omu handa mu Rwanda, ku mahuriro adafite ibyapa ubusumbane buhabwa ikinyabiziga gituruka iburyo (Priorité à droite).",
      en: "According to Rwanda Traffic Law Article 12, standard priority is always granted to traffic approaching from your right.",
      fr: "L'article 12 du Code de la route rwandais stipule la priorité absolue aux véhicules venant de droite."
    }
  },
  {
    id: "q3",
    category: "rules",
    question: {
      rw: "Umuvuduko ntarengwa w'ikinyabiziga kigenda mu mijyi y'u Rwanda ni uwuhe?",
      en: "What is the maximum legal speed limit inside urban built-up areas in Rwanda?",
      fr: "Quelle est la vitesse maximale autorisée en agglomération au Rwanda?"
    },
    options: {
      rw: [
        "A. 80 km/h",
        "B. 50 km/h (cyangwa 40 km/h ku byapa)",
        "C. 100 km/h",
        "D. 30 km/h mu mijyi yose"
      ],
      en: [
        "A. 80 km/h",
        "B. 50 km/h (or 40 km/h where indicated by signs)",
        "C. 100 km/h",
        "D. 30 km/h everywhere"
      ],
      fr: [
        "A. 80 km/h",
        "B. 50 km/h (ou 40 km/h selon les panneaux)",
        "C. 100 km/h",
        "D. 30 km/h partout"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Mu mijyi y'u Rwanda (Built-up areas), umuvuduko ntarengwa ni 50 km/h, uretse hafi y'amashuri cyangwa ahafite ibyapa bya 40 km/h.",
      en: "Standard speed limit inside built-up urban centers in Rwanda is 50 km/h unless posted otherwise.",
      fr: "En agglomération au Rwanda, la vitesse est limitée à 50 km/h sauf indication contraire."
    }
  },
  {
    id: "q4",
    category: "penalties",
    question: {
      rw: "Gutwara ikinyabiziga wasinze urengeje igipimo cya alcohol kibujijwe hano mu Rwanda bihanishwa iki?",
      en: "What is the official penalty for driving under the influence of alcohol (DUI) in Rwanda?",
      fr: "Quelle est la sanction pour conduite en état d'ivresse au Rwanda?"
    },
    options: {
      rw: [
        "A. Kwihanangirizwa mu magambo gusa",
        "B. Amande ya 150,000 RWF, gufungirwa ikinyabiziga iminsi 5 n'ifungwa ry'iminsi 5",
        "C. Kunyagwa uruhushya imyaka 10 irangiye",
        "D. Kwishyura 10,000 RWF gusa"
      ],
      en: [
        "A. A verbal warning only",
        "B. 150,000 RWF fine, 5 days vehicle impoundment, and 5 days police custody",
        "C. License revocation for 10 years",
        "D. A minor 10,000 RWF fee"
      ],
      fr: [
        "A. Un simple avertissement",
        "B. Amende de 150.000 RWF, 5 jours de fourrière et 5 jours de garde à vue",
        "C. Retrait du permis pendant 10 ans",
        "D. Frais de 10.000 RWF"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ishami rya Polisi y'u Rwanda rishinzwe Umuteko w'omu Handa rigena amande y' 150,000 RWF ku mushoferi wasinze, hamwe no gufunga imodoka iminsi 5.",
      en: "Rwanda National Police mandates a strict 150,000 RWF fine, vehicle impound, and 5-day detainment for drunk driving offenses.",
      fr: "La Police Nationale du Rwanda impose une amende de 150.000 RWF et la mise en fourrière du véhicule pendant 5 jours."
    }
  },
  {
    id: "q5",
    category: "priority",
    question: {
      rw: "Kuri rond-point (ihuriro ry'inzira zizengurutse), ni nde ufite ubusumbane bwo kunyura mbele?",
      en: "At a roundabout intersection, which vehicle has the legal right of way?",
      fr: "Dans un rond-point, quel véhicule a la priorité?"
    },
    options: {
      rw: [
        "A. Ikinyabiziga kigiye kwinjira mu rond-point",
        "B. Ikinyabiziga cyatangiye kuzenguruka mu rond-point imbere",
        "C. Ikinyabiziga gikorera iburyo bwa rond-point gusa",
        "D. Ikinyabiziga kinini cyane"
      ],
      en: [
        "A. Vehicles approaching to enter the roundabout",
        "B. Vehicles already circulating inside the roundabout",
        "C. Vehicles approaching from the outer lane",
        "D. Heavy duty vehicles only"
      ],
      fr: [
        "A. Les véhicules arrivant pour entrer dans le rond-point",
        "B. Les véhicules déjà engagés dans le rond-point",
        "C. Les véhicules sur la voie de droite",
        "D. Uniquement les poids lourds"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Abari mu rond-point nibo bafite ubusumbane. Abazaza kwinjiramo bagomba guhagarara bakabaha inzira.",
      en: "Traffic already inside the roundabout loop always has priority over vehicles waiting to enter.",
      fr: "Les usagers circulant déjà sur l'anneau du rond-point ont la priorité sur ceux qui s'y engagent."
    }
  },
  {
    id: "q6",
    category: "signs",
    question: {
      rw: "Icyapa cy'uruziga rw'umweru rurimo umurongo w'umutuku n'umubare '50' gisobanura iki?",
      en: "What does a circular sign with a red border containing the number '50' mean?",
      fr: "Que signifie un panneau circulaire à bord rouge avec le chiffre '50'?"
    },
    options: {
      rw: [
        "A. Umuvuduko muto usabwa wa 50 km/h",
        "B. Umuvuduko ntarengwa wa 50 km/h (Speed limit)",
        "C. Uburebure bw'imodoka bwa metero 50",
        "D. Uburemere bwa toni 50"
      ],
      en: [
        "A. Mandatory minimum speed of 50 km/h",
        "B. Maximum speed limit of 50 km/h",
        "C. Vehicle length limit of 50 meters",
        "D. Maximum weight limit of 50 tons"
      ],
      fr: [
        "A. Vitesse minimale de 50 km/h",
        "B. Limitation de vitesse maximale à 50 km/h",
        "C. Longueur maximale de 50 mètres",
        "D. Poids maximal de 50 tonnes"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Icyapa cy'uruziga w'umutuku ni icyapa kibuza. Ku murego wa 50 kiba kibuza kurenza umuvuduko wa 50 km/h.",
      en: "Red circular boundary denotes a prohibition. '50' enforces a maximum speed limit of 50 km/h.",
      fr: "Un cercle rouge indique une interdiction. Ici, la vitesse est limitée à 50 km/h maximum."
    }
  },
  {
    id: "q7",
    category: "rules",
    question: {
      rw: "Ni ryari biba bibujijwe burundu kunyuranaho (dépasser) ku rundi kinyabiziga?",
      en: "Under which condition is overtaking strictly forbidden under Rwandan law?",
      fr: "Dans quelle situation le dépassement est-il strictement interdit?"
    },
    options: {
      rw: [
        "A. Kuri njiya igororotse ifite binyabiziga bike",
        "B. Mu makoni, ku mateme n'aho utabona imbere (Sommet de côte / Virage sans visibilité)",
        "C. Mu nyanja n'umurima",
        "D. Ku manywa y'ihangu"
      ],
      en: [
        "A. On a straight open road with low traffic",
        "B. On sharp bends, hill crests, bridges, and areas with blind visibility",
        "C. Near agricultural fields",
        "D. During clear daylight hours"
      ],
      fr: [
        "A. Sur une route droite dégagée",
        "B. Dans les virages, sommets de côte et ponts sans visibilité",
        "C. Près des champs",
        "D. En plein jour"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Bibuza kunyuranaho mu makoni, mu mpinga y'umusozi (sommet de côte), ku mateme no ku mahuriro kuko udashobora kubona ibinyabiziga bituruka imbere.",
      en: "Overtaking on blind turns, hill crests, or narrow bridges is illegal due to high risk of head-on collisions.",
      fr: "Le dépassement est interdit dans les virages et sommets de côte où la visibilité est insuffisante."
    }
  },
  {
    id: "q8",
    category: "signs",
    question: {
      rw: "Icyapa cya 'STOP' gitandukaniye he n'icyapa cya 'Tanga Inzira' (Cédez le passage)?",
      en: "How does a 'STOP' sign differ from a 'Yield / Give Way' sign?",
      fr: "Quelle est la différence entre un panneau 'STOP' et un 'Céder le passage'?"
    },
    options: {
      rw: [
        "A. Nta kinyuranyo kirimo",
        "B. STOP igutegeka guhagarara burundu icyo ari cyo cyose, mugihe Tanga Inzira uhagarara iyo hari ikinyabiziga cyatambutse",
        "C. Tanga inzira igutegeka guhagarara iminsi ibiri",
        "D. STOP ikora mu ijoro gusa"
      ],
      en: [
        "A. There is no practical difference",
        "B. STOP requires a mandatory full stop regardless of traffic, whereas Yield requires stopping only if traffic is approaching",
        "C. Yield requires stopping for two minutes",
        "D. STOP applies only at night"
      ],
      fr: [
        "A. Aucune différence",
        "B. Le STOP exige un arrêt complet obligatoire, tandis que Céder le passage n'impose l'arrêt que si un véhicule survient",
        "C. Céder le passage exige un arrêt de 2 minutes",
        "D. Le STOP ne s'applique que la nuit"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Kuri STOP, kureba ko umuhanda urimo ubusa ntibihagije; ubanza guhagarika ibiziga burundu mbere yo gukomeza.",
      en: "A STOP sign strictly commands coming to 0 km/h full wheel stop before proceeding. Yield only requires stopping if intersecting traffic exists.",
      fr: "Le panneau STOP oblige l'arrêt absolu des roues, alors que le Céder le passage n'oblige à s'arrêter que si la voie n'est pas libre."
    }
  },
  {
    id: "q9",
    category: "rules",
    question: {
      rw: "Niba ikinyabiziga cy'ubutabazi (Ambulance, Ziga-Ziga, Polisi) gihaye ibimenyetso by'amaporori n'inzogera, abandi bashoferi bagomba gukora iki?",
      en: "When an emergency vehicle (Ambulance, Police, Fire truck) approaches with sirens and lights, drivers must:",
      fr: "À l'approche d'un véhicule d'urgence avec sirène et gyrophares, les usagers doivent:"
    },
    options: {
      rw: [
        "A. Gukomeza umuvuduko bari bafite",
        "B. Guhita bafatira ku mpande z'iburyo bakagabanya umuvuduko cyangwa bakahagarara bamuhe inzira irasobanutse",
        "C. Kumuha ikaze bamunyoraho imbere",
        "D. Guhina iferi n'umuvuduko muremure"
      ],
      en: [
        "A. Maintain their original driving speed",
        "B. Immediately pull over to the right side, reduce speed or stop to clear the lane",
        "C. Speed up to stay ahead of the emergency vehicle",
        "D. Honk loudly without moving"
      ],
      fr: [
        "A. Conserver la même vitesse",
        "B. Se serrer immédiatement sur la droite et s'arrêter pour céder le passage",
        "C. Accélérer pour rester devant",
        "D. Klaxonner sans se déplacer"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ibinyabiziga by'ubutabazi bifite ubusumbane bw'ikubitiro. Abatwara bagomba gukata iburyo n'umuteko bakabaheza inzira.",
      en: "Priority vehicles with active sirens have absolute priority. Drivers must clear the way immediately by pulling right.",
      fr: "Les véhicules d'urgence en mission ont la priorité absolue. Vous devez immédiatement vous ranger sur la droite."
    }
  },
  {
    id: "q10",
    category: "penalties",
    question: {
      rw: "Amande y'amagenzura y'ibinyabiziga (Contrôle Technique) cyangwa Bwishingizi (Insurance) byarangiye mu Rwanda ni angahe?",
      en: "What is the fine in Rwanda for driving with an expired Technical Control certificate or Insurance?",
      fr: "Quelle est l'amende au Rwanda pour défaut de Contrôle Technique ou d'Assurance?"
    },
    options: {
      rw: [
        "A. 10,000 RWF",
        "B. 50,000 RWF ku kinyabiziga",
        "C. 500,000 RWF",
        "D. Nta mande ifatwa"
      ],
      en: [
        "A. 10,000 RWF",
        "B. 50,000 RWF per infraction",
        "C. 500,000 RWF",
        "D. No monetary penalty"
      ],
      fr: [
        "A. 10.000 RWF",
        "B. 50.000 RWF par infraction",
        "C. 500.000 RWF",
        "D. Aucune amende"
      ]
    },
    correctIndex: 1,
    explanation: {
      rw: "Amabwiriza ya Polisi y'u Rwanda agena amande ya 50,000 RWF ku kinyabiziga kitafite Controle Technique cyangwa Assurances yari ngombwa.",
      en: "Rwanda National Police enforces a standard 50,000 RWF penalty for missing or expired technical inspection and insurance policy.",
      fr: "La Police impose une amende forfaitaire de 50.000 RWF pour défaut de contrôle technique ou d'assurance."
    }
  }
];
