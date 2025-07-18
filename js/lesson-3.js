// ##################################################################### Завдання 1 ###########################################################

// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// a) variant:
// const squareNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   squareNumbers.push(numbers[i] ** 2);
// }

// console.log(squareNumbers);

// b) varian:

// numbers.forEach(num => {
//   squareNumbers.push(num ** 2);
// });

// console.log(squareNumbers);

// c) variant:
// function exponentiation(array, degree) {
//   const degreeArray = [];
//   array.forEach(function (num) {
//     degreeArray.push(num ** degree);
//   });
//   return degreeArray;
// }

// console.log(exponentiation(numbers, 2));
// console.log(exponentiation(numbers, 3));
// console.log(exponentiation(numbers, 5));

// d) variant:
// function arrayPowerTwo(array) {
//   const arrayDegree = [];
//   array.forEach(function (num) {
//     arrayDegree.push(num ** 2);
//   });
//   return arrayDegree;
// }

// function power(array, callback) {
//   return callback(array);
// }

// console.log(power(numbers, arrayPowerTwo));

// ################################################# Завдання 2 ###################################################################

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const allValues = data.flatMap(element => element.values);
// console.log(allValues);

// const allValues = data.map(element => element.values);
// console.log(allValues);

// ####################################################### Завдання 3 ############################################################

// Завдання 3:
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// Масив об’єктів. Метод find() шукає до першого збігу на відміну від методу filter(callback)

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// a) variant:
// function limitAge(listPersons) {
//   for (const person of listPersons) {
//     if (person.age > 20) {
//       return true;
//     }
//     return false;
//   }
// }

// b) variant:
// function limitAge(listPersons) {
//   if (listPersons.find(person => person.age > 20)) {
//     return true;
//   }
//   return false;
// }

// console.log(limitAge(people));

// c) with map() and some() methods:

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// console.log(people.map(person => person.age).some(age => age < 18));

// ########################################################## Завдання 4: #########################################################3

// Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// a) variant:
// const numbers = [2, 4, 6, 7, 10];
// const test = () => {
//   if (numbers.filter(num => num % 2 === 0).length === numbers.length) {
//     return true;
//   }
//   return false;
// };
// console.log(test());

// b) variant:Перервати
// виконання методу forEach не можна, він завжди перебирає масив до кінця повертає`undefined` by default.

function checkEvenNumbers(array) {
  let check = true;
  array.forEach(num => {
    if (num % 2 !== 0) {
      check = false;
    }
  });
  return check;
}

// console.log(checkEvenNumbers(numbers));

//  c) variant with Метод every()

// [2, 4, 6, 8, 10].every(el => el % 2 === 0);

// ############################################################### Завдання 5 ########################################################

// Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(num => num % 2 !== 0));

// ################################################################ Завдання 6 #########################################################

// Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

// console.log(numbersArray.toSorted()); //За замовчуванням сортує за зростанням

// ############################################################ Завдання 7 ######################################################

// Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// console.log(stringArray.toSorted());

// ########################################################## Завдання 8 ########################### #######################

// Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

// console.log(users.toSorted((a, b) => a.age - b.age)); // ascending age
// console.log(users.toSorted((a, b) => b.age - a.age)); // descending age

// ############################################################ Завдання 9 ##############################################################

// Завдання 9:
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

// console.log(user.filter(user => user.age > 20));

// ############################################################## Завдання 10 ############################################################

// Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.reduce((sum, num) => sum + num, 0));

// ######################################################### Завдання 11 ###########################################################

// Завдання 11:
// Розроби клас Calculator, який дозволяє виконувати арифметичні   операції над числом за допомогою методів класу,
// підтримуючи  ланцюжковий виклик (method chaining).
// Вимоги до класу Calculator
// - Метод number(value) Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.

// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
//
// Приклад використання:

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

class Calculator {
  // #value;

  number(value) {
    this.value = value;
    return this;
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    value !== 0 ? (this.value /= value) : console.log('Division by zero is not possible');
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();

// const result = calc.number(10).add(5).subtract(3).multiply(4).divide(0).getResult();

// console.log(result);

//  ############################################################ Завдання 12 ##############################################################

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;

  // constructor(params) {
  //   this.#login = params.login;
  //   this.#email = params.email;
  // }

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  get email() {
    return this.#email;
  }

  set login(login) {
    this.#login = login;
  }

  set email(email) {
    this.#email = email;
  }
}

// const client = new Client({ login: 'Test', email: 'Test@test' });
const client = new Client('Test', 'Test@test');

// getter
// console.log(client.login);
// console.log(client.email);

// // setter
// client.login = 'newTest';
// console.log(client.login);

// ########################################################## Завдання 13 #########################################################

// Завдання 13:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.gender = person.gender;
    this.email = person.email;
  }

  getDetails() {
    return { name: this.name, age: this.age, gender: this.gender, email: this.email };
  }
}

class Employee extends Person {
  constructor(employee) {
    super(employee);
    super.getDetails();
    this.salary = employee.salary;
    this.department = employee.department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

const person = new Person({
  name: 'Mango',
  email: 'mango@mail.com',
  age: 27,
  gender: 'femail',
});

const employee = new Employee({
  name: 'Mango',
  email: 'mango@mail.com',
  age: 27,
  gender: 'femail',
  salary: 270,
  department: '222',
});

console.log(employee.getDetails());
console.log(employee.getEmployeeDetails());

// ###########################################################################################################################

// Напиши класс Notes який управляє коллекцієй нотаток у
// властивості items.
// Нотатка це  об'єкт з властивостями text, priority
// Додай класу статичну властивість Priority,
// в якій буде зберігатись об'єкт з пріорітетами ("high", "middle", "low").
// Додай методи getNotes(), addNote(note), removeNote(noteText)
// updatePriority(noteText, newPriority)

class Notes {
  constructor(text, priority) {
    this.text = text;
    this.priority = priority;
  }
}

// const note = new Notes();
// note.addNote({ text: 'Note1', priority: Notes.Priority.LOW });
// note.addNote({ text: 'Note2', priority: Notes.Priority.LOW });
// note.addNote({ text: 'Note3', priority: Notes.Priority.HIGHT });

// note.updatePriority('Note2', Notes.Priority.MIDDLE);
// note.updatePriority('Note3', Notes.Priority.MIDDLE);

// note.removeNote('Note1');
// note.getNotes();
