// Official Rwanda Traffic & Driving Theory Course Modules
// Aligned with the Official Rwanda National Police (RNP) Driving Examination Syllabus

export const COURSE_MODULES = [
  {
    id: "module_signs",
    title: { rw: "1. Ibyapa n'Ibimenyetso by'omu Handa", en: "1. Road Traffic Signs & Markings", fr: "1. Panneaux et Signaux Routiers" },
    icon: "🪧",
    summary: { rw: "Ibyapa bigabanyijwemo ibyiciro bine nyamukuru: Inkwarning, Ibibuza, Ibihatira, n'Iby'ubusumbane.", en: "Road signs are divided into 4 mandatory categories in Rwanda.", fr: "Les panneaux sont divisés en 4 catégories principales au Rwanda." },
    lessons: [
      {
        id: "l1_1",
        title: { rw: "Ibyiciro 4 by'Ibyapa mu Rwanda", en: "4 Classes of Road Signs in Rwanda", fr: "4 Catégories de Panneaux au Rwanda" },
        content: {
          rw: `<ul>
            <li><strong>1. Ibyapa biburira / Inkwarning (Danger Signs):</strong> Bifite ishusho y'imfuruka nhatu z'umutuku imbere n'ikirango cy'umukara. Bishyirwa mu ntera ya m 150-200 mbere y'ahantu habi ahatari mu nsisiro.</li>
            <li><strong>2. Ibyapa bibuza (Prohibition Signs):</strong> Bifite ishusho y'uruziga rw'umutuku n'ubuso bw'umweru. Bitangirira aho bishinze kugeza mu isangano rikurikiyeho.</li>
            <li><strong>3. Ibyapa bihatira (Mandatory Signs):</strong> Bifite ishusho y'uruziga rw'ubururu n'ikirango cy'umweru.</li>
            <li><strong>4. Ibyapa by'ubusumbane (Priority Signs):</strong> Nka STOP (Guhagarara rwose) n'icyapa cya Tanga Inzira (Yield).</li>
          </ul>`,
          en: `<ul>
            <li><strong>1. Warning / Danger Signs:</strong> Triangular with red borders. Placed 150m-200m ahead outside urban areas.</li>
            <li><strong>2. Prohibition Signs:</strong> Red circular borders with white background.</li>
            <li><strong>3. Mandatory Signs:</strong> Blue circles with white arrows.</li>
            <li><strong>4. Priority Signs:</strong> STOP octagonal sign and Yield triangle.</li>
          </ul>`,
          fr: `<ul>
            <li><strong>1. Danger:</strong> Triangles à bord rouge. Placés à 150m-200m hors agglomération.</li>
            <li><strong>2. Interdiction:</strong> Cercles rouges à fond blanc.</li>
            <li><strong>3. Obligation:</strong> Cercles bleus avec pictogrammes blancs.</li>
            <li><strong>4. Priorité:</strong> Panneau STOP et Cédez le passage.</li>
          </ul>`
        }
      },
      {
        id: "l1_2",
        title: { rw: "Imirongo yo mu Muhanda (Pavement Markings)", en: "Road Pavement Markings", fr: "Marquage au Sol" },
        content: {
          rw: `<ul>
            <li><strong>Umurongo ucagaguye (Broken Line):</strong> Umenyyesha ko wemerewe kunyuranaho ukanakatira ibumoso igihe bitateza icyago.</li>
            <li><strong>Umurongo udacagaguye (Solid Line):</strong> Umuyobozi wese abujijwe kuwurenga cyangwa kunyuranaho ku buryo obwo ari bwo bwose.</li>
          </ul>`,
          en: `<ul>
            <li><strong>Broken Line:</strong> Overtaking and turning left are permitted when safe.</li>
            <li><strong>Solid Line:</strong> Crossing or straddling a continuous solid line is strictly prohibited.</li>
          </ul>`,
          fr: `<ul>
            <li><strong>Ligne discontinue:</strong> Dépassement autorisé lorsque la voie est libre.</li>
            <li><strong>Ligne continue:</strong> Franchissement et chevauchement strictement interdits.</li>
          </ul>`
        }
      }
    ]
  },
  {
    id: "module_speed",
    title: { rw: "2. Umuvuduko Ntarengwa mu Rwanda", en: "2. Official Speed Limits", fr: "2. Limitations de Vitesse" },
    icon: "⏱️",
    summary: { rw: "Amategeko agenga umuvuduko ntarengwa mu mijyi (nsisiro) n'imihanda y'igihugu.", en: "Speed limit regulations across cities and highways in Rwanda.", fr: "Réglementation de la vitesse en ville et sur route." },
    lessons: [
      {
        id: "l2_1",
        title: { rw: "Umuvuduko Ntarengwa (Speed Limits by Vehicle Type)", en: "Speed Limits by Vehicle Type", fr: "Limitation par type de véhicule" },
        content: {
          rw: `<ul>
            <li><strong>Mu mijyi n'insisiro (Urban Centers):</strong> 50 km/h ku binyabiziga byose.</li>
            <li><strong>Velomoteri (Mopeds):</strong> 50 km/h ahatari mu nsisiro.</li>
            <li><strong>Imodoka zitwara abagenzi mu rusange (Buses):</strong> 60 km/h.</li>
            <li><strong>Amatagisi n'Amavatiri y'ifasi (Passenger Cars & Taxis):</strong> 75 km/h.</li>
            <li><strong>Ibinyabiziga bidapakiye / Non-pneumatic tires:</strong> 25 km/h.</li>
          </ul>`,
          en: `<ul>
            <li><strong>Urban centers:</strong> 50 km/h for all vehicles.</li>
            <li><strong>Mopeds (Velomoteri):</strong> 50 km/h outside urban areas.</li>
            <li><strong>Public buses:</strong> 60 km/h maximum speed limit.</li>
            <li><strong>Passenger cars & Taxis under 3500kg:</strong> 75 km/h.</li>
            <li><strong>Solid rubber / Non-pneumatic tires:</strong> 25 km/h max.</li>
          </ul>`,
          fr: `<ul>
            <li><strong>En agglomération:</strong> 50 km/h pour tous les véhicules.</li>
            <li><strong>Cyclomoteurs:</strong> 50 km/h hors agglomération.</li>
          </ul>`
        }
      }
    ]
  },
  {
    id: "module_priority",
    title: { rw: "3. Ubusumbane & Kunyuranaho", en: "3. Right-of-Way & Overtaking Rules", fr: "3. Priorité et Dépassement" },
    icon: "🏎️",
    summary: { rw: "Priorité à droite, ibinyabiziga ndakumirwa, n'amategeko yo kunyuranaho.", en: "Right-of-way rules, emergency vehicles, and overtaking guidelines.", fr: "Priorité à droite et règles de dépassement." },
    lessons: [
      {
        id: "l3_1",
        title: { rw: "Priorité à Droite & Amasangano", en: "Priority at Intersections & Roundabouts", fr: "Priorité aux Carrefours" },
        content: {
          rw: `<p><strong>1. Priorité à droite:</strong> Ku mahuriro y'imihanda adafite ibyapa cyangwa amatara, ubusumbane buhabwa ikinyabiziga gituruka iburyo bwawe.</p>
          <p><strong>2. Inzira banyuramo bazengurutse (Roundabouts):</strong> Tangira uha inzira ibinyabiziga byamaze kwinjira n'ibituruka ibumoso bwaho bazenguruka.</p>
          <p><strong>3. Ibinyabiziga ndakumirwa (Emergency Vehicles):</strong> Ambulance, Polisi, no kuzimya umuriro zicanye amatara y'intabaza no kuvuza ihoni bihabwa ubusumbane busesuye.</p>`,
          en: `<p><strong>1. Priority to the right:</strong> At uncontrolled intersections, yield to traffic coming from your right.</p>
          <p><strong>2. Roundabouts:</strong> Give way to traffic already inside the roundabout from your left.</p>
          <p><strong>3. Emergency vehicles:</strong> Give way immediately to ambulances, police, and fire trucks with active sirens.</p>`,
          fr: `<p><strong>1. Priorité à droite:</strong> En l'absence de signalisation, la priorité appartient aux véhicules venant de droite.</p>`
        }
      },
      {
        id: "l3_2",
        title: { rw: "Amategeko yo Kunyuranaho (Overtaking Rules)", en: "Overtaking Regulations", fr: "Règles de Dépassement" },
        content: {
          rw: `<ul>
            <li>Kunyuranaho bikorerwa mu <strong>ruhande rw'ibumoso</strong> gusa.</li>
            <li><strong>Birabujijwe kunyuranaho:</strong> Mu makoni (sharp bends), hafi y'ibiteme difunganye, ku mateme n'aho abanyamaguru bambukira.</li>
          </ul>`,
          en: `<ul>
            <li>Overtaking must always be performed on the <strong>left side</strong>.</li>
            <li><strong>Prohibited places:</strong> Sharp bends, crests of hills, bridges, pedestrian crossings.</li>
          </ul>`,
          fr: `<ul>
            <li>Le dépassement s'effectue toujours par la <strong>gauche</strong>.</li>
          </ul>`
        }
      }
    ]
  },
  {
    id: "module_brakes_safety",
    title: { rw: "4. Feri, Umutekano & Amande ya Polisi", en: "4. Brakes, Safety & RNP Fines", fr: "4. Freins, Sécurité et Sanctions" },
    icon: "🛡️",
    summary: { rw: "Ubwoko 3 bwa feri, umukandara wo kwirinda ibyago, n'amande ya Polisi y'u Rwanda.", en: "Braking systems, seatbelt mandates, drunk driving laws, and RNP 112 emergency hotline.", fr: "Systèmes de freinage, ceintures, alcoolémie et numéro 112." },
    lessons: [
      {
        id: "l4_1",
        title: { rw: "Ubwoko 3 bwa Feri (3 Types of Braking Systems)", en: "3 Types of Braking Systems", fr: "Les 3 types de freins" },
        content: {
          rw: `<ul>
            <li><strong>1. Feri y'urugendo (Service Brake):</strong> Feri nshingiro gukoreshwa n'ikirenge yo guhagarika cyangwa kugabanya umuvuduko mu rugendo.</li>
            <li><strong>2. Feri yo gutabara (Emergency/Auxiliary Brake):</strong> Kugarura ikinyabiziga igihe feri nshingiro yagize ikibazo.</li>
            <li><strong>3. Feri yo guhagarara umwanya munini (Parking Brake / Handbrake):</strong> Gufunga imodoka igihe iparitse ku mukumbi cyangwa ku gacuri bya 16%.</li>
          </ul>`,
          en: `<ul>
            <li><strong>1. Service Brake:</strong> Primary foot pedal brake used during driving.</li>
            <li><strong>2. Emergency Brake:</strong> Used to slow down if service brake fails.</li>
            <li><strong>3. Parking Brake:</strong> Handbrake used to keep parked vehicle stationary on 16% slopes.</li>
          </ul>`,
          fr: `<ul>
            <li><strong>1. Frein de service:</strong> Frein à pied principal.</li>
            <li><strong>2. Frein de secours:</strong> En cas de défaillance du frein principal.</li>
            <li><strong>3. Frein de stationnement:</strong> Frein à main.</li>
          </ul>`
        }
      },
      {
        id: "l4_2",
        title: { rw: "Umutekano & Telefone y'Ubutabazi 112", en: "Road Safety & Emergency Hotline 112", fr: "Sécurité et Numéro 112" },
        content: {
          rw: `<ul>
            <li><strong>Emergency Hotline:</strong> Hamagara <strong>112</strong> kuri Polisi y'u Rwanda igihe habaye impanuka.</li>
            <li><strong>Umukandara (Seatbelt):</strong> Umuyobozi n'abagenzi wose bategetswe kwambara umukandara. Abana badafite imyaka 12 bicazwa inyuma.</li>
            <li><strong>Kugenda wasinze (Drunk Driving):</strong> Amande ya 150,000 RWF, gufungirwa ikinyabiziga iminsi 5 n'ifungwa.</li>
            <li><strong>Kuvuza ihoni (Honking):</strong> Birabujijwe cyane hafi y'ibitaro (near hospitals).</li>
          </ul>`,
          en: `<ul>
            <li><strong>Emergency Hotline:</strong> Call <strong>112</strong> for RNP traffic accident emergency unit.</li>
            <li><strong>Seatbelts & Children:</strong> Seatbelts required for all. Children under 12 must sit in rear seats.</li>
            <li><strong>Drunk Driving Penalty:</strong> 150,000 RWF fine, 5 days impoundment, and custody.</li>
            <li><strong>Horns:</strong> Prohibited in hospital quiet zones.</li>
          </ul>`,
          fr: `<ul>
            <li><strong>Numéro d'Urgence:</strong> Composez le <strong>112</strong> en cas d'accident.</li>
          </ul>`
        }
      }
    ]
  }
];
