//1. сделать калькулятор с помощью базовых функций js, калькулятор должен суммировать, 
     //вычитать, умножать, делить, брат остаток от деления, возводить в степень. 

//2. сделать скрипт на проверку на логин и пароль, если логин и пароль правильный то на консоли выводится сообщение “Welcome”, 
     //если пользователь неправильно ввел логин то на консоли выводиться сообщение “логин не правильный”, 
     //если пользователь ввел неправильно пароль то на консоли выводиться “пароль не правильный”.       
  


//Задание №1

function plus() {
     let firstNum = document.getElementById("firstNum").value;
     let secondNum = document.getElementById("secondNum").value;
     let sum = parseInt(firstNum) + parseInt(secondNum);
     let result = document.getElementById("result");
     result.innerHTML = sum;
}

function minus() {
     let firstNum = document.getElementById("firstNum").value;
     let secondNum = document.getElementById("secondNum").value;
     let minus = parseInt(firstNum) - parseInt(secondNum);
     let result = document.getElementById("result");
     result.innerHTML = minus;
}

function multiply() {
     let firstNum = document.getElementById("firstNum").value;
     let secondNum = document.getElementById("secondNum").value;
     let multiply = parseInt(firstNum) * parseInt(secondNum);
     let result = document.getElementById("result");
     result.innerHTML = multiply;
}

function divide() {
     let firstNum = document.getElementById("firstNum").value;
     let secondNum = document.getElementById("secondNum").value;
     let divide = parseInt(firstNum) / parseInt(secondNum);
     let result = document.getElementById("result");
     result.innerHTML = divide;
}

//Задание №2

document.getElementById("btn").onclick = function() {
     let login = document.getElementById("login").value;
     let password = document.getElementById("password").value;
     if (login === "zava23@gmail.com" && password === "Karakol") {
         console.log("Welcome!");
     }
     else if (login !== "zava23@gmail.com") {
          console.log("Логин не правильный");
     }
     else if (password !== "Karakol") {
          console.log("Пароль не правильный");
     }    
};