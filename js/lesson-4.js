//! Завдання 1:
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
const topicElemAll = document.querySelectorAll('[data-topic]');
console.log(topicElemAll);

//! 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// a)
const topicElem = document.querySelector('[data-topic]');
console.log(typeof topicElem);
const topicElemFirst = topicElem.parentElement.firstElementChild;
const topicElemLast = topicElem.parentElement.lastElementChild;

// b)
// const topicElemAll = [...document.querySelectorAll('[data-topic]')]; //перетворюэмо в справжный масив
// const topicElemFirst = topicElemAll[0];
// const topicElemLast = topicElemAll[topicElemAll.length - 1];

// console.log(topicElemFirst);
// console.log(topicElemLast);

//! 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const neighborH1 = document.querySelector('h1')
// neighborH1.nextElementSibling;
// console.log(neighborH1);
const neighborH1 = document.querySelector('#title + *'); //від #title наступний елемент * а указує що це може бути будь який елемент

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
// console.log(h3AllObj);

//! 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

// a)
const h3All = [...document.querySelectorAll('h3')];
// const h3All = document.querySelectorAll('h3');

for (const h3 of h3All) {
  h3.classList.add('active');
}

// b)
// const h3All = [...document.querySelectorAll('h3')];

// const h3All = document.querySelectorAll('h3');
// h3All.forEach(h3 => h3.classList.add('active'));

//!

//!

//! 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liElemNav = document.querySelector('li[data-topic="navigation"]');
// const liElemSearch = document.querySelector('li[data-topic="search"]');
// console.log(liElemNav);

//! 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// a)
// liElemNav.setAttribute('style', 'background-color : yellow');

// b)
// liElemNav.style.backgroundColor = 'yellow';

//! 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// const pElem = liElemNav.querySelector('p');
// pElem.textContent = 'Я змінив тут текст!';

//! 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення,
//!      яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';

// const manipulationElem = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(manipulationElem);

//! 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// manipulationElem.style.backgroundColor = 'blue';

// manipulationElem.setAttribute('style', 'background-color : blue');

//! 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// const hCompletedHeader = document.querySelector('h3.completed');  //додали h3щоб знати що ми шукаємо
// console.log(hCompletedHeader);

//! 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// a)
// hCompletedHeader.closest('li').remove();

hCompletedHeader.parentNode;

//  b)
document
  .querySelectorAll(
    'li:has(h1.completed,h2.completed,h3.completed,h4.completed,h5.completed,h6.completed)'
  )
  .forEach(li => li.remove());

//! 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// a)
const pElemNew = document.createElement('p');
document.querySelector('h1').insertAdjacentElement('afterend', pElemNew).textContent =
  "Об'єктна модель документа (Document Object Model)";

// b)

//! 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const ul = document.querySelector('ul');
// const newLiElem = document.createElement('li');
// const pElemSecond = document.createElement('p');
// const h3ElemNew = document.createElement('h3');
// pElemSecond.textContent =
//   'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".';
// h3ElemNew.textContent = 'Властивість innerHTML';
// newLiElem.append(h3ElemNew, pElemSecond);
// ul.append(newLiElem);

// //
// console.log(newLiElem);

// newLiElem.innerHTML = `<h3>"Властивість innerHTML"</h3>
//     <p> Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`;
// document.querySelector('ul').insertAdjacentElement('beforeend', newLiElem);

//! 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// document.querySelector('ul').insertAdjacentHTML(
//   'beforeend',
//   `<li><h3>Властивість innerHTML</h3>
//     <p> Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`
// );

//
//! 20 - очисти список
// ul.remove('li');
//

//

//

//!  Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// a)
// const divElementsMarkup = document.createElement('div');
for (let index = 0; index < 10; index++) {
  //   divElementsMarkup.append(document.createElement('div'));
  //   console.log(divElementsMarkup);
  //   document.querySelector('ul').insertAdjacentElement('beforeend', divElementsMarkup);
  const number = randomNumber();
  //   divElementsMarkup.textContent = number;
  if (number % 2 === 0) {
    const divEven = document.createElement('div');
    divEven.classList.add('even');
    ul.append(divEven);
    // divElementsMarkup.classList.add('even');
  } else {
    const divOdd = document.createElement('div');
    divOdd.classList.add('odd');
    ul.append(divOdd);
    // divElementsMarkup.classList.add('odd');
  }
}

// console.log(divElementsMarkup);
// ul.insertAdjacentElement('beforeend', divElementsMarkup);
ul.append(divElementsMarkup);

// b)
// let divElementsMarkup = '';
// for (let index = 0; index < 100; index++) {
//   const number = randomNumber();

//   if (number % 2 === 0) {
//     divElementsMarkup += `<div class="even">${number}</div>`;
//   } else {
//     divElementsMarkup += `<div class="odd">${number}</div>`;
//   }
// }
// console.log(divElementsMarkup);
// ul.insertAdjacentHTML('beforeend', divElementsMarkup);

// ! Завдання 3:
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// a)
// const form = document.querySelector('.js-contact-form');
// form.addEventListener('input', event => {
//   event.preventDefault();
//   let test = form.elements.userName.value.length > 6;
//   console.log(test);
//   if (!test) {
//     form.elements.userName.classList.add('error');
//     form.classList.add('error');
//   } else {
//     form.elements.userName.classList.remove('error');
//     form.classList.remove('error');
//     form.elements.userName.classList.add('success');
//     form.classList.add('success');
//   }
// });

// b)
const form = document.querySelector('.js-contact-form');

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// form.elements.userName.addEventListener('focus', event => {
//   event.preventDefault();
//   //   console.log(form.elements.userName.style);
//   if (form.elements.userName.value === '') {
//     form.elements.userName.style.outline = '3px solid red';
//   } else {
//     form.elements.userName.style.outline = '3px solid green';
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// form.elements.userName.addEventListener('blur', event => {
//   event.preventDefault();
//   if (form.elements.userName.value === '') {
//     form.elements.userName.style.outline = '3px solid red';
//   } else {
//     form.elements.userName.style.outline = '3px solid lime';
//   }
// });

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector('.js-contact-form');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   if (form.elements.userName.value != '') {
//     // console.log(form.elements.userName);
//   }
// });

const formEl = document.querySelector('.js-contact-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const inputValue = event.target.elements.userName.value.trim();
  //   const isCheck = event.target.elements.accept.checked;
  const { userName, accept } = event.target.elements;
  const inputValue = userName.value.trim();
  const isCheck = accept.checked;

  if (inputValue === '' || !isCheck) {
    alert('Fill all fields');
    return;
  }

  console.log({ userName: inputValue });
  formEl.reset();
}

// document.querySelector('.js-policy-checkbox').forEach(radio => {
//   radio.checked = false;
// });

//! Завдання 4:
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
let increase = 50;
document.querySelector('#decrease').addEventListener('click', event => {
  event.preventDefault();

  box.style.width = '30px';
  box.style.height = '30px';
});
document.querySelector('#increase').addEventListener('click', event => {
  event.preventDefault();
  increase += 20;
  box.style.width = `${increase}px`;
  box.style.height = `${increase}px`;
});
