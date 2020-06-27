// var a = 1;
//
// function f() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
// }
//
// f();
//
// console.log(a);
//
// var a = 3;

f();
g();

//函数声明
function f() {
    console.log('f');
}

//函数表达式
var g = function () {
    console.log('g');
};



//页面适配
function setScreenSize() {
    var clientWidth = document.documentElement.clientWidth;
    window.wid = clientWidth
    var scale = clientWidth / 750
    var metaList = document.getElementsByTagName("meta");
    for (var i = 0; i < metaList.length; i++) {
        if (metaList[i].name === "viewport") {
            metaList[i].content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';
        }
    }
}

// 自定义querystring方法
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function showLoading() {
    document.querySelector('.loading').style.display = "block";
}

function hideLoading() {
    document.querySelector('.loading').style.display = "none";
}

//判断是否是微信
function isWX() {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('MicroMessenger') !== -1) return true;
    return false;
}

//调用微信方法
function wxJsReady(callback) {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        callback();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", callback, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", callback);
            document.attachEvent("onWeixinJSBridgeReady", callback);
        }
    }
}

// 由于js的载入是异步的，所以可以通过该方法，当AlipayJSBridgeReady事件发生后，再执行callback方法
function aliJsReady(callback) {
    if (window.AlipayJSBridge) {
        callback && callback();
    } else {
        document.addEventListener('AlipayJSBridgeReady', callback, false);
    }
}

// 自定义ajax
function ajax(type, url, data, success, error) {

    var request = new XMLHttpRequest();
    // var baseUrl = 'https://openapi-test.tianquetech.com/';
    // var baseUrl = 'https://openapi.tianquetech.com/';
    var baseUrl = 'https://openapi-test.tianquetech.com/';

    var requestUrl;
    // fresh 防止chrome内核浏览器ajax请求相同url，使用缓存问题
    if (url.indexOf('?') !== -1) {
        requestUrl = baseUrl + url + '&fresh=' + Date.now()
    } else {
        requestUrl = baseUrl + url + '?fresh=' + Date.now()
    }
    request.open(type, requestUrl, true);

    if (type === 'POST') {
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    }

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                // Success
                var data = JSON.parse(this.responseText);
                success(data)
            } else {
                // Error
                var err = this.responseText;
                error(err)
            }
        }
    }

    if (type === 'POST') {
        request.send(data)
    } else {
        request.send()
    }
}

function signParams(newObj) {
    var signString = '';
    var newParamsObjKeys = Object.keys(newObj);
    newParamsObjKeys.length > 0 ? newParamsObjKeys.map((key) => {
        if (typeof newObj[key] === 'object') {
            newObj[key] = JSON.stringify(newObj[key]);
        }
        var value = newObj[key] ? newObj[key] : '';
        var tempKeysObj = key + "=" + value;
        if (signString) {
            signString = signString + "&" + tempKeysObj;
        } else {
            signString = tempKeysObj;
        }
    }) : undefined;
    // 方式1: 先建立 key 对象, 构建 signature 实例, 传入 key 初始化 -> 签名
    var key = KEYUTIL.getKey(priK);
    // 创建 Signature 对象
    var signature = new KJUR.crypto.Signature({alg: "SHA1withRSA"});
    // 传入key实例, 初始化signature实例
    signature.init(key);
    // 传入待签明文
    signature.updateString(signString);
    // 签名, 得到16进制字符结果
    var a = signature.sign();
    var sign = hextob64(a);
    return sign;
}

function sortObj(obj) {
    var keysArr = Object.keys(obj).sort();
    var sortObj = {};
    for (var i in keysArr) {
        sortObj[keysArr[i]] = obj[keysArr[i]];
    }
    return sortObj;
}

function randomNum() {
    var min = 10;    //这里改成你需要的最小值
    var max = 10000;  //这里改成你需要的最大值
    var roValue = Math.floor(Math.random() * (max - min + 1) + min);
    return roValue.toString()
}

function subjectType(payType) {
    var subject = "支付";
    if (payType === 'WECHAT') {
        subject = '微信支付'
    } else if (payType === 'ALIPAY') {
        subject = '支付宝支付'
    } else if (payType === 'UNIONPAY') {
        subject = '银联支付'
    }
    return subject;
}

