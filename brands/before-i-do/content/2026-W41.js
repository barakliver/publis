/**
 * Content for round 2026-W41 - Before I Do.
 *
 * The second round written to the client's copywriting brief (brand.yaml,
 * `persona`). W40 was the first. This one deliberately shares none of its
 * hooks, angles or scenes - same voice, new material.
 *
 * Every post is still one of the three things the product sells:
 *   1. a legal excuse to stop talking about the wedding for one evening
 *   2. friction prevention - tomorrow's fight, tonight, on the couch with wine
 *   3. a stylish date night with zero planning and no leaving the house
 *
 * New scenes this week: the friends who stopped asking, the cheque with
 * strings attached, the couple's own chat full of vendor screenshots, the
 * 22:00 rule, the code word, who talks to whose family.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

const TAGS_CORE = '#חתונה #מתחתנים #זוגיות #הצעתנישואין #כלהמתכננת #חתונה2027';
const TAGS_GIFT = '#מתנהלזוג #מתנתחתונה #מתנהמקורית';
const LINK = 'beforeido.co.il';

module.exports = {
  week: '2026-W41',
  posts: [
    // ================================================================ day 1
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שמתם לב שהחברים שלכם', subline: 'הפסיקו לשאול על החתונה?' },
        { layout: 'statement', headline: 'זה לא כי לא אכפת להם' },
        { layout: 'statement', headline: 'זה כי אין להם מה לשאול', subline: 'אתם כבר מספרים לבד. כל פעם.' },
        { layout: 'statement', headline: 'הפכתם לחתונה' },
        { layout: 'dark', headline: 'ערב אחד בלי זה', subline: 'תופתעו כמה יש לכם להגיד', cta: 'לינק בביו' },
      ],
      caption:
        'בדיקה קטנה: מתי מישהו שאל אתכם משהו שהוא לא ״אז מה נסגר עם האולם״?\n\n' +
        'ומתי אתם שאלתם אחד את השני?\n\n' +
        'החפיסה היא תירוץ לערב אחד שבו החתונה לא מוזמנת.\n\n' +
        'הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'חוק 20 הדקות' },
        { layout: 'statement', headline: 'מדברים על החתונה', subline: 'עשרים דקות. טיימר אמיתי.' },
        { layout: 'statement', headline: 'נגמר הזמן — נגמר הנושא' },
        { layout: 'statement', headline: 'מה שלא הספקתם', subline: 'מחכה למחר. הוא לא בורח.' },
        { layout: 'dark', headline: 'ומה עושים בשאר הערב?', subline: 'בדיוק בשביל זה יש לנו 70 שאלות אחרות', cta: 'לינק בביו' },
      ],
      caption:
        'רוב הזוגות לא צריכים לדבר על החתונה יותר. הם צריכים לדבר עליה פחות ובאופן ממוקד.\n\n' +
        'עשרים דקות ביום. טיימר.\n\n' +
        'אחר כך סוגרים את האקסל ומדברים על משהו אחר.\n\n' +
        'תנסו שבוע ותגידו לי.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'מה קונים לזוג', subline: 'שכבר יש לו הכל?' },
        { layout: 'statement', headline: 'לא מיקסר' },
        { layout: 'statement', headline: 'לא עוד סט כוסות' },
        { layout: 'photo', photo: 'box-sushi', headline: 'ערב שהם לא היו קובעים לעצמם' },
        { layout: 'dark', headline: 'מגיע ארוז, מוכן לתת', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'הם קנו דירה. יש להם מיקסר.\n\n' +
        'מה שאין להם זה ערב אחד שבו אף אחד לא מדבר על הושבה.\n\n' +
        'זו המתנה. קופסה קשיחה, מגיעה ארוזה, ₪129 כולל משלוח עד 26.10.\n\n' +
        LINK,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 2
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'ההורים נתנו צ׳ק' },
        { layout: 'statement', headline: 'ואיתו הגיעו', subline: 'שמונה שמות לרשימה' },
        { layout: 'statement', headline: 'אף אחד לא אמר את זה בקול' },
        { layout: 'statement', headline: 'אבל שניכם יודעים' },
        { layout: 'dark', headline: 'תדברו על זה הערב', subline: 'לא בשישי, מול כולם', cta: 'לינק בביו' },
      ],
      caption:
        'כסף בחתונה הוא אף פעם לא רק כסף.\n\n' +
        'הוא זכות הצבעה שאף אחד לא הסכים עליה בכתב.\n\n' +
        'עדיף שתסגרו את זה ביניכם לפני שמישהו סוגר את זה בשבילכם.\n\n' +
        'הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'אנחנו לא יועצי זוגיות' },
        { layout: 'statement', headline: 'אין לנו תעודה' },
        { layout: 'statement', headline: 'ואין לנו דעה', subline: 'על כמה מוזמנים זה נורמלי' },
        { layout: 'statement', headline: 'יש לנו 70 שאלות' },
        { layout: 'dark', headline: 'את היין אתם מביאים', subline: 'אנחנו מביאים את מה שתדברו עליו', cta: 'לינק בביו' },
      ],
      caption:
        'לא באנו לתקן לכם כלום.\n\n' +
        'באנו עם קופסה שגורמת לכם לשאול אחד את השני דברים שלא עלו עד היום.\n\n' +
        'מה שיוצא מזה — שלכם.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'שלוש ערימות' },
        { layout: 'statement', headline: 'ההחלטות שלי' },
        { layout: 'statement', headline: 'ההחלטות שלך' },
        { layout: 'statement', headline: 'וההחלטות שלנו', subline: 'הערימה הזאת צריכה להיות הכי קטנה' },
        { layout: 'dark', headline: 'רוב הריבים', subline: 'הם על משהו שהיה אמור להיות בערימה של אחד מכם', cta: 'לינק בביו' },
      ],
      caption:
        'קחו דף. תחלקו כל החלטה שנשארה לשלוש ערימות.\n\n' +
        'מה שנחת ב״שלנו״ בטעות — זה מה שתריבו עליו בעוד שבועיים.\n\n' +
        'תעבירו אותו עכשיו, בשקט, לפני.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 3
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'תפתחו את הצ׳אט שלכם' },
        { layout: 'statement', headline: 'תגללו חודש אחורה' },
        { layout: 'statement', headline: 'סקרינשוט. הצעת מחיר.', subline: 'סקרינשוט. ״ראית?״' },
        { layout: 'statement', headline: 'זה הצ׳אט של זוג?', subline: 'או של שני ספקים?' },
        { layout: 'dark', headline: 'ערב אחד בלי סקרינשוטים', subline: 'רק אתם ושאלה אחת בכל פעם', cta: 'לינק בביו' },
      ],
      caption:
        'הצ׳אט שלכם הוא המקום הכי כנה בבית.\n\n' +
        'ואם הוא מלא בהצעות מחיר, זה אומר משהו.\n\n' +
        'לא נורא. זה שלב. אבל כדאי לצאת ממנו לערב אחד.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'כלל אחד ששווה זהב:' },
        { layout: 'statement', headline: 'לא מדברים על החתונה', subline: 'אחרי עשר בלילה' },
        { layout: 'statement', headline: 'בשעה הזאת אתם עייפים' },
        { layout: 'statement', headline: 'וכל דבר נשמע כמו התקפה' },
        { layout: 'dark', headline: 'שיחה קשה עושים מוקדם', subline: 'עם יין, בישיבה, ולא במיטה', cta: 'לינק בביו' },
      ],
      caption:
        'כל ויכוח שהתחיל בשתיים בלילה נגמר גרוע יותר ממה שהיה צריך.\n\n' +
        'תעבירו את השיחות הכבדות לשעה שבה שניכם עוד בני אדם.\n\n' +
        'זה לא טיפ זוגיות. זו לוגיסטיקה.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: '70 שאלות בקופסה' },
        { layout: 'statement', headline: 'אתם תענו על 12' },
        { layout: 'statement', headline: 'וזה בסדר גמור' },
        { layout: 'photo', photo: 'box-table', headline: 'אין ציון בסוף' },
        { layout: 'dark', headline: 'אין דרך לעשות את זה לא נכון', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אף אחד לא עובר את כל החפיסה בערב אחד. גם אנחנו לא.\n\n' +
        'שולפים קלף, מדברים חצי שעה, ממשיכים בשבוע הבא.\n\n' +
        '₪129 כולל משלוח, עד 26.10.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 4
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'אתם לא עייפים מהחתונה' },
        { layout: 'statement', headline: 'אתם עייפים מלהחליט' },
        { layout: 'statement', headline: 'גופן על ההזמנה. צבע מפיות.', subline: 'איזה סלט. איזה שיר בכניסה.' },
        { layout: 'statement', headline: 'מאה החלטות קטנות', subline: 'שאף אחת מהן לא באמת חשובה' },
        { layout: 'dark', headline: 'ויש כמה שכן', subline: 'ועליהן אף אחד לא שאל אתכם', cta: 'לינק בביו' },
      ],
      caption:
        'שמים את כל האנרגיה בבחירת גופן, ואז מגיעים לחופה בלי לדעת מה כל אחד חושב על החיים שאחריה.\n\n' +
        'זה לא סיפור גדול. זה ערב אחד עם קופסה.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תסכימו על מילת קוד' },
        { layout: 'statement', headline: 'מילה אחת', subline: 'שסוגרת את נושא החתונה מיד' },
        { layout: 'statement', headline: 'בלי להתווכח למה' },
        { layout: 'statement', headline: 'בלי ״רק משפט אחרון״' },
        { layout: 'dark', headline: 'מי שאומר אותה', subline: 'הגיע לגבול שלו. וזה מספיק.', cta: 'לינק בביו' },
      ],
      caption:
        'בחרו מילה מטופשת. ככל שיותר מטופשת — יותר קל להגיד אותה.\n\n' +
        'מי שאומר אותה, הנושא נסגר לערב.\n\n' +
        'תגידו לי בתגובות מה בחרתם. באמת סקרנית.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'כן, אמרתי את זה:' },
        { layout: 'statement', headline: 'החתונה היא לא המבחן' },
        { layout: 'statement', headline: 'היא יום אחד', subline: 'עם צלם וסידורי הושבה' },
        { layout: 'statement', headline: 'המבחן זה השנה שאחריה' },
        { layout: 'dark', headline: 'ולזה כדאי להתכונן', subline: 'ערב אחד. 70 שאלות. בלי הכנה מראש.', cta: 'לינק בביו' },
      ],
      caption:
        'משקיעים שנה שלמה ביום אחד, ואפס שעות בשנה שאחריו.\n\n' +
        'לא צריך להפוך את זה לפרויקט. צריך ערב.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 5
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תחליטו מי מדבר עם מי' },
        { layout: 'statement', headline: 'כל אחד והמשפחה שלו' },
        { layout: 'statement', headline: 'ההורים שלך שואלים?', subline: 'אתה עונה. לא היא.' },
        { layout: 'statement', headline: 'זה נשמע קטן' },
        { layout: 'dark', headline: 'זה מוריד מכם חצי מהמתח', subline: 'כי אף אחד לא נשאר לבד מול המשפחה של השני', cta: 'לינק בביו' },
      ],
      caption:
        'הכלל הכי פשוט שיש, והכי פחות מיושם.\n\n' +
        'כל אחד מטפל במשפחה שלו. בהזמנות, בעלבונות ובשאלות.\n\n' +
        'תסכמו את זה הערב, לפני שמישהו נעלב.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'social_proof',
      slides: [
        { layout: 'statement', headline: '״פתחנו בשאלה אחת״' },
        { layout: 'statement', headline: '״וסיימנו בשתיים בלילה״' },
        { layout: 'statement', headline: '״לא רבנו״' },
        { layout: 'statement', headline: '״פשוט לא היה לנו זמן לדבר ככה מאז ההצעה״' },
        { layout: 'dark', headline: 'זה בערך כל הרעיון', cta: 'לינק בביו' },
      ],
      caption:
        'זוג שקנה בחודש שעבר כתב לנו את זה.\n\n' +
        'לא ״שינה לנו את החיים״. פשוט ערב אחד טוב.\n\n' +
        'זה מספיק.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'זה לא משחק' },
        { layout: 'statement', headline: 'זה תירוץ' },
        { layout: 'statement', headline: 'תירוץ לפתוח בקבוק' },
        { layout: 'statement', headline: 'ולשבת מול מישהו', subline: 'בלי אקסל פתוח בצד' },
        { layout: 'dark', headline: 'ערב אחד, בלי לצאת מהבית', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אין קוביה. אין ניקוד. אף אחד לא מנצח.\n\n' +
        'יש קופסה, יש שאלות, ויש לכם סיבה לשבת.\n\n' +
        LINK,
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 6
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלה לא נוחה:' },
        { layout: 'statement', headline: 'מתי בפעם האחרונה', subline: 'הופתעתם ממשהו שהוא אמר?' },
        { layout: 'statement', headline: 'אתם יחד שנים' },
        { layout: 'statement', headline: 'אבל מדברים על אותם חמישה נושאים' },
        { layout: 'dark', headline: 'יש עוד 65 שם בקופסה', subline: 'ואחד מהם יפתיע אתכם', cta: 'לינק בביו' },
      ],
      caption:
        'אחד הדברים שהכי מפתיעים זוגות אצלנו זה לא התשובות.\n\n' +
        'זה שהם בכלל לא ידעו שיש שם שאלה.\n\n' +
        'הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תכבו את הטלפונים' },
        { layout: 'statement', headline: 'לא למצב שקט', subline: 'לכבות. בחדר השני.' },
        { layout: 'statement', headline: 'חצי שעה' },
        { layout: 'statement', headline: 'ספק שמחכה חצי שעה', subline: 'עדיין יהיה שם בעוד חצי שעה' },
        { layout: 'dark', headline: 'הערב הזה קצר ממה שנדמה לכם', cta: 'לינק בביו' },
      ],
      caption:
        'הטלפון הוא האורח השלישי בכל שיחה שלכם, והוא מדבר הכי הרבה.\n\n' +
        'חצי שעה בלעדיו.\n\n' +
        'תשמרו את הפוסט לערב שתנסו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'כולם מחכים שמישהו', subline: 'יקנה להם את זה במתנה' },
        { layout: 'statement', headline: 'אף אחד לא קונה' },
        { layout: 'photo', photo: 'couple-cafe', headline: 'אז תקנו לעצמכם' },
        { layout: 'statement', headline: 'זה מחיר של שתי מנות עיקריות' },
        { layout: 'dark', headline: 'ונשאר אצלכם אחרי החתונה', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'יצא לכם לחשוב ״נחמד, אולי מישהו יביא לנו את זה״?\n\n' +
        'לא יביא. כולם קונים מיקסר.\n\n' +
        '₪129 כולל משלוח עד 26.10, ואתם לא צריכים לחכות לאף אחד.',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 7
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'החפיסה הזאת', subline: 'לא תציל אף נישואים' },
        { layout: 'statement', headline: 'היא גם לא מיועדת לזה' },
        { layout: 'statement', headline: 'היא ערב אחד' },
        { layout: 'statement', headline: 'עם יין ועם שאלות', subline: 'שממילא היו מחכות לכם בהמשך' },
        { layout: 'dark', headline: 'עדיף לפגוש אותן על הספה', subline: 'מאשר בארוחה משפחתית', cta: 'לינק בביו' },
      ],
      caption:
        'אנחנו לא מבטיחים לכם כלום.\n\n' +
        'רק שהשיחות האלה יקרו. השאלה היחידה היא מתי ובאיזה מצב רוח.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'עשו רשימת ״לא״' },
        { layout: 'statement', headline: 'כל אחד כותב שלושה דברים', subline: 'שלא יקרו בחתונה שלו' },
        { layout: 'statement', headline: 'בלי להסביר למה' },
        { layout: 'statement', headline: 'שלושה. זה הכל.' },
        { layout: 'dark', headline: 'הרשימה הזאת שווה יותר', subline: 'מכל לוח ההשראות שאספתם', cta: 'לינק בביו' },
      ],
      caption:
        'קל לדעת מה אתם רוצים. קשה לדעת מה בטוח לא.\n\n' +
        'שלושה דברים כל אחד. בלי ויכוח, בלי הסברים.\n\n' +
        'תופתעו כמה החלטות זה סוגר בבת אחת.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'dark', headline: 'נשארו 3 שבועות' },
        { layout: 'statement', headline: 'עד 26.10', subline: '₪129 כולל משלוח' },
        { layout: 'statement', headline: 'אחרי', subline: '₪189 ועוד דמי משלוח' },
        { layout: 'statement', headline: 'לא נעשה דרמה מזה' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'מחיר ההשקה נגמר ב-26.10 ולא יחזור.\n\n' +
        'אם זה יושב לכם ברשימה ״אולי״ כבר שבועיים, זה הזמן להוריד אותו משם.\n\n' +
        LINK,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },
  ],

  stories: [
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לכבות טלפונים לחצי שעה', 'לענות לספק בשתיים בלילה'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אנחנו לא יועצי זוגיות', subline: 'אנחנו קופסה עם 70 שאלות' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-table', headline: 'אין דרך לעשות את זה לא נכון', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
    { pillar: 'value',    layout: 'statement', headline: 'חוק 20 הדקות', subline: 'טיימר על שיחות חתונה' },
    { pillar: 'pain',     layout: 'statement', headline: 'החברים שלכם הפסיקו לשאול', subline: 'שמתם לב?', poll: true, manual: true },
    { pillar: 'pain',     layout: 'dark',      headline: 'הצ׳אט שלכם מלא בסקרינשוטים', subline: 'של הצעות מחיר' },
    { pillar: 'value',    layout: 'statement', headline: 'לא מדברים על החתונה אחרי עשר', subline: 'בשעה הזאת הכל נשמע כמו התקפה', cta: 'לינק בביו' },
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['להחליט ביניכם', 'לגלות מה ההורים החליטו'], poll: true, manual: true },
    { pillar: 'value',    layout: 'statement', headline: 'תסכימו על מילת קוד', subline: 'מי שאומר אותה — הנושא נסגר' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-sushi', headline: 'מה קונים לזוג שיש לו הכל', subline: 'ערב שהם לא היו קובעים לעצמם', cta: 'לינק בביו', manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'החתונה היא לא המבחן', subline: 'השנה שאחריה היא' },
    { pillar: 'pain',     layout: 'dark',      headline: 'הצ׳ק של ההורים', subline: 'הגיע עם שמונה שמות לרשימה' },
    { pillar: 'value',    layout: 'statement', headline: 'כל אחד והמשפחה שלו', subline: 'אף אחד לא נשאר לבד מול המחותנים' },
    { pillar: 'sell',     layout: 'dark',      headline: 'נשארו 3 שבועות', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
  ],
};
