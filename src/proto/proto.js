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

if(!Array.isArray){
    Array.isArray = function(arg){
        return Object.prototype.toString.call(arg)==='[object Array]'
    }

}