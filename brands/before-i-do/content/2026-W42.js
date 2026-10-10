/**
 * Before I Do - the nine carousels from the client's 60-day content system.
 *
 * Transcribed from `content/system-60day.json`, which is her own file. The
 * slide text, the captions and the calls to action are hers verbatim - this
 * round invents nothing. Each carousel opens on its title, runs one point per
 * slide, and closes on the ask.
 *
 * The remaining two of the nine.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

module.exports = {
  week: '2026-W42',
  posts: [
    { // יום 52
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: 'לא כל החלטה בחתונה צריכה פגישה של שניכם' },
        { layout: 'editorial', headline: 'בחרו מה חשוב לשניכם' },
        { layout: 'editorial', headline: 'חלקו תחומי אחריות' },
        { layout: 'editorial', headline: 'קבעו סכום שמעליו מתייעצים' },
        { layout: 'editorial', headline: 'אל תבקשו אישור על כל פרט' },
        { layout: 'editorial', headline: 'כן תעדכנו בהחלטות שמשפיעות על שניכם' },
        { layout: 'editorial', headline: 'השאירו זמן שבו לא מדברים חתונה' },
        { layout: 'editorial', dark: true, headline: 'שמרו לחלוקת משימות' },
      ],
      caption: 'חלוקת אחריות חוסכת עשרות החלטות קטנות.',
      hashtags: '',
    },
    { // יום 59
      pillar: 'value',
      slides: [
        { layout: 'editorial', headline: 'אם הכול מרגיש חשוב, הנה דרך לבחור מה באמת חשוב לכם' },
        { layout: 'editorial', headline: 'כל אחד כותב 3 דברים שחייבים להיות טובים' },
        { layout: 'editorial', headline: 'כל אחד כותב 3 דברים שפחות אכפת לו מהם' },
        { layout: 'editorial', headline: 'משווים' },
        { layout: 'editorial', headline: 'מסמנים חפיפות' },
        { layout: 'editorial', headline: 'מחלקים את התקציב לפי סדר העדיפויות' },
        { layout: 'editorial', headline: 'חוזרים לרשימה לפני כל הוצאה גדולה' },
        { layout: 'editorial', dark: true, headline: 'שמרו לפגישת התקציב' },
      ],
      caption: 'לא צריך לתת לכל סעיף אותו משקל.',
      hashtags: '',
    },
  ],
  stories: [],
};
