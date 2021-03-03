// 调process(n)函数 处理 str = “abc/def/ghj/klm” 输出字符串，去掉对应的位置n的/
// eg: process(0)  输出 “abc/def/ghj/klm”
// eg: process(1)  输出 “abcdef/ghj/klm”
// eg: process(2)  输出 “abc/defghj/klm”

// 第一种方式 不太好
// let str = "abc/def/ghj/klm";
// function process(n) {
//     if (n < 1) return str;
//     let tempArr = [];
//     str.replace(/\//g, function () {
//         console.log(arguments);
//         tempArr.push(arguments);
//     });
//
//     let resultObj = tempArr[n - 1];
//     let resultStr = resultObj[2];
//     let resultStrIndex = resultObj[1];
//     let r = resultStr.split("");
//     r[resultStrIndex] = "";
//     return r.join("");
// }

// console.log(process(0));
// console.log(process(1));
// console.log(process(2));

// 利用indexOf
// let str2 = "abc/def/ghj/klm";
// function process2(n) {
//     if (n < 1) return str2;
//     console.log(str.indexOf("/"));
//
//
// }
//
// process2(str2);



// let str3 = "abc/def/ghj/klm";
// function process3(n) {
//     if (n < 1) return str3;
//     let arr = str3.split("");
//     arr.map((item, index) => {
//         if (item === '/' && (n - 1) === index) {
//             arr[index] = "";
//             return arr.join("");
//         }
//     });
// }
//
// console.log(process3(2));

// 小亮  版本
function process(n) {
    let regex = new RegExp(`^\\S{${n}}(\\/)?`);
    let str = "abc/def/ghj/klm";
    return str.replace(regex, function(a,b,c) {
        console.log(a,b,c);
        return b ? a.substr(0, a.length - 1) : a
    });
}

console.log(process(3));



