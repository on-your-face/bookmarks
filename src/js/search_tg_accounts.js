export function initSearch() {
   const toggle = document.getElementById('searchToggle');
   const inner = document.querySelector('.search__inner');
   const input = document.getElementById('search');

   if (!toggle || !inner || !input) return;

   // сохраняем исходный display блоков для поиска
   document.querySelectorAll('.tag.copy').forEach((block) => {
      const style = window.getComputedStyle(block).display;
      block.dataset.origDisplay = style !== 'none' ? style : 'inline-block';
   });

   // 🔹 общая функция для закрытия поиска + очистки
   function closeSearch() {
      inner.classList.remove('active');
      input.value = '';

      // сброс отображения блоков
      document.querySelectorAll('.tag.copy').forEach((block) => {
         block.style.display = block.dataset.origDisplay;
      });
   }

   // клик по иконке — разворачиваем / сворачиваем
   toggle.addEventListener('click', () => {
      if (inner.classList.contains('active')) {
         closeSearch();
      } else {
         inner.classList.add('active');
         input.focus();
      }
   });

   // клик вне блока — сворачиваем
   document.addEventListener('click', (e) => {
      if (!inner.contains(e.target) && e.target !== toggle) {
         closeSearch();
      }
   });

   // нажатие Esc — сворачиваем
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
   });

   // мобильный свайп для закрытия поиска
   let startX = 0,
      currentX = 0,
      isSwiping = false;

   document.addEventListener('touchstart', (event) => {
      if (inner.classList.contains('active')) {
         startX = event.touches[0].clientX;
         isSwiping = true;
         inner.dataset.isSwiping = 'true';
      }
   });

   document.addEventListener('touchmove', (event) => {
      const swipingInner = document.querySelector(".search__inner.active[data-is-swiping='true']");
      if (swipingInner && isSwiping) {
         currentX = event.touches[0].clientX;
         if (startX - currentX > 100) {
            closeSearch();
            isSwiping = false;
            delete swipingInner.dataset.isSwiping;
         }
      }
   });

   document.addEventListener('touchend', () => {
      const swipingInner = document.querySelector(".search__inner.active[data-is-swiping='true']");
      if (swipingInner) {
         isSwiping = false;
         delete swipingInner.dataset.isSwiping;
      }
   });

   // 🔹 живой поиск
   input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      const blocks = document.querySelectorAll('.tag.copy');

      blocks.forEach((block) => {
         const attr = block.getAttribute('data-search-tg-password');
         if (!attr) return;

         const value = attr.toLowerCase();

         if (value.includes(query)) {
            block.style.display = block.dataset.origDisplay;
         } else {
            block.style.display = 'none';
         }
      });
   });
}
