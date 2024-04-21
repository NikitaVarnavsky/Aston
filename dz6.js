// 1)
// let promiseTwo = new Promise((resolve, reject) => {
//    resolve("a");
// });

// promiseTwo
// .then((res) => {
//    return res + "b"; // a + b т.к. передается resolve = a
// })
// .then((res) => {
//    return res + "с"; // ab + c т.к. передается resolve = ab
// })
// .finally((res) => {
//    return res + "!!!!!!!"; // не прибавляет т.к. finally не принимает аргументов
// })
// .catch((res) => {
//    return res + "d"; // не прибавляет т.к. нет reject
// })
// .then((res) => {
//    console.log(res); // выведит в консоль abc
// });

// 2)
// function doSmth() {
//    return Promise.resolve("123");
// }

// doSmth()
// .then(function (a) {
//    console.log("1", a); // 1 123 т.к. передается resolve 123
//    return a;
// })
// .then(function (b) {
//    console.log("2", b); // 2 123 т.к. из первого then возвращается 123
//    return Promise.reject("321");
// })
// .catch(function (err) {
//    console.log("3", err); 3 321 т.к. из предыдущего then возвращается reject = 321
// })
// .then(function (c) {
//    console.log("4", c); 4 undefined т.к. после выполнения catch цепочка вернулась в состояние resolve но у него нет значения потому что мы его не вернули и оно не определенно
// return c;
// });

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

// Решение:

// const array = [10, 12, 15, 21];

// const func = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 3000 * i);
//   }
// };

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

// Решение:

// await можно использовать вне функций async в модулях у которых есть дочерние модули. В этом случае родительский модуль будет ждать выполнения дочернего модуля и только после этого запустится сам, при этом остальные дочерние модули будут выполняться
