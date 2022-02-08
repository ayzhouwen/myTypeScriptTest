//将文件声明为 module， 变量 name 被限制在了 module 的作用域下，因此不会与全局的name产生冲突。
//注意map需要es2016以上
export {};

let myMap=new Map();
console.log(myMap);
let myMap2=new Map([["key1",100],["key2",55]]);

//更新map itsm
myMap2.set("a",88);
myMap2.set("b",87);
myMap2.set("c",89);
console.log(myMap2);
console.log(myMap2.get("c"))

//删除map itsm
myMap2.delete("a");

//迭代map entry
for (let entry of myMap2.entries()){
   console.log('key:'+entry[0],"值:"+entry[1])
}

