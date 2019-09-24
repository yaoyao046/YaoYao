/*数据类型
五种基本数据类型：Number Boolean String(字符串类型) undefined null
一种复杂数据类型：Object(对象)
*/

//数字类型：











//布尔类型：当一个答案只有两支情况下使用
//         值：true(真)    false(假)
var isShangke = true   //上课为真



//undefined(未定义):当定义一个变量，但是没有赋值，这个变量就是undefined

var num
console.log(num)


//字符串：1.所有的字母，符号等都需要用引号引起来，单双引号都可以
//       2.字符串中的\会把后面的字符进行转义，可以定义多行字符串
//       3.双引号中不能用双引号，双引号中可以用单引号，单引号中可以用双引号

var name1 = "YY"
var name2 = "张\n三"
console.log(name1,name2)

/*
反引号：1.可以定义多行字符串
       2.可以包含变量并且解析变量   
*/
//`好处1：可以定义多行字符串
var sea = `
啊~~
大海~~`
console.log(sea)

/*
对象数据类型：
介绍：实际工作中，数据由多个数组组合而成。
对象：由哦很对键值对组合成的
定义对象的方法：1.方法一：使用{}
               2.方法二：
*/
var people = {
    name : "张三",
    age : 10,
    gender: "保密",
    height: "180cm",
    weight: "65KG"
}

console.log(people)

var people1 = new Object({
    name : "张三",
    age : 10,
    gender: "保密",
    height: "180cm",
    weight: "65KG"
})

console.log(people1)

//符串我是"我是中国人"，我爱我的祖国"种的中国人需要加上引号再控制台打印出来

var string = "我是'中国人'，我爱我的祖国"
console.log(string)

//对象，