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
