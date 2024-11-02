//

const copyElements = document.querySelectorAll('.code');

copyElements.forEach(element => {
    element.addEventListener('click', () => {
        const textToCopy = element.innerText; // или textContent, в зависимости от вашего случая
        navigator.clipboard.writeText(textToCopy).catch(err => {
            console.error('Ошибка копирования: ', err);
        });
    });
});