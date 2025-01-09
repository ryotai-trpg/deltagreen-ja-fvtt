const professions = {
  "Anthropologist": "人類学者",
  "Business Executive": "ビジネスエグゼクティブ",
  "Computer Scientist": "コンピューター科学者",
  "Criminal": "犯罪者",
  "Engineer": "エンジニア",
  "Federal Agent": "連邦捜査官",
  "Firefighter": "消防士",
  "Foreign Service Officer": "外交官",
  "Historian": "歴史家",
  "Intelligence Analyst": "情報分析官",
  "Intelligence Case Officer": "情報担当官",
  "Lawyer": "弁護士",
  "Marine": "海兵隊員",
  "Media Specialist": "メディアスペシャリスト",
  "Nurse": "看護師",
  "Paramedic": "救急救命士",
  "Physician": "医師",
  "Pilot": "パイロット",
  "Police Officer": "警察官",
  "Program Manager": "プログラムマネージャー",
  "Sailor": "水兵",
  "Scientist": "科学者",
  "Soldier": "兵士",
  "Special Operator": "特殊作戦部隊員"
};

const typed_skills = {
  "Art": "芸術",
  "Craft": "製作",
  "Foreign Language": "ほかの言語",
  "Military Science": "軍事科学",
  "Pilot": "操縦",
  "Science": "科学",
  "Other": "その他"
};

const military_types = {
  "Land": "陸",
  "Air": "空",
  "Sea": "海"
};

Hooks.on('init', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'deltagreen-ja',
      lang: 'ja',
      dir: 'compendium'
    });

    Babele.get().registerConverters({
      "profession": (profession) => {
        return professions[profession] ? professions[profession] : profession;
      },
      "typed_skill": (typed_skill) => {
        return typed_skills[typed_skill] ? typed_skills[typed_skill] : typed_skill;
      },
      "military_type": (military_type) => {
        return military_types[military_type] ? military_types[military_type] : military_type;
      }
    })
  }
});
