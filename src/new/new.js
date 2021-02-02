// new操作符做了这些事：

// 它创建了一个全新的对象
// 它会被执行[[Prototype]]（也就是__proto__）链接
// 它使this指向新创建的对象
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用

// objectFactory(name, 'cxk', '18')
// function objectFactory() {
//     const obj = new Object();
//     const Constructor = [].shift.call(arguments);
//     console.log(Constructor);
//
//     obj.__proto__ = Constructor.prototype;
//     console.log(obj.__proto__);
//
//     console.log(typeof Constructor);
//
//     const ret = Constructor.apply(obj, arguments);
//
//     return typeof ret === "object" ? ret : obj;
// }
//
// var arguments = {
//     0: '我',
//     1: '是bai',
//     2: '伪数组',
//     length: 3
// };
//
// console.log(objectFactory(arguments));


console.log('-----------------------------------');

// Array.prototype.testSlice = function () {
//     var start = 0;
//     var end = this.length;
//     if (arguments.length === 1) {
//         start = arguments[0]
//     } else if (arguments.length === 2) {
//         start = arguments[0];
//         end = arguments[1]
//     }
//     var arr = [];
//     for (var i = start; i < end; i++) {
//         arr.push(this[i]); //此时这个this为arguments
//         return arr
//     }
// };
// var arguments = {
//     0: '我',
//     1: '是bai',
//     2: '伪数组',
//     length: 3
// };
//
// console.log([].testSlice.call(arguments));

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// const person1 = new Person('Tom', 20);
// console.log(person1);


function myNew(constrc, ...args) {
    const obj = {}; // 1. 创建一个空对象
    obj.__proto__ = constrc.prototype; // 2. 将obj的[[prototype]]属性指向构造函数的原型对象
    // 或者使用自带方法：Object.setPrototypeOf(obj, constrc.prototype)
    const result = constrc.apply(obj, args); // 3.将constrc执行的上下文this绑定到obj上，并执行
    return result instanceof Object ? result : obj;  //4. 如果构造函数返回的是对象，则使用构造函数执行的结果。否则，返回新创建的对象
}

// 使用的例子：
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = myNew(Person, 'Tom', 20);
console.log(person1);  // Person {name: "Tom", age: 20}

console.log(person1.__proto__);
console.log(Person.prototype);
console.log(Person.prototype === person1.__proto__);
console.log(Person.prototype.constructor === Person);

console.log('------------------------');

// function Person() {
//     this.name;
// }
//
// Person.prototype.say = function () {
//     console.log("hello");
// };
//
// var person = new Person();
//
// console.log(Person.__proto__);
// console.log(Function.prototype);
//
// console.log(Person.prototype.__proto__);
// console.log(Object.prototype);
//
// console.log(person.__proto__);
// console.log(Person.prototype);
//
// console.log(Person.prototype.constructor);
// console.log(Person);


// new 的内部实现：
// 创建一个空对象，作为将要返回的对象实例。
// 将这个空对象的原型，指向构造函数的prototype属性。
// 将这个空对象赋值给函数内部的this关键字。
// 开始执行构造函数内部的代码。
// function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
//     // 将 arguments 对象转为数组
//     var args = [].slice.call(arguments);
//     // 取出构造函数
//     var constructor = args.shift();
//     // 创建一个空对象，继承构造函数的 prototype 属性
//     var context = Object.create(constructor.prototype);
//     // 执行构造函数
//     var result = constructor.apply(context, args);
//     // 如果返回结果是对象，就直接返回，否则返回 context 对象
//     return (typeof result === 'object' && result != null) ? result : context;
// }
//
// // 实例
// var actor = _new(Person, '张三', 28);
// console.log(actor);


// function _newObj(constructor, pram) {
//     let arrPrams = [].slice.call(arguments);
//     let cons = arrPrams.shift();
//     let context = Object.create(cons.prototype);
//     let obj = cons.apply(context, arrPrams);
//     return (typeof obj === 'object' && obj != null) ? obj : context
// }
//
// const newObj = _newObj(Person, 'zyc', '28');
//
// console.log(newObj);


// <input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
//     <script>
//     function validate(obj, lowval, hival){
//         if ((obj.value < lowval) || (obj.value > hival))
//             console.log('Invalid Value!');
//     }
//     </script>


// 2021 02 02
function _new(constructor, params) {
    let paramsArr = [].slice.call(arguments);
    constructor = paramsArr.shift();


};

















