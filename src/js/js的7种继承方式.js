// 1.原型链继承
// 2.借用构造函数继承
// 3.组合继承(组合原型链继承和借用构造函数继承)
// 4.原型式继承
// 5.寄生式继承
// 6.寄生组合式继承
// 7.class 里的 extends继承

// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.conName = function () {
        console.log(this.name);
    }
}

Person.prototype.h = 180;

// 一.原型链继承
function Per(name) {
    this.name = name;
}

Per.prototype = new Person(); // 赋值给构造的原型，这样实例的__proto__就是Person对实例了

let per = new Per('zyc');
console.log(per instanceof Person);
console.log(per.h);

// 重点：让新实例的原型等于父类的实例。
// 优点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
// 缺点：1、新实例无法向父类构造函数传参。
// 　　　2、继承单一。
// 　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）


// 二.