function judgeEmpty(thiz) {
    if (!scene) {
        const toast = thiz.$createToast({
            txt: '缺少参数scene',
            type: 'txt'
        });
        toast.show();
        return false;
    }
    if (!mno) {
        const toast = thiz.$createToast({
            txt: '缺少参数mno',
            type: 'txt'
        });
        toast.show();
        return false;
    }
    if (!ordNo) {
        const toast = thiz.$createToast({
            txt: '缺少参数ordNo',
            type: 'txt'
        });
        toast.show();
        return false;
    }
    if (!amt) {
        const toast = thiz.$createToast({
            txt: '缺少参数amt',
            type: 'txt'
        });
        toast.show();
        return false;
    }
    if (!orgId) {
        const toast = thiz.$createToast({
            txt: '缺少参数orgId',
            type: 'txt'
        });
        toast.show();
        return false;
    }
    if (scene === '0') {
        if (!authCode) {
            const toast = thiz.$createToast({
                txt: '缺少参数authCode',
                type: 'txt'
            });
            toast.show();
            return false;
        }
    } else if (scene === '1') {
        if (!payType) {
            const toast = thiz.$createToast({
                txt: '缺少参数payType',
                type: 'txt'
            });
            toast.show();
            return false;
        }
    } else if (scene === '2') {
        if (!payType) {
            const toast = thiz.$createToast({
                txt: '缺少参数payType',
                type: 'txt'
            });
            toast.show();
            return false;
        }
        if ((payType === "WECHAT" || payType === "ALIPAY") && !openId) {
            const toast = thiz.$createToast({
                txt: '缺少参数openId',
                type: 'txt'
            });
            toast.show();
            return false;
        }
    }
    return true
}

function getSearchString(str, key) {
    // 获取URL中?之后的字符
    str = str.substring(1, str.length);

    var arr = str.split("&");
    var obj = {};

    // 将每一个数组元素以=分隔并赋给obj对象
    for (var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
    }
    return obj[key];
}

function processRequestData() {
    var subject = subjectType(payType);
    var paramsObj = {
        "orgId": orgId,
        "reqData": {
            "mno": mno,
            "ordNo": ordNo,
            "amt": amt,
            "payType": payType,
            "subject": subject,
            "tradeSource": "01",
            "trmIp": trmIp,
            "authCode": authCode
        },
        "reqId": "".concat(new Date().getTime().toString(), randomNum()),
        "timestamp": new Date().getTime(),
        "version": "1.0"
    };
    var newObj = sortObj(paramsObj);
    return newObj
}

function resetValue(thiz) {
    scene = '';
    mno = '';
    ordNo = '';
    amt = '';
    payType = '';
    orgId = '';
    trmIp = '123.123.123.123';
    openId = '';
    authCode = '';
    thiz.scene = '';
}

var scene = ''; // '0' 调起扫码；'1'渲染二维码；'2'调支付，微信，支付宝等
var mno = '';
var ordNo = '';
var amt = '';
var payType = '';    // 支付渠道，对 订单的描述， 取值范围: WECHAT:微 信,ALIPAY:支 付 宝,UNIONPAY: 银联
var orgId = '';  // test13813035
var trmIp = '123.123.123.123';
var openId = '';
var authCode = '';

