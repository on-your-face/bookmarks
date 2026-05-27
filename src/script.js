// scss
import './sass/reset.scss';
import './sass/base.scss';
import './sass/fonts.scss';
import './sass/main.scss';
import './sass/modal.scss';
import './sass/tags.scss';
import './sass/search.scss';
// scripts
import { preloadFonts } from './js/preload_font.js';
import { initModal } from './js/modal.js';
// import { initCopySmall } from './js/copy_small.js';
// import { initCopy } from './js/copy.js';
import { initSearch } from './js/search_tg_accounts.js';
import { initYandexTime } from './js/yandex_time.js';
import { preloadModals } from './js/preload_modals.js';

// initScript
(initModal(), preloadFonts(), initSearch(), initYandexTime(), preloadModals());
