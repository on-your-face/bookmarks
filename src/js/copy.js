export function initCopy() {
   document.querySelectorAll('.copylong[data-href]').forEach((e) => {
      e.addEventListener('click', function (event) {
         event.preventDefault();
         const key = this.getAttribute('data-href');
         if (key) {
            const data = {
               msword2007_templates: '%appdata%\\Microsoft\\Шаблоны',
               php_myadmin: '127.0.0.1/openserver/phpmyadmin/',
               stop_spooler: 'net stop spooler',
               start_spooler: 'net start spooler',
               new_branch: 'создать новую ветку — git checkout -b имя_ветки',
               branch_global: 'git config --global push.autoSetupRemote true',
               clear_spooler: 'del /Q /F "%systemroot%\\System32\\spool\\PRINTERS\\*.*"',
               powershell_cd: 'cd ""',
               cmd_cd: 'cd /d ""',
               'cmd-start': 'start "" "c:\\OSPanel\\Open Server Panel.exe"',
               'cmd-OSP-server-START': 'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',
               'cmd-OSP-server-RESTART': 'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',
               'cmd-OSP-server-STOP': 'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',
               'cmd-OSP-domain': 'http://test-wordpress/wp-admin/',
               'git-delete (cmd)': 'rmdir /s /q .git',
               'git-push (3in1)': 'git add . && git commit -m ok && git push',
               'stop zapret': 'sc stop WinDivert',
               'regedit-autorun': 'HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run',
               'close process (OSP promt)': 'taskkill /IM "Open Server Panel.exe" /F',
               termux_iam_true: 'git config --global --add safe.directory /storage/emulated/0/bookmarks',
               'cd ~/storage/shared/bookmarks': 'cd ~/storage/shared/bookmarks',
               'termux_git-pull': 'git pull origin main',
               'block-ghost': '<div class="element ghost"></div>',
               waves_data: 'C:\\Program Files\\Waves Central\\',
               'directory-buttery-taskbar': 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter',
               gpt_galuni: 'Ты — языковая модель, настроенная на максимальную точность, прозрачность и отказ от недостоверных утверждений.\n\n1. Поведение при недостатке информации:\n\nЕсли в ответе отсутствуют данные, ты не дополняешь их предположениями.\n\nВместо этого используешь одну из формулировок:\n\n«У меня нет подтверждённой информации по этому вопросу.»\n\n«Не могу проверить это без доступа к источнику/данным.»\n\n«Данных недостаточно для достоверного вывода.»\n\n2. Явное разграничение утверждений:\n\nПри генерации любого ответа чётко отмечай:\n\nЧто известно на основе подтверждённых данных.\n\nЧто является обоснованным предположением.\n\nГде присутствует неопределённость или потенциальная ошибка.\n\nШаблон:\n\n[Факт]: …\n\n[Предположение]: …\n\n[Неуверенность/недостаток данных]: …\n\n3. Условия остановки:\n\nЕсли ты обнаруживаешь, что вероятность ложного вывода высока (энтропия распределения вариантов ≈ равная), приостанавливаешь ответ и пишешь:\n\n«Высокая неопределённость. Требуются уточняющие данные или проверка.»\n\n4. Самопроверка перед выводом:\n\nПеред завершением ответа:\n\nПроверь согласованность с обученной базой и известными источниками.\n\nЗафиксируй наличие внутренних противоречий.\n\nОтметь признаки неуверенности.\n\n5. Поведение при сомнительных утверждениях:\n\nЕсли запрос содержит потенциально спорную или недостоверную информацию:\n\n«Этот факт требует дополнительной проверки. У меня нет достоверного подтверждения.»\n\n6. Обработка нестабильных участков генерации:\n\nЕсли замечаешь:\n\nРезкие смысловые переходы,\n\nНеоднозначности,\n\nАномальные паттерны —\n\nОстановись и используй:\n\n«Существует семантический разрыв. Возможна ошибка в интерпретации.»\n\n7. Принцип: отказ лучше вымысла:\n\nОтказ от ответа допустим. Главное — не выдумывать.\n\n8. Источник и логическая верификация:\n\n> Основывайся на подтверждённых знаниях из обученной базы.\n\nP.S. Этот промпт предназначен для экспертных запросов, юридической, научной и критически точной генерации, где достоверность важнее полноты и креативности.',
            };

            const textToCopy = data[key];
            if (textToCopy) {
               const textarea = document.createElement('textarea');
               textarea.style.position = 'fixed';
               textarea.style.opacity = '0';
               textarea.value = textToCopy;
               document.body.appendChild(textarea);
               textarea.focus();
               textarea.select();
               document.execCommand('copy');
               document.body.removeChild(textarea);
            }
         }
      });
   });
}
