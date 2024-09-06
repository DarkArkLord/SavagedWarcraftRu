const States = Object.freeze({
    Agility: 'Agility',     // Ловкость
    Smarts: 'Smarts',       // Смекалка
    Spirit: 'Spirit',       // Характер
    Strength: 'Strength',   // Сила
    Vigor: 'Vigor',         // Выносливость
    // --- --- Вторичные --- ---
    Charisma: 'Charisma',   // Харизма
    Pace: 'Pace',           // Шаг
    Parry: 'Parry',         // Защита
    Toughness: 'Toughness', // Стойкость
});

const StatesTranslations = Object.freeze({
    [States.Agility]: 'Ловкость',
    [States.Smarts]: 'Смекалка',
    [States.Spirit]: 'Характер',
    [States.Strength]: 'Сила',
    [States.Vigor]: 'Выносливость',
    // --- --- Вторичные --- ---
    [States.Charisma]: 'Харизма',
    [States.Pace]: 'Шаг',
    [States.Parry]: 'Защита',
    [States.Toughness]: 'Стойкость',
});

const Skills = Object.freeze({
    Boating: 'Boating',
    Climbing: 'Climbing',
    Driving: 'Driving',
    Fighting: 'Fighting',
    Gambling: 'Gambling',
    Healing: 'Healing',
    Intimidation: 'Intimidation',
    Investigation: 'Investigation',
    Knowledge: 'Knowledge',
    Lockpicking: 'Lockpicking',
    Notice: 'Notice',
    Persuasion: 'Persuasion',
    Piloting: 'Piloting',
    Repair: 'Repair',
    Riding: 'Riding',
    Shooting: 'Shooting',
    Stealth: 'Stealth',
    Streetwise: 'Streetwise',
    Survival: 'Survival',
    Swimming: 'Swimming',
    Taunt: 'Taunt',
    Throwing: 'Throwing',
    Tracking: 'Tracking',
    // Arcane Skills
    Spellcasting: 'Spellcasting',
    Faith: 'Faith',
});

const SkillsTranslations = Object.freeze({
    [Skills.Boating]: 'Судовождение',
    [Skills.Climbing]: 'Лазанье',
    [Skills.Driving]: 'Вождение',
    [Skills.Fighting]: 'Драка',
    [Skills.Gambling]: 'Азартные игры',
    [Skills.Healing]: 'Лечение',
    [Skills.Intimidation]: 'Запугивание',
    [Skills.Investigation]: 'Расследование',
    [Skills.Knowledge]: 'Знание',
    [Skills.Lockpicking]: 'Взлом',
    [Skills.Notice]: 'Внимание',
    [Skills.Persuasion]: 'Убеждение',
    [Skills.Piloting]: 'Пилотирование',
    [Skills.Repair]: 'Ремонт',
    [Skills.Riding]: 'Верховая езда',
    [Skills.Shooting]: 'Стрельба',
    [Skills.Stealth]: 'Маскировка',
    [Skills.Streetwise]: 'Уличное чутьё',
    [Skills.Survival]: 'Выживание',
    [Skills.Swimming]: 'Плавание',
    [Skills.Taunt]: 'Провокация',
    [Skills.Throwing]: 'Метание',
    [Skills.Tracking]: 'Выслеживание',
    // Arcane Skills
    [Skills.Spellcasting]: 'Колдовство',
    [Skills.Faith]: 'Вера',
});

const Hindrances = Object.freeze({
    AllThumbs: 'All Thumbs',
    Anemic: 'Anemic',
    Arrogant: 'Arrogant',
    BadEyes: 'Bad Eyes',
    BadLuck: 'Bad Luck',
    BigMouth: 'Big Mouth',
    Blind: 'Blind',
    Bloodthirsty: 'Bloodthirsty',
    Cautious: 'Cautious',
    Clueless: 'Clueless',
    CodeOfHonor: 'Code of Honor',
    Curious: 'Curious',
    DeathWish: 'Death Wish',
    Delusional: 'Delusional',
    DoubtingThomas: 'Doubting Thomas',
    Elderly: 'Elderly',
    Enemy: 'Enemy',
    Greedy: 'Greedy',
    Habit: 'Habit',
    HardOfHearing: 'Hard of Hearing',
    Heroic: 'Heroic',
    Illiterate: 'Illiterate',
    Lame: 'Lame',
    Loyal: 'Loyal',
    Mean: 'Mean',
    Obese: 'Obese',
    OneArm: 'OneArm',
    OneEye: 'OneEye',
    OneLeg: 'OneLeg',
    Outsider: 'Outsider',
    Overconfident: 'Overconfident',
    Pacifist: 'Pacifist',
    Phobia: 'Phobia',
    Poverty: 'Poverty',
    Quirk: 'Quirk',
    Small: 'Small',
    Stubborn: 'Stubborn',
    Ugly: 'Ugly',
    Vengeful: 'Vengeful',
    Vow: 'Vow',
    Wanted: 'Wanted',
    Yellow: 'Yellow',
    Young: 'Young',
});

