// Завдання 1:
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
console.log(styles);

for (const item of styles) {
  if (item === 'blues') {
    styles[styles.indexOf(item)] = 'classic';
  }
}

console.log(styles);

function logItems(array) {
  for (let index = 0; index < array.length; index++) {
    const elementNumber = index + 1;
    const elementValue = array[index];
    console.log(`${elementNumber} - ${elementValue}`);
  }
}

logItems(styles);

// Завдання 2:
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ['Peter', 'John', 'Igor', 'Sasha'];

function checkLogin(array) {
  const logName = prompt('Enter your name');
  if (array.includes(logName)) {
    alert(`Welcome, ${logName}!`);
  } else {
    alert('User not found');
  }
}

checkLogin(logins);

// Завдання 3:
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverage(...args) {
  let sum = 0;
  let count = 0;
  for (const arg of args) {
    if (typeof arg === 'number') {
      count += 1;
      sum += arg;
    }
  }
  return sum / count;
}

console.log(calculateAverage(100, 2, '22', 10));

// Завдання 4:
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const sumArray = [];
function sumNeighbour(array) {
  for (let index = 0; index < array.length - 1; index++) {
    sumArray.push(array[index] + array[index + 1]);
  }
  return sumArray;
}

console.log(sumNeighbour(someArr));

// Завдання 5:
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

console.log(Array.isArray(numbers));

function findSmallestNumber(array) {
  if (Array.isArray(array)) {
    return Math.min(...array);
  }
}

console.log(findSmallestNumber(numbers));

// Завдання 6:
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

function findLongestWord(string) {
  const array = string.split(' ');
  const wordMaxArray = [];
  let wordMax = '';

  for (const element of array) {
    if (element.length >= wordMax.length) {
      wordMax = element;
    }
  }

  for (const element of array) {
    if (element.length === wordMax.length) {
      wordMaxArray.push(element);
    }
  }
  return wordMaxArray.join(', ');
}

console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// Завдання 7:
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const propertieKeys = Object.keys(user);

for (const key of propertieKeys) {
  console.log(`${key} : ${user[key]}`);
}

// Завдання 8:
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
const empty = {};

function sumSalary(object) {
  const salaryValues = Object.values(object);
  const isEmpty = Object.keys(object) === 0;
  let sum = 0;
  if (!isEmpty) {
    for (const salary of salaryValues) {
      sum += salary;
    }
  }
  return sum;
}
console.log(sumSalary(empty));
console.log(sumSalary(salaries));

// Завдання 9:
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    } else {
      return 'No such propeties';
    }
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    } else {
      return 'No such propeties';
    }
  },
  exist() {
    return this.a && this.b;
  },
};

calculator.read(2, 5);
console.log(calculator.sum());
console.log(calculator.mult());

// sum() {
//     if (!this.exist()) {
//       return 'No such properties';
//     }
//     return this.a + this.b;
// },

//  mult() {
//     if (!this.exist()) {
//       return 'No such properties';
//     }
//     return this.a * this.b;
//   }
// };

// Завдання 10:
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Апельсин', price: 50, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;
  let quantity = 0;

  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
      quantity += fruit.quantity;
    }
    // console.log(`fruitName is ${fruit.name}, totalprice is ${totalPrice} for ${quantity} things`);
  }
  return `fruitName is ${fruitName}, totalprice is ${totalPrice} for ${quantity} things`;
}

console.log(calcTotalPrice(fruits, 'Банан'));
console.log(calcTotalPrice(fruits, 'Яблуко'));
console.log(calcTotalPrice(fruits, 'Виноград'));
console.log(calcTotalPrice(fruits, 'Груша'));
console.log(calcTotalPrice(fruits, 'Апельсин'));
// calcTotalPrice(fruits);
