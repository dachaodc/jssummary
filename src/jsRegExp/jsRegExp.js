/* js 正则表达式 */
var regex1 = new RegExp('xyz', 'i');
// 等价于
var regex2 = /xyz/i;

console.log('----------------------------------------');

var r = /abc/igm;

console.log(r.ignoreCase); // true
console.log(r.global); // true
console.log(r.multiline); // true
console.log(r.flags); // 'gim'

console.log(r.lastIndex); // 0
console.log(r.source); // "abc"

console.log('-----------------regexp---test()--------------------');

var rr = /x/g;
var ss = '_x_x';

console.log(rr.lastIndex); // 0
console.log(rr.test(ss)); // true

console.log(rr.lastIndex); // 2
console.log(rr.test(ss)); // true

console.log(rr.lastIndex); // 4
console.log(rr.test(ss)); // false

console.log('-----------------regexp---exec()--------------------');

var rExe = /a(b+)a/;
var arr = rExe.exec('_abbba_aba_');

console.log(arr);// ["abbba", "bbb"]

console.log(arr.index); // 1
console.log(arr.input); // "_abbba_aba_"

console.log('-----------------regexp---exec()------g--------------');

var reg = /a/g;
var str = 'abc_abc_abc';

var r1 = reg.exec(str);
console.log(r1); // ["a"]
console.log(r1.index); // 0
console.log(reg.lastIndex); // 1

var r2 = reg.exec(str);
console.log(r2); // ["a"]
console.log(r2.index); // 4
console.log(reg.lastIndex); // 5

var r3 = reg.exec(str);
console.log(r3); // ["a"]
console.log(r3.index); // 8
console.log(reg.lastIndex); // 9

var r4 = reg.exec(str);
console.log(r4); // null
console.log(reg.lastIndex); // 0


console.log('-------------string----regexp-----------------');

// 字符串的实例方法之中，有4种与正则表达式有关。
// String.prototype.match()：返回一个数组，成员是所有匹配的子字符串。
// String.prototype.search()：按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
// String.prototype.replace()：按照给定的正则表达式进行替换，返回替换后的字符串。
// String.prototype.split()：按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。





