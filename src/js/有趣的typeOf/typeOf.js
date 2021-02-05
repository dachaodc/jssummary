// 想一想 下面的输出结果，分别是多少？

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof {});

console.log(typeof []);

console.log(typeof "");

console.log(typeof 0);

console.log(typeof true);

console.log(typeof new Date());

function f() {}
console.log(typeof f);

console.log(typeof new RegExp());

console.log(typeof typeof null);

console.log(typeof typeof undefined);

console.log(typeof typeof typeof null);

// object
// undefined
// object
// object
// string
// number
// boolean
// object
// function
// object
// string
// string
// string


