// 网上找的
Array：Array 的 length 属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
bind 后的 function：跟原来的函数相关联。
Function: 具有方法和执行能力的对象。
Map: 引用地址为key的对象。
Set: 自动去重的Array对象集合。
this对象: 是在运行时基于函数的执行环境绑定的,在全局函数中,this相当于windo;当函数被作为某个对象的方法调用时,this相当于那个对象,
window对象: 在全局作用域中声明的变量/函数都是window对象的属性和方法