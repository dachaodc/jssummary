/* 实现'zhaoyingchao'.repeate(n)重复n次进行输出*/

String.prototype.repeate = function (n) {
    var v = this.valueOf();
    var r = '';
    for (var i = 0; i < n; i++) {
        r += v;
    }
    return r
};


console.log('zhaoyingchao'.repeate(2));
console.log('-------------------------------');
console.log('zhaoyingchao'.repeate(10));
