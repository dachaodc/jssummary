let compute = function* (a, b) {
    let sum = a + b;
    yield console.log(sum);
    let c = a - b;
    yield console.log(c);
    let d = a * b;
    yield console.log(d);
    let e = a / b;
    console.log(e);
};
// 执行一下这个函数得到 Generator 实例
let generator = compute(4, 2);
// 要使得函数中封装的代码逻辑得到执行，还得需要调用一次next方法。
generator.next();

generator.next();

// ----------------------------------

function* getNumbers(num) {
    for (let i = 0; i < num; i++) {
        yield i
    }
    return 'ok';
}

const gen = getNumbers(10);

function next() {
    let res = gen.next();
    console.log(res);
    if (res.done) {
        console.log('done');
    } else {
        setTimeout(next, 300)
    }
}

next();

// ------------------------------------------------

let compute2 = function* (a, b) {
    let foo = yield a + b;
    console.log(foo);
};

let generator2 = compute2(4, 2);
generator2.next(); // {value: 6, done: false}
generator2.next("Hello world!"); //Hello world! {value: undefined, done: true}


// -------------------------------------------------

function* loop(list, max = Infinity) {
    for (let i = 0; i < max; i++) {
        yield list[i % list.length];
    }
}

function toggle(...actions) {
    let gen = loop(actions);
    //错误写法：先调用loop(actions).next();
    return function (...args) {
        return gen.next().value.apply(this, args);
    }
}

// switcher.addEventListener('click', toggle(
//     e => e.target.className = 'off',
//     e => e.target.className = 'on'
// ));

switcher.addEventListener('click', toggle(
    e => e.target.className = 'off',
    e => e.target.className = 'warn',
    e => e.target.className = 'on'
));

