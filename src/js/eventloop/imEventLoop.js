// https://juejin.im/post/5c3d8956e51d4511dc72c200?utm_source=gold_browser_extension#comment

// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0);
// Promise.resolve().then(function () {
//     console.log('promise1');
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');

// 首先我们划分几个分类：
//
// #第一次执行：
// Tasks：run script、 setTimeout callback
// Microtasks：Promise then
// JS stack: script
// Log: script start、script end。
//
// 执行同步代码，将宏任务（Tasks）和微任务(Microtasks)划分到各自队列中。
//
// #第二次执行：
// Tasks：run script、 setTimeout callback
// Microtasks：Promise2 then
// JS stack: Promise2 callback
// Log: script start、script end、promise1、promise2
// 执行宏任务后，检测到微任务(Microtasks)队列中不为空，执行Promise1，执行完成Promise1后，调用Promise2.then，放入微任务(Microtasks)队列中，再执行Promise2.then。
//
// #第三次执行：
// Tasks：setTimeout callback
// Microtasks：
// JS stack: setTimeout callback
// Log: script start、script end、promise1、promise2、setTimeout
//
// 当微任务(Microtasks)队列中为空时，执行宏任务（Tasks），执行setTimeout callback，打印日志。
//
// #第四次执行：
// Tasks：setTimeout callback
// Microtasks：
// JS stack:
//     Log: script start、script end、promise1、promise2、setTimeout
//
// 清空Tasks队列和JS stack。
// 以上执行帧动画可以查看Tasks, microtasks, queues and schedules
// 或许这张图也更好理解些。

// console.log('script start');
// async function async1() {
//     await async2();
//     console.log('async1 end')
// }
//
// async function async2() {
//     console.log('async2 end')
// }
//
// async1();
// setTimeout(function () {
//     console.log('setTimeout')
// }, 0);
// new Promise(resolve => {
//     console.log('Promise');
//     resolve()
// })
//     .then(function () {
//         console.log('promise1')
//     })
//     .then(function () {
//         console.log('promise2')
//     });
// console.log('script end');


// const fs = require('fs');
// function someAsyncOperation(callback) {
//     // Assume this takes 95ms to complete
//     fs.readFile('/path/to/file', callback);
// }
// const timeoutScheduled = Date.now();
// setTimeout(() => {
//     const delay = Date.now() - timeoutScheduled;
//     console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);
// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//     const startCallback = Date.now();
//     // do something that will take 10ms...
//     while (Date.now() - startCallback < 10) {
//         // do nothing
//     }
// });

// console.log('start');
// setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(function () {
//         console.log('promise1')
//     })
// }, 0);
// setTimeout(() => {
//     console.log('timer2');
//     Promise.resolve().then(function () {
//         console.log('promise2')
//     })
// }, 0);
// Promise.resolve().then(function () {
//     console.log('promise3')
// })
// console.log('end');

console.log('1');

setTimeout(function () {
    console.log('2');
    process.nextTick(function () {
        console.log('3');
    })
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
})
process.nextTick(function () {
    console.log('6');
})
new Promise(function (resolve) {
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
})

setTimeout(function () {
    console.log('9');
    process.nextTick(function () {
        console.log('10');
    })
    new Promise(function (resolve) {
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    })
})
