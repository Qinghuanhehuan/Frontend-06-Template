### 学习笔记

##### 组件的基本概念和基本组成部分

对象

- Properties 属性
- Methods 方法
- Inherit 继承

组件

- Properties 属性
- Methods 方法
- Inherit 继承
- Attribute 特性
- Config & State 配置&状态
- Event 事件
- Lifecycle 生命周期
- Children 子组件

Attribute vs Property

- Attribute强调描述性

```javascript
<my-component attribute=“v”/>
myComponent.getAttribute(“a”)
myComponent.setAttribute(“a”,“value”);
```

- Property强调从属关系

```javascript
myComponent.a =“value”;
```

```javascript
<div class="cls1 cls2"></div>
<script>
  var div = document.getElementByTagName(‘div’);
  div.className // cls1 cls2
</script>

<div class="cls1 cls2" style="color:blue"></div>
<script>
  var div = document.getElementByTagName('div');
  div.style // 对象
</script>

<a href="//m.taobao.com"></div>
<script>
  var a = document.getElementByTagName('a’);
  a.href // “http://m.taobao.com”，这个 URL 是 resolve 过的结果
  a.getAttribute(‘href’) // “//m.taobao.com”，跟 HTML 代码中完全一致
</script>

<input value = "cute"/>
<script>
  var input = document.getElementByTagName(‘input’); //若 property 没有设置，则结果是 attribute
  input.value // cute
  input.getAttribute(‘value’); // cute
  input.value = ‘hello’; // 若 value 属性已经设置，则attribute 不变，property 变化，元素上实际的效果是 property 优先
  input.value // hello
  input.getAttribute(‘value’); // cute
</script>
```

Children

- Content型Children，有几个就渲染几个
- Template型Children，根据提供的数据渲染

```jsx
<my-button><img src="{{icon}}"/>{{title}}</my-button>

<my-list>
  <li><img src="{{icon}}"/>{{title}}</li>
</my-list>
```