const HindrancesTranslations = Object.freeze({
    [Hindrances.AllThumbs]: 'Кривые руки',
    [Hindrances.Anemic]: undefined,
    [Hindrances.Arrogant]: undefined,
    [Hindrances.BadEyes]: undefined,
    [Hindrances.BadLuck]: undefined,
    [Hindrances.BigMouth]: undefined,
    [Hindrances.Blind]: undefined,
    [Hindrances.Bloodthirsty]: 'Жажда крови',
    [Hindrances.Cautious]: 'Перестраховщик',
    [Hindrances.Clueless]: undefined,
    [Hindrances.CodeOfHonor]: undefined,
    [Hindrances.Curious]: undefined,
    [Hindrances.DeathWish]: undefined,
    [Hindrances.Delusional]: 'Заблуждение',
    [Hindrances.DoubtingThomas]: undefined,
    [Hindrances.Elderly]: 'Старость',
    [Hindrances.Enemy]: undefined,
    [Hindrances.Greedy]: 'Жадность',
    [Hindrances.Habit]: 'Дурная Привычка',
    [Hindrances.HardOfHearing]: undefined,
    [Hindrances.Heroic]: undefined,
    [Hindrances.Illiterate]: undefined,
    [Hindrances.Lame]: undefined,
    [Hindrances.Loyal]: undefined,
    [Hindrances.Mean]: undefined,
    [Hindrances.Obese]: undefined,
    [Hindrances.OneArm]: undefined,
    [Hindrances.OneEye]: undefined,
    [Hindrances.OneLeg]: undefined,
    [Hindrances.Outsider]: 'Чужак',
    [Hindrances.Overconfident]: 'Самоуверенность',
    [Hindrances.Pacifist]: undefined,
    [Hindrances.Phobia]: undefined,
    [Hindrances.Poverty]: undefined,
    [Hindrances.Quirk]: undefined,
    [Hindrances.Small]: undefined,
    [Hindrances.Stubborn]: 'Упрямство',
    [Hindrances.Ugly]: 'Уродство',
    [Hindrances.Vengeful]: 'Мстительность',
    [Hindrances.Vow]: undefined,
    [Hindrances.Wanted]: undefined,
    [Hindrances.Yellow]: undefined,
    [Hindrances.Young]: undefined,
});

const Ranks = Object.freeze({
    Novice: 'Novice',
    Seasoned: 'Seasoned',
    Veteran: 'Veteran',
    Heroic: 'Heroic',
    Legendary: 'Legendary',
});

const RanksTranslations = Object.freeze({
    [Ranks.Novice]: 'Новичок',
    [Ranks.Seasoned]: 'Закалённый',
    [Ranks.Veteran]: 'Ветеран',
    [Ranks.Heroic]: 'Герой',
    [Ranks.Legendary]: 'Легенда',
});

