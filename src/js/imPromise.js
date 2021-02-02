// var PromisePolyfill = (function () {
//     // 和reject不同的是resolve需要尝试展开thenable对象
//     function tryToResolve(value) {
//         if (this === value) {
//             // 主要是防止下面这种情况
//             // let y = new Promise(res => setTimeout(res(y)))
//             throw TypeError('Chaining cycle detected for promise!')
//         }
//
//         // 根据规范2.32以及2.33 对对象或者函数尝试展开
//         // 保证S6之前的 polyfill 也能和ES6的原生promise混用
//         if (value !== null &&
//             (typeof value === 'object' || typeof value === 'function')) {
//             try {
//                 // 这里记录这次then的值同时要被try包裹
//                 // 主要原因是 then 可能是一个getter, 也也就是说
//                 //   1. value.then可能报错
//                 //   2. value.then可能产生副作用(例如多次执行可能结果不同)
//                 var then = value.then
//
//                 // 另一方面, 由于无法保证 then 确实会像预期的那样只调用一个onFullfilled / onRejected
//                 // 所以增加了一个flag来防止resolveOrReject被多次调用
//                 var thenAlreadyCalledOrThrow = false
//                 if (typeof then === 'function') {
//                     // 是thenable 那么尝试展开
//                     // 并且在该thenable状态改变之前this对象的状态不变
//                     then.bind(value)(
//                         // onFullfilled
//                         function (value2) {
//                             if (thenAlreadyCalledOrThrow) return
//                             thenAlreadyCalledOrThrow = true
//                             tryToResolve.bind(this, value2)()
//                         }.bind(this),
//
//                         // onRejected
//                         function (reason2) {
//                             if (thenAlreadyCalledOrThrow) return
//                             thenAlreadyCalledOrThrow = true
//                             resolveOrReject.bind(this, 'rejected', reason2)()
//                         }.bind(this)
//                     )
//                 } else {
//                     // 拥有then 但是then不是一个函数 所以也不是thenable
//                     resolveOrReject.bind(this, 'resolved', value)()
//                 }
//             } catch (e) {
//                 if (thenAlreadyCalledOrThrow) return
//                 thenAlreadyCalledOrThrow = true
//                 resolveOrReject.bind(this, 'rejected', e)()
//             }
//         } else {
//             // 基本类型 直接返回
//             resolveOrReject.bind(this, 'resolved', value)()
//         }
//     }
//
//     function resolveOrReject(status, data) {
//         if (this.status !== 'pending') return
//         this.status = status
//         this.data = data
//         if (status === 'resolved') {
//             for (var i = 0; i < this.resolveList.length; ++i) {
//                 this.resolveList[i]()
//             }
//         } else {
//             for (i = 0; i < this.rejectList.length; ++i) {
//                 this.rejectList[i]()
//             }
//         }
//     }
//
//     function Promise(executor) {
//         if (!(this instanceof Promise)) {
//             throw Error('Promise can not be called without new !')
//         }
//
//         if (typeof executor !== 'function') {
//             // 非标准 但与Chrome谷歌保持一致
//             throw TypeError('Promise resolver ' + executor + ' is not a function')
//         }
//
//         this.status = 'pending'
//         this.resolveList = []
//         this.rejectList = []
//
//         try {
//             executor(tryToResolve.bind(this), resolveOrReject.bind(this, 'rejected'))
//         } catch (e) {
//             resolveOrReject.bind(this, 'rejected', e)()
//         }
//     }
//
//     Promise.prototype.then = function (onFullfilled, onRejected) {
//         // 返回值穿透以及错误穿透, 注意错误穿透用的是throw而不是return，否则的话
//         // 这个then返回的promise状态将变成resolved即接下来的then中的onFullfilled
//         // 会被调用, 然而我们想要调用的是onRejected
//         if (typeof onFullfilled !== 'function') {
//             onFullfilled = function (data) {
//                 return data
//             }
//         }
//         if (typeof onRejected !== 'function') {
//             onRejected = function (reason) {
//                 throw reason
//             }
//         }
//
//         var executor = function (resolve, reject) {
//             setTimeout(function () {
//                 try {
//                     // 拿到对应的handle函数处理this.data
//                     // 并以此为依据解析这个新的Promise
//                     var value = this.status === 'resolved'
//                         ? onFullfilled(this.data)
//                         : onRejected(this.data)
//                     resolve(value)
//                 } catch (e) {
//                     reject(e)
//                 }
//             }.bind(this))
//         }
//
//         // then 接受两个函数返回一个新的Promise
//         // then 自身的执行永远异步与onFullfilled/onRejected的执行
//         if (this.status !== 'pending') {
//             return new Promise(executor.bind(this))
//         } else {
//             // pending
//             return new Promise(function (resolve, reject) {
//                 this.resolveList.push(executor.bind(this, resolve, reject))
//                 this.rejectList.push(executor.bind(this, resolve, reject))
//             }.bind(this))
//         }
//     }
//
//     // for prmise A+ test
//     Promise.deferred = Promise.defer = function () {
//         var dfd = {}
//         dfd.promise = new Promise(function (resolve, reject) {
//             dfd.resolve = resolve
//             dfd.reject = reject
//         })
//         return dfd
//     }
//
//     // for prmise A+ test
//     if (typeof module !== 'undefined') {
//         module.exports = Promise
//     }
//
//     return Promise
// })()
//
// PromisePolyfill.all = function (promises) {
//     return new Promise((resolve, reject) => {
//         const result = []
//         let cnt = 0
//         for (let i = 0; i < promises.length; ++i) {
//             promises[i].then(value => {
//                 cnt++
//                 result[i] = value
//                 if (cnt === promises.length) resolve(result)
//             }, reject)
//         }
//     })
// }
//
// PromisePolyfill.race = function (promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; ++i) {
//             promises[i].then(resolve, reject)
//         }
//     })
// }

