

// Открываем модальное окно

// Добавляем слушатели на все элементы с data-modal-id
document.querySelectorAll("[data-modal-id]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const modalId = trigger.dataset.modalId; // Получаем значение data-modal-id
        const modalContainer = document.getElementById(modalId); // Находим элемент с соответствующим id

        if (modalContainer) {
            const modalParent = modalContainer.closest(".modal"); // Ищем ближайший родительский элемент с классом modal
            if (modalParent) {
                modalParent.classList.add("modal--opened"); // Добавляем класс modal--opened
                modalParent.style.pointerEvents = "auto"; // Разрешаем взаимодействие с модальным окном
            }
        }
    });
});

// Добавляем слушатель на нажатие клавиши 'Escape' для закрытия всех открытых модальных окон
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal--opened").forEach((modal) => {
            modal.classList.remove("modal--opened");
            modal.style.pointerEvents = "none"; // Блокируем взаимодействие с элементами модального окна
        });
    }
});

// Закрыть модалку свайпом справа налево на смартфоне

// Переменные для отслеживания жеста
let startX = 0; // Начальная точка касания
let currentX = 0; // Текущая точка касания
let isSwiping = false; // Флаг, чтобы отслеживать начало свайпа
const threshold = 150; // Минимальное расстояние для определения свайпа

// Начало жеста
document.addEventListener("touchstart", (event) => {
    const modal = event.target.closest(".modal.modal--opened");
    if (!modal) return; // Убедимся, что касание началось в активной модалке

    startX = event.touches[0].clientX; // Сохраняем начальную точку касания
    isSwiping = true; // Устанавливаем флаг
    modal.dataset.isSwiping = "true"; // Помечаем, что этот жест отслеживается
});

// Движение пальца
document.addEventListener("touchmove", (event) => {
    const modal = document.querySelector('.modal.modal--opened[data-is-swiping="true"]');
    if (!modal || !isSwiping) return; // Прерываем, если свайп не начался

    currentX = event.touches[0].clientX; // Обновляем текущую точку касания

    // Если движение влево уже превысило порог, закрываем окно сразу
    if (startX - currentX > threshold) {
        modal.classList.remove("modal--opened"); // Удаляем класс, закрываем окно
        console.log("Модальное окно закрыто свайпом влево.");
        isSwiping = false; // Сбрасываем флаг
        delete modal.dataset.isSwiping; // Удаляем временную метку
    }
});

// Завершение жеста
document.addEventListener("touchend", () => {
    const modal = document.querySelector('.modal.modal--opened[data-is-swiping="true"]');
    if (modal) {
        // Сбрасываем флаг и данные независимо от того, был ли свайп успешным
        isSwiping = false;
        delete modal.dataset.isSwiping;
    }
});

// Копирование тегов

document.querySelectorAll(".tag").forEach((element) => {
    element.addEventListener("click", function (event) {
        event.preventDefault(); // Предотвращаем переход по ссылке

        // Создаем временный элемент для копирования текста
        const tempInput = document.createElement("input");
        tempInput.value = this.getAttribute("href"); // Копируем весь href, включая #
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy"); // Копируем в буфер обмена
        document.body.removeChild(tempInput);
    });
});

// копирование ctrl+лкм

document.addEventListener("DOMContentLoaded", function () {
    if (!("ontouchstart" in window)) {
        // Только для ПК
        document.querySelectorAll("a.ctrl_copy_link").forEach((link) => {
            link.addEventListener("click", function (event) {
                if (event.ctrlKey && event.button === 0) {
                    navigator.clipboard
                        .writeText(link.href)
                        .then(() => console.log("Ссылка скопирована!"))
                        .catch((err) => console.error("Ошибка копирования:", err));

                    event.preventDefault(); // Блокируем переход только при копировании
                }
            });
        });
    }
});

// копирование по длительному зажатию на смартфоне

document.addEventListener("DOMContentLoaded", function () {
    if ("ontouchstart" in window) {
        // Только для мобильных устройств
        document.querySelectorAll("a.ctrl_copy_link").forEach((link) => {
            let pressTimer;

            function startPressTimer(event) {
                pressTimer = setTimeout(() => {
                    navigator.clipboard
                        .writeText(link.href)
                        .then(() => console.log("Ссылка скопирована!"))
                        .catch((err) => console.error("Ошибка копирования:", err));
                    event.preventDefault(); // Блокируем переход по ссылке
                }, 600); // Время долгого нажатия
            }

            function clearPressTimer() {
                clearTimeout(pressTimer);
            }

            // Добавляем обработчики для сенсорных устройств
            link.addEventListener("touchstart", startPressTimer);
            link.addEventListener("touchend", clearPressTimer);
            link.addEventListener("touchmove", clearPressTimer); // Отмена при движении
        });
    }
});


// якоря для хэштегов тг

document.querySelectorAll('.hashtag.anchor').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Отключить стандартное поведение ссылки

        // Получаем id якоря из href
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Прокручиваем к нужному элементу с плавным переходом
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
