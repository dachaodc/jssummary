// 写出两个循环引用的例子，有什么问题？以及怎么解决？
let objA = {
    "name": 'dc',
    "age": '29',
    "ref": objA
};

let objB = {
    "name": 'dc',
    "age": '29',
    "ref": objB.name
};



