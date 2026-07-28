export const QUESTION_BANK = [
  {
    id: "q1",
    category: "signs",
    question: {
      rw: "Iki cyapa cy'ishusho y'imfuruka nhatu ifite umurongo w'umutuku kirasobanura iki?",
      en: "What does a triangular road sign with a red border signify?",
      fr: "Que signifie un panneau triangulaire à bord rouge?"
    },
    options: {
      rw: ["A. Icyapa kibuza", "B. Icyapa cy'inkwarning (DANGER)", "C. Icyapa gitegeka", "D. Icyapa cy'amaparakinji"],
      en: ["A. Prohibition sign", "B. Danger / warning sign", "C. Mandatory direction", "D. Parking spot"],
      fr: ["A. Interdiction", "B. Danger / avertissement", "C. Obligation", "D. Parking"]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ibyapa byose by'imfuruka nhatu z'umutuku biba ari ibyapa by'inkwarning (danger).",
      en: "Triangular signs with red borders are danger/warning signs indicating hazards ahead.",
      fr: "Les panneaux triangulaires à bord rouge sont des panneaux de danger."
    }
  },
  {
    id: "q2",
    category: "priority",
    question: {
      rw: "Ku ihuriro ry'imihanda adafite ibyapa cyangwa amatara, ni nde ufite ubusumbane (Priorité)?",
      en: "At an uncontrolled intersection without signs or lights, who has the right of way?",
      fr: "À un carrefour sans signalisation, qui a la priorité?"
    },
    options: {
      rw: ["A. Ikinyabiziga cyihuta cyane", "B. Ikinyabiziga gituruka iburyo bwawe (Priorité à droite)", "C. Ikinyabiziga kinini", "D. Ikinyabiziga gituruka ibumoso"],
      en: ["A. Fastest vehicle", "B. Vehicle approaching from your right", "C. Largest bus", "D. Vehicle from the left"],
      fr: ["A. Le plus rapide", "B. Le véhicule venant de votre droite", "C. Le plus grand bus", "D. Le véhicule de gauche"]
    },
    correctIndex: 1,
    explanation: {
      rw: "Ku Article 12 y'amategeko y'omu handa mu Rwanda, ubusumbane buhabwa ikinyabiziga gituruka iburyo.",
      en: "Rwanda Law Article 12 states priority is always granted to traffic approaching from your right.",
      fr: "L'article 12 impose la priorité absolue aux véhicules venant de droite."
    }
  },
  {
    id: "q3",
    category: "rules",
    question: {
      rw: "Umuvuduko ntarengwa w'ikinyabiziga kigenda mu mijyi y'u Rwanda ni uwuhe?",
      en: "What is the maximum legal speed limit inside urban areas in Rwanda?",
      fr: "Quelle est la vitesse maximale autorisée en agglomération au Rwanda?"
    },
    options: {
      rw: ["A. 80 km/h", "B. 50 km/h (cyangwa 40 km/h)", "C. 100 km/h", "D. 30 km/h everywhere"],
      en: ["A. 80 km/h", "B. 50 km/h (or 40 km/h)", "C. 100 km/h", "D. 30 km/h everywhere"],
      fr: ["A. 80 km/h", "B. 50 km/h (ou 40 km/h)", "C. 100 km/h", "D. 30 km/h partout"]
    },
    correctIndex: 1,
    explanation: {
      rw: "Mu mijyi y'u Rwanda, umuvuduko ntarengwa ni 50 km/h.",
      en: "Standard speed limit inside urban centers in Rwanda is 50 km/h.",
      fr: "En agglomération au Rwanda, la vitesse est limitée à 50 km/h."
    }
  },
  {
    id: "q4",
    category: "penalties",
    question: {
      rw: "Gutwara ikinyabiziga wasinze urengeje igipimo cya alcohol bihanishwa iki mu Rwanda?",
      en: "What is the penalty for driving under the influence of alcohol (DUI) in Rwanda?",
      fr: "Quelle est la sanction pour conduite en état d'ivresse au Rwanda?"
    },
    options: {
      rw: ["A. Kwihanangirizwa gusa", "B. Amande ya 150,000 RWF, gufungirwa ikinyabiziga iminsi 5 n'ifungwa", "C. Kunyagwa uruhushya imyaka 10", "D. 10,000 RWF fee"],
      en: ["A. Verbal warning", "B. 150,000 RWF fine, 5 days vehicle impoundment & 5 days custody", "C. License revocation for 10 yrs", "D. 10,000 RWF fee"],
      fr: ["A. Simple avertissement", "B. Amende 150.000 RWF, 5 jours de fourrière et garde à vue", "C. Retrait 10 ans", "D. 10.000 RWF"]
    },
    correctIndex: 1,
    explanation: {
      rw: "Polisi y'u Rwanda igena amande y' 150,000 RWF no gufunga imodoka iminsi 5.",
      en: "Rwanda National Police mandates 150,000 RWF fine and 5 days impoundment for drunk driving.",
      fr: "La Police Nationale du Rwanda impose 150.000 RWF d'amende et 5 jours de fourrière."
    }
  }
];
