function isObject(value) {
    return value === Object(value);
}

console.log(isObject([])); // true
console.log(isObject(true)); // false
console.log([] instanceof Object);

console.log('---------------------------------');

function DC() {
    var dcName = 'zhaoyingchao';
    console.log('我是zyc');
}

// var cc = new DC();
// cc();

// var dd = new Object();
// dd.constructor = DC;
// dd();


class ee extends DC {
}

console.log(ee);
