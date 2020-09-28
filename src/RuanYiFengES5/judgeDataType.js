// var type = function (o) {
//     var s = Object.prototype.toString.call(o);
//     return s.match(/\[object (.*?)\]/)[1].toLowerCase();
// };
//
// console.log(type({})); // "object"
// console.log(type([])); // "array"
// console.log(type(5)); // "number"
// console.log(type(null)); // "null"
// console.log(type()); // "undefined"
// console.log(type(/abcd/)); // "regex"
// console.log(type(new Date())); // "date"


var type = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp',
    'Date'
].forEach(function (t) {
    type['is' + t] = function (o) {
        console.log(t.toLowerCase());
        return type(o) === t.toLowerCase();
    };
});

console.log(type.isObject({})); // true
console.log(type.isNumber(NaN)); // true
console.log(type.isRegExp(/abc/)); // true
console.log(type.isNull(null)); // true

function dc() {
}

console.log(type.isFunction(dc)); // true

console.log(type.isDate(new Date())); // true
