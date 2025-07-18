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
// console.log(styles);
const index = styles.indexOf('blues');

// first variant
if (index !== -1) {
  styles[index] = 'classic';
}

// second variant:
for (const item of styles) {
  if (item === 'blues') {
    styles[styles.indexOf(item)] = 'classic';
  }
}

// third variant
for (let index = 0; index < styles.length; index++) {
  if (styles[index] === 'blues') {
    styles[index] = 'classic';
  }
}

// console.log('task-1');
// console.log(styles);

function logItems(array) {
  for (let index = 0; index < array.length; index++) {
    // let index тут перевикористовуємо змінну index на кожній ітераціі тому let а не onst
    const elementNumber = index + 1;
    const elementValue = array[index];
    console.log(`${elementNumber} - ${elementValue}`);
  }
}

function logItems(array) {
  for (const arr of array) {
    //тут на кожній ітераціі береться нова змінна з посиланням на новий елемент масиву тому кожний раз создаем нову змінну тому
    // константа const arr
    console.log(`${array.indexOf(arr) + 1}: ${arr}`);
  }
}

// console.log('task-1');
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
  alert(array.includes(logName) ? `Welcome, ${logName}` : 'User not found');
}

// другий варіант  це не кращий вариант краще використовувати перший варіант так ми уникаємо перебору у циклі
function checkLogin(array) {
  const logName = prompt('Enter your name');
  const index = array.indexOf(logName);
  for (const item of array) {
    if (index !== -1) {
      return alert(`Welcome, ${logName}!`);
    }
  }
  alert('User not found');
}

checkLogin(logins);

// Завдання 3:
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       count += 1;
//       sum += arg;
//     }
//   }
//   return sum / count || 0;     // ділення 0 на 0 дає  NaN
// }

// second variant with pseudo-array 'arguments':
// function calculateAverage() {
//   let sum = 0;
//   let count = 0;
//   for (const argument of arguments) {
//     if (typeof argument === 'number') {
//       count += 1;
//       sum += argument;
//     }
//   }
//   return sum / count || 0; // ділення 0 на 0 дає  NaN
// }

// console.log('task-3');
// console.log(calculateAverage(100, 2, 22, 10));

// Завдання 4:
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const sumArray = [];
// function sumNeighbour(array) {
//   for (let index = 0; index < array.length - 1; index++) {
//     sumArray.push(array[index] + array[index + 1]);
//   }
//   return sumArray;
// }
// console.log('task-4');
// console.log(sumNeighbour(someArr));

// Завдання 5:
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// console.log(Array.isArray(numbers));
// console.log(typeof numbers);
// function findSmallestNumber(array) {

// first variantце найкращій варіант перевіряєм відразу чи це масив якщо ні далі не виконується код
// if (!Array.isArray(array)) {
//   //
//   return 'Sory, it is not an array!';
// }
// return Math.min(...array);

// second variant тернарний оператор
// return Array.isArray(array) ? Math.min(...array) : 'Sory, it is not an array!';
// return !Array.isArray(array) ? 'Sory, it is not an array!' : Math.min(...array);

// if (Array.isArray(array)) {
//   return Math.min(...array);
// }
//   return typeof numbers === 'object' ? Math.min(...array) : 'Sory, it is not an array!';
// }
// console.log('task-5');
// console.log(findSmallestNumber(numbers));

// Завдання 6:
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:

// function findLongestWord(string) {
//   const array = string.split(' ');
//   // const wordMaxArray = [];
//   let wordMax = '';

//   for (const element of array) {
//     // if (element.length >= wordMax.length) {
//     //   wordMax = element;
//     // }
//     element.length >= wordMax.length ? (wordMax = element) : wordMax;
//   }

// for (const element of array) {
//   if (element.length === wordMax.length) {
//     wordMaxArray.push(element);
//   }
// }
// return wordMaxArray.join(', ');
//   return wordMax;
// }
// console.log('task-6');
// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// Завдання 7:
// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const propertieKeys = Object.keys(user);

// // console.log('task-7');

// for (const key of propertieKeys) {
//   // console.log(`${key} : ${user[key]}`);
// }

// Завдання 8:
// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const empty = {};

// function sumSalary(object) {
//   const salaryValues = Object.values(object);
//   const isEmpty = Object.keys(object) === 0;
//   let sum = 0;
//   if (!isEmpty) {
//     for (const salary of salaryValues) {
//       sum += salary;
//     }
//   }
//   return sum;
// }
// console.log('task-8');

