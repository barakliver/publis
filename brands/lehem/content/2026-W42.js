/**
 * Content for round 2026-W42 - לחם.
 *
 * Written to the client's own brief, which is now config under `persona` in
 * brand.yaml. It replaces everything I had invented before.
 *
 *   feed    2-4 sentences. a strong opening tied to the picture, then process
 *           or atmosphere, then the fixed close. 1-3 gentle emoji at most.
 *   story   1-4 words over a photograph of the making. flour, hands, dough.
 *
 * Sensory, not salesy: the crunch of the first bite, the sound of a crust
 * being cut, the steam off the oven, the quiet green corner inside.
 *
 * pillar: pain | value | identity | social_proof | sell
 */

const WHERE = 'האתרוג 25, גבעת שמואל';

module.exports = {
  week: '2026-W42',
  posts: [
    {
      pillar: 'identity',
      slides: [
        { layout: 'photo', photo: 'quiche-rings', zoom: 2.4, ink: 'dark',
          headline: 'קמח, מים, זמן' },
      ],
      caption:
        'שלושה מרכיבים, והשלישי הוא הארוך שבהם.\n\n' +
        'ההתפחה לוקחת את כל הלילה. בלי סוכר, בלי חומרים משמרים, ובלי שום דרך לקצר אותה.\n\n' +
        WHERE + ' 🌾',
      hashtags: '',
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'photo', photo: 'brioche-plate', align: 'top',
          headline: 'קיפולי בוקר' },
      ],
      caption:
        'כל מאפה מדופדף כאן מקופל ביד, מוקדם.\n\n' +
        'החמאה נכנסת קרה, הבצק נח, וחוזר חלילה — וזה מה שאתם שומעים בביס הראשון.\n\n' +
        WHERE + ' 🥐',
      hashtags: '',
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'photo', photo: 'cinnamon-hands', align: 'top',
          headline: 'סינבון, עוד חם' },
      ],
      caption:
        'הזיגוג עדיין נוזלי כשהוא יוצא.\n\n' +
        'כעשרים דקות אחר כך הוא מתייצב, והמאפה כבר אחר. שניהם טובים — פשוט לא אותו דבר.\n\n' +
        WHERE,
      hashtags: '',
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'product', headline: 'לשבת רגע' },
      ],
      caption:
        'יש בפנים פינה ירוקה ושקטה, גם כשבחוץ פחות.\n\n' +
        'קפה, מאפה, ועשרים דקות לפני שהיום מתחיל באמת.\n\n' +
        WHERE + ' ☕',
      hashtags: '',
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'product', dark: true, headline: 'הקרום' },
      ],
      caption:
        'כשחותכים כיכר טרייה — שומעים אותה.\n\n' +
        'הקרום הזה נוצר מהתפחה ארוכה ומחום גבוה, לא מתוסף. כוסמין, חיטה מלאה ושיפון, כל אחד עם הצליל שלו.\n\n' +
        WHERE + ' 🌾',
      hashtags: '',
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'cookies-three', align: 'top',
          headline: 'שלוש עוגיות' },
      ],
      caption:
        'פיסטוק, שוקולד, רד ולווט.\n\n' +
        'נאפות בבוקר ובדרך כלל נגמרות עד הצהריים.\n\n' +
        WHERE,
      hashtags: '',
    },
  ],

  stories: [
    { pillar: 'value',    layout: 'photo', photo: 'spread-plates', align: 'top', hand: true,
      headline: 'התנור הראשון בחוץ' },
    { pillar: 'identity', layout: 'product', hand: true,
      headline: 'רק קמח, מים וזמן' },
    { pillar: 'value',    layout: 'photo', photo: 'cinnamon-hands-wide', align: 'top', hand: true,
      headline: 'עוד חם' },
    { pillar: 'identity', layout: 'product', dark: true, hand: true,
      headline: 'קיפולי בוקר' },
    { pillar: 'value',    layout: 'photo', photo: 'quiche-rings', zoom: 2.2, ink: 'dark', hand: true,
      headline: 'יצא עכשיו' },
    { pillar: 'identity', layout: 'product', hand: true,
      headline: 'שקט, שמונה בבוקר' },
  ],
};
