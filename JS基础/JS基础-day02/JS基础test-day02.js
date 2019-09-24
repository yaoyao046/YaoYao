var arr1=["Number","Boolean","String","undefined","null","Object"]

var people = {
    name : "姚姚",
    age :  "秘密",
    hobby : "王一博"
}

var arr = [12,43,54,43]
console.log(arr[0]+arr[2])

var arr2 = [1223,[12344]]

var a = "sdfdsfdsf"
var b = "1222344"
var c = a
    a = b
    b = c
console.log(a,b)
 

var obj = {name:'tom',age:10,books:['水浒','西游']} 
console.log(obj.name,obj.books[1])

var num1 = 3
var num2 = 4
var num3 = num1 + num2

var num1 = 1223
var Str =  `写作业：${num1}`
console.log(Str)



var books = [
    {
        name : "陈情令",
        page : 100,
        color : "green"

    },
    {
        name : "天官赐福",
        page : 200,
        color : "yellow"
    }
]
console.log(books[1].name)

var arr7 = [13,54,65,23,54]
arr7[2] = arr7[1] + arr[3]

// var name = '张三'; 
// var age ;  
// const gender ="女";  
//       name = "李四"；  
// console.log(name); //李四
// console.log(age);  //undefined
// gender = "男";  
// console.log(gender); //不执行

 // var sname ; 没有按大小驼峰的命名方式命名 
//    var 1age ;
//    var Name;  常量的命名方式一般是首字母大写

/*
数据类型：
五种基本数据类型：Number Boolean String(字符串类型) undefined null
一种复杂数据类型：Object(对象)


对象：由多个键值对组合到一起形成的一种类型。
两种创建对象的方式：var 关键词 = {}
                  var 关键词 = new Object（{}）

读取：console.log(关键词.属性名称)
修改：直接重新赋值  关键词.属性名称 =  
删除：delete 关键词.属性名称


声明之后没有被赋值就会出现undefined

数组：把同一类的数据放到一起组成一组
var arr = [数1,数2,数3,数4,....]
var arr = new Array(数1,数2,数3,数4,....)
获取： console.log(数组名[下标]）
修改： 数组名[下标] = 


变量命名要有意义
一般以字母，符号，下划线开头
变量名一般都是小写
不能使用关键字命名
不能使用预定关键字命名
驼峰命名法

两种：反引号跟斜杠

布尔类型：true和fals,代表一个是真，一个是假

字符串中可以包含并解析变量
`&{变量}`
*/


