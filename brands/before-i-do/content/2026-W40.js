/**
 * Content for round 2026-W40. Instagram carousels.
 *
 * Every post is a `slides` array. One idea per slide, short enough to read
 * without stopping — the caption carries the length, the slides carry the
 * rhythm. Slide one has to earn the swipe; the last one asks for something.
 *
 * `plan.js` assigns dates and times, so this file stays about the writing.
 * pillar: pain | value | identity | social_proof | sell
 * layout: statement (cream) | dilemma (white) | dark (blue)
 */

const TAGS_CORE = '#חתונה #מתחתנים #זוגיות #הצעתנישואין #כלהמתכננת #חתונה2027';
const TAGS_GIFT = '#מתנהלזוג #מתנתחתונה #מתנהמקורית';
const LINK = 'beforeido.co.il';

module.exports = {
  week: '2026-W40',
  posts: [
    // ================================================================ day 1
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'רשימת המוזמנים היא לא רשימה', subline: 'היא מפה של יחסים' },
        { layout: 'statement', headline: 'ולכן היא לוקחת שבועות', subline: 'ולכן היא מתפוצצת' },
        { layout: 'statement', headline: 'הטעות', subline: 'מתחילים משמות' },
        { layout: 'statement', headline: 'התיקון', subline: 'מתחילים מכלל אחד' },
        { layout: 'dilemma', dilemma: ['מי שדיברנו איתו השנה', 'מי שהיינו הולכים לחתונה שלו'] },
        { layout: 'dark', headline: 'ברגע שיש כלל', subline: 'זה מפסיק להיות על אנשים ומתחיל להיות על הסכמה', cta: 'לינק בביו' },
      ],
      caption:
        'רשימת המוזמנים היא השלב שבו הכי הרבה זוגות נתקעים. לא כי היא ארוכה — ' +
        'כי כל שם בה הוא החלטה על מערכת יחסים.\n\n' +
        'הדבר היחיד שבאמת עוזר: לסכם כלל אחד לפני שכותבים שם אחד. ' +
        'לא משנה איזה — משנה שיהיה אחד, ושיהיה שלכם.\n\n' +
        'מה הכלל שלכם? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'יש שתי דרכים לתכנן חתונה' },
        { layout: 'dilemma', dilemma: ['לדבר על זה עכשיו', 'לגלות ביום עצמו'] },
        { layout: 'statement', headline: 'אין אפשרות שלישית' },
        { layout: 'statement', headline: 'כל מה שלא דיברתם עליו', subline: 'תגלו תוך כדי' },
        { layout: 'dark', headline: 'בדרך כלל בשיא הלחץ', subline: 'ובדרך כלל מול עוד עשרה אנשים' },
      ],
      caption:
        'זה לא איום. זו פשוט הדרך שבה זה עובד.\n\n' +
        'אף אחד לא מתכנן לריב על מספר המוזמנים בשלוש לפנות בוקר. ' +
        'זה קורה כי השיחה נדחתה עד שכבר אי אפשר לדחות אותה.\n\n' +
        'רגע מאושר שישאר לנצח מתחיל בשיחה אחת. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'dark', headline: 'ערב אחד. 70 שאלות. החתונה שלכם.' },
        { layout: 'statement', headline: 'לא רשימת מטלות' },
        { layout: 'statement', headline: 'לא עוד אקסל' },
        { layout: 'statement', headline: '70 שאלות, 6 קטגוריות', subline: 'מהבסיס ועד ״חס וחלילה״' },
        { layout: 'statement', headline: 'פותחים בקבוק יין', subline: 'ונותנים לשיחה לזרום' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'המשחק נראה כמו משחק, ומתנהג כמו כלי תכנון.\n\n' +
        '70 שאלות שמוציאות לאוויר את מה שכבר ממילא בראש של שניכם — ' +
        'רק שעדיין לא אמרתם בקול.\n\n' +
        '✦ 129 ₪ כולל משלוח עד הבית\n' +
        '✦ מחיר השקה עד 26.10\n\n' +
        `הלינק בביו 👆  |  ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 2
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תקציב זה לא מספר', subline: 'זה סדר עדיפויות שעוד לא כתבתם' },
        { layout: 'statement', headline: 'תרגיל של שלוש דקות' },
        { layout: 'statement', headline: '1', subline: 'כל אחד כותב לעצמו: אם היה לנו 30% פחות — על מה הייתי מוותר.ת ראשון?' },
        { layout: 'statement', headline: '2', subline: 'לא מסתכלים אחד על השנייה' },
        { layout: 'statement', headline: '3', subline: 'משווים' },
        { layout: 'dark', headline: 'אם עניתם אותו דבר — יש לכם עוגן', subline: 'ואם לא — מצאתם את השיחה שהייתם צריכים' },
      ],
      caption:
        'רוב הזוגות מדברים על תקציב כמספר. ואז המספר זז, וכל פעם מחדש צריך להחליט ' +
        'מה נדחף החוצה.\n\n' +
        'אם יודעים מראש מה הדבר האחרון שמוותרים עליו — כל החלטה אחרת נהיית קלה.\n\n' +
        'שמרו את זה לשיחה הבאה 🔖',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'רוב הזוגות לא רבים על החתונה' },
        { layout: 'statement', headline: 'הם פשוט אף פעם לא דיברו עליה' },
        { layout: 'statement', headline: 'הוויכוח על מספר המוזמנים', subline: 'הוא אף פעם לא על מספר המוזמנים' },
        { layout: 'statement', headline: 'הוא על כמה מקום יש למשפחה', subline: 'בחיים שלכם' },
        { layout: 'statement', headline: 'ועל מה שכל אחד מכם דמיין', subline: 'ולא אמר בקול' },
        { layout: 'dark', headline: 'זה לא ויכוח רע', subline: 'זו שיחה שאף אחד לא יזם' },
      ],
      caption:
        'שווה לשים לב לזה באמצע ויכוח: על מה אנחנו באמת מדברים עכשיו?\n\n' +
        'כמעט תמיד התשובה היא לא מה שכתוב על השולחן.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'dark', headline: 'הדברים שאף אחד לא שואל לפני האירוע' },
        { layout: 'statement', headline: 'מי הולך.ת להורים שלך', subline: 'אם משהו משתבש' },
        { layout: 'statement', headline: 'מי אחראי.ת על הטלפון', subline: 'ביום עצמו' },
        { layout: 'statement', headline: 'מה קורה אם ספק מבטל', subline: 'שבוע לפני' },
        { layout: 'dark', headline: 'אף אחד לא נהנה לחשוב על זה', subline: 'וכולם מצטערים שלא חשבו' },
      ],
      caption:
        'חמש דקות עכשיו, במקום חצי שעה של פאניקה אז.\n\n' +
        'זה כל ההבדל בין תקלה לבין אסון. 💙',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 3
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'כלל שלוש ה״לא״', subline: 'לפני כל פגישה עם ספק' },
        { layout: 'statement', headline: 'כל אחד כותב שלושה דברים', subline: 'שהם ״לא בשבילנו״' },
        { layout: 'statement', headline: 'לא מה כן', subline: 'מה לא' },
        { layout: 'statement', headline: 'משווים בחניון', subline: 'לא מול הספק' },
        { layout: 'dark', headline: 'אם אתם לא מחפשים אותו דבר', subline: 'עדיף לגלות את זה לבד' },
      ],
      caption:
        'פגישות עם ספקים הן המקום שבו זוגות מגלים באמצע שהם רצו שני דברים שונים — ' +
        'מול אדם זר, עם מחירון על השולחן.\n\n' +
        'שלוש דקות בחניון פותרות את זה.\n\n' +
        'שמרו לפגישה הבאה 🔖',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלה לא נעימה' },
        { layout: 'dilemma', dilemma: ['חתונה שנראית טוב בתמונות', 'חתונה שמרגישה טוב ביום עצמו'] },
        { layout: 'statement', headline: 'רוב הזוגות רוצים את שניהם' },
        { layout: 'statement', headline: 'רוב הזוגות לא מדברים', subline: 'על מה קורה כשצריך לבחור' },
        { layout: 'dark', headline: 'ויום החתונה בנוי', subline: 'מעשרים רגעים כאלה בדיוק' },
      ],
      caption: 'מה אתם אומרים? 👇\n\nאין תשובה נכונה. יש רק תשובה שלכם.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'המשחק הזה לא עוזר לבחור צבעים' },
        { layout: 'statement', headline: 'הוא עוזר לבחור ביחד' },
        { layout: 'statement', headline: 'הבסיס', subline: 'מקום, גודל, עונה, תקציב' },
        { layout: 'statement', headline: 'בחופה', subline: 'נדרים, ברכות, מי עומד לידכם' },
        { layout: 'statement', headline: 'חס וחלילה', subline: 'ספק שנעלם, גשם, מה שלא תכננתם' },
        { layout: 'dark', headline: 'ועוד 3 קטגוריות', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        '6 קטגוריות, 70 שאלות, ערב אחד.\n\n' +
        'לא בשביל להסכים על הכול — בשביל לדעת איפה אתם לא מסכימים, ' +
        'מספיק מוקדם בשביל שזה עוד יהיה קל.\n\n' +
        `✦ 129 ₪ כולל משלוח | מחיר השקה עד 26.10\n✦ ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 4
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'מי מחליט מה?', subline: 'השאלה הכי משעממת ששווה הכי הרבה' },
        { layout: 'statement', headline: 'לא צריך להחליט הכול ביחד' },
        { layout: 'statement', headline: 'צריך להחליט', subline: 'מי מחליט מה' },
        { layout: 'statement', headline: 'מוזיקה · אוכל · עיצוב', subline: 'אורחים · כסף · לוח זמנים' },
        { layout: 'statement', headline: 'על כל תחום', subline: 'מי מוביל.ה, ומי סומך.ת' },
        { layout: 'dark', headline: 'זה לא ויתור', subline: 'זו הדרך לא לריב על כל דבר פעמיים' },
      ],
      caption:
        'זוגות שמחלקים אחריות מראש מסיימים תכנון בחצי מהוויכוחים.\n\n' +
        'הקושי הוא לא לחלק — הקושי הוא לסמוך אחרי שחילקתם. 🙂',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'אתם לא מתכננים אירוע' },
        { layout: 'statement', headline: 'אתם מתאמנים על נישואים' },
        { layout: 'statement', headline: 'המון החלטות ביחד', subline: 'תחת לחץ' },
        { layout: 'statement', headline: 'עם כסף אמיתי', subline: 'מול משפחות אמיתיות' },
        { layout: 'dark', headline: 'זה בדיוק מה שנישואים עושים', subline: 'רק בלי דדליין' },
      ],
      caption:
        'אם תסתכלו על תכנון החתונה ככה, פתאום ברור למה הוא כל כך טעון — ' +
        'ולמה שווה להשקיע בו יותר משיחות על תפריט. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'social_proof',
      slides: [
        { layout: 'statement', headline: '״ישבנו לשעה״' },
        { layout: 'statement', headline: '״יצאנו עם שלוש החלטות״' },
        { layout: 'statement', headline: '״ועם ויכוח אחד״', subline: 'שהיה חייב לקרות' },
        { layout: 'dark', headline: 'זה בדיוק מה שהוא אמור לעשות', subline: 'להביא את הוויכוח מוקדם, בסלון, עם יין', cta: 'לינק בביו' },
      ],
      caption:
        'המטרה היא לא להעלים ויכוחים. המטרה היא שהם יקרו בזמן שבו הם עוד זולים.\n\n' +
        'מכירים זוג שצריך את הערב הזה? תייגו אותם 👇',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 5
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'השאלה ששווה יותר מכל ספק' },
        { layout: 'statement', headline: '״איך נרצה להרגיש״', subline: 'בסוף הערב?' },
        { layout: 'statement', headline: 'רגועים?' },
        { layout: 'statement', headline: 'מותשים ומאושרים?' },
        { layout: 'statement', headline: 'שדיברנו עם כל אורח?' },
        { layout: 'dark', headline: 'כל תשובה מובילה לחתונה אחרת', subline: 'ורוב הזוגות בוחרים ספקים לפני שבחרו תשובה' },
      ],
      caption:
        'תענו על זה לפני שאתם בוחרים אולם, להקה או תפריט.\n\n' +
        'זו השאלה שכל שאר ההחלטות נגזרות ממנה — וכמעט אף אחד לא שואל אותה ראשונה.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'השאלה הכי לא נעימה בתכנון חתונה' },
        { layout: 'dilemma', dilemma: ['לרצות את כולם', 'לרצות אחד את השני'] },
        { layout: 'statement', headline: 'אין תשובה נכונה' },
        { layout: 'statement', headline: 'יש רק תשובה שלכם' },
        { layout: 'dark', headline: 'ועדיף שתהיה אחת', subline: 'ולא שתיים שכל אחד מחזיק בשקט' },
      ],
      caption: 'מה אתם אומרים? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'מתנה לזוג שיש להם הכול' },
        { layout: 'statement', headline: 'סט סכינים הם כבר קיבלו' },
        { layout: 'statement', headline: 'מה שהם לא קיבלו', subline: 'זה ערב אחד ביחד, בלי מסכים' },
        { layout: 'statement', headline: 'עם 70 שאלות', subline: 'שמישהו אחר כבר חשב עליהן בשבילם' },
        { layout: 'dark', headline: 'מגיע בקופסה קשיחה', subline: 'מתנה שנראית כמו מתנה', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אם אתם מחפשים מתנה לזוג מאורס שכבר יש לו הכול — זו המתנה שהם יזכרו ' +
        'הרבה אחרי שהחתונה נגמרה.\n\n' +
        '✦ 129 ₪ כולל משלוח | מחיר השקה עד 26.10\n\nהלינק בביו 👆',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 6
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תנו למשפחה תפקיד', subline: 'לא דעה' },
        { layout: 'statement', headline: 'כשלא נותנים תפקיד' },
        { layout: 'statement', headline: 'נותנים דעה' },
        { layout: 'statement', headline: 'תנו לכל צד משהו קונקרטי', subline: 'שהוא אחראי עליו' },
        { layout: 'dark', headline: 'זה מכבד, זה עוזר באמת', subline: 'וזה מוריד לכם שיחה קשה מהשבוע' },
      ],
      caption:
        'ההורים רוצים להיות חלק. השאלה היא רק אם החלק הזה מוגדר או לא.\n\n' +
        'שמרו לפני השיחה הבאה איתם 🔖',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'אין תשובות נכונות' },
        { layout: 'statement', headline: 'יש רק שיחות טובות' },
        { layout: 'statement', headline: 'המטרה היא לא להסכים על הכול' },
        { layout: 'statement', headline: 'המטרה היא לדעת איפה לא מסכימים', subline: 'מספיק מוקדם בשביל שזה עוד יהיה קל' },
        { layout: 'dark', headline: 'רגע מאושר שישאר לנצח' },
      ],
      caption: 'זה כתוב על החפיסה, וזה גם כל הרעיון. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'מתי תכנון חתונה נהיה כיף?' },
        { layout: 'statement', headline: 'לא כשמסיימים משימות' },
        { layout: 'statement', headline: 'כשסוגרים את הדברים הגדולים' },
        { layout: 'statement', headline: 'כל הלחץ מגיע ממה שלא סגור בראש', subline: 'לא ממה שלא סגור ברשימה' },
        { layout: 'dark', headline: 'סגרו את הגדולים', subline: 'והקטנים פתאום נהיים מהנים' },
      ],
      caption:
        'זו הסיבה שזוגות מרגישים מוצפים גם כשהכול לכאורה בשליטה.\n\n' +
        'הרשימה קצרה. הראש עמוס. ✨',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 7
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'שאלה אחת לשבוע' },
        { layout: 'statement', headline: 'לא צריך לפתור הכול בערב אחד' },
        { layout: 'statement', headline: 'ערב קבוע', subline: 'חצי שעה' },
        { layout: 'statement', headline: 'נושא אחד', subline: 'לא ״בואו נתכנן חתונה״' },
        { layout: 'dark', headline: 'זה מונע את השיחות של אחת בלילה', subline: 'שאף אחד לא רוצה' },
      ],
      caption:
        'הכי קשה בתכנון זה שהוא נמצא בכל שיחה, כל הזמן.\n\n' +
        'ערב קבוע אחד בשבוע מחזיר לכם את כל שאר הימים. 🙂',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שתי חתונות' },
        { layout: 'dilemma', dilemma: ['חתונה שאתם זוכרים', 'חתונה שאתם מתאוששים ממנה'] },
        { layout: 'statement', headline: 'ההבדל ביניהן' },
        { layout: 'statement', headline: 'הוא כמה דיברתם לפני', subline: 'לא כמה הוצאתם' },
        { layout: 'dark', headline: 'מה אתם אומרים?' },
      ],
      caption: 'ספרו לנו 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'dark', headline: 'מחיר ההשקה נגמר ב-26.10' },
        { layout: 'statement', headline: 'עכשיו', subline: '₪129 כולל משלוח עד הבית' },
        { layout: 'statement', headline: 'אחרי', subline: '₪189 ועוד דמי משלוח' },
        { layout: 'statement', headline: 'אם חשבתם על זה', subline: 'זה הזמן' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'אחרי 26.10 המחיר עולה ל-189 ₪ בתוספת משלוח.\n\n' +
        'ואם אתם קונים לזוג במתנה — זה מגיע בקופסה קשיחה, מוכן לתת.\n\n' +
        `✦ ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },
  ],

  // ---------------------------------------------------------------------
  // Stories stay single frames - Instagram has no carousel in a story.
  // `manual: true` means it carries a link or poll sticker, which no API can
  // post: Metricool sends a phone notification instead.
  // ---------------------------------------------------------------------
  stories: [
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לדבר על זה עכשיו', 'לגלות ביום עצמו'], poll: true, manual: true },
    { pillar: 'value',    layout: 'statement', headline: 'כלל אחד לרשימת המוזמנים', subline: 'חוסך שלושה ויכוחים', cta: 'לינק בביו' },
    { pillar: 'sell',     layout: 'dark',      headline: '₪129 כולל משלוח', subline: 'מחיר השקה עד 26.10', cta: 'לינק בביו', manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אין תשובות נכונות', subline: 'יש רק שיחות טובות' },
    { pillar: 'value',    layout: 'statement', headline: 'אם היה לכם 30% פחות', subline: 'על מה הייתם מוותרים ראשון?', poll: true, manual: true },
    { pillar: 'pain',     layout: 'dark',      headline: 'מי אחראי.ת על הטלפון ביום עצמו?', subline: 'שאלה שאף אחד לא שואל' },
    { pillar: 'value',    layout: 'statement', headline: 'כלל שלוש ה״לא״', subline: 'לפני כל פגישה עם ספק', cta: 'לינק בביו' },
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לרצות את כולם', 'לרצות אחד את השני'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אתם לא מתכננים אירוע', subline: 'אתם מתאמנים על נישואים' },
    { pillar: 'sell',     layout: 'dark',      headline: 'מתנה לזוג שיש להם הכול', subline: 'חוץ מהשיחה הזאת', cta: 'לינק בביו', manual: true },
    { pillar: 'value',    layout: 'statement', headline: '״איך נרצה להרגיש בסוף הערב?״', subline: 'תענו לפני שבוחרים ספק' },
    { pillar: 'pain',     layout: 'dark',      headline: 'הוויכוח על המוזמנים', subline: 'הוא אף פעם לא על המוזמנים' },
    { pillar: 'value',    layout: 'statement', headline: 'תנו למשפחה תפקיד', subline: 'לא דעה' },
    { pillar: 'sell',     layout: 'statement', headline: 'מחיר ההשקה נגמר ב-26.10', subline: '₪129 כולל משלוח', cta: 'לינק בביו', manual: true },
  ],
};
