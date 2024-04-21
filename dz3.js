// Задание 1 - Создать объект counter всеми возможными способами
// Решение:
// const counter = {}

// function Counter (count)  {
//     this.count = count
// };

// const counter = new Counter({});

// class Counter {
// constructor(count) {
//     this.count = count
// }
// };

// const counter = new Counter(0);

// const counter = Object.create(proto);
// const counter = Object.assign({}, obj);

// Задание 2 - Скопировать объект counter всеми возможными способами
// Решение:
// const obj = {};
// const copyOfObj = {...obj}
// const copyOfObj = Object.assign({}, obj)

// _.cloneDeep(obj); // Нужно подключить библиотеку lodash

// const cloneDeep = JSON.parse(JSON.stringify(obj));

// const cloneDeep = structuredClone(obj);

// Задание 3 - Создать функцию makeCounter всеми описанными и возможными способами // ВЫПОЛНЕНО

// Решение:
//     1)  function declaration

// function makeCounter () {
//     return
// }

//     2)   function Expression

// let makeCounter = function () {
//     return
// }

//     3)   named function expressions

// let makeCounter = function counter () {
//     return
// }

//     4)   arrow functions

// let makeCounter =  () => {
//     return
// }

//    5)   constructor functions

// function MakeCounter () {
//     return
// }

// Задание 4 - прочитать и описать работу глобальной функции structuredClone()
// Решение:

//          structuredClone - глобальный метод создает глубокий клон объекта, так же позволяет переносить объект.
//          structuredClone(value, options)
//          value - объект который нужно клонировать.
//          options - необязательный параметр, объект со свойством transfer
//          transfer - массив объектов которые будут перемещены, а не клонированы? в возвращаемый объект, при возврате, переносимый оригинал удаляется.
//          Возвращает глубокую копию value.
//          DataCloneError - вызывается в случае не возможности сериализации входных данных.
