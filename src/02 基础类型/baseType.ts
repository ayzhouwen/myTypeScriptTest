//将文件声明为 module， 变量 name 被限制在了 module 的作用域下，因此不会与全局的name产生冲突。
export {};


// 1.数字类型

//二进制
let binary:number=0b1010;
//编译后binary为10,实际输出的是10,相当于ts的二进制直接转为10进制
console.log(binary);

//八进制
let octal:number=0o744;
//编译后octal为484,实际输出484,相当于ts的八进制直接转为10进制
console.log(octal);
//十进制
let dec:number=6;
console.log(dec);
//十六进制
let hex:number=0xf00d;
//编译后hex为0xf00d,实际输出 61453
console.log(hex);

//2.字符串类型

//
let name:string="我爱中国";
let years:number=2022;
let words:string= `您好,今天是${years} ${name}`;
console.log(words)

