// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

// 模拟 Object.create

// function create(proto) {
//     function F() {
//     }
//
//     F.prototype = proto;
//
//     return new F();
// }

function dc() {
    var name = 'dc';
    var age = '18'
};

function create() {

    dc.prototype = this.prototype;

    return new dc();

}

console.log(create());