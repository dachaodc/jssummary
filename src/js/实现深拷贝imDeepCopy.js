// const isType = (obj, type) => {
//     if (typeof obj !== 'object') return false;
//     const typeString = Object.prototype.toString.call(obj);
//     let flag;
//     switch (type) {
//         case 'Array':
//             flag = typeString === '[object Array]';
//             break;
//         case 'Date':
//             flag = typeString === '[object Date]';
//             break;
//         case 'RegExp':
//             flag = typeString === '[object RegExp]';
//             break;
//         default:
//             flag = false;
//     }
//     return flag;
// };
//
// const getRegExp = re => {
//     var flags = '';
//     if (re.global) flags += 'g';
//     if (re.ignoreCase) flags += 'i';
//     if (re.multiline) flags += 'm';
//     return flags;
// };
//
// /**
//  * deep clone
//  * @param  {[type]} parent object 需要进行克隆的对象
//  * @return {[type]}        深克隆后的对象
//  */
// const clone = parent => {
//     // 维护两个储存循环引用的数组
//     const parents = [];
//     const children = [];
//
//     const _clone = parent => {
//         if (parent === null) return null;
//         if (typeof parent !== 'object') return parent;
//
//         let child, 原型;
//
//         if (isType(parent, 'Array')) {
//             // 对数组做特殊处理
//             child = [];
//         } else if (isType(parent, 'RegExp')) {
//             // 对正则对象做特殊处理
//             child = new RegExp(parent.source, getRegExp(parent));
//             if (parent.lastIndex) child.lastIndex = parent.lastIndex;
//         } else if (isType(parent, 'Date')) {
//             // 对Date对象做特殊处理
//             child = new Date(parent.getTime());
//         } else {
//             // 处理对象原型
//             原型 = Object.getPrototypeOf(parent);
//             // 利用Object.create切断原型链
//             child = Object.create(原型);
//         }
//
//         // 处理循环引用
//         const index = parents.indexOf(parent);
//
//         if (index != -1) {
//             // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
//             return children[index];
//         }
//         parents.push(parent);
//         children.push(child);
//
//         for (let i in parent) {
//             // 递归
//             child[i] = _clone(parent[i]);
//         }
//
//         return child;
//     };
//     return _clone(parent);
// };
//
//
// function person(pname) {
//     this.name = pname;
// }
//
// const Messi = new person('Messi');
//
// function say() {
//     console.log('hi');
// }
//
// const oldObj = {
//     a: say,
//     c: new RegExp('ab+c', 'i'),
//     d: Messi,
// };
//
// oldObj.b = oldObj;
//
// const newObj = clone(oldObj);
// console.log(newObj.a, oldObj.a); // [Function: say] [Function: say]
// console.log(newObj.b, oldObj.b); // { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] } { a: [Function: say], c: /ab+c/i, d: person { name: 'Messi' }, b: [Circular] }
// console.log(newObj.c, oldObj.c); // /ab+c/i /ab+c/i
// console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: person] [Function: person]
//
// // 当然,我们这个深克隆还不算完美,
// // 例如Buffer对象、Promise、Set、Map可能都需要我们做特殊处理，另外对于确保没有循环引用的对象，
// // 我们可以省去对循环引用的特殊处理，因为这很消耗时间，不过一个基本的深克隆函数我们已经实现了。

// function repeat(n) {
//     this.pro
//     if (!str) return;
//     let arr = str.split('');
//     for (let i = 0; i < n; i ++) {
//         for (let j = 0; j < arr.length; j ++) {
//             console.log(arr[j])
//         }
//     }
//
// }
// 'hello'.repeat(2)

// 2021 2 20 手动实现深拷贝
// function deepClone(target) {
//     // 定义一个变量
//     let result;
//     // 如果是一个对象的话
//     if (typeof target === 'object') {
//         if (Array.isArray(target)) {
//             result = [];
//             for (let index in target) {
//                 result.push(deepClone(target[index]));
//             }
//         } else if (target == null) {
//             return null;
//         } else if (target.constructor === RegExp) {
//             result = target;
//         } else {
//             // 普通对象 直接for in 循环，递归复制对象所有值
//             result = {};
//             for (let i in target) {
//                 result[i] = deepClone(target[i]);
//             }
//         }
//     } else {
//         // 不是对象，就是基本数据类型，
//         result = target;
//     }
//
//     return result;
// }
//
// // let tempArr = [1, 2, 3, 4, [[5, 6], 7]];
// // let tempArr = [1, 2, 3, 4, [{a:123}, 7]];
// let tempArr = new Date();
//
// console.log(deepClone(tempArr));

// 20210228 实现深拷贝
function deepCopy(target) {
    let result;
    if (typeof target === 'object') {
        result = [];
        if (Array.isArray(target)) {
            for (let index in target) {
                console.log(index);
                result.push(deepCopy(target[index]));
            }
        } else if (target.constructor === RegExp) {
            result = target;
        } else if (target === null) {
            result = null;
        } else {
            result = {};
            // 普通对象
            for (let key in target) {
                console.log(key);
                if (target.hasOwnProperty(key)) {
                    result[key] = deepCopy(target[key]);
                }
            }
        }
    } else {
        result = target;
    }
    return result;
}

// let tempObj = [5,7,8];
let tempObj = { name:'zyc', age: 29 };

console.log(deepCopy(tempObj));



