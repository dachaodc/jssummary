// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i);

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i);

// for (var _i = 0; _i < 10; _i++) {
//     console.log(_i)
// }
// console.log(_i);


// (function(){
//     for(var i = 0; i < 5; i ++){
//         console.log(i)  // 0 1 2 3 4
//     }
// })();
//
// console.log(i);


let data = {
    offDiscountAmt: 2,
    offTicketAmt: 0,
    offPointAmt: 0,
    offCutAmt: 0,
    offPromoteAmt: 123.00
};
showDiscountType = (data) => {
    let showText = '';
    if (data.offDiscountAmt !== 0) {
        showText = showText.concat("会员价折扣额")
    }
    if (data.offTicketAmt !== 0) {
        showText = showText ? showText.concat(",", "返券优惠") : showText.concat("返券优惠")
    }
    if (data.offPointAmt !== 0) {
        showText = showText ? showText.concat(",", "积分折算") : showText.concat("积分折算")
    }
    if (data.offCutAmt !== 0) {
        showText = showText ? showText.concat(",", "抹零优惠") : showText.concat("抹零优惠")
    }
    if (data.offPromoteAmt !== 0) {
        showText = showText ? showText.concat(",", "组合/搭售/第二件折扣等") : showText.concat("组合/搭售/第二件折扣等")
    }
    return showText
};

console.log(showDiscountType(data));


