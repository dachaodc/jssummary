// 输出
// {
//     "id": 2,
//     "title": "dw2",
//     "parentId": 0,
//     "children": [
//     {
//         "id": 12,
//         "title": "dw12",
//         "parentId": 2
//     },
//     {
//         "id": 4,
//         "title": "dw4",
//         "parentId": 2,
//         "children": [
//             {
//                 "id": 8,
//                 "title": "dw8",
//                 "parentId": 4
//             },
//             {
//                 "id": 10,
//                 "title": "dw10",
//                 "parentId": 4
//             }
//         ]
//     }
// ];

// 2. 解法一：广度优先搜索
// 第一种解法的步骤如下：

// （1）首先，按照每一项的parentId 数值给输入数组排序。

// （2）将排序后的数组的第一条数据作为根元素，遍历数组，比较当前记录的parentId 和结果对象中的id 依次将剩下的数据插入到合适的位置上，在寻找合适位置的过程中使用的是广度优先搜索的方法。

// 此种方法的时间复杂度较高，代码量颇大，实现代码如下：

// var nodes = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4}
// ];
//
// function findPos(obj, id) {
//     // 广度优先搜索遍历当前对象
//     var queue = [], temp;
//     if (obj.id === id) {
//         return obj;
//     }
//     queue.push(obj.children);
//     while (queue) {
//         temp = queue.shift();
//         var res = findChildIndex(id, temp);
//         if (res) {
//             return res;
//         }
//         for (var i = 0; i < temp.length; i++) {
//             queue.push(temp[i]);
//         }
//     }
// }
//
// // 判断一个数字是否在children 列表内
// function findChildIndex(id, arr) {
//     if (arr.id && id === arr.id) {
//         return arr;
//     }
//     for (var i = 0; i < arr.length; i++) {
//         if (id === arr[i].id) {
//             return arr[i];
//         }
//     }
//     return null;
// }
//
// // sort
// function cmp(a, b) {
//     return a.parentId - b.parentId;
// }
//
// nodes.sort(cmp);
//
// var resObj = nodes[0], findRes;
// for (var i = 1, len = nodes.length; i < len; i++) {
//     findRes = findPos(resObj, nodes[i].parentId);
//     if (findRes) {
//         if (!findRes.children) {
//             findRes.children = [];
//         }
//         findRes.children.push(nodes[i]);
//     }
// }
//
// console.log(findRes);

// var nodes = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4}
// ];
//
// function cmp(a, b) {
//     return a.parentId - b.parentId;
// }
//
// nodes.sort(cmp);
//
// let tempArr = [];
// let firstNode = nodes[0];
// tempArr.push(firstNode);
//
// for (let i = 0; i < nodes.length; i++) {
//     let itemI = nodes[i];
//     let tempChildArr = [];
//     for (let j = 0; j < nodes.length; j++) {
//         let itemJ = nodes[j];
//         if (itemI.id === itemJ.parentId) {
//             tempChildArr.push(itemJ);
//         }
//     }
//     if (tempChildArr.length > 0) itemI.children = tempChildArr;
// }
//
//
// console.log(JSON.stringify(nodes));


// var nodes = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4},
//     {id: 16, title: 'dw16', parentId: 10},
// ];
//
// // sort
// function cmp(a, b) {
//     return a.parentId - b.parentId;
// }
//
// nodes.sort(cmp);
//
// var midObj = {};
// // 从后向前遍历
// for (var i = nodes.length - 1; i >= 0; i--) {
//     var nowPid = nodes[i].parentId;
//     var nowId = nodes[i].id;
//     // 建立当前节点的父节点的children 数组
//     if (midObj[nowPid]) {
//         midObj[nowPid].push(nodes[i]);
//     } else {
//         midObj[nowPid] = [];
//         midObj[nowPid].push(nodes[i]);
//     }
//     // 将children 放入合适的位置
//     if (midObj[nowId]) {
//         nodes[i].children = midObj[nowId];
//         delete midObj[nowId];
//     }
// }
//
// console.log(JSON.stringify(midObj[0][0]));


// console.log('---------------------------------------------------------');
//
// var nodes = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4},
//     {id: 16, title: 'dw16', parentId: 10},
// ];
//
// // sort
// function cmp(a, b) {
//     return a.parentId - b.parentId;
// }
//
// nodes.sort(cmp);
//
// console.log(nodes);
//
// let middleObj = {};
//
// for (let i = nodes.length - 1; i >= 0; i--) {
//     let pid = nodes[i].parentId;
//     let id = nodes[i].id;
//     if (middleObj[pid]) {
//         middleObj[pid].push(nodes[i]);
//     } else {
//         middleObj[pid] = [];
//         middleObj[pid].push(nodes[i]);
//     }
//     if (middleObj[id]) {
//         nodes[i].children = middleObj[id];
//         delete middleObj[id]
//     }
// }
//
// console.log(JSON.stringify(middleObj[0][0]));

