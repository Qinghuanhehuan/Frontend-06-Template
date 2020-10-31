# 学习笔记：
### javascript类型：
1. 为什么有的编程规范要求用 void 0 代替 undefined？
		undefined是变量，非关键字，为了防止其被篡改，直接使用void（0），而且undefined也会自动编译成void(0)，所以直接使用更好。 
2. 字符串有最大长度吗？
		2^53-1 
3. 0.1 + 0.2 不是等于 0.3 么？为什么 JavaScript 里不是这样的？
		浮点型运算由于有精度，就导致0.1+0.2!=0.3,可以用Math.abs(0.1+0.2-0.3)<=Number.EPSILON 检查等式左右两边差的绝对值是否小于最小精度
4. ES6 新加入的 Symbol 是个什么东西？
		Symbol是ES6引入的新类型，它是一切非字符串的对象key的集合，使用全局的Symbol函数创建，特点是返回的symbol值都是唯一的；使用 Symbol.iterator 来自定义 for…of 在对象上的行为
5. 为什么给对象添加的方法能用在基本类型上？
		每一个基本类型都在对象中有相应的类（除了symbol，但是可以装箱转换），因为运算符提供了装箱操作，它会根据基本类型构造一个临时对象，所以在基础类型上可以调用对应对象的方法

- 类型：
	- Undefined：变量，非关键字；未定义，只有一个值：undefined
	- Null：关键字；表示空值，只有一个值：null
	- Boolean：true/false
	- String：字符串的 UTF16 编码，最大长度受字符串编码的影响；构造出来无法变更，具有值类型特征
	- Number：基本符合双精度浮点数规则；例外：NaN，Infinity，Infinity；注意区分除法场合+0 和 -0；
	- Symbol：同上
	- Object：
		- “属性的集合”，属性：数据属性 和 访问器属性（getter/setter），都是key-value接口，key是字符串或Symbol类型；
		- “类”是运行时对象的一个私有属性，无法自定义类型；几个基本类型：Number，String，Boolean，Symbol

- 类型转换：弱类型语言，发生转换非常频繁；===
  - StringToNumber
  - NumberToString
  - 装箱转换：基本类型转换为对应的对象；判断类型：typeof instanceof constructor Object.prototype.toString
  - 拆箱转换：对象类型到基本类型的转换；调用 valueOf 和 toString 来获得拆箱后的基本类型

### javascript对象：
- 定义：“语言和宿主的基础设施由对象来提供，并且 JavaScript 程序即是一系列互相通讯的对象集合”
- 特征：唯一性，状态，行为；对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力。
- 属性：用一组特征（attribute）来描述属性（property）
  - 数据属性：value，writable，enumerable（for…in），configurable
  - 访问器属性：getter，setter，enumerable，configurable
  - 使用 Object.defineProperty 改变属性特征或定义访问器属性
  - JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value

### 实战
- TicTacToe
- 异步编程：
  - callback
  - Promise
  - async/await
  - for await of