const Edges = Object.freeze({
    //#region Base edges
    Ace: 'Ace',
    Acrobat: 'Acrobat',
    Adept: 'Adept',
    Alertness: 'Alertness',
    Ambidextrous: 'Ambidextrous',
    ArcaneBackground: 'Arcane Background',
    ArcaneResistance: 'Arcane Resistance',
    ImprovedArcaneResistance: 'Improved Arcane Resistance',
    Assassin: 'Assassin',
    Attractive: 'Attractive',
    VeryAttractive: 'Very Attractive',
    BeastBond: 'Beast Bond',
    BeastMaster: 'Beast Master',
    Berserk: 'Berserk',
    Block: 'Block',
    ImprovedBlock: 'Improved Block',
    Brave: 'Brave',
    Brawler: 'Brawler',
    Bruiser: 'Bruiser',
    Brawny: 'Brawny',
    Champion: 'Champion',
    Charismatic: 'Charismatic',
    CombatReflexes: 'Combat Reflexes',
    Command: 'Command',
    CommandPresence: 'Command Presence',
    CommonBond: 'Common Bond',
    Connections: 'Connections',
    Counterattack: 'Counterattack',
    ImprovedCounterattack: 'Improved Counterattack',
    DangerSense: 'Danger Sense',
    DeadShot: 'Dead Shot',
    Dodge: 'Dodge',
    ImprovedDodge: 'Improved Dodge',
    Elan: 'Elan',
    Extraction: 'Extraction',
    ImprovedExtraction: 'Improved Extraction',
    FastHealer: 'Fast Healer',
    Fervor: 'Fervor',
    FirstStrike: 'First Strike',
    ImprovedFirstStrike: 'Improved First Strike',
    FleetFooted: 'Fleet Footed',
    Florentine: 'Florentine',
    Followers: 'Followers',
    Frenzy: 'Frenzy',
    ImprovedFrenzy: 'Improved Frenzy',
    Gadgeteer: 'Gadgeteer',
    GiantKiller: 'Giant Killer',
    HardToKill: 'Hard to Kill',
    HarderToKill: 'Harder to Kill',
    Healer: 'Healer',
    HoldTheLine: 'Hold The Line',
    HolyUnholyWarrior: 'Holy/Unholy Warrior',
    HolyWarrior: 'Holy Warrior',
    UnholyWarrior: 'Unholy Warrior',
    ImprovisationalFighter: 'Improvisational Fighter',
    Inspire: 'Inspire',
    Investigator: 'Investigator',
    JackOfAllTrades: 'Jack-of-All-Trades',
    KillerInstinct: 'Killer Instinct',
    LeaderOfMen: 'Leader of Men',
    LevelHeaded: 'Level Headed',
    ImprovedLeveHeaded: 'Improved Level Headed',
    Linguist: 'Linguist',
    LiquidCourage: 'Liquid Courage',
    Luck: 'Luck',
    GreatLuck: 'GreatLuck',
    Marksman: 'Marksman',
    MartialArtist: 'Martial Artist',
    ImprovedMartialArtist: 'Improved Martial Artist',
    MartialArtsMaster: 'Martial Arts Master',
    McGyver: 'McGyver',
    Mentalist: 'Mentalist',
    MightyBlow: 'Mighty Blow',
    MrFixIt: 'Mr. Fix It',
    NaturalLeader: 'Natural Leader',
    NervesOfSteel: 'Nerves of Steel',
    ImprovedNervesOfSteel: 'Improved Nerves of Steel',
    NewPower: 'New Power',
    Noble: 'Noble',
    NoMercy: 'No Mercy',
    PowerPoints: 'Power Points',
    PowerSurge: 'Power Surge',
    Professional: 'Professional',
    Expert: 'Expert',
    Master: 'Master',
    Quick: 'Quick',
    QuickDraw: 'Quick Draw',
    RapidRecharge: 'Rapid Recharge',
    ImprovedRapidRecharge: 'Improved Rapid Recharge',
    Rich: 'Rich',
    FilthyRich: 'Filthy Rich',
    RockAndRoll: 'Rock and Roll!',
    Scavenger: 'Scavenger',
    Scholar: 'Scholar',
    Sidekick: 'Sidekick',
    SoulDrain: 'Soul Drain',
    SteadyHands: 'Steady Hands',
    Sweep: 'Sweep',
    ImprovedSweep: 'Improved Sweep',
    StrongWilled: 'Strong Willed',
    Tactician: 'Tactician',
    Thief: 'Thief',
    ToughAsNails: 'Tough as Nails',
    ImprovedToughAsNails: 'Improved Tough as Nails',
    TrademarkWeapon: 'Trademark Weapon',
    ImprovedTrademarkWeapon: 'Improved Trademark Weapon',
    TwoFisted: 'Two Fisted',
    WeaponMaster: 'Weapon Master',
    MasterOfArms: 'Master of Arms',
    Wizard: 'Wizard',
    Woodsman: 'Woodsman',
    //#endregion
    //#region Monsters edges
    Aquatic: 'Aquatic',
    Armor: 'Armor',
    Burrowing: 'Burrowing',
    Construct: 'Construct',
    Elemental: 'Elemental',
    Ethereal: 'Ethereal',
    Fear: 'Fear',
    Fearless: 'Fearless',
    Flight: 'Flight',
    Gargantuan: 'Gargantuan',
    Hardy: 'Hardy',
    Infection: 'Infection',
    Infravision: 'Infravision',
    Immunity: 'Immunity',
    Invulnerability: 'Invulnerability',
    LowLightVision: 'Low-Light Vision',
    Paralysis: 'Paralysis',
    Poison: 'Poison',
    Regeneration: 'Regeneration',
    Size: 'Size',
    Small: 'Small',
    Large: 'Large',
    Huge: 'Huge',
    Strength: 'Strength',
    Stun: 'Stun',
    Undead: 'Undead',
    WallWalker: 'Wall Walker',
    Weakness: 'Weakness',
    //#endregion
});

