/**
 * Content for round 2026-W40 - Before I Do.
 *
 * Written to the client's copywriting brief (now in brand.yaml under
 * `persona`). The brief corrected a strategic mistake in the previous round:
 * that draft was full of wedding-planning advice - how to vet a vendor, who
 * counts the cheques, give the parents a job. That is Barak Lior's territory,
 * and it is the opposite of what this product sells.
 *
 * Before I Do sells three things and every post here is one of them:
 *   1. a legal excuse to stop talking about the wedding for one evening
 *   2. friction prevention - tomorrow's fight, tonight, on the couch with wine
 *   3. a stylish date night with zero planning and no leaving the house
 *
 * Voice: a smart, stylish, slightly witty friend. Punch first, no warm-up.
 * Short sentences. One-line paragraphs. Pain named specifically - the guest
 * list spreadsheet, the in-law WhatsApp group, the DJ's playlist - never
 * "the stress of planning". No cringe romance, no therapy speak.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

const TAGS_CORE = '#חתונה #מתחתנים #זוגיות #הצעתנישואין #כלהמתכננת #חתונה2027';
const TAGS_GIFT = '#מתנהלזוג #מתנתחתונה #מתנהמקורית';
const LINK = 'beforeido.co.il';

module.exports = {
  week: '2026-W40',
  posts: [
    // ================================================================ day 1
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'דעה לא פופולרית:' },
        { layout: 'statement', headline: 'אתם מדברים על החתונה', subline: 'יותר מדי' },
        { layout: 'statement', headline: 'בארוחת ערב. בנסיעה.', subline: 'בשתיים בלילה כשאחד מכם לא נרדם.' },
        { layout: 'statement', headline: 'ואתם עוד לא נשואים' },
        { layout: 'dark', headline: 'ערב אחד בלי אקסל', subline: 'זה לא ויתור. זו הצלה.', cta: 'לינק בביו' },
      ],
      caption:
        'ספרו כמה שיחות היו לכם השבוע שלא נגעו בחתונה.\n\n' +
        'אם הגעתם לשתיים, אתם במצב טוב.\n\n' +
        'החפיסה הזאת היא תירוץ חוקי לסגור את האקסל לערב אחד ולדבר על משהו אחר. ' +
        'לא על הבר. לא על הרב.\n\n' +
        'הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'המריבות שלכם', subline: 'כבר קבועות ביומן' },
        { layout: 'statement', headline: 'אתם פשוט', subline: 'לא יודעים את התאריך' },
        { layout: 'statement', headline: 'הדודה שחייבת הזמנה' },
        { layout: 'statement', headline: 'הפלייליסט של הדיג׳יי' },
        { layout: 'dark', headline: 'זה יקרה', subline: 'השאלה היחידה היא איפה אתם תהיו כשזה קורה', cta: 'לינק בביו' },
      ],
      caption:
        'יש שתי אופציות.\n\n' +
        'אחת: בשישי, מול ההורים, כשכולם עייפים.\n\n' +
        'שתיים: הערב, על הספה, עם יין, דרך קלף.\n\n' +
        'זה אותו ויכוח בדיוק. רק שבאחת מהן אף אחד לא נעלב.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'couple-cafe', headline: 'דייט בלי לתכנן דייט' },
        { layout: 'statement', headline: 'לא להזמין מקום' },
        { layout: 'statement', headline: 'לא להתלבש' },
        { layout: 'statement', headline: 'לפתוח בקבוק', subline: 'ולשלוף קלף' },
        { layout: 'dark', headline: 'זהו. זה כל ההפקה.', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אחרי יום של טלפונים לספקים, אף אחד לא רוצה עוד פרויקט.\n\n' +
        'זה דייט שלא דורש כלום. הקופסה על השולחן, יין, ואתם.\n\n' +
        '129 ₪ כולל משלוח עד הבית, במחיר השקה עד 26.10.\n\n' +
        LINK,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 2
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'אל תקנו להם עוד אגרטל' },
        { layout: 'statement', headline: 'יש להם שלושה' },
        { layout: 'statement', headline: 'ועוד סט מצעים', subline: 'ועוד שובר לספא שיפוג' },
        { layout: 'photo', photo: 'box-sushi', headline: 'תנו להם ערב', subline: 'בלי אקסל ובלי טלפונים' },
        { layout: 'dark', headline: 'מגיע בקופסה קשיחה', subline: 'לא צריך לעטוף', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'מתנה טובה לזוג מאורס היא לא עוד חפץ לסלון.\n\n' +
        'זה משהו שהם יפתחו באותו ערב, ויזכרו אותו אחרי שהחתונה נגמרה.\n\n' +
        'מגיע בקופסה קשיחה עם משלוח עד הבית — אפשר לשלוח ישירות אליהם.\n\n' +
        '129 ₪ עד 26.10.',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'קבוצת הוואטסאפ', subline: 'עם המחותנים' },
        { layout: 'statement', headline: '47 הודעות', subline: 'על סידורי הושבה' },
        { layout: 'statement', headline: 'ואתם עונים משניכם', subline: 'בלי לתאם מה אתם בכלל אומרים' },
        { layout: 'dark', headline: 'תחליטו ביניכם קודם', subline: 'אחר כך תענו לקבוצה', cta: 'תייגו מי שצריך' },
      ],
      caption:
        'הרגע שבו אחד מכם עונה משהו והשני קורא את זה בקבוצה — זה הרגע שהערב נהרס.\n\n' +
        'שתי דקות של תיאום קודם. זה הכול.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תרגיל של שלוש דקות' },
        { layout: 'statement', headline: 'כל אחד כותב לעצמו', subline: 'מה הדבר האחרון שהוא מוותר עליו' },
        { layout: 'statement', headline: 'לא מציצים' },
        { layout: 'statement', headline: 'עכשיו תשוו' },
        { layout: 'dark', headline: 'אותה תשובה? מעולה.', subline: 'תשובה שונה? מצאתם את השיחה.', cta: 'שמרו את זה' },
      ],
      caption:
        'התקציב לא זז כי המספר גדול. הוא זז כי כל פעם צריך להחליט מחדש מה נדחף החוצה.\n\n' +
        'אם יודעים מראש מה לא נוגעים בו, כל השאר נהיה קל.\n\n' +
        'תעשו את זה הערב. באמת לוקח שלוש דקות.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 3
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'טעימות זה לא דייט' },
        { layout: 'statement', headline: 'ניסיון שמלה זה לא דייט' },
        { layout: 'statement', headline: 'פגישה עם הדיג׳יי', subline: 'זה בטוח לא דייט' },
        { layout: 'statement', headline: 'אלה משימות', subline: 'שבמקרה עושים ביחד' },
        { layout: 'dark', headline: 'מתי היה לכם דייט אמיתי?', subline: 'כזה בלי אג׳נדה', cta: 'לינק בביו' },
      ],
      caption:
        'כולם אומרים לכם ״תיהנו מהתקופה״.\n\n' +
        'קשה ליהנות כשכל יציאה מהבית היא סעיף ברשימה.\n\n' +
        'ערב אחד בשבוע בלי אג׳נדה. זה מה שמחזיק זוגות בתקופה הזאת.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלה לא נוחה' },
        { layout: 'dilemma', dilemma: ['לרצות את כולם', 'לרצות אחד את השני'] },
        { layout: 'statement', headline: 'כולם עונים את השנייה' },
        { layout: 'statement', headline: 'ורובם מתנהגים לפי הראשונה' },
        { layout: 'dark', headline: 'עדיף לגלות את זה עכשיו', subline: 'ולא ביום עצמו', cta: 'מה אתם אומרים?' },
      ],
      caption: 'תענו בכנות. אפשר גם בפרטי.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'box-table', headline: '״זה עוד משחק זוגיות?״' },
        { layout: 'statement', headline: 'שאלה הוגנת' },
        { layout: 'statement', headline: 'אין קטורת', subline: 'אין ״ספר לי על הפחדים שלך״' },
        { layout: 'statement', headline: 'יש שאלות תכלס', subline: 'ויין' },
        { layout: 'dark', headline: 'ואם שאלה חופרת מדי', subline: 'יש וטו. פעם אחת, לכל אחד.', badge: '₪129', cta: LINK },
      ],
      caption:
        'שואלים אותנו את זה הרבה, אז נענה ישר.\n\n' +
        'אין ניקוד, אין מנצח, ואף אחד לא חייב לשתף כלום. שולפים קלף, עונים, ממשיכים.\n\n' +
        'הפורמט הוא משחק רק כי ככה באמת מתיישבים לזה.\n\n' +
        '129 ₪ כולל משלוח, עד 26.10.',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 4
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'אתם כבר שבועיים', subline: 'על רשימת המוזמנים' },
        { layout: 'statement', headline: 'והיא עדיין פתוחה', subline: 'בטלפון של אחד מכם' },
        { layout: 'statement', headline: 'זה לא כי אתם לא מחליטים' },
        { layout: 'dark', headline: 'זה כי כל שם שם', subline: 'הוא החלטה על מישהו אמיתי', cta: 'לינק בביו' },
      ],
      caption:
        'אין דרך לעשות את זה בלי להרגיש רע לרגע. זה פשוט חלק מזה.\n\n' +
        'מה שכן עוזר: להפסיק לריב על שמות ולהתחיל לדבר על כלל.\n\n' +
        'כלל אחד ששניכם מסכימים עליו — והרשימה נסגרת לבד.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'הפכתם למנהלי פרויקטים' },
        { layout: 'statement', headline: 'מתואמים. יעילים.', subline: 'עומדים בלו״ז.' },
        { layout: 'statement', headline: 'ומתי בפעם האחרונה', subline: 'פשוט דיברתם?' },
        { layout: 'dark', headline: 'בין המפיות לדיג׳יי', subline: 'קל לשכוח למה התחלתם', cta: 'לינק בביו' },
      ],
      caption:
        'התקופה הזאת עושה דבר מוזר: היא הופכת אתכם לצוות מצוין ולזוג עייף.\n\n' +
        'ערב אחד בשבוע מחזיר את המאזן.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'social_proof',
      slides: [
        { layout: 'statement', headline: '״ישבנו לשעה״' },
        { layout: 'statement', headline: '״יצאנו עם שלוש החלטות״' },
        { layout: 'statement', headline: '״ועם ויכוח אחד״', subline: 'שהיה חייב לקרות' },
        { layout: 'dark', headline: 'הוויכוח הזה היה קורה בכל מקרה', subline: 'עדיף בסלון מאשר בשלוש לפנות בוקר', cta: 'תייגו זוג' },
      ],
      caption:
        'זה בדיוק מה שהוא אמור לעשות.\n\n' +
        'לא להעלים חיכוכים — להזיז אותם לערב שבו הם עוד זולים.\n\n' +
        'מכירים זוג שצריך את זה? תייגו אותם.',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 5
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'לפני שסוגרים אולם' },
        { layout: 'statement', headline: 'תענו על שאלה אחת' },
        { layout: 'statement', headline: '״איך נרצה להרגיש״', subline: '״כשהערב נגמר?״' },
        { layout: 'statement', headline: 'תענו בנפרד', subline: 'במשפט אחד כל אחד' },
        { layout: 'dark', headline: 'יצאו שני משפטים שונים?', subline: 'מצוין שגיליתם עכשיו ולא בחוזה', cta: 'שמרו את זה' },
      ],
      caption:
        'כל שאר ההחלטות נגזרות מהתשובה הזאת, וכמעט אף אחד לא שואל אותה ראשונה.\n\n' +
        'תנסו הערב. לוקח דקה.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'הרשימה שלכם קצרה' },
        { layout: 'statement', headline: 'אז למה אתם מותשים?' },
        { layout: 'statement', headline: 'כי הלחץ לא מגיע מהמשימות' },
        { layout: 'dark', headline: 'הוא מגיע מהדברים', subline: 'שעוד לא סגורים בראש', cta: 'לינק בביו' },
      ],
      caption:
        'אם הכול לכאורה בשליטה ואתם עדיין כבדים — זה לא אתם.\n\n' +
        'זה הפער בין מה שסגור ברשימה למה שסגור ביניכם.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: '70 שאלות' },
        { layout: 'statement', headline: '6 קטגוריות' },
        { layout: 'statement', headline: 'ערב אחד' },
        { layout: 'statement', headline: 'בלי הכנה', subline: 'בלי לצאת מהבית' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'פותחים, שולפים, עונים. אין הוראות מסובכות ואין מה להתכונן.\n\n' +
        '129 ₪ כולל משלוח עד הבית, עד 26.10. אחר כך 189 ₪ ועוד משלוח.\n\n' +
        LINK,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 6
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'מלא אומרים לי:' },
        { layout: 'statement', headline: '״עזבי אותי משאלות חופרות״', subline: '״בא לי רק את הפאן״' },
        { layout: 'statement', headline: 'מבינה. באמת.' },
        { layout: 'statement', headline: 'אבל הפאן נהרס', subline: 'כשיש מתח לא פתור ברקע' },
        { layout: 'dark', headline: 'ערב אחד של חופרות', subline: 'קונה לכם את כל השאר', cta: 'לינק בביו' },
      ],
      caption:
        'אני לא מנסה לקלקל לכם את התקופה. אני מנסה להגן עליה.\n\n' +
        'הטעימות, השמלה, הפגישות — אלה הרגעים הכיפיים. חבל שייהרסו בגלל משהו שאפשר לסגור בערב.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'כתוב לנו על החפיסה' },
        { layout: 'statement', headline: 'אין תשובות נכונות' },
        { layout: 'statement', headline: 'יש רק שיחות טובות' },
        { layout: 'dark', headline: 'רגע מאושר שישאר לנצח', cta: 'לינק בביו' },
      ],
      caption: 'זה כל הרעיון, בשורה אחת.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'החתונה נכנסה לכם', subline: 'לכל שיחה' },
        { layout: 'statement', headline: 'תקבעו לה ערב' },
        { layout: 'statement', headline: 'חצי שעה. ביומן.', subline: 'כמו פגישה, כי זו פגישה.' },
        { layout: 'statement', headline: 'נושא אחד בכל פעם' },
        { layout: 'dark', headline: 'ערב אחד מחזיר לכם', subline: 'את כל שאר הימים', cta: 'שמרו את זה' },
      ],
      caption:
        'הכי מתיש בתקופה הזאת זה לא העבודה. זה שהיא בכל מקום, כל הזמן.\n\n' +
        'ערב קבוע פותר את זה כמעט לגמרי. תנסו שבועיים.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 7
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלתי זוגות נשואים' },
        { layout: 'dilemma', dilemma: ['חתונה שאתם זוכרים', 'חתונה שאתם מתאוששים ממנה'] },
        { layout: 'statement', headline: 'ההבדל ביניהן' },
        { layout: 'dark', headline: 'הוא לא כמה הוצאתם', subline: 'הוא כמה דיברתם לפני', cta: 'לינק בביו' },
      ],
      caption:
        'התשובה הזאת חזרה כל כך הרבה פעמים שהפסקתי להיות מופתעת.\n\n' +
        'אתם באיזה צד?',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'התקופה הזאת נגמרת' },
        { layout: 'statement', headline: 'והיא לא חוזרת' },
        { layout: 'statement', headline: 'תזכרו ממנה את הארגונים?' },
        { layout: 'dark', headline: 'או ערב אחד בשבוע', subline: 'שבו פשוט הייתם ביחד', cta: 'לינק בביו' },
      ],
      caption:
        'בעוד שנתיים לא תזכרו כמה עלה הקייטרינג.\n\n' +
        'תזכרו אם צחקתם בדרך.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'dark', headline: 'נשארו פחות מ-5 שבועות' },
        { layout: 'statement', headline: 'עד 26.10', subline: '₪129 כולל משלוח' },
        { layout: 'statement', headline: 'אחרי', subline: '₪189 ועוד דמי משלוח' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'מחיר ההשקה נגמר ב-26.10.\n\n' +
        'אם חשבתם על זה כבר פעמיים — זו הפעם השלישית.\n\n' +
        LINK,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },
  ],

  stories: [
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לדבר על זה הערב', 'לריב על זה בשישי'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'ערב אחד בלי אקסל', subline: 'זה לא ויתור', cta: 'לינק בביו' },
    { pillar: 'sell',     layout: 'photo',     photo: 'couple-cafe', headline: 'דייט בלי לתכנן דייט', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אין תשובות נכונות', subline: 'יש רק שיחות טובות' },
    { pillar: 'pain',     layout: 'statement', headline: 'כמה שיחות היו לכם השבוע', subline: 'שלא נגעו בחתונה?', poll: true, manual: true },
    { pillar: 'pain',     layout: 'dark',      headline: 'קבוצת הוואטסאפ עם המחותנים', subline: '47 הודעות על הושבה' },
    { pillar: 'identity', layout: 'statement', headline: 'טעימות זה לא דייט', subline: 'זו משימה שעושים ביחד', cta: 'לינק בביו' },
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לרצות את כולם', 'לרצות אחד את השני'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אל תקנו להם עוד אגרטל' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-sushi', headline: 'מתנה לזוג מאורס', subline: 'בקופסה קשיחה, מוכן לתת', cta: 'לינק בביו', manual: true },
    { pillar: 'pain',     layout: 'statement', headline: '״עזבי אותי משאלות חופרות״', subline: 'מבינה. באמת.' },
    { pillar: 'pain',     layout: 'dark',      headline: 'המריבות שלכם כבר ביומן', subline: 'אתם רק לא יודעים את התאריך' },
    { pillar: 'value',    layout: 'statement', headline: 'תקבעו לחתונה ערב קבוע', subline: 'ותחזירו לעצמכם את השבוע' },
    { pillar: 'sell',     layout: 'dark',      headline: 'נשארו פחות מ-5 שבועות', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
  ],
};
