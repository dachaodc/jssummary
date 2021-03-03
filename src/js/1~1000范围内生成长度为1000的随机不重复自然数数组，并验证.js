// 写的代码如下：不太好
function arrGen() {
    let tempArr = [];
    for(let i = 0; i < 1000; i ++) {
        // let time = new Date().getTime();
        let n = Math.random() * i * 1000;
        for (let j = 0; j < tempArr.length; j ++ ) {
            if (tempArr[j] === n) {
                n = Math.random() * i * 1000;
            }
        }
        tempArr.push(parseInt(n));
    }
    return tempArr
}

console.log(arrGen());


