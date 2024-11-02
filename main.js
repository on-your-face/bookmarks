//

document.querySelectorAll('a').forEach(link => {
    link.classList.add('copy-link');
});

document.querySelectorAll('.copy-link').forEach(link => {
    link.addEventListener('click', function(event) {
        // Проверяем, что нажата клавиша Ctrl и левая кнопка мыши
        if (event.ctrlKey && event.button === 0) {
            // Создаем временный элемент для копирования
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = link.href; // Копируем URL ссылки
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Предотвращаем переход по ссылке
            event.preventDefault();
        }
    });
});

// Присваиваем всем ссылкам атрибут target="_blank", чтобы они открывались в новой вкладке (если это не запрещено самим браузером)
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
});

// Tabs

document.querySelector('.navigation').addEventListener('click', function (e) {
    const target = e.target.closest('.navigation__icon');
    if (!target) return;

    // Убираем активный класс со всех иконок
    document.querySelectorAll('.navigation__icon').forEach(icon => {
        icon.classList.remove('active');
    });

    // Добавляем активный класс к нажатой иконке
    target.classList.add('active');

    // Убираем активный класс со всех контентных блоков
    document.querySelectorAll('.bookmarks, .os').forEach(block => {
        block.classList.remove('active');
    });

    // Получаем селектор целевого блока из data-target
    const targetSelector = target.getAttribute('data-target');
    const targetBlock = document.querySelector(targetSelector);
    
    // Добавляем активный класс к выбранному блоку
    if (targetBlock) {
        targetBlock.classList.add('active');
    }
});
