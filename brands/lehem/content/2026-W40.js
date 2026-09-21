/**
 * Content for round 2026-W40 - לחם.
 *
 * VOICE: whoever is actually baking. Up since four, not selling a lifestyle.
 * The claims here are the ones the bakery already makes on its own site -
 * German flour, whole grains, honey, no preservatives, no dough improvers, no
 * sugar in the breads. Nothing beyond that gets invented: a bakery's
 * credibility is its ingredient list, and a claim nobody checked is a lie
 * with a nicer font.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

const TAGS = '#מאפייה #לחםמחמצת #גבעתשמואל #מאפיםבעבודתיד #כשר #בוטיקשללחם';

module.exports = {
  week: '2026-W40',
  posts: [
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'מחמצת לוקחת יומיים' },
        { layout: 'statement', headline: 'אין קיצור דרך' },
        { layout: 'statement', headline: 'לחם תעשייתי מוכן', subline: 'בשעתיים. עם משפרי אפייה.' },
        { layout: 'statement', headline: 'שלנו תופח לאט', subline: 'ובגלל זה הוא נראה ככה בפנים' },
        { layout: 'dark', headline: 'זה לא סגנון', subline: 'זה פשוט כמה זמן שזה לוקח' },
      ],
      caption:
        'השאלה שאנחנו הכי נשאלים: למה לחם מחמצת עולה יותר.\n\n' +
        'כי הוא תופח לאט, שני ימים, והתנור שלנו לא מספיק להוציא ממנו אלפים ביום.\n\n' +
        'בלי משפרי אפייה, בלי חומרים משמרים, ובלחמים גם בלי סוכר.\n\n' +
        'האתרוג 25, גבעת שמואל. מ-7 בבוקר.',
      hashtags: TAGS,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'איך בודקים לחם', subline: 'לפני שקונים' },
        { layout: 'statement', headline: '1', subline: 'תקראו את הרשימה. אם יש בה משהו שאתם לא מזהים — זה לא בשבילכם' },
        { layout: 'statement', headline: '2', subline: 'לחם אמיתי מתייבש. אם הוא רך אחרי שבוע, תשאלו למה' },
        { layout: 'statement', headline: '3', subline: 'תשאלו מתי הוא נאפה. אם אין תשובה מדויקת — זו התשובה' },
        { layout: 'dark', headline: 'אצלנו התשובה היא תמיד', subline: 'הבוקר', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'לא צריך להיות אופים כדי לדעת מה אתם קונים. שלוש בדיקות, חצי דקה.\n\n' +
        'זה עובד בכל מקום, לא רק אצלנו.',
      hashtags: TAGS,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'מגשי אירוח' },
        { layout: 'statement', headline: 'כריכים · ירקות', subline: 'מתוק · מלוח' },
        { layout: 'statement', headline: 'לישיבה במשרד', subline: 'או לאירוע משפחתי' },
        { layout: 'statement', headline: 'הזמנה 48 שעות מראש', subline: 'באיסוף עצמי' },
        { layout: 'dark', headline: '03-5335503', subline: 'האתרוג 25, גבעת שמואל', cta: 'lehem.co' },
      ],
      caption:
        'מגש שנראה כמו שמישהו הכין אותו, לא כמו שהוזמן מקטלוג.\n\n' +
        'הכול נאפה אצלנו באותו בוקר.\n\n' +
        '✦ 48 שעות מראש, איסוף עצמי\n✦ 03-5335503',
      hashtags: TAGS,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'איזה לחם מתאים למה' },
        { layout: 'dilemma', dilemma: ['לבן איטלקי — לכריך', 'כפרי — לצד המרק'] },
        { layout: 'dilemma', dilemma: ['שיפון — לסלמון וגבינות', 'כוסמין — לקל על הבטן'] },
        { layout: 'statement', headline: 'רב דגנים', subline: 'כשרוצים שהפרוסה תחזיק עד הערב' },
        { layout: 'dark', headline: 'לא יודעים?', subline: 'תבואו, נחתוך לכם לטעום', cta: 'האתרוג 25' },
      ],
      caption:
        'יש לנו שמונה לחמים ואנחנו יודעים שזה הרבה.\n\n' +
        'אז אם אתם עומדים מול המדף ומתלבטים — פשוט תשאלו. זה מה שאנחנו כאן בשביל.',
      hashtags: TAGS,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'אחת עשרה שנה' },
        { layout: 'statement', headline: 'אותו בצק', subline: 'אותה שעה בבוקר' },
        { layout: 'statement', headline: 'קמחים מגרמניה', subline: 'דגנים מלאים, דבש' },
        { layout: 'statement', headline: 'ומה שלא נמצא', subline: 'חומרים משמרים · משפרי אפייה · סוכר בלחמים' },
        { layout: 'dark', headline: 'זה כל הסוד', subline: 'אין עוד אחד' },
      ],
      caption:
        'אנשים שואלים מה הסוד. אין סוד — יש רשימת מרכיבים קצרה ומישהו שקם מוקדם.\n\n' +
        'כשר בהשגחת רבנות גבעת שמואל. 💛',
      hashtags: TAGS,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'איך לשמור לחם' },
        { layout: 'statement', headline: 'לא בשקית ניילון', subline: 'הקראסט נהיה רך ועצוב' },
        { layout: 'statement', headline: 'לא במקרר', subline: 'זה מייבש אותו מהר יותר, לא לאט' },
        { layout: 'statement', headline: 'כן: שקית נייר או מגבת', subline: 'על השיש, פרוס כלפי מטה' },
        { layout: 'dark', headline: 'ומה שנשאר מיום שלישי', subline: 'הוא הטוסט הכי טוב שתאכלו', cta: 'שמרו 🔖' },
      ],
      caption:
        'לחם בלי חומרים משמרים מתנהג אחרת, וזה בסדר גמור — רק צריך לדעת איך.\n\n' +
        'הטעות הכי נפוצה: המקרר. הוא מזרז את ההתקשות, לא מאט אותה.',
      hashtags: TAGS,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'בית הקפה פתוח' },
        { layout: 'statement', headline: 'סלטים · פסטות · כריכים', subline: 'והמאפים של אותו בוקר' },
        { layout: 'statement', headline: 'יש גם טבעוני', subline: 'ויש גם בלי סוכר' },
        { layout: 'statement', headline: 'א׳-ה׳ 7:00-19:00', subline: 'ו׳ מ-7:00 עד שעתיים לפני כניסת השבת' },
        { layout: 'dark', headline: 'האתרוג 25, גבעת שמואל', subline: 'מתחם הולמס פלייס', cta: 'lehem.co' },
      ],
      caption:
        'הרבה אנשים מכירים אותנו רק מהלחם ולא יודעים שיש כאן גם איפה לשבת.\n\n' +
        'קפה, משהו טרי, וחצי שעה שקטה לפני שממשיכים.\n\n' +
        'א׳-ה׳ 7:00-19:00',
      hashtags: TAGS,
    },
  ],

  stories: [
    { pillar: 'identity', layout: 'statement', headline: 'יצא עכשיו מהתנור', subline: '7:10 בבוקר' },
    { pillar: 'value',    layout: 'statement', headline: 'לא לשמור לחם במקרר', subline: 'זה מייבש אותו מהר יותר', cta: 'לינק בביו' },
    { pillar: 'sell',     layout: 'dark',      headline: 'מגשי אירוח', subline: '48 שעות מראש · 03-5335503', cta: 'lehem.co', manual: true },
    { pillar: 'value',    layout: 'dilemma',   dilemma: ['לבן איטלקי', 'כפרי'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'מחמצת לוקחת יומיים', subline: 'אין קיצור דרך' },
    { pillar: 'pain',     layout: 'dark',      headline: 'לחם שנשאר רך שבוע', subline: 'תשאלו את עצמכם למה' },
    { pillar: 'sell',     layout: 'statement', headline: 'פתוח עד 19:00', subline: 'האתרוג 25, גבעת שמואל', cta: 'לינק בביו', manual: true },
  ],
};
