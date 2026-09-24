/**
 * Content for round 2026-W41 - Before I Do.
 *
 * Rewritten to the register the client corrected twice: this is not a
 * billboard, it is a message to a good friend. Dani is not a wedding
 * producer and not a counsellor - she is a friend who has sat through a lot
 * of weddings and keeps noticing things she has to tell someone.
 *
 * What that changes, line by line:
 *   - first person. she tells, she does not instruct.
 *   - almost no imperatives. "a couple I know did this" beats "do this".
 *   - she is allowed to hedge, to laugh at herself, to admit she is nosy.
 *   - the caption is where the voice lives. the image is the opening line.
 *
 * The three things the product sells are unchanged, and every post is still
 * one of them:
 *   1. a legal excuse to stop talking about the wedding for one evening
 *   2. friction prevention - tomorrow's fight, tonight, on the couch with wine
 *   3. a stylish date night with zero planning and no leaving the house
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
        { layout: 'statement', headline: 'אוקיי, מישהו צריך', subline: 'להגיד לכם את זה' },
        { layout: 'statement', headline: 'החברים שלכם הפסיקו', subline: 'לשאול על החתונה' },
        { layout: 'statement', headline: 'זה לא שלא אכפת להם' },
        { layout: 'statement', headline: 'פשוט אין להם מה לשאול', subline: 'אתם כבר מספרים לבד. כל פעם.' },
        { layout: 'dark', headline: 'ערב אחד שהיא לא מוזמנת אליו', subline: 'תופתעו כמה יש לכם להגיד', cta: 'לינק בביו' },
      ],
      caption:
        'ישבתי עם זוג חברים בשבוע שעבר ותפסתי את עצמי לא שואלת אותם על החתונה. ' +
        'לא כי לא מעניין אותי. פשוט כבר ידעתי הכול, כי הם סיפרו. בלי שביקשתי.\n\n' +
        'וזה לא באשמתם. כשמשהו ממלא לך את כל היום, הוא ממלא לך גם את כל המשפטים.\n\n' +
        'החפיסה הזאת היא בעצם תירוץ לערב אחד שבו החתונה לא מוזמנת. לא הבר, לא הרב.\n\n' +
        'הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'הדבר הכי טוב', subline: 'ששמעתי החודש מזוג' },
        { layout: 'statement', headline: 'הם שמים טיימר', subline: 'עשרים דקות, מדברים על החתונה' },
        { layout: 'statement', headline: 'נגמר הזמן — נגמר הנושא' },
        { layout: 'statement', headline: 'ומה שלא הספיקו', subline: 'מחכה למחר. הוא לא בורח.' },
        { layout: 'dark', headline: 'ובשאר הערב?', subline: 'בשביל זה יש לנו 70 שאלות אחרות', cta: 'לינק בביו' },
      ],
      caption:
        'אני יודעת איך זה נשמע. טיימר. כאילו אנחנו בעבודה.\n\n' +
        'אבל הם אמרו לי משהו שנתקע לי: ״זה לא שדיברנו פחות. זה שהפסקנו לדבר על זה בלי סוף.״\n\n' +
        'עשרים דקות, ואז סוגרים את האקסל ומדברים על משהו אחר.\n\n' +
        'תנסו שבוע ותחזרו אליי.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'מה קונים לזוג', subline: 'שכבר יש לו הכל?' },
        { layout: 'statement', headline: 'אני תמיד נתקעת בשאלה הזאת' },
        { layout: 'statement', headline: 'מיקסר יש להם', subline: 'כוסות יש להם. ועוד סט מצעים.' },
        { layout: 'photo', photo: 'box-sushi', headline: 'מה שאין להם זה ערב', subline: 'שהם לא היו קובעים לעצמם' },
        { layout: 'dark', headline: 'מגיע ארוז, מוכן לתת', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'בכל פעם שאני צריכה מתנה לזוג מאורס אני עומדת מול אותה בעיה: הם קנו דירה, יש להם הכול.\n\n' +
        'מה שאין להם זה ערב אחד שבו אף אחד לא מדבר על סידורי הושבה.\n\n' +
        'קופסה קשיחה, מגיעה ארוזה, ₪129 כולל משלוח עד 26.10. וכן, אני קונה את זה גם לעצמי.\n\n' +
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
        { layout: 'dark', headline: 'עדיף שתדברו על זה הערב', subline: 'ולא בשישי, כשכולם סביב השולחן', cta: 'לינק בביו' },
      ],
      caption:
        'בכל חתונה שהייתי בה, הרגע הזה קרה. פשוט לפעמים בשקט ולפעמים בצעקות.\n\n' +
        'כסף בחתונה הוא אף פעם לא רק כסף. הוא זכות הצבעה שאף אחד לא הסכים עליה בכתב.\n\n' +
        'זה לא הופך אף אחד לרע. זה פשוט צריך להיאמר בין שניכם לפני שמישהו אחר אומר את זה בשבילכם.',
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
        'שאלו אותי אם זה ״עוד משחק זוגיות״. הבנתי למה שואלים.\n\n' +
        'אז לפרוטוקול: אין פה קטורת, אין ניקוד, ואף אחד לא מנתח אף אחד.\n\n' +
        'יש קופסה שגורמת לכם לשאול אחד את השני דברים שלא עלו עד היום. מה שיוצא מזה זה שלכם בלבד.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'חברה שלי עשתה משהו', subline: 'שגנבתי ממנה מיד' },
        { layout: 'statement', headline: 'היא חילקה כל החלטה', subline: 'לשלוש ערימות' },
        { layout: 'statement', headline: 'שלי · שלך · שלנו' },
        { layout: 'statement', headline: 'ו״שלנו״ יצאה קטנטנה', subline: 'בכוונה' },
        { layout: 'dark', headline: 'כי שם נמצאים כל הריבים', subline: 'על מה שהיה צריך להיות של אחד מכם', cta: 'לינק בביו' },
      ],
      caption:
        'שאלתי אותה איך הם לא רבים. היא אמרה: ״כי אנחנו לא מתווכחים על דברים שהחלטנו שהם לא משותפים.״\n\n' +
        'לקחתי דף ועשיתי את זה. לקח שבע דקות.\n\n' +
        'רוב מה שנחת לי ב״שלנו״ לא באמת היה צריך להיות שם.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 3
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'תעשו לי טובה' },
        { layout: 'statement', headline: 'תפתחו את הצ׳אט שלכם', subline: 'ותגללו חודש אחורה' },
        { layout: 'statement', headline: 'סקרינשוט. הצעת מחיר.', subline: 'סקרינשוט. ״ראית?״' },
        { layout: 'statement', headline: 'זה צ׳אט של זוג?', subline: 'או של שני ספקים?' },
        { layout: 'dark', headline: 'ערב אחד בלי סקרינשוטים', subline: 'רק אתם ושאלה אחת בכל פעם', cta: 'לינק בביו' },
      ],
      caption:
        'עשיתי את זה אצלי ונבהלתי קצת.\n\n' +
        'הצ׳אט של זוג הוא המקום הכי כנה בבית. ואם הוא מלא בהצעות מחיר, זה אומר משהו על איך נראה השבוע שלכם.\n\n' +
        'זה לא נורא, זה שלב. רק שווה לצאת ממנו לערב אחד.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'כלל שאני מנדנדת עליו', subline: 'לכל מי שמתחתן' },
        { layout: 'statement', headline: 'לא מדברים על החתונה', subline: 'אחרי עשר בלילה' },
        { layout: 'statement', headline: 'בשעה הזאת אתם עייפים' },
        { layout: 'statement', headline: 'וכל דבר נשמע כמו התקפה' },
        { layout: 'dark', headline: 'שיחה כבדה עושים מוקדם', subline: 'עם יין, בישיבה, ולא במיטה', cta: 'לינק בביו' },
      ],
      caption:
        'אני לא חושבת שראיתי אי פעם ויכוח שהתחיל בשתיים בלילה ונגמר טוב.\n\n' +
        'זה אפילו לא קשור לחתונה. פשוט בשעה הזאת אף אחד מכם לא הגרסה הטובה של עצמו.\n\n' +
        'תעבירו את השיחות הגדולות לשעה שבה שניכם עוד בני אדם. זה לא טיפ זוגי, זו לוגיסטיקה.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'יש בקופסה 70 שאלות' },
        { layout: 'statement', headline: 'ואתם תענו על 12' },
        { layout: 'statement', headline: 'וזה בסדר גמור' },
        { layout: 'photo', photo: 'box-table', headline: 'אין ציון בסוף' },
        { layout: 'dark', headline: 'אין דרך לעשות את זה לא נכון', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אף אחד לא עובר את כל החפיסה בערב אחד. גם אני לא, ואני זאת שמוכרת אותה.\n\n' +
        'שולפים קלף, מדברים חצי שעה, נתקעים על אחד, ממשיכים בשבוע הבא.\n\n' +
        '₪129 כולל משלוח, עד 26.10.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 4
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שמתי לב למשהו' },
        { layout: 'statement', headline: 'אתם לא עייפים מהחתונה' },
        { layout: 'statement', headline: 'אתם עייפים מלהחליט' },
        { layout: 'statement', headline: 'גופן. מפיות. סלט.', subline: 'איזה שיר בכניסה. מאה החלטות ביום.' },
        { layout: 'dark', headline: 'ויש כמה גדולות', subline: 'שעליהן אף אחד לא שאל אתכם', cta: 'לינק בביו' },
      ],
      caption:
        'שמים את כל האנרגיה בבחירת גופן להזמנה, ומגיעים לחופה בלי לדעת מה כל אחד חושב על השנה שאחריה.\n\n' +
        'אני אומרת את זה בלי שמץ של שיפוט. זה פשוט מה שקורה כשיש מאה משימות קטנות וצועקות.\n\n' +
        'זה לא סיפור גדול לתקן. זה ערב אחד עם קופסה.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'הטריק הכי מטופש', subline: 'שראיתי אצל זוג. ועובד.' },
        { layout: 'statement', headline: 'הם בחרו מילת קוד' },
        { layout: 'statement', headline: 'מי שאומר אותה', subline: 'נושא החתונה נסגר לערב' },
        { layout: 'statement', headline: 'בלי להתווכח למה', subline: 'ובלי ״רק משפט אחרון״' },
        { layout: 'dark', headline: 'הוא הגיע לגבול שלו', subline: 'וזה מספיק. לא צריך להסביר.', cta: 'לינק בביו' },
      ],
      caption:
        'המילה שלהם הייתה ״אננס״. אין לזה שום היגיון וזה בדיוק העניין — אי אפשר להגיד אותה בכעס.\n\n' +
        'מי שאומר, הנושא נסגר. בלי ויכוח על זה שהוא נסגר.\n\n' +
        'תגידו לי בתגובות מה הייתם בוחרים, אני באמת סקרנית.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'כן, אמרתי את זה:' },
        { layout: 'statement', headline: 'החתונה היא לא המבחן' },
        { layout: 'statement', headline: 'היא יום אחד', subline: 'עם צלם וסידורי הושבה' },
        { layout: 'statement', headline: 'המבחן זה השנה שאחריה' },
        { layout: 'dark', headline: 'ולזה כן שווה להתכונן', subline: 'ערב אחד. בלי הכנה מראש.', cta: 'לינק בביו' },
      ],
      caption:
        'משקיעים שנה שלמה ביום אחד, ואפס שעות בשנה שאחריו. וזה לא בגלל שמישהו לא רציני — פשוט אף אחד לא מזכיר לכם.\n\n' +
        'אז אני מזכירה.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 5
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'הכלל הכי פשוט שיש' },
        { layout: 'statement', headline: 'והכי פחות מיושם' },
        { layout: 'statement', headline: 'כל אחד והמשפחה שלו' },
        { layout: 'statement', headline: 'ההורים שלך שואלים?', subline: 'אתה עונה. לא היא.' },
        { layout: 'dark', headline: 'זה מוריד חצי מהמתח', subline: 'כי אף אחד לא נשאר לבד מול המשפחה של השני', cta: 'לינק בביו' },
      ],
      caption:
        'אני יודעת שזה נשמע קטן. זה לא.\n\n' +
        'ברגע שכל אחד מטפל במשפחה שלו — בהזמנות, בעלבונות, בשאלות — נגמרות שתי שיחות קשות בשבוע.\n\n' +
        'תסכמו את זה הערב, לפני שמישהו נעלב ואי אפשר להחזיר.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'social_proof',
      slides: [
        { layout: 'statement', headline: 'זוג כתב לנו' },
        { layout: 'statement', headline: '״פתחנו בשאלה אחת״' },
        { layout: 'statement', headline: '״וסיימנו בשתיים בלילה״' },
        { layout: 'statement', headline: '״לא רבנו״', subline: '״פשוט לא דיברנו ככה מאז ההצעה״' },
        { layout: 'dark', headline: 'זה בערך כל הרעיון', cta: 'לינק בביו' },
      ],
      caption:
        'לא ״שינה לנו את החיים״. לא ״ריפא״ כלום.\n\n' +
        'ערב אחד טוב, מהסוג שלא קורה מעצמו כשיש רשימת מטלות פתוחה על השולחן.\n\n' +
        'זה מספיק לי.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'רגע, זה לא משחק' },
        { layout: 'statement', headline: 'זה תירוץ' },
        { layout: 'statement', headline: 'תירוץ לפתוח בקבוק' },
        { layout: 'statement', headline: 'ולשבת מול מישהו', subline: 'בלי אקסל פתוח בצד' },
        { layout: 'dark', headline: 'ערב אחד, בלי לצאת מהבית', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אין קוביה, אין ניקוד, אף אחד לא מנצח.\n\n' +
        'האמת היא שקראנו לזה משחק רק כי ככה אנשים מתיישבים. אף אחד לא מתיישב ל״בואו נדבר על החתונה״.\n\n' +
        LINK,
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 6
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלה קצת לא נוחה' },
        { layout: 'statement', headline: 'מתי בפעם האחרונה', subline: 'הופתעתם ממשהו שהוא אמר?' },
        { layout: 'statement', headline: 'אתם יחד שנים' },
        { layout: 'statement', headline: 'ומדברים על אותם חמישה נושאים' },
        { layout: 'dark', headline: 'יש עוד 65 בקופסה', subline: 'ואחד מהם יפתיע אתכם', cta: 'לינק בביו' },
      ],
      caption:
        'הדבר שהכי מפתיע זוגות אצלנו זה לא התשובות.\n\n' +
        'זה שהם לא ידעו שיש שם בכלל שאלה.\n\n' +
        'ואני מבינה אותם — מי יושב ביום שלישי רגיל ושואל את זה סתם?',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תכבו את הטלפונים' },
        { layout: 'statement', headline: 'לא למצב שקט', subline: 'לכבות. בחדר השני.' },
        { layout: 'statement', headline: 'חצי שעה' },
        { layout: 'statement', headline: 'ספק שמחכה חצי שעה', subline: 'עדיין יהיה שם בעוד חצי שעה' },
        { layout: 'dark', headline: 'הערב הזה קצר', subline: 'הרבה יותר ממה שנדמה לכם', cta: 'לינק בביו' },
      ],
      caption:
        'אני הכי גרועה בזה, אז אני מרשה לעצמי להטיף רק פה.\n\n' +
        'הטלפון הוא האורח השלישי בכל שיחה, והוא מדבר הכי הרבה.\n\n' +
        'חצי שעה בלעדיו. תשמרו את הפוסט לערב שתנסו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'ראיתי הודעה כזאת השבוע:' },
        { layout: 'statement', headline: '״נחמד, אולי מישהו', subline: 'יקנה לנו את זה במתנה״' },
        { layout: 'photo', photo: 'couple-cafe', headline: 'לא יקנה. כולם קונים מיקסר.' },
        { layout: 'statement', headline: 'זה מחיר של שתי מנות עיקריות' },
        { layout: 'dark', headline: 'ונשאר אצלכם אחרי החתונה', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'יש דברים שמחכים למתנה ואף פעם לא מקבלים אותה, כי כולם קונים את אותו הדבר.\n\n' +
        'אם זה יושב לכם בראש כבר שבועיים — פשוט תקנו לעצמכם. זה ₪129 כולל משלוח, עד 26.10.\n\n' +
        'אני לא חושבת שהתחרטתם פעם על ערב טוב.',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 7
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'בשביל הסדר הטוב:' },
        { layout: 'statement', headline: 'החפיסה הזאת', subline: 'לא תציל אף נישואים' },
        { layout: 'statement', headline: 'היא גם לא מיועדת לזה' },
        { layout: 'statement', headline: 'היא ערב אחד', subline: 'עם יין ועם שאלות שממילא מחכות לכם' },
        { layout: 'dark', headline: 'ועדיף לפגוש אותן על הספה', subline: 'מאשר בארוחה משפחתית', cta: 'לינק בביו' },
      ],
      caption:
        'אני לא מבטיחה לכם כלום, וזה נראה לי הדבר הכי הוגן שאני יכולה להגיד.\n\n' +
        'השיחות האלה יקרו בכל מקרה. השאלה היחידה היא מתי, ובאיזה מצב רוח תהיו כשהן יקרו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תרגיל שאני אוהבת' },
        { layout: 'statement', headline: 'כל אחד כותב שלושה דברים', subline: 'שלא יקרו בחתונה שלו' },
        { layout: 'statement', headline: 'בלי להסביר למה' },
        { layout: 'statement', headline: 'שלושה. זה הכל.' },
        { layout: 'dark', headline: 'הרשימה הזאת שווה יותר', subline: 'מכל לוח ההשראות שאספתם', cta: 'לינק בביו' },
      ],
      caption:
        'קל מאוד לדעת מה אתם רוצים. הרבה יותר קשה לדעת מה בטוח לא.\n\n' +
        'עשיתי את זה עם חברה שהתחתנה בקיץ והיא סגרה ככה ארבע החלטות שהיו תקועות חודש.\n\n' +
        'שלושה דברים כל אחד. בלי ויכוח, בלי הסברים.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'dark', headline: 'נשארו 3 שבועות' },
        { layout: 'statement', headline: 'עד 26.10', subline: '₪129 כולל משלוח' },
        { layout: 'statement', headline: 'אחרי', subline: '₪189 ועוד דמי משלוח' },
        { layout: 'statement', headline: 'לא נעשה מזה דרמה' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'מחיר ההשקה נגמר ב-26.10 ולא חוזר. זה כל העדכון, בלי ספירה לאחור בסטורי כל יום.\n\n' +
        'אם זה יושב לכם ברשימת ה״אולי״ כבר שבועיים, זה הזמן להוריד אותו משם.\n\n' +
        LINK,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },
  ],

  stories: [
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לכבות טלפונים לחצי שעה', 'לענות לספק בשתיים בלילה'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אנחנו לא יועצי זוגיות', subline: 'אנחנו קופסה עם 70 שאלות' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-table', headline: 'אין דרך לעשות את זה לא נכון', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
    { pillar: 'value',    layout: 'statement', headline: 'זוג ששמעתי עליו שם טיימר', subline: 'עשרים דקות חתונה, ואז נגמר' },
    { pillar: 'pain',     layout: 'statement', headline: 'החברים שלכם הפסיקו לשאול', subline: 'שמתם לב?', poll: true, manual: true },
    { pillar: 'pain',     layout: 'dark',      headline: 'הצ׳אט שלכם מלא בסקרינשוטים', subline: 'תגללו חודש אחורה ותראו' },
    { pillar: 'value',    layout: 'statement', headline: 'לא מדברים על זה אחרי עשר', subline: 'בשעה הזאת הכל נשמע כמו התקפה', cta: 'לינק בביו' },
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['להחליט ביניכם', 'לגלות מה ההורים החליטו'], poll: true, manual: true },
    { pillar: 'value',    layout: 'statement', headline: 'המילה שלהם הייתה ״אננס״', subline: 'מי שאומר אותה — הנושא נסגר' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-sushi', headline: 'מה קונים לזוג שיש לו הכל', subline: 'ערב שהם לא היו קובעים לעצמם', cta: 'לינק בביו', manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'החתונה היא לא המבחן', subline: 'השנה שאחריה היא' },
    { pillar: 'pain',     layout: 'dark',      headline: 'הצ׳ק של ההורים', subline: 'הגיע עם שמונה שמות לרשימה' },
    { pillar: 'value',    layout: 'statement', headline: 'כל אחד והמשפחה שלו', subline: 'אף אחד לא נשאר לבד מול המחותנים' },
    { pillar: 'sell',     layout: 'dark',      headline: 'נשארו 3 שבועות', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
  ],
};