const EdgesTranslations = Object.freeze({
    //#region Base edges
    [Edges.Ace]: undefined,
    [Edges.Acrobat]: undefined,
    [Edges.Adept]: undefined,
    [Edges.Alertness]: undefined,
    [Edges.Ambidextrous]: undefined,
    [Edges.ArcaneBackground]: 'Мистический дар',
    [Edges.ArcaneResistance]: undefined,
    [Edges.ImprovedArcaneResistance]: undefined,
    [Edges.Assassin]: undefined,
    [Edges.Attractive]: undefined,
    [Edges.VeryAttractive]: undefined,
    [Edges.BeastBond]: undefined,
    [Edges.BeastMaster]: undefined,
    [Edges.Berserk]: 'Берсерк',
    [Edges.Block]: 'Блок',
    [Edges.ImprovedBlock]: 'Блок+',
    [Edges.Brave]: undefined,
    [Edges.Brawler]: undefined,
    [Edges.Bruiser]: undefined,
    [Edges.Brawny]: 'Бугай',
    [Edges.Champion]: 'Избранный',
    [Edges.Charismatic]: undefined,
    [Edges.CombatReflexes]: undefined,
    [Edges.Command]: 'Командный голос',
    [Edges.CommandPresence]: undefined,
    [Edges.CommonBond]: undefined,
    [Edges.Connections]: undefined,
    [Edges.Counterattack]: undefined,
    [Edges.ImprovedCounterattack]: undefined,
    [Edges.DangerSense]: undefined,
    [Edges.DeadShot]: undefined,
    [Edges.Dodge]: undefined,
    [Edges.ImprovedDodge]: undefined,
    [Edges.Elan]: undefined,
    [Edges.Extraction]: undefined,
    [Edges.ImprovedExtraction]: undefined,
    [Edges.FastHealer]: undefined,
    [Edges.Fervor]: undefined,
    [Edges.FirstStrike]: undefined,
    [Edges.ImprovedFirstStrike]: undefined,
    [Edges.FleetFooted]: undefined,
    [Edges.Florentine]: undefined,
    [Edges.Followers]: undefined,
    [Edges.Frenzy]: undefined,
    [Edges.ImprovedFrenzy]: undefined,
    [Edges.Gadgeteer]: undefined,
    [Edges.GiantKiller]: undefined,
    [Edges.HardToKill]: undefined,
    [Edges.HarderToKill]: undefined,
    [Edges.Healer]: undefined,
    [Edges.HoldTheLine]: undefined,
    [Edges.HolyUnholyWarrior]: 'Воин света/тьмы',
    [Edges.HolyWarrior]: 'Воин света',
    [Edges.UnholyWarrior]: 'Воин тьмы',
    [Edges.ImprovisationalFighter]: undefined,
    [Edges.Inspire]: undefined,
    [Edges.Investigator]: undefined,
    [Edges.JackOfAllTrades]: undefined,
    [Edges.KillerInstinct]: undefined,
    [Edges.LeaderOfMen]: undefined,
    [Edges.LevelHeaded]: undefined,
    [Edges.ImprovedLeveHeaded]: undefined,
    [Edges.Linguist]: undefined,
    [Edges.LiquidCourage]: undefined,
    [Edges.Luck]: undefined,
    [Edges.GreatLuck]: undefined,
    [Edges.Marksman]: undefined,
    [Edges.MartialArtist]: undefined,
    [Edges.ImprovedMartialArtist]: undefined,
    [Edges.MartialArtsMaster]: undefined,
    [Edges.McGyver]: undefined,
    [Edges.Mentalist]: undefined,
    [Edges.MightyBlow]: undefined,
    [Edges.MrFixIt]: undefined,
    [Edges.NaturalLeader]: 'Прирождённый лидер',
    [Edges.NervesOfSteel]: undefined,
    [Edges.ImprovedNervesOfSteel]: undefined,
    [Edges.NewPower]: undefined,
    [Edges.Noble]: undefined,
    [Edges.NoMercy]: undefined,
    [Edges.PowerPoints]: undefined,
    [Edges.PowerSurge]: undefined,
    [Edges.Professional]: undefined,
    [Edges.Expert]: undefined,
    [Edges.Master]: undefined,
    [Edges.Quick]: undefined,
    [Edges.QuickDraw]: undefined,
    [Edges.RapidRecharge]: 'Восстановление силы',
    [Edges.ImprovedRapidRecharge]: 'Восстановление силы+',
    [Edges.Rich]: undefined,
    [Edges.FilthyRich]: undefined,
    [Edges.RockAndRoll]: undefined,
    [Edges.Scavenger]: undefined,
    [Edges.Scholar]: undefined,
    [Edges.Sidekick]: undefined,
    [Edges.SoulDrain]: 'Иссушение духа',
    [Edges.SteadyHands]: undefined,
    [Edges.Sweep]: undefined,
    [Edges.ImprovedSweep]: undefined,
    [Edges.StrongWilled]: undefined,
    [Edges.Tactician]: undefined,
    [Edges.Thief]: undefined,
    [Edges.ToughAsNails]: undefined,
    [Edges.ImprovedToughAsNails]: undefined,
    [Edges.TrademarkWeapon]: undefined,
    [Edges.ImprovedTrademarkWeapon]: undefined,
    [Edges.TwoFisted]: undefined,
    [Edges.WeaponMaster]: undefined,
    [Edges.MasterOfArms]: undefined,
    [Edges.Wizard]: 'Чародей',
    [Edges.Woodsman]: undefined,
    //#endregion
    //#region Monsters edges
    [Edges.Aquatic]: undefined,
    [Edges.Armor]: undefined,
    [Edges.Burrowing]: undefined,
    [Edges.Construct]: undefined,
    [Edges.Elemental]: undefined,
    [Edges.Ethereal]: undefined,
    [Edges.Fear]: undefined,
    [Edges.Fearless]: undefined,
    [Edges.Flight]: undefined,
    [Edges.Gargantuan]: undefined,
    [Edges.Hardy]: undefined,
    [Edges.Infection]: undefined,
    [Edges.Infravision]: undefined,
    [Edges.Immunity]: undefined,
    [Edges.Invulnerability]: undefined,
    [Edges.LowLightVision]: 'Ночное зрение',
    [Edges.Paralysis]: undefined,
    [Edges.Poison]: undefined,
    [Edges.Regeneration]: undefined,
    [Edges.Size]: undefined,
    [Edges.Small]: undefined,
    [Edges.Large]: undefined,
    [Edges.Huge]: undefined,
    [Edges.Strength]: undefined,
    [Edges.Stun]: undefined,
    [Edges.Undead]: undefined,
    [Edges.WallWalker]: undefined,
    [Edges.Weakness]: undefined,
    //#endregion
});