function processPreData(search, thiz) {
    if (search) {
        resetValue(thiz);
        mno = getSearchString(search, 'mno');
        ordNo = getSearchString(search, 'ordNo');
        amt = getSearchString(search, 'amt');
        scene = getSearchString(search, 'scene');
        thiz.scene = scene;
        payType = getSearchString(search, 'payType');
        openId = getSearchString(search, 'openId');
        authCode = getSearchString(search, 'authCode');
        orgId = getSearchString(search, 'orgId');
        if (!judgeEmpty(thiz)) return;
        var subject = subjectType(payType);
        if (scene === '0') {
            var sceneZP = processRequestData();
            const toast = thiz.$createToast({
                txt: 'Loading...',
                mask: true
            });
            toast.show();
            ajax('POST', 'sdk/order/test/reverseScan',
                JSON.stringify(sceneZP),
                function (data) {
                    toast.hide();
                    if (data.code === '0000') {
                        var respData = data.respData;
                        if (respData.bizCode === '0000') {
                            // 循环查询支付结果
                            queryPayResult(thiz, respData);
                        } else {
                            const toast = thiz.$createToast({
                                txt: respData.bizMsg,
                                type: 'txt'
                            });
                            toast.show();
                        }
                    } else {
                        const toast = thiz.$createToast({
                            txt: data.msg,
                            type: 'txt'
                        });
                        toast.show();
                    }
                }, function (err) {
                    const toast = thiz.$createToast({
                        txt: err,
                        type: 'txt'
                    });
                    toast.show();
                })
        } else if (scene === '1') {
            var paramsObj = {
                "orgId": orgId,
                "reqData": {
                    "mno": mno,
                    "ordNo": ordNo,
                    "amt": amt,
                    "payType": payType,
                    "subject": subject,
                    "tradeSource": "01",
                    "trmIp": trmIp
                },
                "reqId": "".concat(new Date().getTime().toString(), randomNum()),
                "timestamp": new Date().getTime(),
                "version": "1.0"
            };
            var newObj = sortObj(paramsObj);
            const toast = thiz.$createToast({
                txt: 'Loading...',
                mask: true
            });
            toast.show();
            ajax('POST', 'sdk/order/test/pay', JSON.stringify(newObj), function (data) {
                toast.hide();
                if (data.code === '0000') {
                    var respData = data.respData;
                    if (respData.bizCode === '0000') {
                        var url = respData.payUrl;
                        new QRCode(document.getElementById('qrcode'), {
                            text: url,
                            width: 160,
                            height: 160,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: QRCode.CorrectLevel.H
                        });
                        // 循环查询支付结果
                        queryPayResult(thiz, respData);
                    } else {
                        const toast = thiz.$createToast({
                            txt: respData.bizMsg,
                            type: 'txt'
                        });
                        toast.show();
                    }
                } else {
                    const toast = thiz.$createToast({
                        txt: data.msg,
                        type: 'txt'
                    });
                    toast.show();
                }
            }, function (err) {
                const toast = thiz.$createToast({
                    txt: err,
                    type: 'txt'
                });
                toast.show();
            })
        } else if (scene === '2') {
        } else {
            return thiz.$createToast({
                txt: 'scene参数有误',
                mask: true,
                type: 'txt'
            }).show();
        }
    } else {
        const toast = thiz.$createToast({
            txt: "参数错误",
            type: 'txt'
        });
        toast.show();
    }
}

// 查询支付结果
function queryPayResult(thiz, oldData) {
    var requestParams = {
        "orgId": orgId,
        "reqData": {
            mno: mno,
            ordNo: oldData.ordNo
        },
        "reqId": "".concat(new Date().getTime().toString(), randomNum()),
        "timestamp": new Date().getTime(),
        "version": "1.0"
    };
    ajax('POST', 'sdk/order/query/trade', JSON.stringify(requestParams), function (data) {
        if (data.code === '0000') {
            if (timer) clearTimeout(timer);
            var respData = data.respData;
            if (respData.bizCode === '0000') {
                if (respData.tranSts === 'PAYING' || respData.tranSt === 'NOTPAY') {
                    // 支付中 未支付 轮训支付结果
                    timer = setTimeout(() => {
                        queryPayResult(thiz, oldData);
                    }, 2000);
                } else if (respData.tranSts === 'SUCCESS') {
                    // 支付成功
                    thiz.scene = '-1';
                    thiz.sceneMsg = '支付成功';
                } else if (respData.tranSts === 'FAIL') {
                    const toast = thiz.$createToast({
                        txt: '交易失败',
                        type: 'txt'
                    });
                    toast.show();
                    thiz.scene = '-1';
                    thiz.sceneMsg = '交易失败';
                } else if (respData.tranSts === 'CLOSED') {
                    const toast = thiz.$createToast({
                        txt: '已关闭',
                        type: 'txt'
                    });
                    toast.show();
                    thiz.scene = '-1';
                    thiz.sceneMsg = '交易已关闭';
                } else if (respData.tranSts === 'CANCELED') {
                    const toast = thiz.$createToast({
                        txt: '已撤销',
                        type: 'txt'
                    });
                    toast.show();
                    thiz.scene = '-1';
                    thiz.sceneMsg = '交易已撤销';
                }
            } else {
                thiz.scene = '-1';
                thiz.sceneMsg = respData.bizMsg;
                const toast = thiz.$createToast({
                    txt: respData.bizMsg,
                    type: 'txt'
                });
                toast.show();
            }
        }
    }, function (err) {
        const toast = thiz.$createToast({
            txt: err,
            type: 'txt'
        });
        toast.show();
    })
}

