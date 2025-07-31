//! 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const liElemNav = document.querySelector('li[data-topic="navigation"]'); //'li[data-topic="navigation"]'додали тут li щоб знати що ми шукаємо
// const pElem = liElemNav.querySelector('p');

// const pElem = liElemNav.querySelector('p');
const pElem = liElemNav.lastElementChild; //зроблено через навігацію по DOM

pElem.textContent = 'Я змінив тут текст!';
