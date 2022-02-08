"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    // 构造函数
    constructor(engine) {
        this.engine = engine;
    }
    // 方法
    disp() {
        console.log("发动机为 :   " + this.engine);
    }
}
var obj = new Car("Engine 1");
console.log(obj);
console.log(obj.engine);
