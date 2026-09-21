/**
 * Content for round 2026-W40. Instagram carousels.
 *
 * VOICE: eye level. Not a brand explaining marriage to people - someone who
 * has sat at that table. So: second person, present tense, a scene you can
 * picture, and the mess admitted rather than solved from above. A verdict
 * ("X is really Y") reads as a lecture; the same idea as something that
 * happened to you reads as a friend. Specifics beat aphorisms every time.
 *
 * CONVERSION: every carousel ends asking for something. Value posts ask for a
 * save or a tag and carry the link softly; sell posts name the price and the
 * date it moves. Objections get answered out loud rather than avoided.
 *
 * pillar: pain | value | identity | social_proof | sell
 * layout: statement (cream) | dilemma (white) | dark (blue) | photo
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
        { layout: 'statement', headline: 'אתם כבר שבועיים על רשימת המוזמנים' },
        { layout: 'statement', headline: 'ועדיין לא סגרתם אותה' },
        { layout: 'statement', headline: 'זה לא כי אתם לא מחליטים', subline: 'זה כי כל שם ברשימה הוא החלטה על מישהו' },
        { layout: 'statement', headline: 'אז אל תתחילו משמות', subline: 'תתחילו מכלל' },
        { layout: 'dilemma', dilemma: ['מי שדיברנו איתו השנה', 'מי שהיינו הולכים לחתונה שלו'] },
        { layout: 'dark', headline: 'תבחרו אחד, ותראו מה קורה', subline: 'פתאום זה מפסיק להיות ויכוח', cta: 'שמרו לשיחה הבאה' },
      ],
      caption:
        'שבועיים. אולי שלושה. והרשימה עדיין פתוחה בטלפון של אחד מכם.\n\n' +
        'זה לא כי אתם מתקשים להחליט. זה כי כל שם שם הוא החלטה על מישהו אמיתי, ' +
        'ואין דרך לעשות את זה בלי להרגיש רע לרגע.\n\n' +
        'מה שעוזר: לא להתחיל משמות. להתחיל מכלל אחד שאתם מסכימים עליו — ' +
        'ואז פשוט להריץ את הרשימה מולו.\n\n' +
        'מה הכלל שלכם? כתבו לנו 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'אף אחד לא מתכנן לריב', subline: 'בשלוש לפנות בוקר' },
        { layout: 'statement', headline: 'זה פשוט מה שקורה' },
        { layout: 'dilemma', dilemma: ['לדבר על זה עכשיו', 'לגלות ביום עצמו'] },
        { layout: 'statement', headline: 'כי שיחה שנדחית מספיק זמן', subline: 'לא נעלמת. היא רק מחכה לרגע הכי גרוע' },
        { layout: 'dark', headline: 'אז תקדימו אותה', subline: 'עדיף בסלון, עם יין, ובלי שאף אחד עייף', cta: 'לינק בביו' },
      ],
      caption:
        'זה אף פעם לא מתחיל כוויכוח. זה מתחיל ב״רגע, אז מה סיכמנו לגבי…״ ' +
        'בשעה שבה כבר אין לאף אחד סבלנות.\n\n' +
        'אנחנו לא חושבים שאפשר לתכנן חתונה בלי מתח. אנחנו כן חושבים ' +
        'שאפשר לבחור מתי הוא קורה.\n\n' +
        'תייגו את מי שצריך לקרוא את זה 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'couple-cafe', headline: 'ככה זה נראה', subline: 'שעה, שני קפה, והשיחה שדחיתם' },
        { layout: 'statement', headline: 'שולפים קלף', subline: 'עונים. עוברים לבא' },
        { layout: 'statement', headline: 'אין ניקוד', subline: 'אין מנצח' },
        { layout: 'statement', headline: '70 שאלות', subline: 'שכיסינו בשבילכם, כדי שלא תצטרכו לזכור מה שכחתם' },
        { layout: 'statement', headline: 'ואם משהו נתקע', subline: 'יש קלף וטו. משתמשים פעם אחת.' },
        { layout: 'dark', headline: 'ערב אחד. וזה מאחוריכם.', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'לא צריך סדנה, לא צריך יועץ, ולא צריך להקדיש לזה סוף שבוע.\n\n' +
        'ערב אחד בבית, בקצב שלכם. יוצאים מזה עם כמה החלטות סגורות ועם ' +
        'שתיים־שלוש שיחות שגיליתם שאתם חייבים לנהל.\n\n' +
        '✦ 129 ₪ כולל משלוח עד הבית\n' +
        '✦ מחיר השקה — עד 26.10, אחר כך 189 ₪ + משלוח\n\n' +
        `הלינק בביו 👆  |  ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 2
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'תרגיל של שלוש דקות', subline: 'שיחסוך לכם שלושה ויכוחים' },
        { layout: 'statement', headline: 'כל אחד לוקח פתק' },
        { layout: 'statement', headline: '״אם היה לנו 30% פחות״', subline: '״על מה הייתי מוותר.ת ראשון?״' },
        { layout: 'statement', headline: 'לא מציצים' },
        { layout: 'statement', headline: 'עכשיו תשוו' },
        { layout: 'dark', headline: 'אותה תשובה? יש לכם עוגן.', subline: 'תשובה שונה? מצאתם את השיחה שחיפשתם.', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'תקציב הוא הנושא שהכי הרבה זוגות נתקעים בו, ולא בגלל המספר. ' +
        'בגלל שכל פעם שהמספר זז, צריך להחליט מחדש מה נדחף החוצה.\n\n' +
        'אם אתם יודעים מראש מה הדבר האחרון שאתם מוותרים עליו — כל שאר ' +
        'ההחלטות נהיות פשוטות.\n\n' +
        'תעשו את זה הערב. זה באמת לוקח שלוש דקות. 🙂',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'שמנו לב למשהו' },
        { layout: 'statement', headline: 'רוב הזוגות לא רבים על החתונה' },
        { layout: 'statement', headline: 'הם רבים על משהו אחר', subline: 'רק דרך החתונה' },
        { layout: 'statement', headline: 'כמה מקום יש למשפחה', subline: 'בחיים שלנו' },
        { layout: 'statement', headline: 'ומי מרגיש.ה שצריך.ה לרצות', subline: 'את כולם, כל הזמן' },
        { layout: 'dark', headline: 'זו לא בעיה בזוגיות', subline: 'זו שיחה שאף אחד לא יזם', cta: 'מסכימים? ספרו לנו' },
      ],
      caption:
        'נסו את זה באמצע הוויכוח הבא: לעצור ולשאול ״על מה אנחנו באמת מדברים עכשיו?״\n\n' +
        'כמעט תמיד התשובה היא לא מה שכתוב על השולחן. וברגע שאומרים אותה בקול, ' +
        'הוויכוח נגמר תוך דקה.\n\n' +
        'זה עבד לכם פעם? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'dark', headline: 'ארבע שאלות שלא תשאלו', subline: 'עד שיהיה מאוחר' },
        { layout: 'statement', headline: 'מי מדבר.ת עם ההורים שלך', subline: 'אם משהו משתבש' },
        { layout: 'statement', headline: 'מי מחזיק.ה את הטלפון', subline: 'ביום עצמו' },
        { layout: 'statement', headline: 'מה קורה אם ספק נעלם', subline: 'שבוע לפני' },
        { layout: 'statement', headline: 'ומי מחליט.ה', subline: 'כשאתם לא מסכימים ואין זמן' },
        { layout: 'dark', headline: 'חמש דקות עכשיו', subline: 'במקום חצי שעה של פאניקה אז', cta: 'שמרו לשיחה הבאה' },
      ],
      caption:
        'אלה לא שאלות כיפיות. בדיוק בגלל זה אף אחד לא שואל אותן.\n\n' +
        'ובדיוק בגלל זה, כשמשהו באמת משתבש, שני בני הזוג מסתכלים אחד על השנייה ' +
        'ומחכים שמישהו יחליט.\n\n' +
        'שמרו את הפוסט. תודו לנו בעוד חצי שנה 🔖',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 3
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'לפני הפגישה הבאה עם ספק' },
        { layout: 'statement', headline: 'עצרו בחניון' },
        { layout: 'statement', headline: 'כל אחד כותב שלושה דברים', subline: 'שהם ״לא בשבילנו״' },
        { layout: 'statement', headline: 'לא מה כן', subline: 'דווקא מה לא' },
        { layout: 'statement', headline: 'תשוו לפני שנכנסים' },
        { layout: 'dark', headline: 'עדיף לגלות פער בחניון', subline: 'מאשר מול הספק עם מחירון על השולחן', cta: 'שמרו לפגישה הבאה 🔖' },
      ],
      caption:
        'המקום הכי גרוע לגלות שאתם רוצים שני דברים שונים הוא באמצע פגישה, ' +
        'מול אדם זר שמחכה לתשובה.\n\n' +
        'שלוש דקות בחניון. זה כל מה שצריך.\n\n' +
        'מכירים מישהו שנכנס לפגישה כזאת השבוע? תייגו 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלה שאף אחד לא אוהב' },
        { layout: 'dilemma', dilemma: ['חתונה שנראית טוב בתמונות', 'חתונה שמרגישה טוב ביום עצמו'] },
        { layout: 'statement', headline: '״רגע, למה בכלל צריך לבחור?״' },
        { layout: 'statement', headline: 'כי יום החתונה בנוי', subline: 'מעשרים רגעים שבהם צריך' },
        { layout: 'dark', headline: 'ומי שלא בחר.ה מראש', subline: 'בוחר.ת בלחץ, ביום עצמו', cta: 'מה אתם אומרים? 👇' },
      ],
      caption:
        'רובנו רוצים את שניהם, ורובנו לא באמת מדברים על מה קורה כשצריך להכריע.\n\n' +
        'זה לא אומר לוותר על תמונות יפות. זה אומר לדעת מה גובר על מה, ' +
        'לפני שעומדים שם.\n\n' +
        'אתם בקטע של מה? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'box-table', headline: '״זה סתם עוד משחק קלפים?״', subline: 'שאלה הוגנת' },
        { layout: 'statement', headline: 'לא. אין ניקוד ואין מנצח.' },
        { layout: 'statement', headline: 'זה כלי תכנון', subline: 'שמתחפש למשחק כדי שתסכימו לשחק' },
        { layout: 'statement', headline: '6 קטגוריות', subline: 'הבסיס · בחופה · אחרי · שאלות פתוחות · חס וחלילה · מיוחדים' },
        { layout: 'statement', headline: 'ואם שאלה קשה מדי', subline: 'יש וטו. פעם אחת, לכל אחד.' },
        { layout: 'dark', headline: 'ערב אחד, והכי קשה מאחוריכם', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'שאלו אותנו את זה מספיק פעמים, אז נענה ישר: זה לא משחק שמעביר ערב. ' +
        'זה כלי שגורם לכם לדבר על מה שממילא בראש של שניכם.\n\n' +
        'הפורמט הוא משחק רק כי ככה אתם באמת מתיישבים לזה. אף אחד לא מתיישב ' +
        'ל״בואו נדבר על החתונה״.\n\n' +
        `✦ 129 ₪ כולל משלוח | עד 26.10\n✦ ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 4
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'אתם לא צריכים להחליט הכול ביחד' },
        { layout: 'statement', headline: 'אתם צריכים להחליט', subline: 'מי מחליט מה' },
        { layout: 'statement', headline: 'קחו דף. חלקו.', subline: 'מוזיקה · אוכל · עיצוב · אורחים · כסף · לו״ז' },
        { layout: 'statement', headline: 'על כל תחום', subline: 'מי מוביל.ה — ומי סומך.ת' },
        { layout: 'statement', headline: 'החלק הקשה הוא לא לחלק' },
        { layout: 'dark', headline: 'החלק הקשה הוא לסמוך', subline: 'אחרי שחילקתם', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'זוגות שמחלקים אחריות מראש מסיימים תכנון בחצי מהוויכוחים. ' +
        'זה לא תיאוריה — זה מה שרואים.\n\n' +
        'אבל החלוקה שווה משהו רק אם אחריה באמת מרפים. אחרת זה פשוט ויכוח ' +
        'עם עוד שלב.\n\n' +
        'מי אצלכם אחראי.ת על מה? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'מחשבה שאולי תרגיע אתכם' },
        { layout: 'statement', headline: 'אתם לא מתכננים אירוע' },
        { layout: 'statement', headline: 'אתם מתאמנים על נישואים' },
        { layout: 'statement', headline: 'המון החלטות ביחד, תחת לחץ', subline: 'עם כסף אמיתי, מול משפחות אמיתיות' },
        { layout: 'dark', headline: 'זה בדיוק מה שנישואים עושים', subline: 'רק שכאן יש דדליין — וזה דווקא יתרון', cta: 'לינק בביו' },
      ],
      caption:
        'אם תכנון החתונה מרגיש לכם כבד מדי ביחס ל״מסיבה אחת״ — זה כי הוא באמת ' +
        'לא רק מסיבה אחת.\n\n' +
        'וזו בדיוק הסיבה ששווה להשקיע בו יותר משיחות על תפריט. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'social_proof',
      slides: [
        { layout: 'statement', headline: '״ישבנו לשעה״' },
        { layout: 'statement', headline: '״יצאנו עם שלוש החלטות״' },
        { layout: 'statement', headline: '״ועם ויכוח אחד״', subline: 'שהיה חייב לקרות' },
        { layout: 'statement', headline: 'זה בדיוק התפקיד', subline: 'לא להעלים ויכוחים — להביא אותם בזמן שהם עוד זולים' },
        { layout: 'dark', headline: 'מכירים זוג שצריך את הערב הזה?', subline: 'תייגו אותם למטה 👇', cta: 'לינק בביו' },
      ],
      caption:
        'הציטוט הזה הגיע מזוג שקיבל את המשחק במתנה, ואנחנו חוזרים אליו הרבה — ' +
        'כי הוא מתאר בדיוק מה אמור לקרות.\n\n' +
        'ויכוח אחד בסלון עדיף על שלושה בשבוע של החתונה.\n\n' +
        'תייגו זוג שיצחק ואז יקנה 👇',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 5
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'לפני שאתם בוחרים אולם' },
        { layout: 'statement', headline: 'תענו על שאלה אחת' },
        { layout: 'statement', headline: '״איך נרצה להרגיש״', subline: '״כשהערב נגמר?״' },
        { layout: 'statement', headline: 'רגועים? מותשים ומאושרים?', subline: 'שכולם רקדו? שהספקנו לדבר עם כולם?' },
        { layout: 'statement', headline: 'כל תשובה', subline: 'מובילה לחתונה אחרת לגמרי' },
        { layout: 'dark', headline: 'ורוב הזוגות בוחרים ספקים', subline: 'לפני שבחרו תשובה', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'זו השאלה שכל שאר ההחלטות נגזרות ממנה, וכמעט אף אחד לא שואל אותה ראשונה.\n\n' +
        'תנסו לענות עליה בנפרד, במשפט אחד כל אחד. אם יצאו לכם שני משפטים שונים — ' +
        'מצוין שגיליתם את זה עכשיו ולא בחוזה.\n\n' +
        'מה המשפט שלכם? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'השאלה הכי לא נוחה בתכנון' },
        { layout: 'dilemma', dilemma: ['לרצות את כולם', 'לרצות אחד את השני'] },
        { layout: 'statement', headline: 'רובנו אומרים את השנייה' },
        { layout: 'statement', headline: 'ורובנו מתנהגים לפי הראשונה' },
        { layout: 'dark', headline: 'אין תשובה נכונה', subline: 'יש רק תשובה אחת שלכם — ולא שתיים בשקט', cta: 'מה אתם אומרים? 👇' },
      ],
      caption:
        'הפער בין מה שאנחנו אומרים לבין מה שאנחנו עושים בתכנון חתונה ' +
        'הוא המקום שבו נולדים רוב הוויכוחים.\n\n' +
        'לא צריך לפתור אותו. צריך רק להכיר בו בקול.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'box-sushi', headline: 'מחפשים מתנה לזוג מאורס?' },
        { layout: 'statement', headline: 'סט סכינים הם כבר קיבלו' },
        { layout: 'statement', headline: 'שלושה', subline: 'כולם שולחים את אותו לינק' },
        { layout: 'statement', headline: 'תנו להם ערב', subline: 'בלי מסכים, עם 70 שאלות שמישהו כבר חשב עליהן' },
        { layout: 'statement', headline: 'מגיע בקופסה קשיחה', subline: 'לא צריך לעטוף. נראה כמו מתנה.' },
        { layout: 'dark', headline: 'והם יזכרו מי נתן', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'זו המתנה שזוגות מספרים עליה אחרי החתונה, לא בזמן פתיחת המעטפות.\n\n' +
        'מגיע בקופסה קשיחה, עם משלוח עד הבית — אז אפשר גם לשלוח ישירות אליהם.\n\n' +
        '✦ 129 ₪ כולל משלוח | מחיר השקה עד 26.10\n\n' +
        `הלינק בביו 👆  |  ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 6
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'ההורים רוצים להיות חלק' },
        { layout: 'statement', headline: 'זו לא הבעיה' },
        { layout: 'statement', headline: 'הבעיה היא כשאין להם תפקיד', subline: 'כי אז הם נותנים דעה' },
        { layout: 'statement', headline: 'תנו לכל צד משהו אחד', subline: 'קונקרטי, שהוא באמת אחראי עליו' },
        { layout: 'dark', headline: 'זה מכבד, זה עוזר באמת', subline: 'וזה מוריד לכם שיחה קשה מכל שבוע', cta: 'שמרו לפני השיחה הבאה 🔖' },
      ],
      caption:
        'אף הורה לא מתעורר בבוקר ומחליט להתערב. זה פשוט מה שקורה כשרוצים לעזור ' +
        'ואין איפה.\n\n' +
        'תנו תפקיד. תראו מה קורה.\n\n' +
        'תייגו את מי שצריך את זה השבוע 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'כתוב לנו על החפיסה' },
        { layout: 'statement', headline: 'אין תשובות נכונות' },
        { layout: 'statement', headline: 'יש רק שיחות טובות' },
        { layout: 'statement', headline: 'כי המטרה היא לא להסכים על הכול', subline: 'המטרה היא לדעת איפה לא — בזמן שזה עוד קל' },
        { layout: 'dark', headline: 'רגע מאושר שישאר לנצח', cta: 'לינק בביו' },
      ],
      caption: 'זה כל הרעיון, בשורה אחת. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'הרשימה קצרה', subline: 'אז למה אתם מרגישים מוצפים?' },
        { layout: 'statement', headline: 'כי הלחץ לא מגיע מהמשימות' },
        { layout: 'statement', headline: 'הוא מגיע מהדברים', subline: 'שעוד לא סגורים בראש' },
        { layout: 'statement', headline: 'סגרו את הגדולים' },
        { layout: 'dark', headline: 'והקטנים פתאום נהיים החלק הכיפי', subline: 'זה באמת עובד ככה', cta: 'לינק בביו' },
      ],
      caption:
        'אם הכול לכאורה בשליטה ואתם עדיין מרגישים כבדים — זה לא אתם. ' +
        'זה פער בין מה שסגור ברשימה לבין מה שסגור בראש.\n\n' +
        'תסגרו שלושה דברים גדולים השבוע. תרגישו את ההבדל. ✨',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 7
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'החתונה נכנסה לכם לכל שיחה' },
        { layout: 'statement', headline: 'גם כשלא רציתם' },
        { layout: 'statement', headline: 'קבעו ערב אחד בשבוע', subline: 'חצי שעה. בלוח. כמו פגישה.' },
        { layout: 'statement', headline: 'נושא אחד בכל פעם', subline: 'לא ״בואו נתכנן חתונה״' },
        { layout: 'dark', headline: 'ערב אחד מחזיר לכם', subline: 'את כל שאר הימים בשבוע', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'הדבר הכי מתיש בתכנון הוא לא העבודה — זה שהוא נמצא בכל שיחה, כל הזמן, ' +
        'גם בארוחת ערב וגם בנסיעה.\n\n' +
        'ערב קבוע פותר את זה כמעט לגמרי. תנסו שבועיים.\n\n' +
        'מי כבר עושה את זה? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלנו זוגות נשואים' },
        { layout: 'dilemma', dilemma: ['חתונה שאתם זוכרים', 'חתונה שאתם מתאוששים ממנה'] },
        { layout: 'statement', headline: 'ההבדל ביניהן' },
        { layout: 'statement', headline: 'הוא לא כמה הוצאתם', subline: 'הוא כמה דיברתם לפני' },
        { layout: 'dark', headline: 'ואת זה אפשר לסדר', subline: 'בערב אחד', cta: 'לינק בביו' },
      ],
      caption:
        'התשובה הזאת חזרה על עצמה כל כך הרבה פעמים שהפסקנו להיות מופתעים.\n\n' +
        'אתם באיזה צד? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'dark', headline: 'נשארו פחות מ-5 שבועות' },
        { layout: 'statement', headline: 'עד 26.10', subline: '₪129, כולל משלוח עד הבית' },
        { layout: 'statement', headline: 'אחרי', subline: '₪189 ועוד דמי משלוח' },
        { layout: 'statement', headline: 'אם זה יושב לכם ברשימה', subline: 'זה הזמן להוריד אותו ממנה' },
        { layout: 'dark', headline: 'שיחה אחת, לפני כל השאר', badge: '₪129 עד 26.10', cta: LINK },
      ],
      caption:
        'מחיר ההשקה נגמר ב-26.10. אחריו 189 ₪ בתוספת משלוח.\n\n' +
        'אם חשבתם על זה כבר פעמיים — זו הפעם השלישית. 🙂\n\n' +
        `✦ ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },
  ],

  // ---------------------------------------------------------------------
  // Stories stay single frames - Instagram has no carousel in a story.
  // `manual: true` carries a link or poll sticker, which no API can post:
  // Metricool sends a phone notification instead.
  // ---------------------------------------------------------------------
  stories: [
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לדבר על זה עכשיו', 'לגלות ביום עצמו'], poll: true, manual: true },
    { pillar: 'value',    layout: 'statement', headline: 'עדיין לא סגרתם את רשימת המוזמנים?', subline: 'תתחילו מכלל, לא משמות', cta: 'לינק בביו' },
    { pillar: 'sell',     layout: 'photo',     photo: 'couple-cafe', headline: 'ערב אחד', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אין תשובות נכונות', subline: 'יש רק שיחות טובות' },
    { pillar: 'value',    layout: 'statement', headline: 'אם היה לכם 30% פחות', subline: 'על מה הייתם מוותרים ראשון?', poll: true, manual: true },
    { pillar: 'pain',     layout: 'dark',      headline: 'מי מחזיק.ה את הטלפון ביום עצמו?', subline: 'שאלה שאף אחד לא שואל בזמן' },
    { pillar: 'value',    layout: 'statement', headline: 'לפני הפגישה הבאה עם ספק', subline: 'עצרו בחניון. שלוש דקות.', cta: 'לינק בביו' },
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לרצות את כולם', 'לרצות אחד את השני'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אתם לא מתכננים אירוע', subline: 'אתם מתאמנים על נישואים' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-sushi', headline: 'מתנה לזוג מאורס', subline: 'שהם יזכרו מי נתן', cta: 'לינק בביו', manual: true },
    { pillar: 'value',    layout: 'statement', headline: '״איך נרצה להרגיש בסוף הערב?״', subline: 'תענו לפני שבוחרים אולם' },
    { pillar: 'pain',     layout: 'dark',      headline: 'הוויכוח על המוזמנים', subline: 'הוא אף פעם לא על המוזמנים' },
    { pillar: 'value',    layout: 'statement', headline: 'תנו להורים תפקיד', subline: 'אחרת הם ייתנו דעה' },
    { pillar: 'sell',     layout: 'dark',      headline: 'נשארו פחות מ-5 שבועות', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
  ],
};
