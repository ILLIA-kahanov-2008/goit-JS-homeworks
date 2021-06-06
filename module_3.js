// // 3-1
// // Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// // imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// // descr - описание, значение "Spacious apartment in the city center";
// // rating - рейтинг, значение 4;
// // price - цена, значение 2153;
// // tags - метаинформация, массив ["premium", "promoted", "top"].

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // 3-2
// // Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

// // name - имя владельца, значение "Henry";
// // phone - телефон, значение "982-126-1588";
// // email - почта, значение "henry.carter@aptmail.com".

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   // added 
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//   // added
// };

// // 3-3
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// // aptRating - рейтинг;
// // aptDescr - описание;
// // aptPrice - цена;
// // aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// // // 3-4
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// // ownerName - имя владельца;
// // ownerPhone - телефон владельца;
// // ownerEmail - почта владельца;
// // numberOfTags - количество элементов массива в свойстве tags;
// // firstTag - первый элемент массива в свойстве tags;
// // lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// // 3-5
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

// // aptRating - рейтинг;
// // aptDescr - описание;
// // aptPrice - цена;
// // aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// // 3-6
// // Дополни код обновив значения свойств объекта apartment:

// // цену в свойстве price на 5000;
// // рейтинг квартиры в свойстве rating на 4.7;
// // имя владельца во вложенном свойстве name на "Henry Sibola";
// // массив тегов в свойстве tags добавив в конец строку "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// // 3-7
// // Добавь объекту apartment несколько новых свойств:

// // area - площадь в квадратных метрах, число 60;
// // rooms - количество комнат, число 3;
// // location - местоположение квартиры, обьект со следующими вложенными свойствами;
// // country - страна, строка "Jamaica";
// // city - город, строка "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// // 3-8
// // Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами.
// // Обязательно используй синтаксис коротких свойств.

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// // 3-9
// // Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password,
// // имена которых хранятся в переменных emailInputName и passwordInputName.

// // Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// // 3-10
// // Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//  keys.push(key) ;
//  values.push(apartment[key]);
// }

// // 3-11
// // Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// // 3-12
// // Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
// // Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//  if (object.hasOwnProperty(key)) {
//  propCount +=1;
//  }
// }
//   // Change code above this line
//   return propCount;
// }

// // 3-13
// // Перебери объект apartment используя метод Object.keys() и цикл for...of.
// // Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// // 3-14
// // Выполни рефакторинг функции (task 3-12) countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   const array = Object.keys(object);
//   let propCount = array.length;

//    return propCount;
//   // Change code above this line
// }

// // 3-15
// // Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств.
// // Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // 3-16
// // Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника,
// // а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// // Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   	const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// // 3-17
// // Перебери массив объектов colors используя цикл for...of.
// // Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {

// 	hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// // 3-18
// // Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// // Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// // Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//    return product.price;
//    }
//   }
//   return null;
//   // Change code above this line
// }



// // 3-19 - 
// // Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// // Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// // Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.


// // !!!! пересмотреть более краткое решение !!!!
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       values.push(Object.values(product)[Object.keys(product).indexOf(propName)]);
//     }
//   }
//   return values;
//   // Change code above this line
// }

// 3-20
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.



console.log(getAllPropValues("category"));
console.log(getAllPropValues("name"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("quantity"));
