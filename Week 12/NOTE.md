### 学习笔记

#### CSS排版

##### 盒（Box）

- HTML代码中可以书写**开始标签**，**结束标签**和**自封闭标签**
- 一对**起止标签**，表示一个**元素**
- DOM树中存储的是**元素**和*其他类型的节点（Node）*
- CSS选择器选中的是**元素**或伪元素
- CSS选择器选中的**元素**，在排版时可能产生*多个***盒**
- 排版和渲染的基本单位是**盒**

​	盒模型

- 组成：content，width，height，padding，border，margin
- Box-sizing：content-box/border-box

##### 正常流（Normal float）

- 收集盒进行
- 计算盒在行中的排布
- 计算行的排布

IFC/BFC

##### 正常流的行级排布

- Baseline
- 行模型：line-top，text-top，base-line，text-bottom，line-bottom
- 行内盒inline-block的基线随着自己里面的文字去变化的，**不建议行内盒使用基线对齐**，使用vertical-align解决

##### 正常流的块级排布

正常流的复杂机制：

- float
  - 影响生成行盒的尺寸；
  - 当float元素出现，不止影响自己所在的那行，凡是高度所占据的范围内所有的行盒都会根据float元素的尺寸调整自己的大小，超出的范围不考虑；
  - 两盒同方向的float会产生相互堆叠的效果；
  - br对float不起作用
  - float:left会导致重排，不推荐使用float

- clear
  - 找一个干净的空间来执行浮动
  - 分right和left，各自影响一个方向的float行为

- margin重叠：只会发生在BFC里

##### BFC（Block Formatting Context 块级格式化上下文）合并

- Block Container：里面有BFC的，能容纳正常流的盒，里面就有BFC，包括：
  - block
  - inline-block
  - table-cell
  - flex item
  - grid cell
  - table-caption
- Block-level Box：外面有BFC的
- Block Box = Block Container + Block-level Box：里外都有BFC的

**设立BFC**

- 浮动元素
- 绝对定位元素
- block containers（如：inline-block,table-cells,table-captions,flex items,gird cell）
- block boxes width 'overflow' other than 'visible'

##### BFC合并

- block box && overflow:visible
  - BFC合并与float
  - BFC合并与边距折叠

##### Flex排版

- 收集盒进行
  - 分行
    - 根据主轴尺寸，把元素分进行
    - 若设置了no-wrap，则强行分配进第一行
- 计算盒在主轴方向的排布
  - 计算主轴方向
    - 找出所有Flex元素
    - 把主轴方向的剩余尺寸按比例分配给这些元素
    - 若剩余空间为负数，所有flex元素为0等比压缩剩余元素
- 计算盒在交叉轴方向的排布
  - 计算交叉轴方向
    - 根据每一行中最大元素尺寸计算行高
    - 根据行高flex-align（每个元素的属性）和item-align（外面容器的属性），确定元素具体位置



#### CSS动画与绘制

##### 动画

- Animation
  - @keyframes定义，可以使用from to或者百分比；技巧：在关键帧里定义transition，这样的话每一段的timing-function都不一样
  - animation：使用
  - 属性
    - animation-name 时间曲线
    - animation-duration 动画的时长
    - animation-timing-function 动画的时间曲线
    - animation-delay 动画开始前的延迟
    - animation-iteration-count 动画的播放次数
    - animation-direction 动画的方向
- Transition
  - transition-property 要变换的属性
  - transition-duration 变换的时长 
  - transition-timing-function 时间曲线 
  - transition-delay 延迟
- timing-function 时间曲线指三次贝塞尔曲线：ease/linear/ease-in/ease-out/ease-in-out

##### 颜色

​	**HSL**与HSV

##### 绘制

- 几何图形
  - border
  - box-shadow
  - border-radius
- 文字
  - font
  - text-decoration
- 位图
  - Background-image

data uri + svg

