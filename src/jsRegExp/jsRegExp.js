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

var sMatch = '_x_x';
var rMatch1 = /x/;
var rMatch2 = /y/;

console.log(sMatch.match(rMatch1)); // ["x"]
console.log(sMatch.match(rMatch2)); // null

var sMatchG = 'abba';
var rMatchG = /a/g;

console.log(sMatchG.match(rMatchG));// ["a", "a"]
console.log(rMatchG.exec(sMatchG)); // [ 'a', index: 0, input: 'abba', groups: undefined ]
console.log(rMatchG.exec(sMatchG)); // [ 'a', index: 3, input: 'abba', groups: undefined ]
console.log(rMatchG.exec(sMatchG)); // null

// 设置正则表达式的lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始。

var rLastIndex = /a|b/g;
rLastIndex.lastIndex = 7;
console.log('xaxb'.match(rLastIndex)); // ['a', 'b']
rLastIndex.lastIndex; // 0


// 字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1。

'_x_x'.search(/x/);
// 1

// 字符串对象的replace方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容

'aaa'.replace('a', 'b'); // "baa"
'aaa'.replace(/a/, 'b'); // "baa"
'aaa'.replace(/a/g, 'b'); // "bbb"

// replace方法的一个应用，就是消除字符串首尾两端的空格。

var str = '  #id div.class  ';

str.replace(/^\s+|\s+$/g, '');
// "#id div.class"

// replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

// $&：匹配的子字符串。
// $`：匹配结果前面的文本。
// $'：匹配结果后面的文本。
// $n：匹配成功的第n组内容，n是从1开始的自然数。
// $$：指代美元符号$。


'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1');
// "world hello"

'abc'.replace('b', '[$`-$&-$\']');
// "a[a-b-c]c"


var prices = {
    'p1': '$1.99',
    'p2': '$9.99',
    'p3': '$5.00'
};

var template = '<span id="p1"></span>'
    + '<span id="p2"></span>'
    + '<span id="p3"></span>';

var vv = template.replace(
    /(<span id=")(.*?)(">)(<\/span>)/g,
    function (match, $1, $2, $3, $4) {
        return $1 + $2 + $3 + prices[$2] + $4;
    }
);
console.log(vv);
// "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"


// 字符串对象的split方法按照正则规则分割字符串，返回一个由分割后的各个部分组成的数组。
// str.split(separator, [limit]);
// 该方法接受两个参数，第一个参数是正则表达式，表示分隔规则，第二个参数是返回数组的最大成员数。

// 非正则分隔
'a,  b,c, d'.split(',');
// [ 'a', '  b', 'c', ' d' ]

// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */);
// [ 'a', 'b', 'c', 'd' ]

// 指定返回数组的最大成员
'a,  b,c, d'.split(/, */, 2);
// [ 'a', 'b' ]

console.log('aaa*a*'.split(/a*/));
// [ '', '*', '*' ]

console.log('aaa**a*'.split(/a*/));
// ["", "*", "*", "*"]);


console.log('aaa*a*'.split(/(a*)/));
// [ '', 'aaa', '*', 'a', '*' ]
