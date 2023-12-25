---
# 这是文章的标题
title: Basic
# 你可以自定义封面图片
cover: /assets/images/blog.svg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Shplume
# 设置写作时间
date: 2023-10-25
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---

[基本类型 - MDN Web 文档术语表：Web 相关术语的定义 | MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)

JavaScript 有七种基本类型：

- [string](https://developer.mozilla.org/zh-CN/docs/Glossary/String)
- [number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)
- [bigint](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt)
- [boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean)
- [undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/Undefined)
- [symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null)

它们无法按照对象的方式使用
```javascript
const print = console.log;

let number = 1;

number.name = "zhangsan";

print(number.name); // undefined

```
```javascript
const print = console.log;

let obj = {};

obj.name = "zhangsan";

print(number.name); // "zhangsan"

```

但是又可以使用对象的方法
```javascript
const print = console.log;

print((12.3456789).toFixed(2)); // '12.35'

```
```javascript
const print = console.log;

print('1234'.substring(1, 3)); // '23'

```

动态数组的长度
```javascript
const print = console.log;

const arr = [0, 1, 2, 3];

```

当把其他非字符串类型的值当作 key 时，实质上是调用 toString 方法变成 string 类型
```javascript
const print = console.log;

const zhangsan = { 
  name: "zhangsan"
};
const lisi = { 
  name: "lisi"
};

class empty {}

let obj = {};
obj[zhangsan] = "zhangsan";
obj[lisi] = "lisi";
obj[empty] = "empty";

print(obj);
// Object {[object Object]: "lisi", class empty {}: "empty"}

```
```javascript
const print = console.log;

const key = { 
  name: "zhangsan"
};

key.toString = () => {
	return "key";
}

let obj = {};
obj[key] = "value";

print(obj);
// Object {key: "value"}

```
```javascript
const print = console.log;

const obj = {};

const first = () => {};

const second = () => {};

obj[first] = "value";

print(obj);
print(obj[second]);
// {
//     "function first() {}": 1
// }
// undefined

```


删除数组的属性
```javascript
const print = console.log;

const test = (arr, keys) => {
  for (const key of keys) {
  	delete arr[key];
  }
  
  print(`${arr} ${arr.length}`);
}

const numbers = [0, 1, 2];

test(numbers, [2]);
test(numbers, [1, 0]);
test(numbers, [4]);
test(numbers, ["length"]);

// 0,1, 3
// ,, 3
// ,, 3
// Uncaught TypeError: Cannot delete property 'length' of [object Array] in /run?channel=ukOfP7bNq Line: 3

```

在对象的方法中删除自己
```javascript
const print = console.log;

let obj = {
	fn: () => {
    	delete obj.fn;

      return "success";
    },
};

print(obj.fn());
print(obj.fn());

// success
// Uncaught TypeError: obj.fn is not a function in /run?channel=ukOfP7bNq Line: 11

```

打印和类的相关函数，找到了类的属性的实现，值得注意的是 toString 方法没找到
```javascript
const print = console.log;

class Person {
  number = 10;
  age = 20;
  
  toString() {
    return "person";
  }
}

print(Person.toString());
print(_classCallCheck.toString())
print(_defineProperty.toString());
print(_toPropertyKey.toString());
print(_toPrimitive.toString());
print(_typeof.toString());

```

下面是实现
```javascript
function Person() { 
  _classCallCheck2(this, Person);
  _defineProperty2(this, "number", 10); 
  _defineProperty2(this, "age", 20); 
}

function _classCallCheck(instance, Constructor) { 
  if (!(instance instanceof Constructor)) { 
    throw new TypeError("Cannot call a class as a function"); 
  } 
}

function _defineProperty(obj, key, value) { 
  key = _toPropertyKey(key); 
  
  if (key in obj) { 
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); 
  } else { 
    obj[key] = value; 
  } return obj; 
}

function _toPropertyKey(arg) { 
  var key = _toPrimitive(arg, "string"); 
  
  return _typeof(key) === "symbol" ? key : String(key); 
}

function _toPrimitive(input, hint) { 
  if (_typeof(input) !== "object" || input === null) return input; 
  var prim = input[Symbol.toPrimitive]; 
  
  if (prim !== undefined) { 
    var res = prim.call(input, hint || "default"); 
    
    if (_typeof(res) !== "object") return res; 
    
    throw new TypeError("@@toPrimitive must return a primitive value."); 
  } 
  
  return (hint === "string" ? String : Number)(input); 
}

function (o) { 
  return typeof o; 
}

```

根据上面的代码可以像下面这样写
```javascript
const print = console.log;

let obj = {};

const key = { 
  name: "zhangsan",
  [Symbol.toPrimitive]: () => {
  	return "key";
  },
};

obj[key] = "value";

print(obj);
// Object {key: "value"}

```

查询资料后发现 _createClass 函数也与此有关
```javascript
const print = console.log;

print(_createClass.toString());

```

注意方法和静态方法的区别
```javascript
function _createClass(Constructor, protoProps, staticProps) { 
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  
  if (staticProps) _defineProperties(Constructor, staticProps); 
  
  Object.defineProperty(Constructor, "prototype", { writable: false }); 
  
  return Constructor; 
}

```

由下面的代码，我们也可以知道方法和静态方法的区别了
```javascript
const print = console.log;

class Person {
  name = 10;
  
  normalFn() {}
  static staticFn() {}
}

print(Person.prototype.normalFn.toString())
print(Person.staticFn.toString())

// function normalFn() {}
// function staticFn() {}

```
