### 学习笔记

##### 抽象语法树（AST）

##### 语法分析：构建抽象语法树的过程

- LL算法（从左到右扫描，归并）
- LR算法

##### 四则运算：

- TokenNumber：0～9
- Operator：+ - * /
- Whitespace：<sp>
- LineTerminator：<LF> <CR>

##### 产生式：

```js
<MultiplicativeExpression>::=
  <Number>|
	<MultiplicativeExpression>"*"<Number>|
	<MultiplicativeExpression>"/"<Number>| 
```

```js
<AddtiveExpression>::=
  <MultiplicativeExpression>|
	<AddtiveExpression>"+"<MultiplicativeExpression>|
	<AddtiveExpression>"-"<MultiplicativeExpression>
```

##### 词法分析

