// 1.Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Решение:
// В JavaScript все массивы изначально динамические (изменяют свою длину). Элементы массива могут быть разных типов (т.к. JS не типизированный язык).
// Совмещает в себе следующие стрнуктуры данных:
// 1. Массив (одномерный и многомерный)
// 2. Динамические массивы
// 3. Связный список
// 4. Стек
// 5. Очередь
// 6. Обладают свойствами объектов

// 2. Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

// function logger() {
//     console.log(`I output only external context: ${this.item}`);
// }

// const obj = { item: "some value" };

// Решение:
// const result = logger.apply(obj)

// console.log(result)

// const result2 = logger.call(obj)

// console.log(result)

// const result3 = logger.bind(obj)

// console.log(result())

// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.
// - Создайте массив строк и объедините их в одну строку.
// - Найдите максимальный и минимальный элементы в массиве чисел.

// Решение:

// - Создайте массив чисел и найдите его сумму
// const array = [2, 3, 6, 9, 15];

// const sum = (array) => {
//   let result = 0;
//   for (let value of array) {
//     result += value;
//   }
//   return result;
// };
// console.log(sum(array));

// - Создайте массив строк и объедините их в одну строку.

// const array = ['I', 'learn', 'JavaScript', '!'];

// const sumStrings = (array) => {
//   return array.join(' ');
// };
// console.log(sumStrings(array));

// - Найдите максимальный и минимальный элементы в массиве чисел.

// const array = [1, 12, 3, 6, 9, 0, -3, 15, 6, 30, 23];

// const maxValue = (array) => {
//   let result = array[0];
//   for (let i = 0; i <= array.length - 1; i++) {
//     array[i] > result ? (result = array[i]) : null;
//   }
//   return result;
// };

// console.log(maxValue(array));

// const minValue = (array) => {
//   let result = array[0];
//   for (let i = 0; i <= array.length - 1; i++) {
//     array[i] < result ? (result = array[i]) : null;
//   }
//   return result;
// };
// console.log(minValue(array));

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.

// Решение:

// const array = []

// array.push('firstElement')
// array.push('nextElement')
// array.push('nextElement')
// array.push('nextElement')
// array.pop()
// array.pop()
// array.pop()

// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

// Решение:
// const array = []

// array.push('firstElement')
// array.push('nextElement')
// array.push('nextElement')
// array.push('nextElement')
// array.shift()
// array.shift()
// array.shift()
