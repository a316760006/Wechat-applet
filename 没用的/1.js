// 构造函数
var Fun = function () {
  this.name = 'hehe'
  this.age = '11'
  this.sex = 'man'
}
// new Fun();
// new关键字是用来调用构造函数的
var s = new Fun()
console.log(s)
// 练习 编写构造函数,并使用构造函数创建同桌对象,包含name age sex
var a = function () {
  this.name = 'der皮'
  this.age = '60'
  this.sex = 'gril'
}
console.log(new a())
// 封装构造函数
var person = function (name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}
var aaa = new person('aa', '??', 11)
console.log(aaa)
// 姓名 年龄 性别 所属学院

var teacher = function (name, sex, age, college) {
  this.name = name
  this.sex = sex
  this.age = age
  this.college = college
}
var xy = new teacher('肖宇', '男', 18, 'web')

// 2递归函数 :  一个函数自身调用自身就是递归函数,必须设置递归结束条件
var flag = 0
var dG = function () {
  // 打印10次
  if (flag >= 10) {
    // 结束函数的执行
    return false
  }
  console.log('递归')
  flag++
  dG()
}
dG()
// 求阶乘 n的阶乘  求1*2*3*...*(n-1)*n
// for循环阶乘
function jc(n) {
  var jcJi = 1
  for (var i = 1; i <= n; i++) {
    jcJi *= i
  }
  return jcJi
}
console.log(jc(5))
// 递归阶乘
var flag1 = 1 // 相当于for循环的i
var cj = 1 // 用来接收结果
var jc1 = function (n) {
  if (flag1 > n) {
    return false
  }
  cj *= flag1
  flag1++
  jc1(n)
  // 递归重点 : 参数的传递在每一次函数调用中都必须设置
}
jc1(6)
console.log(cj)
// 斐波那契数列  1,1,2,3,5,8,13,21...
function fB(n) {
  if (n == 1 || n == 2) {
    return 1
  }
  return fB(n - 1) + fB(n - 2)
}
console.log(fB(7))
function fbnqsl(n) {
  var fibarr = []
  var i = 0
  while (i < n + 1) {
    if (i <= 1) {
      fibarr.push(i)
    } else {
      fibarr.push(fibarr[i - 1] + fibarr[i - 2])
    }
    i++
  }
  return fibarr
}
console.log(fbnqsl(100))

// 闭包解决fib导致CPU假死问题  将之前计算的结果存储,下次计算直接使用,用空间换时间
var arr = [1, 1];
var fib = function (n) {
  // 创建一个数组,用来存储所有的计算结果,
  // 判断 如果当前月份的数据在arr中已存在,就直接使用
  if (n - 1 <= arr.length - 1) {
    return arr[n - 1]
  } else {
    // 如果数组中没有就计算,并将结果追加进数组arr
    var res = fib(n - 1) + fib(n - 2)
    arr[n - 1] = res;
    return res;
  }
}
console.log(fib(150))
// 1.从上到下
// 2.异步代码先等待,执行后续的同步代码,最后所有同步代码执行完在执行异步
// 异步: 普通   排在VIP后面  在任务队列中等待
// 同步: VIP    从上到下
// 作业: 1. 是个定时器打印i是同时打印,还是间隔打印  2. 解决思路


// 细胞分裂问题: 细胞一个小时分裂一次,3个小时死亡
function a_xb(n) {
  if (n === 0) {
    return 1
  } else {
    return a_xb(n - 1) + b_xb(n - 1) + c_xb(n - 1)
  }
}
function b_xb(n) {
  if (n === 0) {
    return 0
  } else {
    return a_xb(n - 1)
  }
}
function c_xb(n) {
  if (n === 0 || n === 1) {
    return 0
  } else {
    return b_xb(n - 1)
  }
}
console.log(a_xb(1))

// 闭包函数
function a() {
  var n = 10
  function b() {
    console.log(n)
    b()
  }
}


for (let i = 0; i <= 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000)
  }(i))
}


// js运行三步骤   1.语法分析  2.预编译  3.解释执行
/*  全局预编译:
    GO-->window
    var function
*/
console.log(a)
var a = 10;
function a() { }
go = {
  a: 10,
  a: function () { }
}
var obj = {
  name: 'li',
  name: 'wang'
}
/*函数预编译 : 
  1.创建AO对象  
  2.找形参和变量声明,将变量和形参作为AO对象的属性名,值undefined   
  3.实参形参相统一
  4.找函数生命.值赋予函数体
*/
function num(a, b) {
  console.log(a)            // function a
  var a = 123;
  console.log(a)            // 123
  function a() { }
  console.log(a)            // 123
  var b = function () { }
  console.log(b)            // function b
  var c = function () { }
}

function a() {
  function b() {
    var bbb = 234;
    console.log(aaa)
  }
  var aaa = 123;
  return b
}
var g = 100;
var d = a();
d()


// Go = {
//   g: undefined,
//   a: function. 
// }
// aAo = {
//   aaa: undefined,
//   b: function
// }
/*
  全
  scope 为函数作用域(包含自己至父级顶端作用域-->GO)[]
      执行期上下文的集合  成链式链接   我们俗称作用域 []
    a函数  定义  scope -> [GO]
    a      执行        ->[aAO,GO]
    b      定义        ->[aAO,GO]
*/