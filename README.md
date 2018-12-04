# js-template

> 一个简单的js模板引擎，仅三十行代码。

## 内容

- [**`功能特性`**](#功能特性)
- [**`案例`**](#案例)
- [**`贡献`**](#贡献)

## 功能特性

* [x] 将模板编译成HTML代码
* [x] 兼容ie6

## 使用说明

* [x] 通过<%和%>嵌入js代码
* [x] <%code%>代表流程语句，<%-data%>代表赋值语句
* [x] 模板中的变量通过对象传入

例如:
```html
<ul>
	<%for(var i=0; i<list.length; i++){%>
		<li><%-list[i]%></li>
	<%}%>
</ul>
```

## 案例

请查看[**`example`**](https://github.com/wanls4583/js-template/blob/master/example/demo.html)

## 贡献

欢迎给出一些意见和优化，期待你的 `Pull Request`