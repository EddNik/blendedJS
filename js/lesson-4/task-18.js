//! 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const ul = document.querySelector('ul');
const newLiElem = document.createElement('li');
const pElemSecond = document.createElement('p');
const h3ElemNew = document.createElement('h3');

pElemSecond.textContent =
  'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".';

h3ElemNew.textContent = 'Властивість innerHTML';

newLiElem.append(h3ElemNew, pElemSecond); //додаєм до li 'p' 'h3'
ul.append(newLiElem);

console.log(newLiElem);

newLiElem.innerHTML = `<h3>"Властивість innerHTML"</h3>
    <p> Ще один спосіб створити DOM-елементи
і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>`;
document.querySelector('ul').insertAdjacentElement('beforeend', newLiElem);
