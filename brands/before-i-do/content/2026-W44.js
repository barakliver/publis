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
  week: '2026-W44',
  posts: [
    { // יום 52
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'לא כל החלטה בחתונה צריכה פגישה של שניכם' },
        { layout: 'statement', headline: 'בחרו מה חשוב לשניכם' },
        { layout: 'statement', headline: 'חלקו תחומי אחריות' },
        { layout: 'statement', headline: 'קבעו סכום שמעליו מתייעצים' },
        { layout: 'statement', headline: 'אל תבקשו אישור על כל פרט' },
        { layout: 'statement', headline: 'כן תעדכנו בהחלטות שמשפיעות על שניכם' },
        { layout: 'statement', headline: 'השאירו זמן שבו לא מדברים חתונה' },
        { layout: 'dark', headline: 'שמרו לחלוקת משימות' },
      ],
      caption: 'חלוקת אחריות חוסכת עשרות החלטות קטנות.',
      hashtags: '',
    },
    { // יום 59
      pillar: 'value',
      slides: [
        { layout: 'statement', headline: 'אם הכול מרגיש חשוב, הנה דרך לבחור מה באמת חשוב לכם' },
        { layout: 'statement', headline: 'כל אחד כותב 3 דברים שחייבים להיות טובים' },
        { layout: 'statement', headline: 'כל אחד כותב 3 דברים שפחות אכפת לו מהם' },
        { layout: 'statement', headline: 'משווים' },
        { layout: 'statement', headline: 'מסמנים חפיפות' },
        { layout: 'statement', headline: 'מחלקים את התקציב לפי סדר העדיפויות' },
        { layout: 'statement', headline: 'חוזרים לרשימה לפני כל הוצאה גדולה' },
        { layout: 'dark', headline: 'שמרו לפגישת התקציב' },
      ],
      caption: 'לא צריך לתת לכל סעיף אותו משקל.',
      hashtags: '',
    },
  ],
  stories: [],
};