const Powers = Object.freeze({
    Armor: 'Armor',
    Banish: 'Banish',
    Barrier: 'Barrier',
    BeastFriend: 'Beast Friend',
    Blast: 'Blast',
    Blind: 'Blind',
    Bolt: 'Bolt',
    BoostLowerTrait: 'Boost/Lower Trait',
    BoostTrait: 'Boost Trait',
    LowerTrait: 'Lower Trait',
    Burrow: 'Burrow',
    Burst: 'Burst',
    Confusion: 'Confusion',
    DamageField: 'Damage Field',
    Darksight: 'Darksight',
    Deflection: 'Deflection',
    DetectConcealArcana: 'Detect/Conceal Arcana',
    DetectArcana: 'Detect Arcana',
    ConcealArcana: 'Conceal Arcana',
    Disguise: 'Disguise',
    Dispel: 'Dispel',
    Divination: 'Divination',
    DrainPowerPoints: 'Drain Power Points',
    ElementalManipulation: 'Elemental Manipulation',
    Entangle: 'Entangle',
    EnvironmentalProtection: 'Environmental Protection',
    Farsight: 'Farsight',
    Fear: 'Fear',
    Fly: 'Fly',
    GreaterHealing: 'Greater Healing',
    GrowthShrink: 'Growth/Shrink',
    Growth: 'Growth',
    Shrink: 'Shrink',
    Havoc: 'Havoc',
    Healing: 'Healing',
    Intangibility: 'Intangibility',
    Invisibility: 'Invisibility',
    LightObscure: 'Light/Obscure',
    Light: 'Light',
    Obscure: 'Obscure',
    MindReading: 'Mind Reading',
    Pummel: 'Pummel',
    Puppet: 'Puppet',
    Quickness: 'Quickness',
    ShapeChange: 'Shape Change',
    Slow: 'Slow',
    Slumber: 'Slumber',
    Smite: 'Smite',
    SpeakLanguage: 'Speak Language',
    Speed: 'Speed',
    Stun: 'Stun',
    Succor: 'Succor',
    SummonAlly: 'Summon Ally',
    Telekinesis: 'Telekinesis',
    Teleport: 'Teleport',
    WallWalker: 'Wall Walker',
    WarriorsGift: `Warrior's Gift`,
    Zombie: 'Zombie',
});

