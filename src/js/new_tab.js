export function initNewTab() {
   document.querySelectorAll('a.new_tab').forEach((el) => {
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
   });
}
