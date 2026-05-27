export function initCopySmall() {
   document.querySelectorAll('a.copy').forEach((link) => {
      link.addEventListener('click', (event) => {
         event.preventDefault();
         event.stopPropagation();

         // убираем хэш из URL
         history.pushState('', document.title, window.location.pathname + window.location.search);

         const href = link.getAttribute('href');
         if (!href) return;

         navigator.clipboard.writeText(href).catch(() => {});
      });
   });
}