// console.log(sumSalary(empty));
// console.log(sumSalary(salaries));

// Завдання 9:
// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
// if (this.exist()) {
//   return this.a + this.b;
// } else {
//   return 'No such propeties';
// }

//     return this.exist() ? this.a + this.b : 'No such propeties';
//   },
//   mult() {
// if (this.exist()) {
//   return this.a * this.b;
// } else {
//   return 'No such propeties';
// }

//     return this.exist() ? this.a * this.b : 'No such propeties';
//   },
//   exist() {
//     return this.a && this.b;
//   },
// };
// // console.log('task-9');
// calculator.read(2, 5);
// console.log(calculator.sum());
// console.log(calculator.mult());

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

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Апельсин', price: 50, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   let quantity = 0;

//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//       quantity += fruit.quantity;
//     }
// console.log(`fruitName is ${fruit.name}, totalprice is ${totalPrice} for ${quantity} things`);
//   }
//   return `fruitName is ${fruitName}, totalprice is ${totalPrice} for ${quantity} things`;
// }
// console.log('task-10');

// console.log(calcTotalPrice(fruits, 'Банан'));
// console.log(calcTotalPrice(fruits, 'Яблуко'));
// console.log(calcTotalPrice(fruits, 'Виноград'));
// console.log(calcTotalPrice(fruits, 'Груша'));
// console.log(calcTotalPrice(fruits, 'Апельсин'));
// calcTotalPrice(fruits);

// ###################################################################################################################

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const logName = prompt('Enter your name');
//   alert(array.includes(logName) ? `Welcome, ${logName}` : 'User not found');
// }

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       count += 1;
//       sum += arg;
//     }
//   }
//   return sum / count || 0;
// }
// console.log(calculateAverage(10, 1, '22', 10));
// console.log(calculateAverage('100', '2', '22', '10'));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumNeighbour(array) {
//   const sumArray = [];
//   for (let index = 0; index < array.length - 1; index++) {
//     sumArray.push(array[index] + array[index + 1]);
//   }
//   return sumArray;
// }
// console.log(sumNeighbour(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// const numbers = [];
// const numbers = {
//   test: 'test',
// };

// function findSmallestNumber(array) {
//   return typeof numbers === 'object' && numbers.length
//     ? Math.min(...array)
//     : 'Sory, it is not an array!';
// }
// console.log(findSmallestNumber(numbers));

// ########################################################

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// const empty = {};

// function sumSalary(object) {
//   const keys = Object.keys(object);
//   let sum = 0;
//   if (keys.length !== 0) {
//     for (const key of keys) {
//       sum += salaries[key];
//     }
//   }
//   return sum;
// }

// console.log(sumSalary(empty));
// console.log(sumSalary(salaries));

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.exist() ? this.a + this.b : 'No such propeties';
//   },
//   mult() {
//     return this.exist() ? this.a * this.b : 'No such propeties';
//   },
//   exist() {
//     return this.a && this.b;
//   },
// };

// calculator.read(2, 5);

// console.log(calculator.sum());
// console.log(calculator.mult());

// ##########################################################################################

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
  }
  console.log(`fruitName is ${fruitName}, totalprice is ${totalPrice} for ${quantity} things`);
  // return `fruitName is ${fruitName}, totalprice is ${totalPrice} for ${quantity} things`;
  return totalPrice;
}

console.log(calcTotalPrice(fruits, 'Банан'));

// ############################################# Доп завдання ############################################################
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)

// та методи управління книгою:
// add(data) - приймає об'єкт data, де передається  name і email, category може передаватись чи ні,

// всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",

// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// і додає newContact до списку контактів contacts;

// *не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо

// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;

const phonebook = {
  contacts: [],
  add(data) {
    const newContact = {
      name: data.name,
      email: data.email,
      category: data.category || 'default',
      id: this.generateId(),
      createdAt: this.getDate(),
    };

    this.contacts.push(newContact);
  },

  list() {
    console.table(this.contacts);
  },

  filtered(category) {
    return this.contacts.filter(contact => contact.category === category);
  },

  delete(name) {
    const index = this.contacts.indexOf(name);
    this.contacts.splice(index, 1);
  },
  updateName(oldName, newName) {},

  generateId() {
    return '#' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

add('test', 'test@test');
list();
