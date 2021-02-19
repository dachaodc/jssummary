var person = {
    name: "Messi",
    age: 29,
    profession: "football player"
};
console.log(person.hasOwnProperty("name")); //true
console.log(person.hasOwnProperty("hasOwnProperty")); //false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); //true


console.log(Object.prototype);

console.log(Object.__proto__);


console.log('-----------------------------------');

const value = [];
const value1 = {};

console.log(Array.isArray(value));
console.log(Array.isArray(value1));

if(!Array.isArrayCo){
    Array.isArrayCo = function(arg){
        return Object.prototype.toString.call(arg)==='[object Array]'
    }
}

console.log(Array.isArrayCo(value));

console.log('-----------------------------------');

// Javascript规定，每一个函数都有一个prototype对象属性，指向另一个对象（原型链上面的）。
// prototype(对象属性)的所有属性和方法，都会被构造函数的实例继承。这意味着，我们可以把那些不变(公用)的属性和方法，直接定义在prototype对象属性上。
// prototype就是调用构造函数所创建的那个实例对象的原型（proto）。
// prototype可以让所有对象实例共享它所包含的属性和方法。也就是说，不必在构造函数中定义对象信息，而是可以直接将这些信息添加到原型中

// 实例对象与原型之间的连接，叫做原型链。proto( 隐式连接 )

// 内部原型(proto)和构造器的原型（prototype）
// 1、每个对象都有一个proto属性,原型链上的对象正是依靠这个属性连结在一起
// 2、作为一个对象，当你访问其中的一个属性或方法的时候，如果这个对象中没有这个方法或属性，
// 那么Javascript引擎将会访问这个对象的proto属性所指向上一个对象，并在那个对象中查找指定的方法或属性，
// 如果不能找到，那就会继续通过那个对象的proto属性指向的对象进行向上查找，直到这个链表结束。

// JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做 __proto__ 的内置属性，用于指向创建它的构造函数的原型对象。

// 原型对象是它本身构造的


function Person(){
}
var person1 = new Person();

console.log(Object instanceof Function); // true
console.log(Function instanceof Object); // true

console.log(Object.prototype);
console.log(Object.prototype.__proto__);

console.log('-----------------------------------');


console.log(person1.__proto__);
console.log(Person.prototype);


console.log(person1.__proto__ == Person.prototype);
console.log(person1.constructor == Person);
console.log(Person.__proto__ == Function.prototype);
console.log(Person.prototype.constructor == Person);
console.log(person1.__proto__.constructor == Person);
console.log(Person.prototype == person1.__proto__);

console.log("原型链解释------->");
console.log(person1.__proto__); // Person {}
console.log(Person.prototype.__proto__); // {}
console.log({}.__proto__);

console.log('----------------------练习一------------------------');

function A(){
}
function B(a){
    this.a = a;
}
function C(a){

    if(a){
        this.a = a;
    }
}
A.prototype.a = 1;

B.prototype.a = 1;

C.prototype.a = 1;


console.log(new A().a);  //1

console.log(new B().a);//undefined

console.log(new C(2).a);//2

console.log('--------------练习二---------------');

function Fun(){
    // 这个没有this. 所以掉不到
    var getName = function(){
        console.log(1);
    }
    return this;
}
Fun.getName = function(){
    console.log(2);
}
Fun.prototype.getName = function(){
    console.log(3);
}

// 优先级没有 var getName 高，也执行不了
function getName(){
    console.log(5);
}

var getName = function(){
    console.log(4);
}

// Fun().getName(); // 4 window.getName()
getName(); //4      // window.getName()
new Fun().getName();//3 // 原型的getName
new new Fun().getName();//3

console.log(new Fun());


