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

console.log('---------------------');

// 二.借用构造函数继承
function Der(name) {
    Person.call(this, 'dcdcdc');
    this.name = name;
}

let der = new Der('cdcdcd');
console.log(der instanceof Person);
console.log(der.h);

// 重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
// 　　　　特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
// 　　　　　　　2、解决了原型链继承缺点1、2、3。
// 　　　　　　　3、可以继承多个构造函数属性（call多个）。
// 　　　　　　　4、在子实例中可向父实例传参。
// 　　　　缺点：1、只能继承父类构造函数的属性。
// 　　　　　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
// 　　　　　　　3、每个新实例都有父类构造函数的副本，臃肿。

console.log('---------------------');

// 三.组合继承(组合原型链继承和借用构造函数继承)

function SubDer(name) {
    Person.call(this, "zycdc");
    this.name = name;
}

SubDer.prototype = new Person();
let subDer = new SubDer("xixi");
console.log(subDer.h);
console.log(subDer.name);
console.log(subDer.age);

// 重点：结合了两种模式的优点，传参和复用
// 　　　　特点：1、可以继承父类原型上的属性，可以传参，可复用。
// 　　　　　　　2、每个新实例引入的构造函数属性是私有的。
// 　　　　缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。

console.log('---------------------');

// 四.原型式继承
function content(obj) {
    function F() {
    }

    F.prototype = obj;
    return new F()
}

let p = new Person();
let r = content(p);
console.log(r.h);

// 重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
// 　　　　特点：类似于复制一个对象，用函数来包装。
// 　　　　缺点：1、所有实例都会继承原型上的属性。
// 　　　　　　　2、无法实现复用。（新实例属性都是后面添加的）

console.log('---------------------');

// 五.寄生式继承

function con(obj) {
    function F() {
    }

    F.prototype = obj;
    return new F();
}

function wrap(newO) {
    let o = con(newO);
    o.name = 'cc';
    return o;
}

let perper = new Person();
let o = wrap(perper);
console.log(o.h);

// 　重点：就是给原型式继承外面套了个壳子。
// 　　　　优点：没有创建自定义类型，因为只是套了个壳子返回对象，这个函数顺理成章就成了创建的新对象。
// 　　　　缺点：没用到原型，无法复用。

console.log('---------------------');

// 六.寄生组合式继承

// 寄生：在函数内返回对象然后调用
// 组合：1.函数的原型等于另一个实例 2.在函数中用apply或者call引入另一个构造函数，可传参　

function contentCon(obj) {
    function F() {
    }

    F.prototype = obj;
    return new F();
}

function SubCC() {
    Person.call(this);
}


let cc = contentCon(Person.prototype);
SubCC.prototype = cc;
cc.constructor = SubCC;

let subcc = new SubCC();
console.log(subcc.h);
console.log(subcc.constructor);

// 重点：修复了组合继承的问题

console.log('---------------------');

// 七.面向对象class类继承
class DClass {
   name = "dc";
   age = 18;
}

class SubClass extends DClass{}

let subClass = new SubClass();
console.log(subClass.age);
console.log(subClass.name);










