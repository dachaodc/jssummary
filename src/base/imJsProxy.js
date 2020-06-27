"use strict";

let xiaohong = {
    name: "小红",
    age: 15
};
xiaohong = new Proxy(xiaohong, {
    get(target, key) {
        let result = target[key];
        //如果是获取 年龄 属性，则添加 岁字
        if (key === "age") result += "岁";
        return result;
    },
    set(target, key, value) {
        if (key === "age" && typeof value !== "number") {
            throw Error("age字段必须为Number类型");
        }
        target[key] = value;

        // return Reflect.set(target, key, value);

        return true;
    }
});
console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了`);
xiaohong.age = 12;