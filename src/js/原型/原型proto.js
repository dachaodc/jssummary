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

function Person(){
}
var person1 = new Person();

console.log(Object instanceof Function); // true
console.log(Function instanceof Object); // true

console.log(Object.prototype);
console.log(Object.prototype.__proto__);

console.log('-----------------------------------');

console.log(person1.__proto__ == Person.prototype);
console.log(person1.constructor == Person);
console.log(Person.__proto__ == Function.prototype);
console.log(Person.prototype.constructor == Person);
console.log(person1.__proto__.constructor == Person);
console.log(Person.prototype == person1.__proto__);


