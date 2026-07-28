export const COURSE_MODULES = [
  {
    id: "module_signs",
    title: { rw: "1. Ibyapa n'Ibimenyetso by'omu Handa", en: "1. Road Traffic Signs & Signals", fr: "1. Panneaux et Signaux Routiers" },
    icon: "🪧",
    summary: { rw: "Ibyapa bigabanyijwemo ibyiciro bine: Inkwarning, Ibibuza, Ibihatira, n'Iby'ubusumbane.", en: "Road signs are divided into 4 mandatory categories in Rwanda.", fr: "Les panneaux sont divisés en 4 catégories principales." },
    lessons: [
      {
        id: "l1",
        title: { rw: "Ibyiciro 4 by'Ibyapa", en: "4 Classes of Road Signs", fr: "4 Catégories de Panneaux" },
        content: {
          rw: `<ul><li><strong>1. Inkwarning (Danger):</strong> Imfuruka nhatu z'umutuku.</li><li><strong>2. Ibibuza (Prohibition):</strong> Uruziga rw'umutuku.</li><li><strong>3. Ibihatira (Mandatory):</strong> Uruziga rw'uburu.</li><li><strong>4. Ubusumbane (Priority):</strong> STOP, Yield, n'inzira nkurikira.</li></ul>`,
          en: `<ul><li><strong>1. Warning:</strong> Red border triangles.</li><li><strong>2. Prohibition:</strong> Red circular borders.</li><li><strong>3. Mandatory:</strong> Blue circles.</li><li><strong>4. Priority:</strong> Right-of-way rules.</li></ul>`,
          fr: `<ul><li><strong>1. Danger:</strong> Triangles.</li><li><strong>2. Interdiction:</strong> Cercles rouges.</li><li><strong>3. Obligation:</strong> Cercles bleus.</li><li><strong>4. Priorité:</strong> Règles de passage.</li></ul>`
        }
      }
    ]
  },
  {
    id: "module_rules",
    title: { rw: "2. Amategeko y'Ihuriro n'Ubusumbane", en: "2. Traffic Rules & Right-of-Way", fr: "2. Règles de Circulation" },
    icon: "🚦",
    summary: { rw: "Amategeko y'ubusumbane bw'iburyo (Priorité à droite), kunyuranaho, n'umuvuduko.", en: "Right-of-way rules and legal speed limits in Rwanda.", fr: "Règles de priorité à droite et limitations." },
    lessons: [
      {
        id: "l2",
        title: { rw: "Priorité à Droite & Umuvuduko", en: "Priority to Right & Speed Limits", fr: "Priorité à Droite et Vitesse" },
        content: {
          rw: `<p><strong>Priorité à droite:</strong> Kurikiza iburyo ku mahuriro adafite ibyapa.</p><p><strong>Umuvuduko:</strong> 50 km/h mu mujyi, 80 km/h hanze y'umujyi.</p>`,
          en: `<p><strong>Priority to right:</strong> Yield to right at uncontrolled junctions.</p><p><strong>Speed limits:</strong> 50 km/h urban, 80 km/h intercity highway.</p>`,
          fr: `<p><strong>Priorité à droite:</strong> En l'absence de signalisation.</p><p><strong>Limitation:</strong> 50 km/h en ville, 80 km/h sur route.</p>`
        }
      }
    ]
  }
];
