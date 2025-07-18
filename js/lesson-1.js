// Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// there are 3 variants to convert string to number after prompt:

// const number = prompt('Please enter the number');
// const number = Number(prompt('Please enter the number'));
// const number = +prompt('Please enter the number');

// if (Number(num) === 10) {
// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

number = 10 ? alert('Вірно') : alert('Невірно');

// another variant:

alert(number === 10 ? 'Вірно' : 'Невірно');

// alert()

// Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// function randomInRange(min, max) {
//   // return Math.floor(Math.random() * (max - min) ); // від 0 до але не включно максимум
//   // return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
//   return Math.floor(Math.random() * (max - min + 1) + min); //   включно мінімальне і максимальне значення
// }

// const min = Math.floor(Math.random() * (59 - 0 + 1) + 0);

// alert(min);

// if (0 <= min && min <= 15) {
//   alert(`${min} входить в першу чверть`);
// if (15 < min && min <= 30) {
//   alert(`${min} входить в другу чверть`);
// if (30 < min && min <= 45) {
//   alert(`${min} входить в третю чверть`);
// if (45 < min && min <= 60){
//   alert(`${min} входить в четверту чверть`);
// }

// another variant in strong order from min to max value:

// if (min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// Завдання 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('Enter number from 1 to 4');
// const num = +prompt('Enter number from 1 to 4');
// let result;

switch (num) {
  // case '1':   // якщо  prompt  не приводиться до числового типу
  case 1:
    result = 'зима';
    break;

  // case '2':
  case 2:
    result = 'весна';
    break;

  // case '3':
  case 3:
    result = 'літо';
    break;

  // case '4':
  case 4:
    result = 'осінь';
    break;

  default:
    console.log('Вибачте, але ви маєте ввести значення від 1 до 4 включно');
}

console.log(result);

// Завдання 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// const minutesIn = prompt('Enter number minutes');

// const hours;
// const minutesOut;
// hours = parseInt(minutesIn / 60);    // беремо цілу частину
// hours = Math.floor(minutesIn / 60);  .. // беремо цілу частину це другий варіант
// minutesOut = minutesIn % 60;
// console.log(`${hours.toString().padStart(2, 0)}:${minutesOut.toString().padStart(2, 0)}`);

// Завдання 5:
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt('Enter your login');

console.log(login);

if (login === 'Адмін') {
  const password = prompt('Enter password');
  if (password === 'Я головний') {
    alert('Добрий день!');
  } else {
    alert('Невірний пароль!');
  }
} else if (login === '' || login === null) {
  alert('Скасовано');
} else {
  alert('Я вас не знаю');
}

// Завдання 6:
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;
// const array = [];
// while (i <= 20) {
//   array.push(i);
//   i++;
// }
// console.log(array.join(', '));

// Завдання 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {

//раннє повернення це то що не повинно працювати
if (typeof min !== 'number') {
  return 'Not a number';
}

//   let evenSum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       evenSum += i;
//     }
//   }
//   return evenSum;
// }

// console.log(getNumbers(5, 10));

// Завдання 8:
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   } else {
//     return 'Not a number!';
//   }
// }

// function min(a, b, c, d) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }
//   // return a < b ? a : b;   // якщо ми маємо тільки два елемента
//   return Math.min(a, b, c, d);
// }

// console.log(min(1, '13'));
// console.log(min(10, 3, 5, 10));

// Завдання 9:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult() {
//   const age = +prompt('Enter age');
//   if (age >= 18) {
//     return true;
//   }
//   return confirm('Ви неповнолітній. Підтверджуєте доступ?');
// }

// another variant:
function isAdult(age) {
  return age >= 18 || confirm();
}

// console.log(isAdult(20)); // true
// console.log(isAdult(16)); // покаже діалог підтвердження
// console.log(isAdult(18)); // true
// console.log(isAdult()); // true

// Завдання 10:
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i}:  fizzbuzz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i}: buzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i}: fizz`);
//     }
//   }
// }
// fizzBuzz(20);
// fizzBuzz(40);
// fizzBuzz(30);
// fizzBuzz(51);
// fizzBuzz(63);
