// [1,2,3,[4,5,6,[7,8],{a:122},10]] --->
// [1,2,3,4,5,6,7,8,{a:122},10]

let tempArr = [];
function processArr(arr) {
    if (!arr || !Array.isArray(arr) || arr.length < 1) return [];
    console.log(arr);
    arr.map((item, index) => {
        if (Array.isArray(item)) {
            processArr(item);
        } else {
            tempArr.push(item)
        }
    });
}

const params =  [1,2,3,[4,5,6,[7,8],{a:122},10]];
processArr(params);
console.log(tempArr);
