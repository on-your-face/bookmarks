export function initYandexTime() {
   const clocks = document.querySelectorAll('#yandexTimeClock');

   clocks.forEach((svg) => {
      const tz = svg.getAttribute('tz') || 'UTC';

      const hourHand = svg.querySelector('#hourHand');
      const minuteHand = svg.querySelector('#minuteHand');
      const secondHand = svg.querySelector('#secondHand');

      function getTimeParts(now) {
         const fmt = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3,
            hour12: false,
            timeZone: tz,
         }).formatToParts(now);

         const get = (t) => +fmt.find((x) => x.type === t).value;

         return {
            h: get('hour'),
            m: get('minute'),
            s: get('second'),
            ms: get('fractionalSecond'),
         };
      }

      function tick() {
         const now = new Date();
         const { h, m, s, ms } = getTimeParts(now);

         const sec = s + ms / 1000;
         const min = m + sec / 60;
         const hr = (h % 12) + min / 60;

         const secA = sec * 6;
         const minA = min * 6;
         const hourA = hr * 30;

         secondHand.setAttribute('transform', `translate(25 25) rotate(${secA})`);
         minuteHand.setAttribute('transform', `translate(25 25) rotate(${minA})`);
         hourHand.setAttribute('transform', `translate(25 25) rotate(${hourA})`);

         requestAnimationFrame(tick);
      }

      tick();
   });
}
