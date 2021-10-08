// 1. Получить данные о товаре то есть картинку, текст, цену и т. д.
// 2. закинуть проект на github

let title = document.getElementsByClassName('title');
console.log(title[1].innerText);

let price = document.getElementsByClassName('price_real');
console.log(price[0].innerText);

let image = document.getElementsByClassName('image');
console.log(image[0].src);