function wxPay(thiz) {
    // 微信传openId
    if (!openId) {
        return thiz.$createToast({
            txt: 'openId为空',
            mask: true,
            type: 'txt'
        }).show();
    }
    requestPay(thiz)
}

function zfbPay(thiz) {
    // 支付宝传userId
    if (!openId) {
        return thiz.$createToast({
            txt: 'userId为空',
            mask: true,
            type: 'txt'
        }).show();
    }
    requestPay(thiz)
}

function unionPay(thiz) {
    // 银联userId非必传
    requestPay(thiz)
}

function requestPay(thiz) {
    var subject = subjectType(payType);
    var paramsObj = {
        "orgId": orgId,
        "reqData": {
            "mno": mno,
            "ordNo": ordNo,
            "amt": amt,
            "payType": payType,
            "payWay": "02",
            "subject": subject,
            "tradeSource": "01",
            "trmIp": trmIp,
            "userId": openId
        },
        "reqId": "".concat(new Date().getTime().toString(), randomNum()),
        "timestamp": new Date().getTime(),
        "version": "1.0"
    };
    var newObj = sortObj(paramsObj);
    const toast = thiz.$createToast({
        txt: 'Loading...',
        mask: true
    });
    toast.show();
    ajax('POST', 'sdk/order/test/jspay', JSON.stringify(newObj), function (data) {
        toast.hide();
        if (data.code === '0000') {
            var respData = data.respData;
            if (respData.bizCode === '0000') {
                if (payType === 'WECHAT') {
                    callWxPay(thiz, respData)
                } else if (payType === 'ALIPAY') {
                    callAliPay(thiz, respData)
                } else {
                    thiz.scene = '-1';
                    thiz.sceneMsg = respData.bizMsg;
                }
            } else {
                const toast = thiz.$createToast({
                    txt: respData.bizMsg,
                    type: 'txt'
                });
                toast.show();
            }
        } else {
            const toast = thiz.$createToast({
                txt: data.msg,
                type: 'txt'
            });
            toast.show();
        }
    }, function (err) {
        const toast = thiz.$createToast({
            txt: err,
            type: 'txt'
        });
        toast.show();
    })
}

function callAliPay(thiz, aliData) {
    aliJsReady(
        // 通过传入交易号唤起快捷调用方式(注意tradeNO大小写严格)
        AlipayJSBridge.call("tradePay", {
            tradeNO: aliData.source
        }, function (data) {
            if ("9000" === data.resultCode) {
                thiz.scene = '-1';
                thiz.sceneMsg = '支付成功';
            } else if ('8000' === data.resultCode) {
                thiz.scene = '-1';
                thiz.sceneMsg = '正在处理中';
            } else if ('4000' === data.resultCode) {
                thiz.scene = '-1';
                thiz.sceneMsg = '订单支付失败';
            } else if ('6001' === data.resultCode) {
                thiz.scene = '-1';
                thiz.sceneMsg = '用户中途取消';
            } else if ('6002' === data.resultCode) {
                thiz.scene = '-1';
                thiz.sceneMsg = '网络连接出错';
            } else if ('99' === data.resultCode) {
                thiz.scene = '-1';
                thiz.sceneMsg = '用户退出界面';
            } else {
                thiz.scene = '-1';
                thiz.sceneMsg = data.resultCode;
            }
        })
    )
}

function callWxPay(thiz, data) {
    wxJsReady(
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', {
                "appId": data.payAppId,     //公众号名称，由商户传入
                "timeStamp": data.payTimeStamp,         //时间戳，自1970年以来的秒数
                "nonceStr": data.paynonceStr, //随机串
                "package": data.payPackage,
                "signType": data.paySignType,         //微信签名方式：
                "paySign": data.paySign//微信签名
            },
            function (res) {
                if (res.err_msg === "get_brand_wcpay_request:ok") {
                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    if (data.adUrl && data.adUrl !== '') {
                        window.location.replace(data.adUrl);
                    } else {
                        thiz.scene = '-1';
                        thiz.sceneMsg = '支付成功';
                    }
                }
            })
    );
}
