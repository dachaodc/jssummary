// async function testAsync() {
//     return "hello async";
// }
//
// const result = testAsync();
// console.log(result);
//
// testAsync().then(v => {
//     console.log(v);    // 输出 hello async
// }).then(v => {
//     console.log(v);
// });
//
// console.log('-------------------------------------');
//
//
// function getSomething() {
//     return "something";
// }
//
// async function testAsync() {
//     return Promise.resolve("hello async");
// }
//
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
// }
//
// test();

console.log('-------------------------------------');

function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

takeLongTime().then(v => {
    console.log("got", v);
});

console.log('-----------------------------------');

function takeLongTime1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTime1();
    console.log(v);
}

function test1() {
    const v = takeLongTime1();
    console.log(v);
}

test();

test1();







