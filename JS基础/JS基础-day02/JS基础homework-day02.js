console.log("我是传智学院的一名学生，我为自己代言")

var a = 88
console.log(a)

var num = 22
console.log(num)  //数字类型

var string = "全栈"
console.log(string)  //字符串类型

var num
console.log (num)   //undefined类型

var isture=true     //布尔类型

var name = 0
console.log (name)  //null

//对象类型
var  book = {
     name : "陈情令",
     page : "100页",
     color : "green"
}
console.log(book)

var book1 = new Object({
    name : "陈情令",
    page : "100页",
    color : "green"
})
console.log(book1)

//两个变量的交换
var num1 = 123
var num2 = 456
var num3 = num1
    num1 = num2
    num2 = num3
console.log(num1,num2)

var num1 = 123
var num2 = 456
    num1 = num1+num2
    num2 = num1-num2
    num1 = num1-num2
console.log(num1,num2)

var myVarVariable = 666
const myConstVariable = 2;
console.log(myVarVariable);   //666
console.log(myConstVariable);  // 2
myVarVariable = 888;
myConstVariable = 5;  
console.log(myVarVariable); //888
console.log(myConstVariable); //报错

var people ={
    name : "YY",
    age : 20,
    xuehao : 11,
    height : "160cm",
    weight : "50KG",
    number : 12345677    
}
people.gender = "男"
delete people.weight
console.log(people.name,age)

// var people1 =new Object({
//     name : "YY",
//     age : 20,
//     xuehao : 11,
//     height : "160cm",
//     weight : "50KG",
//     number : 12345677 
//      gender : "男"   
// })
// console.log(people1.name,age)

var name = 'zs';
var age;
console.log(name);  //zs
console.log(age);   //undefined

var string = "君不见，黄河之水天上来，奔流到海不复回。\
君不见，高堂明镜悲白发，朝如青丝暮成雪。\
人生得意须尽欢，莫使金樽空对月。\
天生我材必有用，千金散尽还复来。\
烹羊宰牛且为乐，会须一饮三百杯。\
岑夫子，丹丘生，将进酒，杯莫停。\
与君歌一曲，请君为我倾耳听。"

var poem = `
君不见，黄河之水天上来，奔流到海不复回。
君不见，高堂明镜悲白发，朝如青丝暮成雪。
人生得意须尽欢，莫使金樽空对月。
天生我材必有用，千金散尽还复来。
烹羊宰牛且为乐，会须一饮三百杯。
岑夫子，丹丘生，将进酒，杯莫停。
与君歌一曲，请君为我倾耳听。`
console.log(poem)

var string = "我是\"中国人\"，我爱我的祖国"
var string = "我是'中国人'，我爱我的祖国"

var arr = [11,12,13,14,15,16] 
console.log(arr[3])
arr[0] = 666
arr[1] = arr[2]+arr[4]

var arr1 = [12,"123",false,{age:12,name:"YY"}]

var people = [
    {
        name:"YY",
        age:12,
        gender:"男",
        studentLID:12344
    },
    {
        name:"Y",
        age:18,
        gender:"女",
        studentLID:12344
    }
]
console.log(people[1].name)
people[0].gender = 18
console.log(people[0].age+people[1].age)

var arr4 = [
  {
        price : 45,
        num : 123,
        name : 11,
        colors:["yellow","white","red"]
    }
]
console.log(arr4[0].colors[1])


