// 1.var dd; console.log(dd == undefined) true
// null == undefined true

var dcdc;
console.log(dcdc); // undefined
console.log(zyc);  // undefined
var zyc;
// console.log(zycdc); // ReferenceError: zycdc is not defined
let cc = null;
console.log(cc);

console.log('----------------------------');

// 2.下面哪个是错误的？ A
// A. [] == true
// B. !![] == true
// C. null == undefined
// D. new Boolean() == false

console.log([] == true); // false 比较运算符 []空数组 转为 0  true 转为 1
console.log(!![] == true); // true 转为boolean,空数组转为布尔为true
console.log(null == undefined); // true  比较运算符 都转为 0
console.log(new Boolean() == false); // true

console.log('-------------js里的6种假值---------------');
// js里的6种假值 false null undefined '' 0 NaN
console.log( false == null );      // false
console.log( false == undefined ); // false
console.log( false == 0 );         // true
console.log( false == '' );        // true
console.log( false == NaN );       // false

console.log( null == undefined ); // true
console.log( null == 0 );         // false
console.log( null == '' );        // false
console.log( null == NaN );       // false

console.log( undefined == 0);   // false
console.log( undefined == '');  // false
console.log( undefined == NaN); // false

console.log( 0 == '' );  // true
console.log( 0 == NaN ); // false
// 1.false 除了和自身比较为 true 外，和 0，"" 比较也为 true
// 2.null 只和 undefined 比较时为 true， 反过来 undefined 也仅和 null 比较为 true，没有第二个
// 3.0 除了和 false 比较为 true，还有空字符串 ''" 和空数组 []比较也为true
// 4.空字符串 '' 除了和 false 比较为 true，还有一个数字 0
console.log('-------------js里的6种假值输出--false----判断是否为假值---------');
console.log(new Boolean(false));
console.log(new Boolean(null));
console.log(new Boolean(undefined));
console.log(new Boolean(''));
console.log(new Boolean(0));
console.log(new Boolean(NaN));
console.log('-------------js里的非6种假值输出----true-----------');
console.log(new Boolean({}));
console.log(new Boolean([]));


console.log('----------------------------');

// 3.下面描述中，关于js函数定义，正确的是 C

// A.function add(a,b) { return a + b; } 函数表达式

// B.var add = new Function("a", "b", return a + b) 函数表达式

// C.function add(a,b) { return a + b; } 函数声明

// D.var add = new Function("a", "b", return a + b); 函数声明

// 一.函数声明语法定义   没有等号 =
// function sum(num1, num2) { return num1 + num2 }

// 二.函数表达式定义函数 有等号 最后有分号
// 1. var sum = function(num1, num2) { return num1 + num2 };
// 2. var sum = new Function("num1", "num2", return "num1 + num2");


// 4. typeof Date.now() 的值是： C 返回时间戳

// A. "date"
// B. "object"
// C. "number"
// D. "error"

// 5.以下符合ES6写法的有：（C）

// A. class Foo {
//    constructor() {
//          return Object.create(null);
//    }
// }
// Foo()

// B. var m = 1; export m;

// C. export var firstName = 'Michael';

// D. 在A模块中export{readFile}后，在B模块中import readfile from 'A'可以获取到readFile

// A中 Foo 是 class类，必须使用new调用，否则会报错；
// B中 export命令规定的是对外的接口，必须与模块内部的变量建立一一对应的关系；
// 写法一
// export var m = 1;
// 写法二
// var m = 1;
// export {m};
// 写法三
// var n = 1;
// export { n as m };
// D中 export 对象，需要用解构import












