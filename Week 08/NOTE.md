### 学习笔记

##### 总论

浏览器基础渲染流程：

URL（HTTP）—— HTML（parse）—— DOM（css computing）—— DOM with CSS（layout）—— DOM width position（render）—— Bitmap

##### 状态机

- 有限状态机（并不对应无限）
  - 每一个状态都是一个机器
  - 每一个机器知道下一个状态
  - JS中的有限状态机Mealy：每个函数都是一个状态，函数参数是输入，把状态机的返回值作为下一个状态
- 不使用状态机处理字符串
- 使用状态机处理字符串

##### HTTP请求

HTTP协议解析（ISO-OSI七层网络模型）：

- HTTP（应用，表示，会话）
- TCP（传输）
- Internet（网络）
- 4G/5G/Wi-Fi（数据链路，物理层）

TCP与IP的一些基础知识

| 流             | 包             |
| -------------- | -------------- |
| 端口           | IP地址         |
| require('net') | libnet/libpcap |



HTTP协议，文本型的协议（Request + Response）

Request部分：

​	POST/HTTP/1.1（Request line）

​	Host:127.0.0.1（Headers）

​	Content-Type:application/x-www-form-urlencoded（Headers）



​	field1=aaa&code=x%3D1（body）



Response部分：

​	HTTP/1.1 200 OK（status line）

​	Content-Type:text/html（Headers）

​	Date:Mon,23 Dec 2020 18:01:24 GMT（Headers）

​	Connection:keep-alive（Headers）

​	Transfer-Encoding:chunked（Headers）



​	26（chunkedbody 十六进制数字）

​	<html><body>Hello World</body></html>（body）

​	0（chunkedbody 十六进制数字）



1. 第一步HTTP请求总结：
   - 设计一个HTTP请求的类
   - content type是一个必要的字段，要有默认值
   - body是kv格式
   - 不同的content-type影响body的格式
2. 第二步send函数总结
   - 在Request的构造器中收集必要的信息
   - 设计一个send函数，把请求真实的发送到服务器
   - send函数应该是异步的，所以返回Promise
3. 第三步发送请求
   - 设计支持已有的connection或者自己新建的connection
   - 收到数据传给parser
   - 根据parser的状态resolve Promise
4. 第四步responseparser总结
   - response必须分段构造，所以要用一个responseparser来装配
   - responseparser分段处理responsetext，用状态机分析文本的结构
5. 第五步responsebody解析
   - response的body可能根据Content-Type有不同的结构，因此会采用子Parser的结构来解决问题
   - 以TrunkedBodyParser为例，用状态机来处理body的格式