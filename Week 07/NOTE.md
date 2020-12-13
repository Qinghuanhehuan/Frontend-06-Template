### 学习笔记

##### 运算符和表达式

语法树和运算符的优先级关系：JS中用产生式描述运算符的优先级

以下由高到低排列

- Memeber
  - a.b
  - a[b]
  - foo `string`
  - super.b
  - super['b']
  - new.target
  - new Foo()

- New
  - new Foo
  - Example:  **new a()**()   /   new **new a()**

- Call 函数调用
  - foo()
  - super()
  - foo()['b']
  - foo().b
  - foo()`abc`
  - Example：**new a()**['b']

- Left Handside & Right Handside
  - Example：a.b=c(Left Handside)   ~~a+b=c~~(Right Handside) 

- Update
  - a++
  - a--
  - --a
  - ++a
  - Example：++**a++**   ++(a++)

- Unary单目运算符
  - delete a.b 后面必须是引用类型才能生效
  - void foo() 类似空白/回车，起到改变语法结构的作用
  - typeof a 
  - +a
  - -a
  - ~a
  - !a
  - await a

- Exponental 唯一一个右结合运算符
  - **
  - Example：3 ** 2 ** 3      3 ** ( 2 ** 3)

- Multiplicative   ***    /    %**
- additive   **+     -**
- Shift（移位运算）   **<<       >>       >>>**
- Relationship   **<    >    <=   >=    instanceof    in**
- Equality    **==    !=    ===   !==**
- Bitwise    **&    ^    |**
- Logical（逻辑运算，短路运算，有时候可以替代if语句）   **&&      ||**
- Conditional      **? :**

Reference引用类型（标准中的类型）：分为两部分**Object+Key**

- delete 删除
- assign 复制



##### 类型转换

- 最复杂的类型转换：==，建议使用===或先转成相同类型

- 拆箱转换Unboxing
  - ToPremitive
  - toString  vs  valueOf
  - Symbol.toPrimitive

```javascript
var o = {
	toString(){return "2"},
	valueOf(){return 1},
	[Symbol.toPrimitive](){return 3}
}

var x = {}
console.log('x' + o) //x1
x[o] = 1 
console.log('x' + o) //x2
```

- 装箱转换Boxing

  | 类型    | 对象                    | 值          |
  | ------- | ----------------------- | ----------- |
  | Number  | new Number(1)           | 1           |
  | String  | new String('a')         | 'a'         |
  | Boolean | new  Boolean(true)      | true        |
  | Symbol  | new Object(Symbol('a')) | Symbol('a') |

  

##### 运行时相关概念

- Completion Record完成记录：**是否返回/返回值是啥**，决定语句继续向下执行还是停止执行

  ```javascript
  if(x == 1){
  	return 10;
  }
  ```

  - [[type]]:normal,break,continue,return,or throw

  - [[value]]:基本类型

  - [[target]]:label



##### 简单语句和复合语句

- 简单语句：里面不会再容纳其他语句的语句
  - **ExressionStatement表达式语句**
  - EmptyStatement空语句
  - DebuggerStatement调试时使用，打断点时触发
  - ThrowStatement抛出异常
  - ContinueStatement跟循环语句匹配，结束单次循环
  - BreakStatement跟循环语句匹配，结束整个循环
  - ReturnStatement在函数里使用，返回一个函数的值

- 复合语句
  - **BlockStatement**一对花括号中间一堆语句的列表，可以把单条语句的地方变成可以用多条语句
    - [[type]]:normal
    - [[value]]:--
    - [[target]]:--
  - IfStatement分支结构，条件语句
  - SwitchStatement多分支结构，不建议在JS中使用，用if代替switch
  - IterationStatement循环，while/do while/for/for in/**for of**/for await of
    - [[type]]:break continue
    - [[value]]:--
    - [[target]]:label
  - ~~WithStatement通过with打开对象，把对象的属性直接放进作用域里去~~
  - LabelledStatement标记，多用于配合循环语句break使用
  - TryStatement三段结构，包括try,catch和finally，且try不能省略花括号
    - [[type]]: return
    - [[value]]: --
    - [[target]]: label



##### 声明

**作用范围只认function body，且没有先后关系**；*var的声明作用是相当于出现在函数的头部，var a=1;变量已经被声明为一个函数级的局部变量，但赋值并没有发生*

- **FunctionDeclaration函数声明function**
- **GeneratorDeclaration函数声明function ***
- **AsyncFunctionDeclaration函数声明async  function**
- **AsyncGeneratorDeclaration函数声明async  function ***
- **VariableStatement变量声明：var**

**在声明之前使用会报错**

- ClassDeclaration类声明：class
- LexicalDeclaration：const / let

**预处理（pre-process）**指一段代码执行之前，JS引擎会对代码本身预先做一次处理

```javascript
var a = 2;
void function(){
	a = 1;
	return;
	var a;
}();
console.log(a); // 2
```

```javascript
var a = 2;
void function(){
	a = 1;
	return;
	const a; // 会抛错，这个错误会被try catch捕捉
}();
console.log(a); // 2
```

**作用域**：代码里变量从哪到哪发生作用



##### 宏任务和微任务

JS执行粒度（运行时）

- 宏任务：传给JS引擎的任务
- 微任务（Promise）：在JS引擎内部的任务
- 函数调用（Execution Context）
- 语句/声明（Completion Record）
- 表达式（Reference）
- 直接量/变量/this……

事件循环，如何去使用JS引擎的过程，三个组成部分：

- 获取代码
- 把代码执行掉
- 然后等待



##### JS函数调用

执行上下文栈