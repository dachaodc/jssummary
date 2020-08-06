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

