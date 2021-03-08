// 写出两个循环引用的例子，有什么问题？以及怎么解决？
// eg: 1
function circularReference() {
    let obj1 = {};
    let obj2 = {
        b: obj1,
    };
    obj1.a = obj2;
    console.log(obj1); // { a: { b: [Circular] } }
    // console.log(JSON.stringify(obj1));
}

circularReference();

// eg: 2
let objA = {
    name: 'A'
};

let objB = {
    name: 'B'
};

objA.child = objB;
objB.parent = objA;

console.log(objA);

console.log('--------------解决方案---类似深拷贝，有循环引用的地方值置为$----------');
console.log('------https://link.zhihu.com/?target=https%3A//github.com/douglascrockford/JSON-js---------');

var peo = {
    var: 'foo'
};
var man = peo;
var wm = new WeakMap();
wm.set(peo, 'some value');
console.log(wm.has(man), wm.get(man));

function decycle(target) {
    var map = new WeakMap()

    function _cycle(obj) {
        if (!map.has(obj)) {
            map.set(obj, obj)
        }
        let keys = Object.keys(obj)
        for (let i = 0, len = keys.length; i < len; i++) {
            if (typeof obj[keys[i]] === 'object') {
                if (map.has(obj[keys[i]])) {
                    obj[keys[i]] = '$'
                    continue
                } else {
                    map.set(obj[keys[i]], obj[keys[i]])
                }
                _cycle(obj[keys[i]])
            }
        }
    }

    _cycle(target)
}





