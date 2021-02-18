// 转为驼峰
var s1 = "get-element-by-id";

// 转化为 getElementById

var f = function (s) {
    return s.replace(/-\w/g, function (x) {
        console.log(x);
        const v = x.slice(1).toUpperCase();
        console.log(v);
        return v;
    })
};


console.log(f(s1));

// string max chart count
let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

// 使其按照一定的次序排列
// js中正则表达式\1表示第一个捕获，\1捕获一个字符串中最长相同子串
str = str.split('').sort().join('');
// "aaabbbbbcccccccc"

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re, ($0, $1) => {
    if (num < $0.length) {
        num = $0.length;
        char = $1;
    }
});
console.log(`字符最多的是${char}，出现了${num}次`);


//捕获一个三位的数字，\1就表示这第一个捕获
var str2 = '188-384-845-845';
var reg2 = /(\d{3})\-\1+/g;
var arr2 = str2.match(reg2);
console.log(arr2);   //["845-845"]

//寻找连续相同的最长子串
var str3 = "ABCCCDDDDDEFFFFFFFFFFFFGGGGHHIIII";
var reg3 = /(\w)\1+/g;
var arr3 = str3.match(reg3);
console.log(arr3); // ["CCC", "DDDDD", "FFFFFFFFFFFF", "GGGG", "HH", "IIII"]

var maxlength = 0;
var maxchar = '';
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i].length > maxlength) {
        maxlength = arr3[i].length;
        maxchar = arr3[i]
    }
}
console.log(maxchar, maxlength);  //FFFFFFFFFFFF 12

// 字符串查找
// 请使用最基本的遍历来实现判断字符串 a 是否被包含在字符串 b 中，并返回第一次出现的位置（找不到返回 -1）。

// a = '34';
// b = '1234567'; // 返回 2
// a = '35';
// b = '1234567'; // 返回 -1
// a = '355';
// b = '12354355'; // 返回 5
// console.log(isContain(a, b));
//
// function isContain(a, b) {
//     for (let i in b) {
//         if (a[0] === b[i]) {
//             let tmp = true;
//             for (let j in a) {
//
//                 console.log(~~i);
//                 console.log(~~j);
//                 console.log(b[~~i + ~~j]);
//
//                 if (a[j] !== b[~~i + ~~j]) {
//                     tmp = false;
//                 }
//             }
//             if (tmp) {
//                 return i;
//             }
//         }
//     }
//     return -1;
// }


a = '34';
b = '111111234567'; // 返回 7

console.log(judgeContain());

function judgeContain() {
    let index = -1;
    if (!a) return index;

    for (let i = 0; i < b.length; i++) {
        let charB = b.charAt(i);
        let aF = a.charAt(0);
        if (aF === charB) {
            let boo = true;
            let k = i;

            for (let j = 0; j < a.length; j++) {
                if (a.charAt(j) !== b.charAt(k++)) {
                    boo = false;
                }
            }
            if (boo) {
                index = i;
            }
        }
    }

    return index;
}

