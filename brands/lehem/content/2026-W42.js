/**
 * Content for round 2026-W42 - לחם.
 *
 * Six story sequences, one per open day, each following the client's own
 * four-frame structure: hook, process, close-up, call to action. Plus the
 * feed posts in her feed format.
 *
 * The rota drives the week. Which loaf is out today is the only thing that
 * makes anticipation real, so each day's sequence is built around it:
 *   ראשון · שלישי · חמישי  קלמטה + אגוזים
 *   שני   · רביעי          בבילה + כוסמין חלק
 *   שישי                   all four
 *
 * Written like a host letting friends into the living room. Short lines,
 * air between them, because stories are read while skimming.
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
        { layout: 'photo', photo: 'spread-plates', align: 'top', headline: 'שלושה דורות' },
      ],
      caption:
        'רן פתח את המקום. סבא, בן 85, אופה את הפוקצ׳ות מאחורי הקלעים ומכין את הריבה.\n\n' +
        'סבתא אורזת ומושיבה, ודני חזרה מצרפת עם הטכניקות ונכנסה למטבח.\n\n' +
        WHERE + ' 🌿',
      hashtags: '',
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'photo', photo: 'quiche-rings', zoom: 2.4, ink: 'dark', headline: 'קמח, מים, זמן' },
      ],
      caption:
        'שלושה מרכיבים, והשלישי הוא הארוך שבהם.\n\n' +
        'תפיחה איטית, בלי סוכר ובלי חומרים משמרים. זה מה שנותן את הקרום שנשבר ביד.\n\n' +
        WHERE + ' 🌾',
      hashtags: '',
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'photo', photo: 'brioche-plate', align: 'top', headline: 'קיפול, קירור, קיפול' },
      ],
      caption:
        'דני הביאה את הטכניקה מהסטאז׳ בצרפת, והבצקים כאן נכרכים ביד בכל בוקר.\n\n' +
        'פאן סוויס, מריטוצו, בריוש, סינבון. השכבות שאתם שומעים בביס — זה מה שהן.\n\n' +
        WHERE + ' 🥐',
      hashtags: '',
    },
    {
      pillar: 'identity',
      slides: [
        { layout: 'product', headline: 'הריבה של סבא' },
      ],
      caption:
        'אותה מתכונת, אותן ידיים, כבר שנים.\n\n' +
        'היא מגיעה עם ארוחת הבוקר לצד גרנולה שאנחנו מכינים כאן — ויש אנשים שחוזרים בשבילה.\n\n' +
        WHERE + ' ☕',
      hashtags: '',
    },
    {
      pillar: 'value',
      slides: [
        { layout: 'product', dark: true, headline: 'בצק פסטה, טרי' },
      ],
      caption:
        'נפתח כאן, נמכר כאן.\n\n' +
        'לאכול במקום או לקחת הביתה עם הרטבים שלנו — ולסיים את הערב בלי לחשוב מה מבשלים.\n\n' +
        WHERE,
      hashtags: '',
    },
    {
      pillar: 'sell',
      slides: [
        { layout: 'photo', photo: 'cookies-three', align: 'top', headline: 'שישי' },
      ],
      caption:
        'ביום שישי יוצאים כל ארבעת הלחמים. בבילה, קלמטה, כוסמין חלק וכוסמין אגוזים.\n\n' +
        'זה היום היחיד בשבוע שבו כולם כאן יחד, והוא גם היום שבו נגמר הכי מהר.\n\n' +
        WHERE + ' 🌾',
      hashtags: '',
    },
  ],

  // ---------------------------------------------------------- the sequences
  stories: [
    { // ראשון — קלמטה ואגוזים
      day: 'ראשון',
      pillar: 'value',
      slides: [
        { layout: 'product', hand: true, headline: 'ריח של אגוזים קלויים' },
        { layout: 'photo', photo: 'spread-plates', align: 'top', headline: 'הם נכנסים לבצק ביד' },
        { layout: 'photo', photo: 'quiche-rings', zoom: 2.2, ink: 'dark',
          headline: 'כוסמין מלא', subline: 'בלי סוכר. בלי קיצורים.' },
        { layout: 'product', dark: true, headline: 'היום ומחרתיים', subline: 'אחר כך שוב בשלישי' },
      ],
    },
    { // שני — הבבילה חוזר
      day: 'שני',
      pillar: 'value',
      slides: [
        { layout: 'product', hand: true, headline: 'היום יום שני' },
        { layout: 'product', dark: true, headline: 'וזה אומר שהבבילה חזר' },
        { layout: 'photo', photo: 'quiche-rings', zoom: 2.4, ink: 'dark',
          headline: 'עגבניות מיובשות, קלמטה', subline: 'קרום שנשבר ביד' },
        { layout: 'product', headline: 'תייגו את מי ששומר לכם אחד' },
      ],
    },
    { // שלישי — סבא והריבה
      day: 'שלישי',
      pillar: 'identity',
      slides: [
        { layout: 'product', hand: true, headline: 'סבא מערבב מאז שש' },
        { layout: 'photo', photo: 'spread-plates', align: 'top',
          headline: 'הריבה שלו', subline: 'אותה מתכונת. אותן ידיים.' },
        { layout: 'photo', photo: 'brioche-plate', align: 'top',
          headline: 'מגיעה עם ארוחת הבוקר', subline: 'לצד גרנולה שאנחנו מכינים כאן' },
        { layout: 'product', dark: true, headline: 'תייגו את מי שחייב לטעום' },
      ],
    },
    { // רביעי — דני והבצקים
      day: 'רביעי',
      pillar: 'value',
      slides: [
        { layout: 'product', hand: true, headline: 'קיפול, קירור, קיפול' },
        { layout: 'product', dark: true, headline: 'דני הביאה את זה מצרפת' },
        { layout: 'photo', photo: 'cinnamon-hands', align: 'top',
          headline: 'פאן סוויס · מריטוצו · סינבון', subline: 'נכרכים ביד, כל בוקר' },
        { layout: 'product', headline: 'בואו מוקדם', subline: 'הם נגמרים' },
      ],
    },
    { // חמישי — הפסטה
      day: 'חמישי',
      pillar: 'value',
      slides: [
        { layout: 'product', hand: true, headline: 'הבצק נפתח' },
        { layout: 'photo', photo: 'brioche-plate', align: 'top',
          headline: 'פסטה טרייה, כאן', subline: 'עם הרטבים שלנו' },
        { layout: 'photo', photo: 'cookies-three', align: 'top',
          headline: 'לאכול במקום', subline: 'או לקחת הביתה' },
        { layout: 'product', dark: true, headline: 'שלחו לחברה', subline: 'שחייבת להזמין אתכם' },
      ],
    },
    { // שישי — כל הארבעה
      day: 'שישי',
      pillar: 'sell',
      slides: [
        { layout: 'product', hand: true, headline: 'שישי' },
        { layout: 'product', dark: true, headline: 'ארבעת הלחמים', subline: 'כולם. רק היום.' },
        { layout: 'photo', photo: 'quiche-rings', zoom: 2.2, ink: 'dark',
          headline: 'בבילה · קלמטה · כוסמין · אגוזים' },
        { layout: 'product', headline: 'הזמינו מראש', subline: 'שישי נגמר מהר' },
      ],
    },
  ],
};