try {
    module.exports = Promise
} catch (e) {
}

function Promise(executor) {
    var self = this

    self.status = 'pending'
    self.onResolvedCallback = []
    self.onRejectedCallback = []

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        setTimeout(function () { // 异步执行所有的回调函数
            if (self.status === 'pending') {
                self.status = 'resolved'
                self.data = value
                for (var i = 0; i < self.onResolvedCallback.length; i++) {
                    self.onResolvedCallback[i](value)
                }
            }
        })
    }

    function reject(reason) {
        setTimeout(function () { // 异步执行所有的回调函数
            if (self.status === 'pending') {
                self.status = 'rejected'
                self.data = reason
                for (var i = 0; i < self.onRejectedCallback.length; i++) {
                    self.onRejectedCallback[i](reason)
                }
            }
        })
    }

    try {
        executor(resolve, reject)
    } catch (reason) {
        reject(reason)
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    var then
    var thenCalledOrThrow = false

    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise!'))
    }

    if (x instanceof Promise) {
        if (x.status === 'pending') { //because x could resolved by a Promise Object
            x.then(function (v) {
                resolvePromise(promise2, v, resolve, reject)
            }, reject)
        } else { //but if it is resolved, it will never resolved by a Promise Object but a static value;
            x.then(resolve, reject)
        }
        return
    }

    if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
        try {
            then = x.then //because x.then could be a getter
            if (typeof then === 'function') {
                then.call(x, function rs(y) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return resolvePromise(promise2, y, resolve, reject)
                }, function rj(r) {
                    if (thenCalledOrThrow) return
                    thenCalledOrThrow = true
                    return reject(r)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            return reject(e)
        }
    } else {
        resolve(x)
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    var self = this
    var promise2
    onResolved = typeof onResolved === 'function' ? onResolved : function (v) {
        return v
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function (r) {
        throw r
    }

    if (self.status === 'resolved') {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () { // 异步执行onResolved
                try {
                    var x = onResolved(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (reason) {
                    reject(reason)
                }
            })
        })
    }

    if (self.status === 'rejected') {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(function () { // 异步执行onRejected
                try {
                    var x = onRejected(self.data)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (reason) {
                    reject(reason)
                }
            })
        })
    }

    if (self.status === 'pending') {
        // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
        return promise2 = new Promise(function (resolve, reject) {
            self.onResolvedCallback.push(function (value) {
                try {
                    var x = onResolved(value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })

            self.onRejectedCallback.push(function (reason) {
                try {
                    var x = onRejected(reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (r) {
                    reject(r)
                }
            })
        })
    }
}

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}

Promise.deferred = Promise.defer = function () {
    var dfd = {}
    dfd.promise = new Promise(function (resolve, reject) {
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd
}