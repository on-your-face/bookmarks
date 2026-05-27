export function preloadModals() {
   document.addEventListener('DOMContentLoaded', () => {
      const modals = document.querySelectorAll('.modal');

      modals.forEach((modal) => {
         // Предзагрузка изображений
         modal.querySelectorAll('img').forEach((img) => {
            const src = img.getAttribute('src');
            if (src) {
               const preloadedImg = new Image();
               preloadedImg.src = src;
            }
         });

         // НЕ ставим display: none здесь!
         // let modalVisible = getComputedStyle(modal).display;
         // modal.style.display = 'none';  <-- это ломает initModal()
      });
   });
}
