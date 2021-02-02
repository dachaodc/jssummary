/**
 * 闭包实现私有化
 * @constructor
 */
function Person() {
    var name = 'cxk';
    this.getName = function () {
        return name;
    };
    this.setName = function (value) {
        name = value;
    }
}

const cxk = new Person();

console.log(cxk.getName()); //cxk
cxk.setName('jntm');
console.log(cxk.getName()); //jntm
console.log(name); //name is not defined