const PowersTranslations = Object.freeze({
    [Powers.Armor]: 'Доспех',
    [Powers.Banish]: undefined,
    [Powers.Barrier]: 'Стена',
    [Powers.BeastFriend]: undefined,
    [Powers.Blast]: 'Взрыв',
    [Powers.Blind]: undefined,
    [Powers.Bolt]: 'Стрела',
    [Powers.BoostLowerTrait]: 'Усилить/Ослабить параметр',
    [Powers.BoostTrait]: 'Усилить параметр',
    [Powers.LowerTrait]: 'Ослабить параметр',
    [Powers.Burrow]: undefined,
    [Powers.Burst]: 'Поток',
    [Powers.Confusion]: undefined,
    [Powers.DamageField]: undefined,
    [Powers.Darksight]: undefined,
    [Powers.Deflection]: 'Щит',
    [Powers.DetectConcealArcana]: 'Увидеть/Скрыть сверхъестественное',
    [Powers.DetectArcana]: 'Увидеть сверхъестественное',
    [Powers.ConcealArcana]: 'Скрыть сверхъестественное',
    [Powers.Disguise]: undefined,
    [Powers.Dispel]: 'Рассеивание',
    [Powers.Divination]: undefined,
    [Powers.DrainPowerPoints]: undefined,
    [Powers.ElementalManipulation]: 'Управление элементами',
    [Powers.Entangle]: 'Путы',
    [Powers.EnvironmentalProtection]: 'Защита от окружающей среды',
    [Powers.Farsight]: undefined,
    [Powers.Fear]: 'Ужас',
    [Powers.Fly]: 'Полёт',
    [Powers.GreaterHealing]: 'Великое исцеление',
    [Powers.GrowthShrink]: undefined,
    [Powers.Growth]: undefined,
    [Powers.Shrink]: undefined,
    [Powers.Havoc]: undefined,
    [Powers.Healing]: 'Исцеление',
    [Powers.Intangibility]: undefined,
    [Powers.Invisibility]: undefined,
    [Powers.LightObscure]: 'Свет/Тьма',
    [Powers.Light]: 'Свет',
    [Powers.Obscure]: 'Тьма',
    [Powers.MindReading]: undefined,
    [Powers.Pummel]: undefined,
    [Powers.Puppet]: 'Кукла',
    [Powers.Quickness]: 'Проворство',
    [Powers.ShapeChange]: 'Превращение',
    [Powers.Slow]: undefined,
    [Powers.Slumber]: undefined,
    [Powers.Smite]: 'Сокрушение',
    [Powers.SpeakLanguage]: 'Полиглот',
    [Powers.Speed]: 'Ускорение',
    [Powers.Stun]: undefined,
    [Powers.Succor]: undefined,
    [Powers.SummonAlly]: undefined,
    [Powers.Telekinesis]: 'Телекинез',
    [Powers.Teleport]: 'Телепортация',
    [Powers.WallWalker]: undefined,
    [Powers.WarriorsGift]: undefined,
    [Powers.Zombie]: 'Зомби',
});

module.exports = {
    States,
    StatesTranslations,
    Skills,
    SkillsTranslations,
    Hindrances,
    HindrancesTranslations,
    Ranks,
    RanksTranslations,
    Edges,
    EdgesTranslations,
    Powers,
    PowersTranslations,
};