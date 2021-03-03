// 输入“我的手机号是：17777777777，请惠存！”；输出“我的手机号是：177****7777，请惠存！”
// 第一种：单纯截取，兼容性差，实际项目不建议使用
function filterPhone(str) {
    if (!str) return "";
    let preStr = str.split("：")[0];
    let preValue = str.split("：")[1];
    let phone = preValue.split("，")[0];
    phone = "".concat(phone.substr(0, 3), "****", phone.substr(7, str.length));
    let next = preValue.split("，")[1];
    return "".concat(preStr, ":" , phone, "," , next);
}

// console.log(filterPhone("我的手机号是：17777777777，请惠存！"));

// 第二种：正则表达式，兼容性好，实用性强 str.replace(reg,function(){})应用 重点
function filterPhoneRegexp(str) {
    if (!str) return "";
    let result = str.replace(/(\d{3})\d{4}(\d{4})/g, '$1****$2'); // $对应()
    // let result = str.replace(/(\d{3})\d{4}(\d{4})/g, function (v) {
    //     console.log(v);
    // });
    return result;
}

console.log(filterPhoneRegexp("我的手机号是：17777777777，请惠存！"));
