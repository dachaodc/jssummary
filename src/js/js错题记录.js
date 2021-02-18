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






