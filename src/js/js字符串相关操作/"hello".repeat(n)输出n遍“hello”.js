// 原型考察
String.prototype.repeatLocal = function (n) {
    let tempStr = '';
    let v = this.valueOf();
    for (let i = 0; i < n; i ++) {
        tempStr = tempStr.concat(v);
    }
    return tempStr
};

console.log("hello".repeatLocal(10));
