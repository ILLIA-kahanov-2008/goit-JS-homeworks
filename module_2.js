// 2-1
// Запиши условие в инструкции if так, чтобы функция работала правильно.

function checkAge(age) {
  if (age>=18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

checkAge(20);
checkAge(14);
checkAge(38);

// 2-2
// Функция checkPassword получает пароль пользователя в параметр password,
//   проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

 if (password === ADMIN_PASSWORD) {
    return "Welcome!";
 }

  return "Access denied, wrong password!";
  // Change code above this line
}

checkPassword("polyhax");
checkPassword("jqueryismyjam");

// 2-3
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return "Your order is empty!";
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  } 
  return "The order is accepted, our manager will contact you";
  // Change code above this line
}
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(100, 50);

// 2-4
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];

// // 2-5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// 2-6
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = 'peach';
fruits[3] = 'banana';

// 2-7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const fruitsArrayLength = fruits.length;

// 2-8
// Объяви две перемнные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// 2-9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  // Change code below this line
 const newArray = [array[0], array[array.length - 1]];
return newArray;
  

  // Change code above this line
}

getExtremeElements(["Earth", "Mars", "Venus"])

// 2-10

// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

// Дополни код функции splitMessage(message, delimeter) так,
// чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter);
  // Change code above this line
  return words;
}
splitMessage("Mango hurries to the train", " ");
splitMessage("Mango", "");

// 2-11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).
// Эта функция принимает строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
let words = message.split(" ");
let price = words.length * pricePerWord;
  return price;

   // Change code above this line
}

calculateEngravingPrice("JavaScript is in my blood", 10);
calculateEngravingPrice("Web-development is creative work", 40);

// 2-12
// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'

// Дополни код функции makeStringFromArray(array, delimeter) так,
// чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

string = array.join(delimeter);

  // Change code above this line
  return string;
}

makeStringFromArray(["top", "picks", "for", "you"], "_");
makeStringFromArray(["M", "a", "n", "g", "o"], "");
makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// // 2-13
// Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. 
// В результате адрес получится более приятным для восприятия: mysite.com / posts / arrays -for-begginers.

// Внимание
// Slug это всегда строка в нижнем регистре, слова которой разделены тире.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

function slugify(title) {
  // Change code below this line
let array = title.split(" ");
  let slug = array.join("-");
  return slug.toLowerCase();

  // Change code above this line
}

slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");

// 2-14

// Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.
// Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// 2-15

// Метод concat используется для объединения двух или более массивов. 
// Он не изменяет массив на котором вызывается, а возвращает новый.Порядок аргументов метода влияет на порядок элементов нового массива.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

// 2-16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
let newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
   return  newArray.slice(0, maxLength);
  };
  
  return newArray;


    // Change code above this line
}
  
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// 2-17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

const start = 3;
const end = 7;

for (let i = start; i <= end; i +=1 ) { // Change this line
  console.log(i);
}

// 2-18
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number) и
// возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
 // Change code below this line

  let total = 0;  
  for (let i = 1; i <= number; i += 1) {   
    total += i;
}
  return total;
  // Change code above this line
}

console.log(calculateTotal(8));

// 2-19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i+= 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// 2-20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (i = 0; i < order.length; i += 1) {
  total +=order[i];
}
  // Change code above this line
  return total;
}
calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([12, 85, 37, 4]);

// 2-21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string)
// и возвращает самое длинное слово в этой строке

function findLongestWord(string) {
  // Change code below this line

const array = string.split(" ");

let longestWord = array[0];


for (i = 0; i < array.length; i +=1) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
}
  return longestWord;

  // Change code above this line
}

// 2-22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
	for (i = min; i <= max; i +=1) {
     numbers.push(i); 
    }
  // Change code above this line
  return numbers;
}
createArrayOfNumbers(29, 34);
createArrayOfNumbers(1, 3);

// 2-23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
   // Change code below this line
const array = [];
  for (i = 0; i < numbers.length; i +=1) {
  if (numbers[i] > value) {
    array.push(numbers[i]);
  }
}
return array;

  // Change code above this line
}

filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 20);

// 2-24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

checkFruit("mandarin");
checkFruit("Pear");
checkFruit("apple");

// 2-25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  // Change code below this line
const array = [];
  
  for (i = 0; i < array1.length; i +=1) {
    if (array2.includes(array1[i])) {
        array.push(array1[i])
    }
  }
  
  return array;

 // Change code above this line
}

getCommonElements([1, 2, 3], [10, 20, 30]);
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);


// 2-26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const number of order) {
    total += number;
  }

  // Change code above this line
  return total;
}

calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([12, 85, 37, 4]);

// 2-27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const item of numbers) {
    const number = item;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

// 2-28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

// 2-29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

function getEvenNumbers(start, end) {
   // Change code below this line
const evenNumbers = [];
  for (i = start; i <= end; i +=1) {
   if (i%2 === 0) {
     evenNumbers.push(i);
  }
  }
  
  return evenNumbers;
    // Change code above this line
  }

getEvenNumbers(6, 12);
getEvenNumbers(7, 7);

// 2-30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10
// В цикле for используется break для выхода до завершения всех итераций цикла

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// 2-31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
// Tests:
// Объявлена функция findNumber(start, end, divisor)
// Вызов findNumber(2, 6, 5) возвращает 5
// Вызов findNumber(8, 17, 3) возвращает 9
// Вызов findNumber(6, 9, 4) возвращает 8
// Вызов findNumber(16, 35, 7) возвращает 21
// Вызов findNumber() со случайным набором чисел возвращает верный результат
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }  
  // Change code above this line
}

// 2-32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет,
// есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Tests:
// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

function includes(array, value) {
  // Change code below this line
for (i=0; i < array.length; i++) {
  if (array[i] === value) {
    return true;
  }
}
  return false;
  // Change code above this line
}
