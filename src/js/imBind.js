// 实现bind要做什么

// 返回一个函数，绑定this，传递预置参数
// bind返回的函数可以作为构造函数使用。故作为构造函数时应使得this失效，但是传入的参数依然有效


// mdn的实现
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {
            },
            fBound = function () {
                // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
                return fToBind.apply(this instanceof fBound
                    ? this
                    : oThis,
                    // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        // 维护原型关系
        if (this.prototype) {
            // Function.prototype doesn't have a prototype property
            fNOP.prototype = this.prototype;
        }
        // 下行的代码使fBound.prototype是fNOP的实例,因此
        // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
        fBound.prototype = new fNOP();

        return fBound;
    };
}