export function initModal() {
   const resetBody = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
   };

   const closeTags = () => {
      document.querySelectorAll('.tags.content__wrapper').forEach((el) => el.classList.remove('open__tags'));
      document.querySelectorAll('a.anchor[href^="#"]').forEach((el) => (el.style.opacity = ''));
   };

   // Открытие модалки
   document.querySelectorAll('.element[data-modal-id]').forEach((el) =>
      el.addEventListener('click', () => {
         const modal = document.getElementById(el.dataset.modalId);
         if (!modal) return;
         modal.classList.add('open__main');
         const sbw = window.innerWidth - document.documentElement.clientWidth;
         document.body.style.overflow = 'hidden';
         document.body.style.paddingRight = `${sbw}px`;
      }),
   );

   // Закрытие по Escape
   document.addEventListener(
      'keydown',
      (e) => {
         if (e.key !== 'Escape') return;
         const modal = document.querySelector('.modal.open__main');
         if (!modal) return;
         modal.classList.remove('open__main');
         resetBody();
         closeTags();
      },
      { capture: true },
   );

   // Работа с анкорами
   document.querySelectorAll('a.anchor[href^="#"]').forEach((anchor) =>
      anchor.addEventListener('click', (e) => {
         e.preventDefault();
         const target = document.getElementById(anchor.getAttribute('href').slice(1));
         if (!target?.classList.contains('tags') || !target.classList.contains('content__wrapper')) return;

         const isOpen = target.classList.contains('open__tags');
         closeTags();
         if (!isOpen) {
            target.classList.add('open__tags');
            anchor.style.opacity = '1';
         }
      }),
   );

   // Свайп для закрытия
   let startX = 0,
      swiping = false;
   const endSwipe = () => {
      const modal = document.querySelector('.modal.open__main[data-swipe]');
      if (modal) delete modal.dataset.swipe;
      swiping = false;
   };

   document.addEventListener('touchstart', (e) => {
      const modal = e.target.closest('.modal.open__main');
      if (modal) {
         startX = e.touches[0].clientX;
         swiping = true;
         modal.dataset.swipe = '1';
      }
   });

   document.addEventListener('touchmove', (e) => {
      const modal = document.querySelector('.modal.open__main[data-swipe]');
      if (!modal || !swiping) return;
      if (startX - e.touches[0].clientX > 150) {
         modal.classList.remove('open__main');
         resetBody();
         closeTags();
         endSwipe();
      }
   });

   document.addEventListener('touchend', endSwipe);
}

// ===== Закрытие при клике/тапе по .new_tab =====
document.addEventListener('click', (e) => {
   const isNewTab = e.target.closest('.new_tab');
   if (!isNewTab) return;

   // ЛОКАЛЬНЫЕ версии функций, доступные здесь
   const resetBodyLocal = () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
   };

   const closeTagsLocal = () => {
      document.querySelectorAll('.tags.content__wrapper').forEach((el) => el.classList.remove('open__tags'));
      document.querySelectorAll('a.anchor[href^="#"]').forEach((el) => (el.style.opacity = ''));
   };

   const modal = document.querySelector('.modal.open__main');
   const tags = document.querySelector('.open__tags');

   if (modal) modal.classList.remove('open__main');
   if (tags) tags.classList.remove('open__tags');

   resetBodyLocal();
   closeTagsLocal();
});
