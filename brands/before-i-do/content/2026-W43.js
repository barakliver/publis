/**
 * Before I Do - the nine carousels from the client's 60-day content system.
 *
 * Transcribed from `content/system-60day.json`, which is her own file. The
 * slide text, the captions and the calls to action are hers verbatim - this
 * round invents nothing. Each carousel opens on its title, runs one point per
 * slide, and closes on the ask.
 *
 * Seven of the nine - a week holds seven at one a day.
 *
 * The look is `editorial`: a photograph of two people doing something
 * ordinary where one exists, and the same line of thin centred type on cream
 * where one does not. Only the two slides carrying a `photo` have a picture -
 * the brand owns four photographs and two of them have the heart burned into
 * the top, where the template draws its own.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

module.exports = {
  week: '2026-W43',
  posts: [
    { // יום 3
      pillar: 'value',
      slides: [
        { layout: 'editorial', photo: 'couple-cards-bar', align: 'top', headline: '6 דברים ששניכם בטוחים שאתם מסכימים עליהם, עד שמתחילים לתכנן חתונה' },
        { layout: 'editorial', headline: 'כמה גדולה החתונה' },
        { layout: 'editorial', headline: 'כמה כסף הגיוני להוציא' },
        { layout: 'editorial', headline: 'כמה מקום נותנים להורים' },
        { layout: 'editorial', headline: 'מה נחשב מבחינתכם חובה' },
        { layout: 'editorial', headline: 'על מה שווה להתפשר' },
        { layout: 'editorial', headline: 'איזה חלק ביום הזה הוא בכלל בשבילכם' },
        { layout: 'editorial', dark: true, headline: 'שמרו לערב הבא שלכם' },
      ],
      caption: 'יש דברים שעדיף להבין ביניכם לפני שהספק שואל.',
      hashtags: '',
    },
    { // יום 10
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: 'משפטים תמימים שמתחילים ויכוח בתכנון חתונה' },
        { layout: 'editorial', headline: 'לי לא משנה' },
        { layout: 'editorial', headline: 'כמה כבר זה עולה' },
        { layout: 'editorial', headline: 'אמא שלי אמרה ש...' },
        { layout: 'editorial', headline: 'אבל כולם עושים ככה' },
        { layout: 'editorial', headline: 'זה רק עוד כמה מוזמנים' },
        { layout: 'editorial', headline: 'נדבר על זה אחר כך' },
        { layout: 'editorial', dark: true, headline: 'שלחו למי שאמר לי לא משנה' },
      ],
      caption: 'אם אמרתם אחד מהם השבוע, אתם בחברה טובה.',
      hashtags: '',
    },
    { // יום 17
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: '7 דברים שכדאי לדבר עליהם לפני שסוגרים אולם' },
        { layout: 'editorial', headline: 'מסגרת תקציב' },
        { layout: 'editorial', headline: 'כמות מוזמנים' },
        { layout: 'editorial', headline: 'אזור בארץ' },
        { layout: 'editorial', headline: 'יום בשבוע' },
        { layout: 'editorial', headline: 'מה חשוב באווירה' },
        { layout: 'editorial', headline: 'כמה מעורבות משפחתית נכנסת להחלטה' },
        { layout: 'editorial', headline: 'על מה לא מתפשרים' },
        { layout: 'editorial', dark: true, headline: 'שמרו לפני הסבב' },
      ],
      caption: 'סבב אולמות נהיה קל יותר כשאתם יודעים מה אתם מחפשים.',
      hashtags: '',
    },
    { // יום 24
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: 'כשהחתונה שלכם פוגשת את הציפיות של ההורים' },
        { layout: 'editorial', headline: 'מי משתתף בהחלטות' },
        { layout: 'editorial', headline: 'האם כסף נותן גם זכות החלטה' },
        { layout: 'editorial', headline: 'כמה מוזמנים כל צד מקבל' },
        { layout: 'editorial', headline: 'אילו מסורות חשובות למשפחה' },
        { layout: 'editorial', headline: 'איפה עובר הגבול שלכם' },
        { layout: 'editorial', headline: 'מה אומרים כשלא מסכימים' },
        { layout: 'editorial', dark: true, headline: 'שמרו לשיחה ביניכם' },
      ],
      caption: 'לא חייבים להסכים עם המשפחה על הכול. כן כדאי להסכים ביניכם.',
      hashtags: '',
    },
    { // יום 31
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: 'הוצאות שכל אחד מכם בטוח שהשני מסכים עליהן' },
        { layout: 'editorial', headline: 'צילום' },
        { layout: 'editorial', headline: 'עיצוב' },
        { layout: 'editorial', headline: 'אלכוהול' },
        { layout: 'editorial', headline: 'בגדים' },
        { layout: 'editorial', headline: 'אטרקציות' },
        { layout: 'editorial', headline: 'מתנות לאורחים' },
        { layout: 'editorial', dark: true, headline: 'שמרו לשיחת תקציב' },
      ],
      caption: 'אותו סכום מרגיש אחרת כשכל אחד נותן לו ערך אחר.',
      hashtags: '',
    },
    { // יום 38
      pillar: 'value',
      slides: [
        { layout: 'editorial', photo: 'box-table', headline: '5 דברים שלא צריך לשאול את האינסטגרם, צריך לשאול אחד את השנייה' },
        { layout: 'editorial', headline: 'כמה גדולה החתונה' },
        { layout: 'editorial', headline: 'כמה מוציאים' },
        { layout: 'editorial', headline: 'כמה מקום נותנים למשפחה' },
        { layout: 'editorial', headline: 'מה באמת חשוב ביום הזה' },
        { layout: 'editorial', headline: 'איפה מוכנים להתפשר' },
        { layout: 'editorial', dark: true, headline: 'שלחו לבן הזוג' },
      ],
      caption: 'לפני סקר לעוקבים, סקר בבית.',
      hashtags: '',
    },
    { // יום 45
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: 'לפני שאתם מעבירים עוד מקדמה, 6 דברים לבדוק ביניכם' },
        { layout: 'editorial', headline: 'שנינו רוצים את הספק הזה' },
        { layout: 'editorial', headline: 'המחיר נכנס למסגרת שקבענו' },
        { layout: 'editorial', headline: 'ברור לנו מה מקבלים' },
        { layout: 'editorial', headline: 'בדקנו מה תנאי הביטול' },
        { layout: 'editorial', headline: 'ההחלטה לא מגיעה מלחץ' },
        { layout: 'editorial', headline: 'ההוצאה מתאימה לסדר העדיפויות שלנו' },
        { layout: 'editorial', dark: true, headline: 'שמרו לפני הספק הבא' },
      ],
      caption: 'שתי דקות ביניכם לפני חתימה שוות הרבה.',
      hashtags: '',
    },
  ],
  stories: [],
};
