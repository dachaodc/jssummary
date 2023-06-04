// 计算两个大数相加，98765432111111111，12345678912345678999

// 在JS中，按照IEEE 754-2008标准的定义，所有数字都以双精度64位浮点格式表示。
// 在此标准下，无法精确表示的非常大的整数将自动四舍五入。
// 确切地说，JS 中的Number类型只能安全地表示-9007199254740991 (-(2^53-1)) 和 9007199254740991(2^53-1)之间的整数，
// 任何超出此范围的整数值都可能失去精度。
// 所以有一个最大值范围，在超过的范围了；该怎么处理呢？

// 方案一：转为字符串按位进行计算
// 两个数可能长度不同，先补齐长度
//

let a = "98765432111111111"; // 17位
let b = "12345678912345678999"; // 20位

function padNumber(a, b) {
  if (!a || !b) return;

  console.log(a, "--->", a.length);
  console.log(b, "--->", b.length);

  if (a.length > b.length) {
    b = b.padStart(a.length, 0);
  } else {
    a = a.padStart(b.length, 0);
  }

  console.log(a, "-------", b);
  calcAdd(a, b);
}

function calcAdd(a, b) {
  let sum = ""; // 计算结果
  let flag = 0; // 是否有进位

  for (let i = a.length - 1; i >= 0; i--) {
    let p = parseInt(a[i]) + parseInt(b[i]) + flag; // 计算当前位置值
    flag = Math.floor(p / 10); // 有无进位 1 有进位 0 无进位
    sum = (p % 10) + sum; // 当前的结果
  }

  // 判断最后一位有无进位
  if (flag === 1) {
    sum = "1" + sum;
  }

  console.log(sum);
}

padNumber(a, b);

// 方案二 使用BigInt，可以使用库 JSBI
function addBigNumber(a, b) {
    const s = BigInt(a) + BigInt(b);
    console.log("bigint--->" + s);
}

addBigNumber(a, b);

