// Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const bodyElem = document.querySelector('body');
console.log(bodyElem);

const idTitleElem = document.querySelector('#title');
console.log(idTitleElem);

const classListElem = document.querySelector('.list');
console.log(classListElem);

//! 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const topicElemAll = document.querySelectorAll('[data-topic]');
// console.log(topicElemAll);

//! 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// a)
// const topicElem = document.querySelector('[data-topic]');
// const topicElemFirst = topicElem.parentElement.firstElementChild;
// const topicElemLast = topicElem.parentElement.lastElementChild;

// b)
const topicElemAll = [...document.querySelectorAll('[data-topic]')];
const topicElemFirst = topicElemAll[0];
const topicElemLast = topicElemAll[topicElemAll.length - 1];

console.log(topicElemFirst);
console.log(topicElemLast);

//! 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const neighborH1 = document.querySelector('h1').nextElementSibling;
console.log(neighborH1);

//! 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const h3All = [...document.querySelectorAll('h3')];

// a) array to object
// const h3AllObj = { ...h3All };

// b) array to object
const h3AllObj = {};
// h3All.forEach((h3, index) => {
//   h3AllObj[index] = h3;
// });

// c)
// let index = 0;
// for (const h3 of h3All) {
//   h3AllObj[`${++index} :`] = h3;
//   h3AllObj[`${index++} :`] = h3;
// }
// console.log(h3All);
console.log(h3AllObj);

//! 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

//! a)
const h3All = [...document.querySelectorAll('h3')];
// const h3All = document.querySelectorAll('h3');

for (const h3 of h3All) {
  h3.classList.add('active');
}

//! b)
// const h3All = [...document.querySelectorAll('h3')];

// const h3All = document.querySelectorAll('h3');
h3All.forEach(h3 => h3.classList.add('active'));

//! 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liElemNav = document.querySelector('li[data-topic="navigation"]');
const liElemSearch = document.querySelector('li[data-topic="search"]');
console.log(liElemNav);

//! 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// a)
liElemNav.setAttribute('style', 'background-color : yellow');

// b)
// liElemNav.style.backgroundColor = 'yellow';

//! 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

const pElem = (liElemNav.querySelector('p').textContent = 'Я змінив тут текст!');

//! 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення,
//!      яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';

const manipulationElem = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(manipulationElem);

//! 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// manipulationElem.style.backgroundColor = 'blue';

manipulationElem.setAttribute('style', 'background-color : blue');

//! 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const hCompletedHeader = document.querySelector('.completed');
console.log(hCompletedHeader);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
