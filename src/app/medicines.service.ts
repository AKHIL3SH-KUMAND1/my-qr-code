import { Injectable } from '@angular/core';

export interface Medicine {
  productId: number;
  productName: string;
  activeIngredient: string;
  therapeuticClass: string;
  indication: string;
  pharmaceuticalForm: string;
  composition: string;
  administration: string;
  contraindication: string;
  adverseDrugReaction: string;
  overdose: string;
  manufacturingDate: string;
  expiryDate: string;
  instructions: string;
}

@Injectable({
  providedIn: 'root',
})
export class MedicinesService {
  medicines: Medicine[] = [
    {
      productId: 101,
      productName: 'LANTUS® SOLOSTAR®',
      activeIngredient:
        'Insulin glargine I.P. Recombinant human insulin analogue (21A-Gly-30Ba-L-Arg-30Bb-L-Arg-human insulin)',
      therapeuticClass: 'Antidiabetic agent, Long acting insulin analogue',
      indication:
        'For the treatment of diabetes mellitus in adults, adolescents and children aged 2 years and above.',
      pharmaceuticalForm: 'Solution for injection',
      composition:
        '1 mL contains 3.6378 mg insulin glargine I.P, corresponding to 100 IU human insulin. 10 mL Vial Excipients (per mL): 30 μg zinc, 2.7 mg m-cresol, 20 mg glycerol 85%, 20 μg polysorbate 20; hydrochloric acid and sodium hydroxide for pH adjustment, and water for injection.',
      administration: 'Injection',
      contraindication:
        'Hypersensitivity to insulin glargine or any of the excipients',
      adverseDrugReaction: 'Hypoglycemia, Allergic reactions, Lipodystrophy',
      overdose: 'Severe hypoglycemia',
      manufacturingDate: '2024-02-10',
      expiryDate: '2026-02-10',
      instructions: 'Use as directed by healthcare professional.',
    },
    {
      productId: 102,
      productName: 'Asthalin 100 mcg',
      activeIngredient: 'Salbutamol Sulphate',
      therapeuticClass: 'COPD- Chronic Obstructive pulmonary disease',
      indication:
        'Treatment/prevention of bronchospasm in patients 4 years and older with reversible obstructive airway disease. Prevention of exercise-induced bronchospasm.',
      pharmaceuticalForm: 'Inhalation aerosol',
      composition:
        'Each actuation delivers Salbutamol Sulphate equivalent to 100 mcg Salbutamol IP, suspended in propellant 134a.',
      administration:
        'Administer by oral inhalation. For acute bronchospasm: 1-2 puffs every 4-6 hours. To prevent bronchospasm: Two inhalations 15-30 minutes before exercise. Chronic therapy: Two puffs up to four times a day. Maximum dose: 800 mcg in 24 hours.',
      contraindication:
        'Hypersensitivity to any components. Not suitable for managing premature labor or threatened abortion.',
      adverseDrugReaction:
        'May cause paradoxical bronchospasm, cardiovascular effects, immediate hypersensitivity reactions, and hypokalemia. Other rare effects include hypotension, collapse, mouth/throat irritation, muscle cramps, and peripheral vasodilatation. Tremor and headache are common side-effects.',
      overdose:
        'Signs of excessive beta-adrenergic stimulation, seizures, angina, hypertension, hypotension, tachycardia, arrhythmias, nervousness, headache, tremor, muscle cramps, dry mouth, palpitation, nausea, dizziness, fatigue, malaise, insomnia.',
      manufacturingDate: 'August 2018',
      expiryDate: 'August 2019',
      instructions:
        '1. Check dose counter 2. Remove cap 3. Hold inhaler upright, shake well 4. Breathe out gently away from inhaler 5. Put mouthpiece between teeth without biting, close lips 6. Start to breathe',
    },
  ];

