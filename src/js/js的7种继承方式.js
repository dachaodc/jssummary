// 1.原型链继承
// 2.借用构造函数继承
// 3.组合继承(组合原型链继承和借用构造函数继承)
// 4.原型式继承
// 5.寄生式继承
// 6.寄生组合式继承

// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.conName = function () {
        console.log(this.name);
    }
}

// 一.原型链继承

