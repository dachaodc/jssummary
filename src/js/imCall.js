// var name = 'dc', age = 28;
// var obj = {
//     name: '小张',
//     objAge: this.age,
//     myFun: function () {
//         console.log(this.name + "的年龄是" + this.objAge);
//         console.log(this.name + "的年龄是" + this.age)
//     }
// };
//
// console.log(obj.objAge);
// obj.myFun();
//
// // ---------------------------------------------
//
// var myRealName = 'zyc';
//
// function showMyRealName() {
//     console.log(this.myRealName);
//     console.log(myRealName);
// }
//
// showMyRealName();

// 手写call
// Function.prototype.myCall = function (thisArg, ...args) {
//     const fn = Symbol('fn');          // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
//     thisArg = thisArg || window;                 // 若没有传入this, 默认绑定window对象
//     thisArg[fn] = this;                          // this指向调用call的对象,即我们要改变this指向的函数
//     const result = thisArg[fn](...args);         // 执行当前函数
//     delete thisArg[fn];                          // 删除我们声明的fn属性
//     return result                                // 返回函数执行结果
// };
//
// const obj = {
//     name: '写代码像蔡徐抻'
// };
//
// //变更函数调用者示例
// function foo() {
//     console.log(this.name)
// }
//
// //测试
// foo.myCall(obj);     // 输出'写代码像蔡徐抻'


// call做了什么:

// 将函数设为对象的属性
// 执行&删除这个函数
// 指定this到函数并传入给定参数执行函数
// 如果不传入参数，默认指向为 window

// 模拟 call bar.mycall(null);
//实现一个call方法：
Function.prototype.myCall = function (context) {
    //此处没有考虑context非object情况
    context.fn = this;
    let args = [];
    for (let i = 1, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }
    context.fn(...args);
    let result = context.fn(...args);
    delete context.fn;
    return result;
};

