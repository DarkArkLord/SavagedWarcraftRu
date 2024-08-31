const { WordCaseForm, WordCountForm, TranslationsDictionaryManager } = require('../common/translationLib');

const Dictionaries = Object.freeze({
    States: 'States',
    Skills: 'Skills',
    Hindrances: 'Hindrances',
    Edges: 'Edges',
    Creatures: 'Creatures',
});

const DictionariesManager = new TranslationsDictionaryManager(true);

const States = Object.freeze({
    Agility: 'Agility',
    Smarts: 'Smarts',
    Spirit: 'Spirit',
    Strength: 'Strength',
    Vigor: 'Vigor',
    Charisma: 'Charisma',
});

(function StatesTranslations() {
    const res = DictionariesManager.create(Dictionaries.States);

    res.create(States.Agility)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Ловкости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Ловкость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ловкостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Ловкости');

    res.create(States.Smarts)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Смекалка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Смекалки')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Смекалке')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Смекалку')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Смекалкой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Смекалке');

    res.create(States.Spirit)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Характера')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Характеру')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Характер')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Характером')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Характере');

    res.create(States.Strength)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Сила')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Силы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Силе')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Силу')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Силой')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Силе');

    res.create(States.Vigor)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Выносливости')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Выносливость')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выносливостью')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Выносливости');

    res.create(States.Charisma)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Харизма')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Харизмы')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Харизме')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Харизму')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Харизмою')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Харизме');

    return res;
})();

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
});

(function SkillsTranslations() {
    const res = DictionariesManager.create(Dictionaries.Skills);

    res.create(Skills.Boating)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Судовождение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Climbing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Лазанье')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Лазанья')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Driving)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Вождение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Fighting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Драка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Gambling)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Азартные игры')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Healing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Лечение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Intimidation)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Запугивание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Investigation)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Расследование')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Knowledge)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Знание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Lockpicking)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Взлом')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Notice)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Внимание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Persuasion)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Убеждение')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Убеждения')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Убеждение')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Piloting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Пилотирование')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Repair)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Ремонт')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Ремонта')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Ремонт')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Ремонтом')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Riding)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Верховая езда')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Shooting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Стрельба')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Stealth)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Маскировка')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Маскировки')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Маскировке')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Streetwise)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Уличное чутьё')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Уличного чутья')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Survival)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выживание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Swimming)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Плавание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Taunt)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Провокация')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Throwing)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Метание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    res.create(Skills.Tracking)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Выслеживание')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Выслеживания')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, undefined)
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Выслеживание')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Выслеживанием')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, undefined);

    // Arcane Skills
    res.create(Skills.Spellcasting)
        .addTranslation(WordCaseForm.NOMINATIVE, WordCountForm.SINGLE, 'Колдовство')
        .addTranslation(WordCaseForm.GENITIVE, WordCountForm.SINGLE, 'Колдовства')
        .addTranslation(WordCaseForm.DATIVE, WordCountForm.SINGLE, 'Колдовству')
        .addTranslation(WordCaseForm.ACCUSATIVE, WordCountForm.SINGLE, 'Колдовство')
        .addTranslation(WordCaseForm.INSTRUMENTAL, WordCountForm.SINGLE, 'Колдовством')
        .addTranslation(WordCaseForm.PREPOSITIONAL, WordCountForm.SINGLE, 'Колдовстве');

    return res;
})();

const Hindrances = Object.freeze({
    Cautious: 'Cautious',
    Vengeful: 'Vengeful',
    AllThumbs: 'All Thumbs',
    Stubborn: 'Stubborn',
    Greedy: 'Greedy',
    Bloodthirsty: 'Bloodthirsty',
    Outsider: 'Outsider',
    Ugly: 'Ugly',
});

(function HindrancesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Hindrances);

    //

    return res;
})();

const Edges = Object.freeze({
    LowLightVision: 'Low-Light Vision',
    Brawny: 'Brawny',
    Berserk: 'Berserk',
    Block: 'Block',
    // Ranks
    Novice: 'Novice',
    Seasoned: 'Seasoned',
    Veteran: 'Veteran',
    Heroic: 'Heroic',
    Legendary: 'Legendary',
    // Warcraft Edges
    Defend: 'Defend',
});

(function EdgesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Edges);

    //

    return res;
})();

const Creatures = Object.freeze({
    aaa: 'aaa',
});

(function CreaturesTranslations() {
    const res = DictionariesManager.create(Dictionaries.Creatures);

    //

    return res;
})();


module.exports = {
    WordCaseForm,
    WordCountForm,
    States,
    StatesTranslations: DictionariesManager.get(Dictionaries.States).createPDFManager(),
    Skills,
    SkillsTranslations: DictionariesManager.get(Dictionaries.Skills).createPDFManager(),
    Hindrances,
    HindrancesTranslations: DictionariesManager.get(Dictionaries.Hindrances).createPDFManager(),
    Edges,
    EdgesTranslations: DictionariesManager.get(Dictionaries.Edges).createPDFManager(),
    Creatures,
    CreaturesTranslations: DictionariesManager.get(Dictionaries.Creatures).createPDFManager(),
    Logger: DictionariesManager.getLoggerPdf(),
};