  medicinesHindi: Medicine[] = [
    {
      productId: 101,
      productName: 'लैंटस® सोलोस्टार®',
      activeIngredient:
        'इंसुलिन ग्लार्जिन I.P. रिकॉम्बिनेंट ह्यूमन इंसुलिन एनालॉग (21A-ग्लाई-30Ba-L-आर्ज-30Bb-L-आर्ज-ह्यूमन इंसुलिन)',
      therapeuticClass: 'एंटीडायबेटिक एजेंट, लॉन्ग एक्टिंग इंसुलिन एनालॉग',
      indication:
        'वयस्कों, किशोरों और 2 वर्ष और अधिक आयु के बच्चों में मधुमेह के इलाज के लिए।',
      pharmaceuticalForm: 'इंजेक्शन के लिए सॉल्यूशन',
      composition:
        '1 mL में 3.6378 मिलीग्राम इंसुलिन ग्लार्जिन I.P, 100 आईयू मानव इंसुलिन के समरूप हैं। 10 mL वायल एक्सिपिएंट्स (प्रति mL): 30 μg जिंक, 2.7 मिलीग्राम एम-क्रेसोल, 20 मिलीग्राम ग्लिसेरोल 85%, 20 μg पॉलीसोरबेट 20; pH समायोजन के लिए हाइड्रोक्लोरिक एसिड और सोडियम हाइड्रॉक्साइड, और इंजेक्शन के लिए पानी।',
      administration: 'इंजेक्शन',
      contraindication:
        'इंसुलिन ग्लार्जिन या किसी भी इंजेक्शन के तत्वों के प्रति अतिसंवेदनशीलता',
      adverseDrugReaction:
        'हाइपोग्लाइसीमिया, एलर्जिक प्रतिक्रिया, लिपोडिस्ट्रोफी',
      overdose: 'तीव्र हाइपोग्लाइसीमिया',
      manufacturingDate: '2024-02-10',
      expiryDate: '2026-02-10',
      instructions: 'स्वास्थ्य सेवा पेशेवर के निर्देशों के अनुसार उपयोग करें।',
    },
    {
      productId: 102,
      productName: 'Asthalin 100 mcg',
      activeIngredient: 'सैल्ब्यूटामॉल सल्फेट',
      therapeuticClass: 'कोप्ड - क्रॉनिक ऑब्स्ट्रक्टिव पल्मोनरी डिजीज',
      indication:
        'रोगी 4 वर्ष आणि त्याहून मोठे उम्रदर्जांस ब्रोंशोस्पास्म चिकित्सा / रोकथाम. उलटयाच्या वायव्यक्रियाशी संबंधित रोगींमध्ये उलटयाचे ब्रोंशोस्पास्म रोकथाम.',
      pharmaceuticalForm: 'इन्हेलेशन एरोसॉल',
      composition:
        'प्रत्येक क्रियापणे 100 मीग्राम सैल्ब्यूटामॉल सल्फेट से समतुल्य, प्रोपेलेंट 134a मध्ये असलेले 100 मीग्राम सैल्ब्यूटामॉल आय.पी सुस्पेंडेड.',
      administration:
        'मौखिक इनहेलेशन द्वारे प्रशिक्षित करा. अचानक ब्रोंशोस्पास्मसाठी: प्रति 4-6 तासांत 1-2 पफ्स. ब्रोंशोस्पास्मस रोकथामसाठी: व्यायामाकिंवा अलर्जनशी संपर्क 15-30 मिनिटांमुळे दोन श्वासांतर दोन पफ्स. स्थायी थेरेपी: दिवसातून चार वेळा दोन पफ्स. अधिकतम खुप्च 24 तासांत 800 मीक्रोग्रॅम.',
      contraindication:
        'किंवा घटकांच्या सर्वकाही अतिसंवेदनशील असलेल्या किंवा सैल्ब्यूटामॉलचा उपयोग करू नका. प्रारंभिक प्रसूतीसाठी सैल्ब्यूटामॉलचा वापर सामान्यपण नसतो.',
      adverseDrugReaction:
        'उलटयाच्या ब्रोंशोस्पास्म, हृदयसंबंधी परिणाम, प्रत्यक्ष अतिसंवेदन, आणि हायपोकेलेमियासह संबंधित रोगींमध्ये होऊ शकते. अन्य असामान्य अपेक्षित प्रतिक्रियांतर्गत हैटामेशन, संकुचन, तोंड/घावाची कुचक, मासळ स्पंदन, आणि पेरिफेरल व्हॅसोडिलेटेशन यांसह सामान्य बाधक प्रतिक्रिया आहे. हलवा आणि शिरांगाचे वेदनेसह सामान्य प्रतिक्रिया आहे.',
      overdose:
        'अत्यधिक बीटा-एड्रेनर्जिक स्टिमुलेशनचे लक्षण, मिरवाणी, एंजायना, उच्च रक्तदाब, कमी रक्तदाब, तच्चिकार्दिया, विनामूल्य मांद्यांतर्गत, चिंडलेल्या, शिरांगाचे वेदना, मिरवाणी, मासळ स्पंदन, क्षरण मुख, टवक, तंगी, उपवास, अशांती आणि अनिंसोम्नियाचे लक्षण.',
      manufacturingDate: 'ऑगस्ट 2018',
      expiryDate: 'ऑगस्ट 2019',
      instructions:
        '1. डोस काउंटर तपासा 2. कॅप काढा 3. इनहेलर उच्च, चांगला धुका 4. इनहेलरवरून दूर श्वास बाहेर करा 5. बिनते बिनते मुखात बैटिंग न करता मुखांबंद बंद करा 6. श्वास घेतल्यानंतर प्रारंभ करा',
    },
  ];

