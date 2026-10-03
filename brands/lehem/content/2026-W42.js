/**
 * Content for round 2026-W42 - לחם.
 *
 * The first round written to the voice brief in brand.yaml. Four devices, used
 * on purpose and repeatedly, because the repetition is what turns a feed into
 * a brand - after three weeks people recognise the shape before they read it.
 *
 *   clock       every single thing carries a time. never "fresh".
 *   sold-out    posted as a fact, never an apology.
 *   the-hand    one line in handwriting. one.
 *   the-position an opinion about industrial bread, unapologetic.
 *
 * Six posts and six stories, not seven: the bakery is closed on Shabbat and
 * the planner now skips it.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

const TAGS = '#לחם #מחמצת #מאפייה #גבעתשמואל #לחםמחמצת #מאפיםבעבודתיד';
const WHERE = 'האתרוג 25, גבעת שמואל';

module.exports = {
  week: '2026-W42',
  posts: [
    // ---------------------------------------------------------- the position
    {
      pillar: 'identity',
      slides: [
        { layout: 'product', headline: 'לחם שנשאר רך שבועיים', subline: 'הוא לא לחם. הוא מוצר.' },
        { layout: 'product', headline: 'לחם אמיתי מתייבש', subline: 'זה לא פגם. זה הסימן.' },
        { layout: 'product', dark: true, headline: 'אנחנו אופים בלי משפרי אפייה', subline: 'אז שלנו מתייבש ביום השלישי. ככה זה אמור לעבוד.' },
      ],
      caption:
        'שאלו אותנו למה הלחם שלנו לא נשאר רך שבוע.\n\n' +
        'כי מה שמשאיר לחם רך שבוע הוא לא קמח.\n\n' +
        'לחם מחמצת מתייבש. אחר כך הוא נהיה טוסט, ואחרי זה פירורי לחם. ככה זה עבד מאז ומתמיד.',
      hashtags: TAGS,
    },

    // ---------------------------------------------------------------- clock
    {
      pillar: 'value',
      slides: [
        { layout: 'photo', photo: 'cinnamon-hands', align: 'top',
          headline: 'יצא ב-6:40', subline: 'רול קינמון. יש שמונה.' },
      ],
      caption:
        'אנחנו לא כותבים ״טרי״, כי כל אחד כותב ״טרי״.\n\n' +
        'כתוב 6:40 כי בשעה 6:40 הוא יצא מהתנור, ואפשר לבדוק אותנו.\n\n' +
        WHERE,
      hashtags: TAGS,
    },

    // -------------------------------------------------------------- sold out
    {
      pillar: 'pain',
      slides: [
        { layout: 'product', dark: true, hand: true,
          headline: 'הכפרי נגמר ב-10:40', subline: 'מחר יש עוד. בואו מוקדם.' },
      ],
      caption:
        'כל יום אנחנו אופים כמות שאפשר לאפות ביום אחד. לא יותר.\n\n' +
        'זה אומר שלפעמים נגמר ב-10:40 ומישהו מגיע ב-11 ומתאכזב. אני יודע. גם אני הייתי מתאכזב.\n\n' +
        'אבל האלטרנטיבה היא לאפות אתמול, ואת זה לא נעשה.',
      hashtags: TAGS,
    },

    // -------------------------------------------------------------- personal
    {
      pillar: 'identity',
      slides: [
        { layout: 'photo', photo: 'spread-plates', align: 'top', hand: true,
          headline: 'קמתי ב-4:10', subline: 'זה מה שהיה על השולחן ב-6:15' },
      ],
      caption:
        'ארבע ועשרה. בלי שעון מעורר כבר שנים, הגוף פשוט יודע.\n\n' +
        'שעתיים אחר כך זה נראה ככה, ואז פותחים את הדלת.\n\n' +
        'זה לא סיפור על מסירות. זה פשוט מה שלוקח לאפות מחמצת.',
      hashtags: TAGS,
    },

    // ------------------------------------------------------------ the breads
    {
      pillar: 'value',
      slides: [
        { layout: 'product', headline: 'שמונה לחמים', subline: 'ואף אחד מהם לא צריך להיות הראשון שתנסו' },
        { layout: 'product', headline: 'הקל', subline: 'אם אתם מתחילים. רך, לא חמוץ, הילדים אוכלים.' },
        { layout: 'product', headline: 'הכפרי', subline: 'אם אתם כבר יודעים מה אתם רוצים.' },
        { layout: 'product', dark: true, headline: 'השיפון', subline: 'אם אתם רוצים משהו שיחזיק שלושה ימים וישתפר ביום השני.' },
      ],
      caption:
        'אנשים שואלים אותנו מאיזה להתחיל, וכמעט תמיד אנחנו עונים ״הקל״.\n\n' +
        'לא כי הוא הכי טוב, אלא כי מחמצת זה טעם שלוקח כמה פעמים. אין טעם לזרוק מישהו ישר לשיפון.\n\n' +
        'תגידו לנו בתגובות מה אתם לוקחים ואנחנו נגיד מה הבא בתור.',
      hashtags: TAGS,
    },

    // ----------------------------------------------------------- friday sell
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'cookies-three', align: 'top',
          headline: 'מגשי אירוח', subline: 'הזמנה 48 שעות מראש, איסוף עצמי', cta: WHERE },
      ],
      caption:
        'מגש נראה פשוט עד שצריך אותו ביום חמישי בערב.\n\n' +
        'צריך 48 שעות, כי אנחנו אופים אותו ולא שולפים אותו ממקפיא.\n\n' +
        'כריכים, ירקות, מתוק, מלוח. איסוף מהמאפייה.',
      hashtags: TAGS,
    },
  ],

  stories: [
    { pillar: 'value',    layout: 'product', hand: true,
      headline: 'פתחנו', subline: 'א׳-ה׳ 7:00-19:00 · ו׳ עד שעתיים לפני כניסת השבת' },
    { pillar: 'value',    layout: 'photo', photo: 'quiche-rings', zoom: 2.4, ink: 'dark',
      headline: 'זה לא פילטר.', subline: 'זה הקיש שיצא הבוקר' },
    { pillar: 'pain',     layout: 'product', dark: true, hand: true,
      headline: 'נגמר.', subline: 'מחר ב-7:00 יש עוד' },
    { pillar: 'identity', layout: 'product',
      headline: 'מחמצת לוקחת יומיים', subline: 'אין קיצור דרך. באמת אין.' },
    { pillar: 'value',    layout: 'photo', photo: 'brioche-plate', align: 'top',
      headline: 'שוקולד צ׳יפס', subline: 'ועוד חם', cta: WHERE },
    { pillar: 'sell',     layout: 'photo', photo: 'cinnamon-hands-wide', align: 'top', hand: true,
      headline: 'מחר יש שוב', subline: 'ב-6:40 בערך', cta: WHERE },
  ],
};
