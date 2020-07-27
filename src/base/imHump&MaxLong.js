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