  medicinesTelugu: Medicine[] = [
    {
      productId: 101,
      productName: 'లాంటస్® సోలోస్టార్®',
      activeIngredient:
        'ఇంసులిన్ గ్లార్జిన్ I.P. రికాంబినెంట్ హ్యూమన్ ఇంసులిన్ అనాలాగ్ (21A-గ్లాయి-30Ba-L-ఆర్జ-30Bb-L-ఆర్జ-హ్యూమన్ ఇంసులిన్)',
      therapeuticClass: 'ఆంటీడయాబెటిక్ యాంట్, లాంగ్ యాక్టింగ్ ఇంసులిన్ అనాలాగ్',
      indication:
        'ప్రేరితులు, కిశోరులు మరియు 2 సంవత్సరాల క్రితం పరిపూర్ణం కాదు మధుమేహం వ్యాధిని నివారిస్తుంది.',
      pharmaceuticalForm: 'ఇంజెక్షన్ కోసం సాగుభ్రేత',
      composition:
        '1 mLలో 3.6378 మిలీగ్రామ్ ఇంసులిన్ గ్లార్జిన్ I.P, 100 IU మానవ ఇంసులిన్ కోసం అనుగుణమైనది. 10 mL వ్యాల్ ఎక్సిపియంట్స్ (ప్రతి mL): 30 మైక్రోగ్ జింక్, 2.7 మిలీగ్రామ్ ఎం-క్రేసోల్, 20 మిలీగ్రామ్ గ్లైసరాల్ 85%, 20 మైక్రోగ్ పాలిసార్బేట్ 20; pH సరఫరాయిస్ట్మెం కోసం హైడ్రోక్లోరిక్ ఆసిడ్ మరియు సోడియం హైడ్రాక్సైడ్, మరియు ఇంజెక్షన్ కోసం నీరు.',
      administration: 'ఇంజెక్షన్',
      contraindication:
        'ఇంసులిన్ గ్లార్జిన్ లేదా ఏ అన్యాన్ని ఎగుమతినిచ్చిన రీతిలో సంవేదనశీలత',
      adverseDrugReaction:
        'హైపోగ్లైసీమియా, అలర్జిక్ ప్రతిస్పందన, లిపోడిస్ట్రోఫీ',
      overdose: 'కఠిన హైపోగ్లైసీమియా',
      manufacturingDate: '2024-02-10',
      expiryDate: '2026-02-10',
      instructions: 'ఆరోగ్య ప్రొఫెషనల్ దారి తప్పనిసరి ఉపయ',
    },
    {
      productId: 102,
      productName: 'ఆస్తాలిన్ 100 మైక్రోగ్రామ్',
      activeIngredient: 'సల్బ్యూటామాల్ సల్ఫేట్',
      therapeuticClass: 'సీఓపీడీ - క్రానిక్ ఆబ్స్ట్రక్టివ్ పల్మోనరీ రోగం',
      indication:
        'ప్రతి 4 ఏళ్ల గురించి వృత్తి కలిగి ఉన్న పేరునా అసంక్రాంత వ్యాధి కలిగి ఉన్నప్పటికీ, ఆస్తాలిన్ ఇన్హేలర్ అనే ఔట్ డియాజన్ ఉపయోగిస్తుంది.',
      pharmaceuticalForm: 'ఇన్హేలేషన్ ఎరోసాల్',
      composition:
        'ప్రతి అనుకరణ సల్బ్యూటామాల్ సల్ఫేట్ ఇ.పి. సల్బ్యూటామాల్ ఐ.పిౕ కంటెంట్ సల్బ్యూటామాల్ ఐ.పిౕ కంటెంట్ …….100 మైక్రోగ్రామ్, ప్రొపెలెంట్ 134aలో సస్పెండెడ్ …………q.s.',
      administration:
        'ఆస్తాలిన్ ఇన్హేలర్ ఓరల్ ఇన్హేలేషన్ ద్వారా నిర్వహించాలి. తీవ్ర బ్రాంకోస్పాసం కోసం: 4-6 గంటల అంతరం ప్రతికాలం 1-2 పఫ్లు. బ్రాంకోస్పాసం నివారణకోసం: బ్రాంకోస్పాసం కి ముందే ప్రతికాలం 15-30 నిమిషాలు రద్దు చేసే రంగాలు. క్రానిక్ థెరపీ: ప్రతి రోజు నాలుగు సార్లు రెండు పఫ్లు. అధికమైన డోజ్: 24 గంటలలో 800 మైక్రోగ్రామ్లకు.',
      contraindication:
        'ఎన్ని కాంపోజిట్స్ కి అన్ని రోగాలపై అతిరేకాలమైన స్వారస్యం. అతను పూర్తి గర్భిణిని నిర్వహించాల్సిన వివాహాత్మక అస్థితిలో, అంతే-పార్టం హెమ్మరేజ్, లేదా గర్భిణి శ్వేత విషమాలకు అతను ఉపయోగించాల్సిన అతను ఇన్హేల్డ్ సల్బ్యూటామాల్ ప్రిపరేషన్లు పూర్తిగా అనుకోలుద్దామని అంగీకరించాలి. సల్బ్యూటామాల్ ప్రిపరేషన్లను త్వరగా ప్రసాదించాలి.',
      adverseDrugReaction:
        'ఆస్తాలిన్ ఇన్హేలర్ ఉపయోగం పరాడాక్సికల్ బ్రాంకోస్పాసం, కార్డియోవాస్క్యులర్ వ్యాధులు, తక్షణ అతిరేకాలమైన ప్రతిక్రియలు, మరియు హైపొటెన్షన్సీలను సహించవచ్చు. ఇతర అరుచికైన ప్రతిక్రియలలో హైపర్టెన్షన్సీవిటి రీఏక్షన్లు, అంగమూలాలు, మౌత్ అండ్ థ్రోట్ ఇరిటేషన్, మసలు క్రాంప్స్ మరియు పెరిఫరల్ వాసొడిలటేషన్ ఉంటుంది. సల్బ్యూటామాల్తో హృదయాఘాతం, కొత్తగా అవగాహన అసంజ్ఞె, కొత్తగా అవగాహన అసంజ్ఞె చెబుతోంది.',
      overdose:
        'అధిక బీటా-యాడ్రెనర్జిక్ స్టిమ్యులేషన్ ప్రతిక్రియల లక్షణాలకు, ఆక్సిజన్డాట్షన్, అంజినా, హైపర్టెన్షన్ లేదా హిపోటెన్షన్, టాకికార్డియా, ఆరిత్మియాస్, నర్వస్నెస్, హెడేక్, ట్రెమర్, మసలు క్రాంప్స్, డ్రై మౌత్, పాల్పిటేషన్, నాజియా, డిజినెస్, ఫాటిగ్, మలేస్, ఇన్సోమ్నియా ఉంటుంది.',
      manufacturingDate: 'ఆగష్టు 2018',
      expiryDate: 'ఆగష్టు 2019',
      instructions:
        '1. డోస్ కౌంటర్ తనిఖీ చేయండి 2. క్యాప్ తొలగించండి 3. ఇన్హేలర్ను ఉన్నతంగా ఉంచండి, చల్లారంగా ఉండండి 4. ఇన్హేలర్ నుండి చల్లారంగా బాల్చాలు చేసి బ్రీతి చేయండి 5. పట్టుకున్నట్లయి పేరుకు మధ్యలో నుండి బాల్చాలను పెట్టండి, ముక్కులను మూసివేయండి 6. మౌఖికం ప్రారంభించండి',
    },
  ];

