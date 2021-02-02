let zyc = {
    "name": '',
    "age": ''
};

Object.keys(zyc).map((key, index) => {
    Object.defineProperty(zyc, key, {
        get() {

        },
        set(v) {
            console.log(v)
        }
    })
});

zyc.name = 'zyc';
zyc.age = 28;


// const input = document.getElementById('input');
// const p = document.getElementById('p');
const obj = {};

const newObj = new Proxy(obj, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(target, key, value, receiver);
        if (key === 'text') {
            // input.value = value;
            // p.innerHTML = value;
        }
        return Reflect.set(target, key, value, receiver);
    },
});

newObj.text = 'zyc';

// input.addEventListener('keyup', function (e) {
//     newObj.text = e.target.value;
// });
