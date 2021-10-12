
// 1. с помощью цикла сделайте перебор товаров
// 2. по клику получить название товара с помощью js
// 3. по клику получить цену товара с помощью js
// 4. по клику получить адрес картинки с помощью js
// 5. попробуйте с помощью js поменять название товара и цену товара

// Задание #1

let title = document.getElementsByClassName('title');

for (let text of title) {
    console.log(text.innerText);
}

// Задание #2

// let elements = document.getElementsByClassName('add_cart');

// let myFunction = function() {
//     let attribute = this.parentNode.parentNode.parentNode.getElementsByClassName('title');
//     console.log(attribute[0].innerText);
// };

// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

// Задание #3

// let elements = document.getElementsByClassName('add_cart');

// let myFunction = function() {
//     let attribute = this.parentNode.parentNode.parentNode.getElementsByClassName('price_real');
//     console.log(attribute[0].innerText);
// };

// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }


// Задание #4

// let elements = document.getElementsByClassName('add_cart');

// let myFunction = function() {
//     let attribute = this.parentNode.parentNode.parentNode.getElementsByClassName('image');
//     console.log(attribute[0].src);
// };

// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

// Задание #5

// let changeName = document.getElementsByClassName('title');

// changeName[0].innerHTML = 'Childs Sweatshirt';

// let changePrice = document.getElementsByClassName('price_real');

// changePrice[1].innerHTML = '$35.00';