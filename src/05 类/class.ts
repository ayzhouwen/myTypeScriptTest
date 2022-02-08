//将文件声明为 module， 变量 name 被限制在了 module 的作用域下，因此不会与全局的name产生冲突。
export {};

class Car {
    // 字段
    engine:string;

    // 构造函数
    constructor(engine:string) {
        this.engine = engine
    }

    // 方法
    disp():void {
        console.log("发动机为 :   "+this.engine)
    }
}

var obj = new Car("Engine 1")
console.log(obj)
console.log(obj.engine)
