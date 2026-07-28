// DriveRwanda Driving Theory Course Data (Amasomo y'Amategeko y'Omu Handa mu Rwanda)

export const COURSE_MODULES = [
  {
    id: "module_signs",
    title: {
      rw: "1. Ibyapa n'Ibimenyetso by'omu Handa",
      en: "1. Road Traffic Signs & Signals",
      fr: "1. Panneaux et Signaux Routiers"
    },
    icon: "🪧",
    summary: {
      rw: "Mugice gihugu cy'u Rwanda, ibyapa bigabanyijwemo ibyiciro bine zv'ingenzi: Inkwarning, Ibibuza, Ibihatira, n'Iby'ubusumbane.",
      en: "In Rwanda, road signs are divided into 4 mandatory categories: Warning, Prohibition, Mandatory, and Priority.",
      fr: "Au Rwanda, la signalisation routière est divisée en 4 catégories principales."
    },
    lessons: [
      {
        id: "lesson_sign_cat",
        title: {
          rw: "Ibyiciro by'Ibyapa (Classification of Signs)",
          en: "Classification of Road Signs",
          fr: "Classification des Panneaux"
        },
        content: {
          rw: `
            <h3>Ibyiciro 4 by'Ibyapa by'omu Handa mu Rwanda</h3>
            <p>Umuhanda wo mu Rwanda ugengwa n'ibyapa bifite imiterere n'amabara biba bisobanura ikintu gitegetswe:</p>
            <ul>
              <li><strong>1. Ibyapa by'Inkwarning (Danger):</strong> Bifite ishusho y'imfuruka nhatu (triangle) ifite umurongo w'umutuku n'ubuso bw'umweru. Bitanga umuburo w'akaga gashobora kuboneka imbere.</li>
              <li><strong>2. Ibyapa Bibuza (Prohibition):</strong> Bifite ishusho y'uruziga (cercle) rurimo umurongo w'umutuku. Bitanga amategeko abujijwe rwose.</li>
              <li><strong>3. Ibyapa Bihatira (Mandatory):</strong> Bifite ishusho y'uruziga rw'uburu w'umweru n'ibimenyetso by'umweru. Bitegeka umutwara gukora icyerekezo runaka.</li>
              <li><strong>4. Ibyapa by'Ubusumbane (Priority):</strong> Biyobora abatwara ibinyabiziga ku mahuriro ku bijyanye n'uburenganzira bwo kunyura mbele.</li>
            </ul>
          `,
          en: `
            <h3>4 Main Classes of Road Signs in Rwanda</h3>
            <p>Rwandan traffic law enforces four standard sign geometry rules:</p>
            <ul>
              <li><strong>1. Warning Signs:</strong> Triangular with a red border and white interior. Warn of hazard ahead.</li>
              <li><strong>2. Prohibition Signs:</strong> Circular with a red border. Indicate forbidden actions.</li>
              <li><strong>3. Mandatory Signs:</strong> Circular blue background with white symbols. Mandate obligatory directions or actions.</li>
              <li><strong>4. Priority Signs:</strong> Unique shapes (e.g. Octagonal STOP or upside-down triangle Give Way) defining right-of-way.</li>
            </ul>
          `,
          fr: `
            <h3>4 Catégories Principales au Rwanda</h3>
            <ul>
              <li><strong>1. Panneaux de danger:</strong> Triangulaires à bord rouge.</li>
              <li><strong>2. Panneaux d'interdiction:</strong> Circulaires à bord rouge.</li>
              <li><strong>3. Panneaux d'obligation:</strong> Circulaires à fond bleu.</li>
              <li><strong>4. Panneaux de priorité:</strong> Définissent la priorité de passage.</li>
            </ul>
          `
        }
      }
    ]
  },
  {
    id: "module_rules",
    title: {
      rw: "2. Amategeko y'Ihuriro n'Ubusumbane (Priorities & Rules)",
      en: "2. Traffic Rules & Right-of-Way",
      fr: "2. Règles de Circulation et Priorités"
    },
    icon: "🚦",
    summary: {
      rw: "Amategeko y'uko uhura n'abandi mu ihuriro (Priorité à droite), uko unyuranaho, n'amabwiriza y'umuvuduko.",
      en: "Rules governing intersection priority (Right-hand priority), overtaking, and legal speed limits.",
      fr: "Règles de priorité à droite, dépassement et limitations de vitesse."
    },
    lessons: [
      {
        id: "lesson_priority_right",
        title: {
          rw: "Itegeko ry'Ubusumbane bw'Iburyo (Priorité à Droite)",
          en: "Priority to the Right Rule",
          fr: "Règle de Priorité à Droite"
        },
        content: {
          rw: `
            <h3>Ubusumbane ku Mahuriro Agategetswe</h3>
            <p>Mu Rwanda, ku mahuriro adafite ibyapa cyangwa amatara y'ibimenyetso, kurikiza <strong>Itegeko ryo kubaha iburyo (Priorité à droite)</strong>:</p>
            <ul>
              <li>Utegetswe guhara inzira ikinyabiziga cyose gituruka iburyo bwawe.</li>
              <li>Ku mahuriro y'inzira zizengurutse (Roundabouts / Rond-point), ikinyabiziga cyatangiye kuzenguruka nico gifite ubusumbane ku bizaza bito.</li>
              <li>Ikinyabiziga kiva mu muhanda w'igitaka (dirt road) kijya mu muhanda wa kaburimbo (tarmac road) kigomba gutanga inzira ku binyabiziga byose.</li>
            </ul>
          `,
          en: `
            <h3>Right-of-Way at Uncontrolled Intersections</h3>
            <p>Under Article 12 of the Rwanda Traffic Code:</p>
            <ul>
              <li>At intersections without signs or signals, yield to all vehicles coming from your right.</li>
              <li>At roundabouts, vehicles already inside the circular junction have priority over approaching traffic.</li>
              <li>Vehicles exiting a paved road retain right-of-way over vehicles entering from unpaved dirt tracks.</li>
            </ul>
          `,
          fr: `
            <h3>Priorité de Passage</h3>
            <p>En l'absence de signalisation, la règle générale de priorité à droite s'applique obligatoirement.</p>
          `
        }
      },
      {
        id: "lesson_speed_limits",
        title: {
          rw: "Umuvuduko Ntarengwa mu Rwanda (Speed Limits)",
          en: "Rwanda Standard Speed Limits",
          fr: "Limitations de Vitesse au Rwanda"
        },
        content: {
          rw: `
            <h3>Umuvuduko Ntarengwa Gikoreshwa mu Rwanda</h3>
            <ul>
              <li><strong>Mu Mujyi (Urban Zone):</strong> 40 km/h kugeza 50 km/h.</li>
              <li><strong>Hafi y'Amashuri n'Ibitaro:</strong> Maximum 30 km/h.</li>
              <li><strong>Dutegereje Hanze y'Umujyi (Highways & Intercity):</strong> 80 km/h ku binyabiziga bisanzwe, 60 km/h ku makamyo n'ibibisi bihiga abantu.</li>
            </ul>
          `,
          en: `
            <h3>Legal Speed Limits in Rwanda</h3>
            <ul>
              <li><strong>Built-up / Urban Areas:</strong> Max 40 km/h to 50 km/h.</li>
              <li><strong>School & Hospital Zones:</strong> Max 30 km/h.</li>
              <li><strong>Highways Outside Built-up Areas:</strong> Max 80 km/h for passenger cars; 60 km/h for heavy trucks and public transport buses.</li>
            </ul>
          `,
          fr: `
            <h3>Limitations de Vitesse Légales</h3>
            <ul>
              <li><strong>En agglomération:</strong> 40 - 50 km/h maximum.</li>
              <li><strong>Zone scolaire:</strong> 30 km/h maximum.</li>
              <li><strong>Hors agglomération:</strong> 80 km/h pour voitures légères, 60 km/h pour poids lourds.</li>
            </ul>
          `
        }
      }
    ]
  },
  {
    id: "module_penalties",
    title: {
      rw: "3. Ibihano n'Amande y'Amategeko (Fines & Penalties)",
      en: "3. Fines & Penalties under Rwanda Law",
      fr: "3. Amendes et Sanctions au Rwanda"
    },
    icon: "⚖️",
    summary: {
      rw: "Ibyaha by'omu handa, amande mu amafaranga y'u Rwanda (RWF), no gufatanwa inzoga uboha ikinyabiziga.",
      en: "Traffic offenses, RWF fine scale under Rwanda National Police guidelines, and drunk driving laws.",
      fr: "Infractions routières, barème des amendes (RWF) et conduite en état d'ivresse."
    },
    lessons: [
      {
        id: "lesson_alcohol_fines",
        title: {
          rw: "Gutwara Watwaye Inzoga n'Umuvuduko Ukabije",
          en: "Drunk Driving & Speeding Offenses",
          fr: "Conduite sous l'Emprise de l'Alcool"
        },
        content: {
          rw: `
            <h3>Ibihano by'Inzoga n'Umuvuduko Ukabije mu Rwanda</h3>
            <p>Rwanda National Police (RNP) ifite amategeko akaze cyane ku mutekano w'omu handa:</p>
            <ul>
              <li><strong>Gutwara wasinze (Drunk Driving):</strong> Igipimo cya Alcool kirenze 0.8 g/L mu maraso cyangwa test y'umwuka giteza:
                <ul>
                  <li>Amande y' 150,000 RWF.</li>
                  <li>Gufungirwa ikinyabiziga iminsi 5 mu bashinzwe umutekano.</li>
                  <li>Gushyirwa mu kigo cy'inyubako iminsi 5.</li>
                </ul>
              </li>
              <li><strong>Kurenza umuvuduko urimo radari (Speed Radar Violations):</strong> Amande kuva ku 25,000 RWF kugeza 50,000 RWF.</li>
              <li><strong>Gutwara nta cyemezo cy'ubuziranenge (Contrôle Technique):</strong> Amande 50,000 RWF.</li>
              <li><strong>Gutwara nta Bwishingizi (Insurance):</strong> Amande 50,000 RWF.</li>
            </ul>
          `,
          en: `
            <h3>Strict Penalties under Rwandan Law</h3>
            <ul>
              <li><strong>Driving under influence (DUI):</strong> Alcohol level exceeding 0.8 g/L results in a mandatory fine of 150,000 RWF, vehicle impoundment for 5 days, and police custody.</li>
              <li><strong>Speed Radar Violations:</strong> Fine ranging from 25,000 RWF to 50,000 RWF per radar hit.</li>
              <li><strong>Lack of Inspection (Contrôle Technique):</strong> Fine of 50,000 RWF.</li>
              <li><strong>Lack of Valid Insurance:</strong> Fine of 50,000 RWF.</li>
            </ul>
          `,
          fr: `
            <h3>Sanctions Légales</h3>
            <ul>
              <li><strong>Conduite en état d'ivresse:</strong> Amende de 150.000 RWF, mise en fourrière du véhicule 5 jours.</li>
              <li><strong>Excès de vitesse (Radar):</strong> Amende de 25.000 RWF à 50.000 RWF.</li>
              <li><strong>Défaut de Contrôle Technique / Assurance:</strong> 50.000 RWF.</li>
            </ul>
          `
        }
      }
    ]
  }
];
