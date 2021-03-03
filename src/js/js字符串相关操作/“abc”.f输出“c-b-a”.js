// 原型考察
String.prototype.f = function () {
    return this.split("").reverse().join("-");
};
console.log("abc".f());