// var nodes = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4},
//     {id: 16, title: 'dw16', parentId: 10},
// ];
//
// function pidUp(a, b) {
//     return a.parentId - b.parentId
// }
//
// nodes.sort(pidUp);
//
// let middleObj = {};
//
// for (let i = nodes.length - 1; i >= 0; i--) {
//     let pid = nodes[i].parentId;
//     let id = nodes[i].id;
//     if (middleObj[pid]) {
//         middleObj[pid].push(nodes[i]);
//     } else {
//         middleObj[pid] = [];
//         middleObj[pid].push(nodes[i]);
//     }
//
//     console.log(JSON.stringify(middleObj));
//
//     if (middleObj[id]) {
//         nodes[i].children = middleObj[id];
//         delete middleObj[id]
//     }
// }
//
// console.log(JSON.stringify(middleObj[0][0]));


var nodes = [
    {id: 10, title: 'dw10', parentId: 4},
    {id: 2, title: 'dw2', parentId: 0},
    {id: 4, title: 'dw4', parentId: 2},
    {id: 12, title: 'dw12', parentId: 2},
    {id: 8, title: 'dw8', parentId: 4},
    {id: 16, title: 'dw16', parentId: 10},
];

function pidUp(a, b) {
    return a.parentId - b.parentId
}

nodes.sort(pidUp);


let middleObj = {};

/**
 * 1. 找位置
 * 2. 找有没有孩子
 */
for (let i = nodes.length - 1; i >= 0; i--) {
    let item = nodes[i];
    let pid = item.parentId;
    let id = item.id;

    if (middleObj[pid]) {
        middleObj[pid].push(item);
    } else {
        middleObj[pid] = [];
        middleObj[pid].push(item);
    }

    if (middleObj[id]) {
        item.children = middleObj[id];
        delete middleObj[id]
    }
}

console.log(JSON.stringify(middleObj[0][0]));

console.log('---------------递归----------------');

// var nodes2 = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4},
//     {id: 16, title: 'dw16', parentId: 10},
// ];
//
// // 线性数据转化为树。
// function toTree(data, parentId) {
//     var tree = [];
//     var temp;
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].parentId === parentId) {
//             var obj = data[i];
//             temp = toTree(data, data[i].id);
//             if (temp.length > 0) {
//                 obj.children = temp;
//             }
//             tree.push(obj);
//         }
//     }
//     return tree;
// }
//
// const dataArr = toTree(nodes2, 0);
// console.log(JSON.stringify(dataArr));

// var nodes2 = [
//     {id: 10, title: 'dw10', parentId: 4},
//     {id: 2, title: 'dw2', parentId: 0},
//     {id: 4, title: 'dw4', parentId: 2},
//     {id: 12, title: 'dw12', parentId: 2},
//     {id: 8, title: 'dw8', parentId: 4},
//     {id: 16, title: 'dw16', parentId: 10},
//     {id: 100, title: 'dw100', parentId: 8},
//     {id: 101, title: 'dw101', parentId: 100},
//     {id: 102, title: 'dw101', parentId: 101}
// ];
//
// function toTree(data, id) {
//     let tree = [];
//
//     console.log("执行几次？");
//
//     for (let i = 0; i < data.length; i++) {
//
//         if (data[i].parentId === id) {
//             let obj = data[i];
//
//             console.log("obj----->" + obj);
//
//             let tempObj = toTree(data, data[i].id);
//
//             console.log("tempObj----->" + tempObj);
//
//             if (tempObj.length > 0) {
//                 obj.children = tempObj;
//             }
//             tree.push(obj);
//         }
//     }
//     return tree
// }
//
// console.log(JSON.stringify(toTree(nodes2, 0)));


var nodes2 = [
    {id: 10, title: 'dw10', parentId: 4},
    {id: 2, title: 'dw2', parentId: 0},
    {id: 4, title: 'dw4', parentId: 2},
    {id: 12, title: 'dw12', parentId: 2},
    {id: 8, title: 'dw8', parentId: 4},
    {id: 16, title: 'dw16', parentId: 10},
    {id: 100, title: 'dw100', parentId: 8},
    {id: 101, title: 'dw101', parentId: 100},
    {id: 102, title: 'dw101', parentId: 101}
];

function toTree(data, id) {

    let tree = [];

    for (let i = 0; i < data.length; i++) {

        if (data[i].parentId === id) {
            let obj = data[i];

            let tempObj = toTree(data, obj.id);
            if (tempObj.length > 0) {
                obj.children = tempObj;
            }

            tree.push(obj);
        }
    }
    return tree
}

console.log(JSON.stringify(toTree(nodes2, 0)));














