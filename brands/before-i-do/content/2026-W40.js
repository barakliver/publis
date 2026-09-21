/**
 * Content for round 2026-W40. Instagram carousels.
 *
 * VOICE: Dani. A wedding producer who got tired of watching the same gap open
 * at every wedding she ran, and built the deck about it. She is not a brand
 * explaining marriage - she is the one person in the room who has seen this
 * two hundred times and will say the unpopular thing out loud.
 *
 * So: first person. An opinion, stated flat, before any explanation. Business
 * language, not therapy language - a board meeting, a simulator, the most
 * expensive project you have ever run. She mocks the incense-and-candles
 * version of couple games before anyone else can, because she agrees.
 * Named, concrete scenarios: the aunt who has to be invited, the magnet
 * photographer, who counts the cheques. Never an aphorism where a scene works.
 *
 * Her core argument, which most of these carousels are a version of:
 * the fights are already in your calendar. You just don't know the date yet.
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
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'דעה לא פופולרית:' },
        { layout: 'statement', headline: 'ללכת לראות אולם', subline: 'יום אחרי ההצעה — זו טעות' },
        { layout: 'statement', headline: 'אתם עומדים לחתום', subline: 'על חוזה של מאות אלפי שקלים' },
        { layout: 'statement', headline: 'ועוד לא סיכמתם', subline: 'איזה וייב אתם בכלל רוצים' },
        { layout: 'statement', headline: 'קודם תיאום ציפיות', subline: 'אחר כך אולם' },
        { layout: 'dark', headline: 'בסדר הזה. לא הפוך.', subline: 'אני אומרת את זה כמפיקה, לא כיועצת זוגית', cta: 'לינק בביו' },
      ],
      caption:
        'שנייה לפני שאתם רצים לחתום — תעצרו.\n\n' +
        'ראיתי יותר מדי זוגות שסגרו אולם בהתלהבות של השבוע הראשון, ואז גילו ' +
        'תוך חודש שאחד מהם דמיין 400 איש בגן אירועים והשנייה דמיינה 80 בחצר.\n\n' +
        'אי אפשר להחזיר מקדמה. אפשר לדבר לפני.\n\n' +
        'תעשו תיאום ציפיות, ורק אז תסגרו אולם. הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'המריבות שלכם', subline: 'כבר קבועות ביומן' },
        { layout: 'statement', headline: 'אתם פשוט', subline: 'עוד לא יודעים את התאריך' },
        { layout: 'statement', headline: 'הדודה שחייבת לקבל הזמנה' },
        { layout: 'statement', headline: 'הוא חושב שצלם מגנטים מיותר', subline: 'היא לא יכולה בלעדיו' },
        { layout: 'statement', headline: 'זה יקרה', subline: 'השאלה היחידה היא מתי' },
        { layout: 'dark', headline: 'אז תקדימו את זה', subline: 'מול הספה, עם יין, כשהאגו נשאר בחוץ', cta: 'לינק בביו' },
      ],
      caption:
        'אני אשכרה מכריחה זוגות לריב בכוונה חודשיים לפני החתונה. ' +
        'וכן, אני יודעת איך זה נשמע.\n\n' +
        'אבל המריבה על הדודה תקרה. המריבה על המגנטים תקרה. ' +
        'הן לא שאלה של אם — הן שאלה של מתי, ובאיזה מצב רוח תהיו כשזה יקרה.\n\n' +
        'המשחק נותן לכם להקדים אותן לזמן שנוח לכם. מול הספה, עם יין, דרך קלפים — ' +
        'שזה אומר שהאגו נשאר בחוץ.\n\n' +
        'תקדימו תרופה לאקסל המוזמנים. הלינק בביו.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'statement', headline: 'משחקי זוגיות זה קרינג׳', subline: 'כן, אמרתי את זה' },
        { layout: 'statement', headline: 'מה שאתם מדמיינים 🚩', subline: '״בוא נדליק קטורת ותספר לי איזה צבע משקף את הפחדים שלך״' },
        { layout: 'photo', photo: 'couple-cafe', headline: 'מה שזה באמת', subline: '״אם ספק עוקץ אותנו שבוע לפני — מי הופך לשוטר הרע?״' },
        { layout: 'statement', headline: 'יצרתי את זה', subline: 'כי להתחתן זה הפרויקט הכי יקר שעשיתם עד היום' },
        { layout: 'statement', headline: 'אתם לא צריכים שאלות רוחניקיות' },
        { layout: 'dark', headline: 'אתם צריכים סימולטור להפקת חתונה', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'מלא אומרים לי ״דני, משחקי זוגיות זה קרינג׳, אנחנו לא בקטע של לשבת ' +
        'ולבכות מול נרות״.\n\n' +
        'סליחה, אבל מי דיבר על לבכות?\n\n' +
        'Before I Do מתעסק בתכלס. איזה וייב אנחנו רוצים? איפה אנחנו שמים גבול ' +
        'להורים כשהם מתערבים? איך מחלקים את מטלות ההפקה כדי שאחד מאיתנו לא יקרוס?\n\n' +
        'זו לא ישיבת רגשות. זו פגישת הדירקטוריון הכי קריטית שתעשו לקראת הערב שלכם.\n\n' +
        '✦ 129 ₪ כולל משלוח | מחיר השקה עד 26.10\n' +
        `✦ הלינק בביו למאורסים פרקטיים  |  ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 2
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'מרגע ששמתם טבעת', subline: 'לכולם יש דעה על האירוע שלכם' },
        { layout: 'statement', headline: '4 גבולות', subline: 'שחייבים להציב לאנשים מבחוץ' },
        { layout: 'statement', headline: '1', subline: 'מי בא איתנו לראות אולם? (רמז: רק שנינו)' },
        { layout: 'statement', headline: '2', subline: 'עד איזה סכום לגיטימי לבקש מחברים על מסיבת רווקים/ות?' },
        { layout: 'statement', headline: '3', subline: 'מי סופר את הצ׳קים בסוף הערב ולוקח אותם הביתה?' },
        { layout: 'dark', headline: '4', subline: 'ומה עושים אם למלוות יש דעה על כל דבר?', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'לחברים, למלוות, לאחותו — לכולם פתאום יש דעה.\n\n' +
        'ואם אין לכם גבולות ברורים כזוג, אתם תמצאו את עצמכם רבים אחד עם השנייה ' +
        'בגלל אנשים מבחוץ. זה קורה בכל חתונה שהפקתי. בכל אחת.\n\n' +
        'ארבע השאלות האלה יחסכו לכם אי נעימויות עם האנשים שאתם הכי אוהבים. ' +
        'תענו עליהן הערב.\n\n' +
        'שמרו את הפוסט לפני השיחה הבאה 🔖',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'הפכתם למנהלי פרויקטים מצטיינים' },
        { layout: 'statement', headline: 'אתם מתואמים. יעילים.', subline: 'עומדים בלו״ז' },
        { layout: 'statement', headline: 'אבל מתי בפעם האחרונה', subline: 'פשוט דיברתם?' },
        { layout: 'statement', headline: 'לא על הבר', subline: 'לא על הרב' },
        { layout: 'dark', headline: 'עליכם', subline: 'בין בחירת המפיות לתיאומים עם הדי־ג׳יי, קל לשכוח למה התחלתם', cta: 'לינק בביו' },
      ],
      caption:
        'בתור מי שמפיקה חתונות, ראיתי את הפער הזה נפתח שוב ושוב.\n\n' +
        'ראיתי איך הלחץ משתלט על האינטימיות והופך את הדרך לחופה למירוץ ' +
        'שפשוט רוצים שיסתיים.\n\n' +
        'החלטתי שזה חייב להשתנות. הגיע הזמן להחזיר את הריגוש לשיחות שלכם, ' +
        'ולשים את הזוגיות בדיוק איפה שהיא צריכה להיות: לפני הכל.\n\n' +
        'Before I Do | The Intervention 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'dark', headline: 'מי הופך לשוטר הרע?' },
        { layout: 'statement', headline: 'ספק עוקץ אתכם', subline: 'שבוע לפני החתונה' },
        { layout: 'statement', headline: 'מישהו צריך להרים טלפון', subline: 'ולהיות לא נעים' },
        { layout: 'statement', headline: 'ומישהו הולך לעשות מדיטציה בצד' },
        { layout: 'statement', headline: 'אם לא סיכמתם מי מי', subline: 'תגלו את זה באמצע המשבר' },
        { layout: 'dark', headline: 'זו לא שאלה רגשית', subline: 'זו חלוקת תפקידים. תעשו אותה עכשיו.', cta: 'לינק בביו' },
      ],
      caption:
        'בכל חתונה יש רגע אחד שבו משהו מתפוצץ. ספק שנעלם, מחיר שקפץ, ' +
        'משהו שלא הגיע.\n\n' +
        'הזוגות שעוברים את זה בקלות הם לא אלה שהיה להם מזל. הם אלה שידעו מראש ' +
        'מי מרים את הטלפון ומי לא מתערב.\n\n' +
        'תחליטו עכשיו, כשאתם רגועים. לא אז.',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 3
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'איך לא לקרוס', subline: 'עד החתונה' },
        { layout: 'statement', headline: 'תחלקו מטלות הפקה', subline: 'כמו שמחלקים בפרויקט' },
        { layout: 'statement', headline: 'מוזיקה · אוכל · עיצוב', subline: 'אורחים · כסף · לו״ז' },
        { layout: 'statement', headline: 'על כל תחום — מי בעל.ת הבית', subline: 'ומי לא מתערב.ת' },
        { layout: 'statement', headline: 'החלק הקשה הוא לא לחלק' },
        { layout: 'dark', headline: 'החלק הקשה הוא לא להתערב', subline: 'אחרי שחילקתם', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'הטעות הכי נפוצה: לחלק מטלות, ואז לבדוק אחד את השנייה על כל אחת מהן.\n\n' +
        'זה לא חלוקה. זה ויכוח עם שלב נוסף.\n\n' +
        'אם מישהו אחראי — שיהיה אחראי. גם אם היה בוחר אחרת ממך.\n\n' +
        'מי אצלכם על מה? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'כלות אומרות לי:' },
        { layout: 'statement', headline: '״דני, עזבי אותי משאלות חופרות״', subline: '״בא לי רק את הפאן והטעימות״' },
        { layout: 'statement', headline: 'ואני מבינה. באמת.' },
        { layout: 'statement', headline: 'אבל הטעימות זה 90 דקות', subline: 'והתכנון זה תשעה חודשים' },
        { layout: 'dark', headline: 'ערב אחד של שאלות חופרות', subline: 'קונה לכם את תשעת החודשים האלה', cta: 'לינק בביו' },
      ],
      caption:
        'אני לא מנסה לקלקל לכם את הכיף. אני מנסה להגן עליו.\n\n' +
        'הטעימות, הניסיון של השמלה, הפגישה עם הדי־ג׳יי — אלה הרגעים הכיפיים. ' +
        'והם נהרסים בדיוק כשיש מתח לא פתור ברקע.\n\n' +
        'תסגרו את החופר. תישארו עם הפאן. 🙂',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'box-table', headline: 'זו לא ישיבת רגשות' },
        { layout: 'statement', headline: 'זו פגישת הנהלה' },
        { layout: 'statement', headline: 'של הסטארט־אפ הזה', subline: 'שנקרא ״הערב שלכם״' },
        { layout: 'statement', headline: '70 שאלות · 6 קטגוריות', subline: 'הבסיס · בחופה · אחרי · שאלות פתוחות · חס וחלילה · מיוחדים' },
        { layout: 'statement', headline: 'ואם שאלה קשה מדי', subline: 'יש וטו. פעם אחת, לכל אחד.' },
        { layout: 'dark', headline: 'ערב אחד. וזה מאחוריכם.', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'אין ניקוד, אין מנצח, ואף אחד לא צריך לשתף ברגשות העמוקים שלו.\n\n' +
        'שולפים קלף, עונים, עוברים לבא. במקום שאלה אחת קשה מדי — יש וטו.\n\n' +
        'הפורמט הוא משחק רק כי ככה אתם באמת מתיישבים לזה. אף אחד לא מתיישב ' +
        'ל״בואו נדבר על החתונה״.\n\n' +
        '✦ 129 ₪ כולל משלוח | עד 26.10, אחר כך 189 ₪ + משלוח\n' +
        `✦ ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 4
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'מסיבת רווקות', subline: 'שיוצאת מפרופורציה' },
        { layout: 'statement', headline: 'זה מתחיל בכיף' },
        { layout: 'statement', headline: 'ונגמר בקבוצת וואטסאפ', subline: 'שבה מישהי לא יכולה לעמוד בסכום' },
        { layout: 'statement', headline: 'תחליטו מראש', subline: 'עד איזה סכום לגיטימי לבקש' },
        { layout: 'dark', headline: 'ותגידו את זה למלוות', subline: 'לפני שהן מזמינות וילה', cta: 'תייגו מלווה 👇' },
      ],
      caption:
        'אף אחת לא מתכוונת לשים חברה במצב לא נעים. זה פשוט מה שקורה ' +
        'כשאין מספר על השולחן.\n\n' +
        'תגידו את המספר. מראש. לפני שמישהי כבר שילמה מקדמה.\n\n' +
        'תייגו את המלווה שצריכה לראות את זה 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'להתחתן זה לא', subline: 'ערב יום רביעי ביוני' },
        { layout: 'statement', headline: 'זה כל מה שקורה עד אז' },
        { layout: 'statement', headline: 'ההחלטות' },
        { layout: 'statement', headline: 'החתימה על חוזים ביחד' },
        { layout: 'statement', headline: 'ההתמודדות מול ההורים' },
        { layout: 'dark', headline: 'זה הפרויקט. הערב הוא רק ההשקה.', cta: 'לינק בביו' },
      ],
      caption:
        'משפט שאני תמיד אומרת: להתחתן זה לא רק ערב יום רביעי ביוני.\n\n' +
        'כל מה שקורה עד אז — זה מה שבונה אתכם כזוג. ההחלטות תחת לחץ, ' +
        'החתימות, הפעם הראשונה שעמדתם ביחד מול ההורים.\n\n' +
        'Before I Do נועד כדי שלפחות פעם אחת בשבוע, תשימו את הסטרס בצד ' +
        'ותדברו על הפנטזיה. לא על התקציב — על הערב שלכם.\n\n' +
        'אל תשכחו את עצמכם בתוך הארגונים. הקופסה מחכה לכם בביו. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'social_proof',
      slides: [
        { layout: 'statement', headline: 'זוג אמר לי:' },
        { layout: 'statement', headline: '״ישבנו לשעה״' },
        { layout: 'statement', headline: '״יצאנו עם שלוש החלטות״' },
        { layout: 'statement', headline: '״ועם ויכוח אחד״', subline: 'שהיה חייב לקרות' },
        { layout: 'dark', headline: 'זה בדיוק התפקיד', subline: 'לא להעלים ויכוחים — להביא אותם כשהם עוד זולים', cta: 'תייגו זוג 👇' },
      ],
      caption:
        'הוויכוח הזה היה קורה בכל מקרה. השאלה היחידה הייתה אם הוא יקרה בסלון ' +
        'עם יין, או בשלוש לפנות בוקר שבוע לפני.\n\n' +
        'מכירים זוג שצריך את הערב הזה? תייגו אותם 👇',
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 5
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'מי סופר את הצ׳קים?' },
        { layout: 'statement', headline: 'שאלה משעממת' },
        { layout: 'statement', headline: 'שגורמת לכי הרבה פאדיחות', subline: 'בסוף הערב' },
        { layout: 'statement', headline: 'מי אוסף · מי סופר', subline: 'מי לוקח הביתה · מתי מפקידים' },
        { layout: 'dark', headline: 'ארבע דקות עכשיו', subline: 'במקום שיחה מביכה מול המשפחה אז', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'אני יודעת שזה לא הנושא הכי רומנטי שתדברו עליו השבוע.\n\n' +
        'אבל ראיתי מספיק סופי ערב שבהם אף אחד לא ידע מי אחראי על המעטפות, ' +
        'והסוף תמיד היה אותו סוף: מישהו נעלב.\n\n' +
        'תסגרו את זה עכשיו. תודו לי בעוד חצי שנה 🔖',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'ההורים לא מתערבים בגלל שהם רוצים לשלוט' },
        { layout: 'statement', headline: 'הם מתערבים כי הם רוצים להיות חלק' },
        { layout: 'statement', headline: 'ואין להם איפה' },
        { layout: 'statement', headline: 'תנו לכל צד תפקיד אחד', subline: 'קונקרטי, שהוא באמת אחראי עליו' },
        { layout: 'dark', headline: 'תפקיד מכבד. דעה מעצבנת.', subline: 'אתם בוחרים מה לתת', cta: 'לינק בביו' },
      ],
      caption:
        'זה אחד הדברים הכי פשוטים שאני ממליצה עליהם, והוא עובד כמעט תמיד.\n\n' +
        'הורה עם תפקיד מוגדר מפסיק להעיר על כל דבר, כי יש לו איפה להשקיע את זה.\n\n' +
        'תנסו. תראו מה קורה תוך שבוע.',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'box-sushi', headline: 'מחפשים מתנה לזוג מאורס?' },
        { layout: 'statement', headline: 'סט סכינים הם כבר קיבלו' },
        { layout: 'statement', headline: 'שלושה', subline: 'וכולם שלחו את אותו לינק' },
        { layout: 'statement', headline: 'תנו להם ערב', subline: 'שהם יזכרו הרבה אחרי שהחתונה נגמרה' },
        { layout: 'statement', headline: 'מגיע בקופסה קשיחה', subline: 'לא צריך לעטוף' },
        { layout: 'dark', headline: 'והם יזכרו מי נתן', badge: '₪129 כולל משלוח', cta: LINK },
      ],
      caption:
        'זו המתנה שזוגות מספרים עליה אחרי החתונה, לא בזמן פתיחת המעטפות.\n\n' +
        'מגיע בקופסה קשיחה עם משלוח עד הבית — אפשר גם לשלוח ישירות אליהם.\n\n' +
        '✦ 129 ₪ כולל משלוח | מחיר השקה עד 26.10\n\n' +
        `הלינק בביו 👆  |  ${LINK}`,
      hashtags: `${TAGS_CORE} ${TAGS_GIFT}`,
    },

    // ================================================================ day 6
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'סטורי טיים' },
        { layout: 'statement', headline: 'זוג שהפקתי להם חתונה', subline: 'רב על מספר המוזמנים שבועיים לפני' },
        { layout: 'statement', headline: 'התברר שהם לא רבו על המספר' },
        { layout: 'statement', headline: 'הוא הרגיש שהמשפחה שלה', subline: 'בולעת את הערב' },
        { layout: 'statement', headline: 'היא בכלל לא ידעה', subline: 'שזה מה שהוא מרגיש' },
        { layout: 'dark', headline: 'שתי דקות של שיחה נכונה', subline: 'במקום שבועיים של מתח', cta: 'לינק בביו' },
      ],
      caption:
        'הוויכוח על מספר המוזמנים הוא אף פעם לא על מספר המוזמנים.\n\n' +
        'נסו את זה בוויכוח הבא: לעצור ולשאול ״על מה אנחנו באמת מדברים עכשיו?״ ' +
        'התשובה כמעט אף פעם לא מה שכתוב על השולחן.\n\n' +
        'זה עבד לכם פעם? ספרו 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'statement', headline: 'כתוב לנו על החפיסה' },
        { layout: 'statement', headline: 'אין תשובות נכונות' },
        { layout: 'statement', headline: 'יש רק שיחות טובות' },
        { layout: 'statement', headline: 'כי אני לא מנסה שתסכימו על הכול', subline: 'אני מנסה שתדעו איפה לא — בזמן שזה עוד קל' },
        { layout: 'dark', headline: 'רגע מאושר שישאר לנצח', cta: 'לינק בביו' },
      ],
      caption: 'זה כל הרעיון, בשורה אחת. 💙',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'הרשימה שלכם קצרה' },
        { layout: 'statement', headline: 'אז למה אתם מרגישים מוצפים?' },
        { layout: 'statement', headline: 'כי הלחץ לא מגיע מהמשימות' },
        { layout: 'statement', headline: 'הוא מגיע מהדברים', subline: 'שעוד לא סגורים בראש' },
        { layout: 'dark', headline: 'תסגרו שלושה גדולים השבוע', subline: 'ותראו איך הקטנים נהיים כיפיים', cta: 'לינק בביו' },
      ],
      caption:
        'אם הכול לכאורה בשליטה ואתם עדיין מרגישים כבדים — זה לא אתם. ' +
        'זה הפער בין מה שסגור ברשימה לבין מה שסגור בראש.\n\n' +
        'תסמנו שלושה גדולים. תסגרו אותם השבוע. ✨',
      hashtags: TAGS_CORE,
    },

    // ================================================================ day 7
    {
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'החתונה נכנסה לכם לכל שיחה' },
        { layout: 'statement', headline: 'גם בארוחת ערב', subline: 'גם בנסיעה. גם בשתיים בלילה.' },
        { layout: 'statement', headline: 'תקבעו לה ערב' },
        { layout: 'statement', headline: 'חצי שעה. בלוח.', subline: 'כמו פגישה, כי זו פגישה' },
        { layout: 'statement', headline: 'נושא אחד בכל פעם', subline: 'לא ״בואו נתכנן חתונה״' },
        { layout: 'dark', headline: 'ערב אחד מחזיר לכם', subline: 'את כל שאר הימים בשבוע', cta: 'שמרו את זה 🔖' },
      ],
      caption:
        'הדבר הכי מתיש בתכנון הוא לא העבודה. זה שהוא נמצא בכל מקום, כל הזמן.\n\n' +
        'ערב קבוע פותר את זה כמעט לגמרי, כי פתאום יש לזה מקום — ולכל שאר ' +
        'השעות בשבוע יש שקט.\n\n' +
        'מי כבר עושה את זה? 👇',
      hashtags: TAGS_CORE,
    },
    {
      pillar: 'pain',
      slides: [
        { layout: 'statement', headline: 'שאלתי זוגות נשואים' },
        { layout: 'dilemma', dilemma: ['חתונה שאתם זוכרים', 'חתונה שאתם מתאוששים ממנה'] },
        { layout: 'statement', headline: 'ההבדל ביניהן' },
        { layout: 'statement', headline: 'הוא לא כמה הוצאתם', subline: 'הוא כמה דיברתם לפני' },
        { layout: 'dark', headline: 'ואת זה אפשר לסדר', subline: 'בערב אחד', cta: 'לינק בביו' },
      ],
      caption:
        'התשובה הזאת חזרה על עצמה כל כך הרבה פעמים שהפסקתי להיות מופתעת.\n\n' +
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
    { pillar: 'identity', layout: 'statement', headline: 'דעה לא פופולרית:', subline: 'אולם לפני תיאום ציפיות זו טעות', cta: 'לינק בביו' },
    { pillar: 'sell',     layout: 'photo',     photo: 'couple-cafe', headline: 'פגישת הנהלה', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'אין תשובות נכונות', subline: 'יש רק שיחות טובות' },
    { pillar: 'value',    layout: 'statement', headline: 'עד איזה סכום לגיטימי', subline: 'לבקש מחברים על מסיבת רווקות?', poll: true, manual: true },
    { pillar: 'pain',     layout: 'dark',      headline: 'מי סופר את הצ׳קים בסוף הערב?', subline: 'שאלה משעממת שמצילה פאדיחות' },
    { pillar: 'value',    layout: 'statement', headline: 'מי בא איתכם לראות אולם?', subline: 'רמז: רק שניכם', cta: 'לינק בביו' },
    { pillar: 'pain',     layout: 'dilemma',   dilemma: ['לרצות את כולם', 'לרצות אחד את השני'], poll: true, manual: true },
    { pillar: 'identity', layout: 'statement', headline: 'זו לא ישיבת רגשות', subline: 'זו פגישת הנהלה' },
    { pillar: 'sell',     layout: 'photo',     photo: 'box-sushi', headline: 'מתנה לזוג מאורס', subline: 'שהם יזכרו מי נתן', cta: 'לינק בביו', manual: true },
    { pillar: 'pain',     layout: 'statement', headline: '״עזבי אותי משאלות חופרות״', subline: 'אני מבינה. באמת.' },
    { pillar: 'pain',     layout: 'dark',      headline: 'המריבות שלכם כבר ביומן', subline: 'אתם פשוט לא יודעים את התאריך' },
    { pillar: 'value',    layout: 'statement', headline: 'תנו להורים תפקיד', subline: 'אחרת הם ייתנו דעה' },
    { pillar: 'sell',     layout: 'dark',      headline: 'נשארו פחות מ-5 שבועות', subline: '₪129 כולל משלוח, עד 26.10', cta: 'לינק בביו', manual: true },
  ],
};
