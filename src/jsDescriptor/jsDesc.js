var obj = {p: 'a'};

var desc = Object.getOwnPropertyDescriptor(obj, 'p');
console.log(desc);
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

var obj2 = Object.defineProperties({}, {
    p1: {value: 1, enumerable: true},
    p2: {value: 2, enumerable: false}
});

var propertyNames = Object.getOwnPropertyNames(obj2);
// ["p1", "p2"]
console.log(propertyNames);

var desc2 = Object.getOwnPropertyDescriptor(obj2, 'p2');
console.log(desc2);

console.log('-----------------------------------------------------------');

console.log(Object.keys([])); // []
console.log(Object.getOwnPropertyNames([])); // [ 'length' ]

console.log(Object.keys(Object.prototype)); // []
console.log(Object.getOwnPropertyNames(Object.prototype));

console.log('--------------------------------------------------------------');

var obj3 = Object.defineProperty({}, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(obj3.p); // 123

obj3.p = 246;
console.log(obj3.p); // 123


console.log('--------------------------------------------------------------');


var obj4 = Object.defineProperties({}, {
    p1: {value: 123, enumerable: true},
    p2: {value: 'abc', enumerable: true},
    p3: {
        get: function () {
            return this.p1 + this.p2
        },
        enumerable: true,
        configurable: true
    }
});

console.log(obj4.p1); // 123

console.log(obj4.p2); // "abc"

console.log(obj4.p3); // "123abc"

// 判断是否可枚举
console.log(obj4.propertyIsEnumerable('p')); // true

console.log(obj4.propertyIsEnumerable('toString')); // false


console.log('---------------------obj5--------------------------');

var obj5 = {hello: 'lloll'};
console.log(Object.getOwnPropertyDescriptor(obj5, 'hello').value);


console.log('---------------------obj6--------------------------');

var proto = Object.defineProperty({}, 'foo', {
    value: 'a',
    writable: false
});

var obj6 = Object.create(proto);

obj6.foo = 'b';
console.log(obj6.foo); // 'a'


console.log('---------------------obj7--------------------------');

var proto7 = Object.defineProperty({}, 'foo', {
    value: 'a',
    writable: false
});

var obj7 = Object.create(proto7);
Object.defineProperty(obj7, 'foo', {
    value: 'b',
    writable: true
});

console.log(obj7.foo); // "b"

console.log('---------------------obj8------------------------');

var obj8 = {};

Object.defineProperty(obj8, 'x', {
    value: 123,
    enumerable: false
});

console.log(obj8.x);// 123

for (var key in obj8) {
    console.log(key);
}
// undefined

console.log(obj8);
console.log(Object.keys(obj8));  // []
console.log(JSON.stringify(obj8)); // "{}"


console.log('-----------------------obj9---------------------------');

var obj9 = Object.defineProperty({}, 'p', {
    value: 1,
    writable: false,
    enumerable: false,
    configurable: false  // configurable为false时，value、writable、enumerable和configurable都不能被修改了
});

Object.defineProperty(obj9, 'p', {value: 2});
// TypeError: Cannot redefine property: p

Object.defineProperty(obj9, 'p', {writable: true});
// TypeError: Cannot redefine property: p

Object.defineProperty(obj9, 'p', {enumerable: true});
// TypeError: Cannot redefine property: p

Object.defineProperty(obj9, 'p', {configurable: true});
// TypeError: Cannot redefine property: p