  medicinesMarathi: Medicine[] = [
    {
      productId: 101,
      productName: 'LANTUS® SOLOSTAR®',
      activeIngredient:
        'इंसुलिन ग्लार्जीन आय.पी. पुनरुत्पन्न मानव इंसुलिन अॅनॅलॉग (21ए-ग्लाई-30बा-एल-आर्जी-30बी-एल-आर्जी-मानव इंसुलिन)',
      therapeuticClass: 'एंटीडायबेटिक एजेंट, लॉन्ग एक्टिंग इंसुलिन अॅनॅलॉग',
      indication:
        'वयोमानातील २ वर्षांपासून वयोमानातील वयोमानातील डायबिटीजचे उपचारसाठी, किंवा तो वयोमानातील २ वर्षांपासून जास्त वयोमानातील किंवा वयोमानातील २ वर्षांपासून तुमचे डायबिटीज मेलेटसचे उपचारसाठी।',
      pharmaceuticalForm: 'इंजेक्शन साठी द्रव',
      composition:
        '1 मि.ळी आय.पी. इंसुलिन ग्लार्जीन आय.पी, मानव इंसुलिनचे 100 आय.यू.साठी 3.6378 मि.ग्रॅम असलेले मूळ असते. 10 मि.ळी व्हायल सोबतील सजावटकारक (प्रति मि.ळी): 30 माइक्रोग्रॅम झिंक, 2.7 मि.ग्रॅम एम-क्रेसोल, 20 मि.ग्रॅम ग्लिसरॉल 85%, 20 माइक्रोग्रॅम पॉलीसॉर्बेट 20; pH समायोजनासाठी हायड्रोक्लोरिक अॅसिड आणि सोडियम हायड्रॉक्साइड, आणि इंजेक्शन साठी पाणी।',
      administration: 'इंजेक्शन',
      contraindication:
        'इंसुलिन ग्लार्जीन किंवा त्याच्या कोणत्याही अंशक्षेत्रात अतिरिक्त प्रतिक्रिया असलेल्या व्यक्तीस किंवा त्याच्या प्रतिरेकाशी अधिक संवेदनशील असल्यास',
      adverseDrugReaction:
        'हायपोग्लाईसेमिया, एलर्जिक प्रतिक्रिया, लिपोडायस्ट्रोफी',
      overdose: 'कठोर हायपोग्लाईसेमिया',
      manufacturingDate: '2024-02-10',
      expiryDate: '2026-02-10',
      instructions:
        'आरोग्यदात्मक व्यक्तीद्वारे निर्देशित किंवा डॉक्टरांकरिता वापरा.',
    },
    {
      productId: 102,
      productName: 'अस्थालिन 100 माइक्रोग्रॅम',
      activeIngredient: 'सॅल्ब्युटामॉल सल्फेट',
      therapeuticClass: 'कोप्ड - क्रॉनिक ऑब्स्ट्रक्टिव पल्मोनरी डिझिझ',
      indication:
        '4 वर्ष आणि त्याहून मोठ्यांसाठी प्रतिष्ठापन / उलटयाचे वायव्य रोगात्मक वायव्य रोग सहित ब्रोंशोस्पास्मचे उपचार किंवा रोकथामकरण. व्यायाम-संबंधित ब्रोंशोस्पास्माचे रोकथाम.',
      pharmaceuticalForm: 'इन्हेलेशन एरोसॉल',
      composition:
        'प्रत्येक क्रियापण सॅल्ब्युटामॉल सल्फेट से समतुल्य 100 माइक्रोग्रॅम सॅल्ब्युटामॉल आय.पी, प्रोपेलेंट 134a मध्ये असलेले सस्पेंडेड.',
      administration:
        'मौखिक इनहेलेशन द्वारे केलेले. तीव्र ब्रोंशोस्पास्मसाठी: प्रत्येक 4-6 तासांत 1-2 पफ्स. ब्रोंशोस्पास्मस प्रतिष्ठापनासाठी: व्यायामाआधी 15-30 मिनिटांमुळे दोन श्वासांतर दोन पफ्स. स्थायी थेरेपी: दिवसातून चार वेळा दोन पफ्स. अधिकतम खुप्च 24 तासांत 800 माइक्रोग्रॅम.',
      contraindication:
        'किंवा कोणत्याही घटकांच्या आपत्तिशील असलेल्या किंवा सॅल्ब्युटामॉलचा उपयोग करण्यात अयोग्य. प्रारंभिक प्रसूतीसाठी सॅल्ब्युटामॉलचा वापर सामान्यपण अनुपयुक्त आहे.',
      adverseDrugReaction:
        'उलटयाच्या ब्रोंशोस्पास्म, हृदयसंबंधी परिणाम, प्रत्यक्ष आतिसंवेदन, आणि हायपोकेलेमिया. इतर असामान्य प्रतिक्रियांतर्गत हैटामेशन, संकुचन, तोंड / घावाची कुचक, मासळ स्पंदन, आणि पेरिफेरल व्हॅसोडिलेटेशन. हलवा आणि शिरांगाचे वेदने सामान्य बाधक प्रतिक्रिया आहे.',
      overdose:
        'अत्यधिक बीटा-एड्रेनर्जिक स्टिमुलेशनचे लक्षण, मिरवाणी, एंजायना, उच्च रक्तदाब, कमी रक्तदाब, तच्चिकार्दिया, विनामूल्य मांद्यांतर्गत, चिंडलेल्या, शिरांगाचे वेदना, मिरवाणी, मासळ स्पंदन, क्षरण मुख, टवक, तंगी, उपवास, अशांती आणि अनिंसोम्नियाचे लक्षण.',
      manufacturingDate: 'ऑगस्ट 2018',
      expiryDate: 'ऑगस्ट 2019',
      instructions:
        '1. डोस काउंटर तपासा 2. कॅप काढा 3. इनहेलर उच्च, चांगला धुका 4. इनहेलरवरून दूर श्वास बाहेर करा 5. बिनते बिनते मुखात बैटिंग न करता मुखांबंद बंद करा 6. श्वास घेतल्यानंतर प्रारंभ करा',
    },
  ];

  constructor() {}
}
