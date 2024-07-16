/**console.log("hello!");
console.log("abhay singh")
console.log("i love shrii")
fullname= "abhay singh";**/

/**console.log('abhay singh');
age=24;
console.log("24")
graduation="bca"
console.log("bca")**/

/**const product={
    title: "ball pen",
    rating:5,
    offer:70,
    price:270,s
};
console.log(product);**/

/**const profile = {
    name:"shradhakhapara",
    isfollow: true,
    followers: 123,
    following: 12,

};**/

//Arithematic operator
/**let a = 5;
let b = 3;
console.log("a=",a, "& b = " , b ) ;
console.log("a+b=",a+b);
console.log("a-b =",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);**/
//modulus % give us reminder
/**console.log("a%b=",a%b);**/
//exponential ** this give the values to power square
/**console.log("a**b=",a**b);**/
//unary operator
//let a = 5;
//let b = 3;

//console.log("a=",a,"& b=",b);
//a=a+1; or wite like this a++
/**a++;
console.log("a=",a);**/
//a=a-1; or we write like this a--
/**a--;
console.log("a=",a);**/

//pre increment
//firstly i will change the value then after i will print the value
/**console.log("++a=",++a);**/
//post increment
//firstly i will print the value then after change the value
/**console.log("a++=",a++);**/
//pre decrement
//
/**console.log("a--=",a--);
console.log("a=",a);**/

//asignment operators
/**let a =5;
let b =2;

a += 4; // +=  means a=a+4
console.log("a=",a);
a -= 4; //-= means a=a-4
console.log("a=",a);
a *= 4;  //*= means a=a*4
console.log("a=",a);
b /= 4; // /= means a=a/4
console.log("b = ", b);
a %= 4; // it means that a=a-5
console.log("a=",a);
a **= 4; // a = a ** 4
console.log("a = " , a);**/

// comparison operator it show the value in form of true,false
/**let a =5;
let b =2;

console.log("5 == 2", a == b);**/

/**let a =5;
let b =5;

console.log("5 == 5",a == b);**/
/**let a = 5;
let b = 5;
console.log("a!=b",a!=b);**/
/**let a = 5;//number
let b = 2;
console.log("a!=b",a!=b);**/
/**let a = 5;
let b = "5"; //string-> number

console.log("a===b",a===b);**/

/**let a = 5;
let b = "5";//sting-> number
console.log("a!==b",a!==b);**/

/**let a = 5;
let b = 3;
console.log("a<b",a<b);**/

/**let a = 5;
let b = 3;
console.log("a>b",a>b);**/

/**let a = 5;
let b = 3;
console.log("a>=b",a>=b);**/

//logical operators its also shows the value true or false

//let a = 5;
//let b = 6;

/**let cond1 = a > b;
let cond2 = b === 6;
console.log("cond1 && cond2 =",cond1 && cond2);**/
//or we write 
/**console.log("cond1&&cond2=",a<b&&a===b)**/
// ||this is a pipe to give a true value
//console.log("cond1||cond2=",a<b||a===b);//in this condition dono me se agr koe v sahi value deta to true dega
// ( ! )ye agr koe value ka ans true aata h to ye usko false aur agr value false to uska value true de deta hai
//console.log("!(6<5)=",!(a===6));

//conditional statement
 //" if " statement
 /**let age =28;
 if(age>18){
    console.log("you can vote");
 }**/


 /**let age =12;

 if(age < 18){
    console.log("you can not vote");
 }**/

//let mode = "dark"
//or
/**let mode="light"
let color;

 if (mode === "dark"){
    color ="black";
 }

 if (mode === "light"){
    color="white";
 }
 console.log(color);**/
// if else uses "example 1"
/** let mode="light"
 //or mode is dark then they print value black
 // or mode is any other then they always print white

let color;

 if (mode === "dark"){
    color ="black";
 } else{
    color="white"
 }
  console.log(color);**/
// example 2
/**let age=25;
//or less than the 18 then they print not vote
if (age>18){
    console.log("vote");
} else{
    console.log("not vote")
}**/
//example 3
//% is use for divisible value then print 
/**let num=26;
if(num%2 ===0){
    console.log(num,"is even");
} else{
    console.log(num,"is odd");
}**/
// else if me ye hota h pahle 1 condition ko check karege agr result nhi aata h tb cond2 check kare ....
/**let mode = "pink"
let color;
if (mode==="dark"){
    color="black";

}else if(mode==="blue"){
    color="blue";
}else if(mode==="pink"){
    color="pink";
}else{
    color="white";

}
console.log(color);**/
//  ? and : this is use for ternary operator
/**let age = 26;
let result= age>=18? "adult":"not adult";
console.log(result);**/
//practices ques:-1
//promt
/**let num = prompt("enter a number");

if (num%3===0){
    console.log(num,"is multiple of 3");
    }else{
        console.log(num,"is not a multiple of 3");
    }**/

// practices ques:-2

/*let score = prompt("enter your score (0-100):");
let grade;

if (score>=90 && score<=100){
    grade="A";
} else if (score>=70 && score<=89) {
    grade="B";
} else if (score>=60 && score<=69) {
    grade="C";
} else if (score>=50 && score<=59) {
    grade="D";
} else if (score>=0 && score<=49) {
    grade="F";
}

console.log("according to your score, your grade was:",grade );*/


//loop and string.....

//loops in js


//FOR LOOP.....

/*for( let count=1;count<=10000;count++){
    console.log("my first javascript");
}

console.log("loop has been end");*/

//calculate sum of 1 to 5
/*let sum=0;
for (let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum=",sum);*/

//calculate sum of 1 to 100
/*let sum=0;
let n=100
for (let i=1;i<=n;i++){
    sum=sum+i;
}
console.log("sum=",sum);*/

//print 1to 5
/*for (let i=1;i<=5;i++){
    console.log("i=",i);
}*/

// *infinite loop: a loop that never ends and it never use

//while loop
/*let i=1;
while(i<=10){
    console.log("apna college");
    i++;
}*/

//do while loop
/*let i=1;
do {
    console.log("i=",i);
    i++;
} while(i<=5);*/

// for -of loop (this use for only "string &arrays" not for object )
/*let str = "javascript";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}

console.log("string size=",size);*/

//for in loop(this use for object)

/*let student ={
    name:"abhay singh",
    age:21,
    pecentage:65,
    inpass:true,

};

for (let key in student){
    console.log("key=",key,"value",student[key]);
}*/


//practices Q1
 /*for(let num=0; num<=100; num++){
    //console.log("num=",num);
    if(num%2===0)
    console.log("num=",num);
 }*/

 //practices Q2

 /*let gameNum=25;
 let userNum=prompt("guess the correct num:");
while(userNum !=gameNum) {//game
  userNum=prompt("you entered wrong number.guess again:")  ;
}
console.log("congratulation you are selected right Num");*/

//string in JS

//template literals in js

// string method 

//str.toUpperCase

/*let str = "ApnaCollage";
str=str.toUpperCase();
console.log(str);*/

//str.toLowerCase

/*let str = "apnacollage";
str=str.toLowerCase();
console.log(str);*/

//str.trim() this use for remove whitespace

/*let str ="    apna  collage js    ";
console.log(str.trim());*/

//practices

/*let fullName= prompt("enter your full name without space");
let username="@"+fullName+fullName.length;
console.log(username);*/


//lecture 4 (arrays)

/*let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);*/

// arrays indices ( we can print the value like that ;-marks[0] then the print the value of number)

/*let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);*/

//looping over an array

/*let heroes = ["ironman","spiderman","superman","kriss","dhoom"];
for (let i=0; i<heroes.length; i++){
console.log(heroes[i]);
}*/


//for of 
/*let cities=["delhi","mumbai","padrauna","gorakhpur"];
for(let city of cities){
    console.log(city.toUpperCase());
   
}*/

//practice 1
/*let marks =[85,97,44,37,76,60];
let sum=0
for(let val of marks){
    sum+=val;

}
let avg =sum/marks.length;
console.log(`avg marks of the class=${avg}`);*/

//practice 2
//let items =[250,645,300,900,50];
/*let idx=0;
for (let val of items){
    console.log(`value at index ${idx}=${val}`);
    let offer= val/10;
    items[idx]=items[idx]-offer;
    console.log(`value after offer=${items[idx]}`);
    idx++;
}*/

//method 2 to solve 

/*for(let i=0;i<items.length;i++){
let offer = items[i]/10;
items[i]-=offer;
}
console.log (items);*/

//array method " they are three type "

// 1 is push method

/*let food items =["tomato","chips","orange","papaya"];
fooditems.push("onion","naspati","ginger");
console.log(fooditems);*/

//2 pop method 

/*let fooditems =["tomato","chips","orange","papaya"];
console.log(fooditems);
let deleteditems =fooditems.pop();
console.log(fooditems);
console.log("deleted",deleteditems);*/

//3 to string

/*let fooditems =["tomato","chips","orange","papaya"];
console.log(fooditems);
console.log(fooditems.toString());*/

//concat () method

/*let marvelHeroes=["hulk","thor","ironman","spiderman"];
let dcHeroes=["batman","superman","captainmarvel",]
let heroes=marvelHeroes.concat(dcHeroes);
console.log(heroes);*/

//unshift () add to start\

/*let marvelHeroes=["hulk","thor","ironman","spiderman"];
marvelHeroes.unshift("antman");
console.log(marvelHeroes);*/

//shift() delete from start & return

/*let marvelHeroes=["hulk","thor","ironman","spiderman"];
marvelHeroes.shift("hulk");
console.log(marvelHeroes);*/

//practices

/*let companies=["blooming","microsoft","uber","google","ibm","netflix"];
companies.shift("blooming");
companies.splice(2, 1,"ola");
companies.push("amazon");
console.log(companies);*/

//lecture 5 (function)

/*function myfunction(){
    console.log("abhay singh");
    console.log("welcome to our coding");
}
 myfunction();*/

 //function ->2 number , sum

 /*function sum(x,y){
    console.log(x+y);
 }
sum(182,345);*/

// 2 type

/*function sum(x,y){
    s=x+y;
    return s; // return ke baad koe code execute nhi hoga kavi v
}
let val=sum(3,4);
console.log(val);*/


// arrow functions me " sum function " we have create 

/*function sum(a,b){
    return a+ b;
}

const arrowSum = (a,b)=>{
    console.log(a+b);
};

// arrow multiplication

function Mul(a,b){
    return a*b;
}

const arrowMul=(a,b)=>{
    console.log(a*b);
}*/

// arrow vowels 

/*function countVowels(str){
    let count=0;
    for(const char of str) {
        if( char==="a"|| char==="e"|| char==="i"|| char==="o" || char==="u")    
      {
    count++;
}
    } 
    return count;
}*/

// arrow function 
 /*const countVol=(str) => {
   
        let count=0;
        for(const char of str) {
            if( char==="a"|| char==="e"|| char==="i"|| char==="o" || char==="u")    
          {
        count++;
    }
        } 
        return count;
    };*/

// for each loop in arrays "callback function"

/*let nums = [2,3,4,5,6];

nums.forEach((num)=>{
    console.log(num * num);
});*/

// some more array methods "map" ....they create a new array 
/*let nums=[67,87,97];
    nums.map((val)=>{
        console.log(val);

    });*/

// filter methods

/*let arr = [1,3,4,5,6,7,8,9,];

let evenArr = arr.filter((val)=>{
   // return val % 2 === 0; // we want odd value the we print
    return val % 2!==0;

});

console.log(evenArr);*/

//reduce value
 /*let arr=[3,4,5,6];
 const output =arr. reduce((res,curr)=>{
return res+curr;
 });
 console.log(output);*/

 // to print largest num in array to write this code
  
/* let arr=[2,4,6,7,9,888,22];
 const output =arr.reduce((prev,curr)=>{
    return prev >curr?prev:curr;
 });

 console.log(output);*/

 //practice 1

 /*let marks=[86,98,45,65,99];
let toppers=marks.filter((val)=>{
 return  val>90;
});

console.log(toppers);*/

//practices 2

/*let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum =arr.reduce((res,curr)=>{
    return res+curr;

});
 console.log("sum=",sum);

 let factorial=arr.reduce((res,curr)=>{
    return res*curr;
 });
 console.log("factorial=",factorial);*/

 //  lacture 6 :- DOM "document object model"

 //console.log("hello");

 //alert("abhay singh");

 //console.dir(document.body);

 //DOM manupulation
 
 /*let heading=document.getElementById("heading");
 console.dir(heading);*/

 /*let headings=document.getElementsByClassName("heading");
 console.dir(headings);
 console.log(headings);*/

 /*let div=document.querySelector("div");
 console.dir(div);*/

 //let heading=document.querySelector("h1");

 //practices ques 1

 /*let h2=document.querySelector("h2");

 console.dir(h2.innerText);

 h2.innerText = h2.innerText + "from apna collage student";*/

 //practices ques 2
//let divs= document.querySelectorAll(".box");

/*let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}*/



/*divs[0].innerText="new 1";
divs[1].innerText="new 2";
divs[2].innerText="new 3";*/



//console.log(divs[0]);

//DOM lacture 2  "to get attributes"

/*let div=document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));*/

// to set attribute

/*let para=document.querySelector("p");
console.log(para.setAttribute("class","newclass"));*/

// style

/*let div= document.querySelector("div");
div.style.backgroundColor="yellow"; // to use change div color
div.style.backgroundColor="orange";

div.style.visibility="hidden" //use to hide the anything 

div.innerText="abhay"; // use to change the text which was write inside the div*/



// insert element 

/*let newBtn= document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);*/


//let div=document.querySelector("div");
// div.append(newBtn); this is use after div
//div.prepend(newBtn); this is use top div
//div.before(newBtn); //this is use for out side the div up side
//div.after(newBtn); //this is use for out side the div down side 

/*let p =document.querySelector("p");
p.after(newBtn);*/




/*let newHeading=document.createElement("h1");
newHeading.innerHTML = "<i>Hi this is abhay</i>";


document.querySelector("body").prepend(newHeading);*/


// for deletion node

/*let ul=document.querySelector("ul");
ul.remove();*/

//newHeading.remove();


//practices q1

/*let newBtn=document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color="white"; 
newBtn.style.background="red";

document.querySelector("body").prepend(newBtn);*/

// lacture 8 events in js

/*let btn1=document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("btn was clicked");
    let a=25;
    a++;
    console.log(a);
};

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
};*/

// event listeners "add"

/*let btn=document.querySelector("#btn1");

btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked");
    console.log(evt);
    console.log(evt.type)
});

btn1.addEventListener("click",()=>{
    console.log("button was clicked-handler2");
});

let div=document.querySelector("div");*/


// event listener"remove"
/*let btn=document.querySelector("#btn1");

btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked-handler1");
});

btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked-handler2");
});

const handler3 =()=>{
    console.log("button1 was clicked-handler3");
};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(evt)=>{
    console.log("button was clicked-handler4");
});

btn1.removeEventListener("click",handler3);*/

// practices

/*let modeBtn = document.querySelector("#mode");
   let crrMode = "light"; 

modeBtn.addEventListener("click",()=>{
  if (currMode==="light"){
    currMode="dark";
    document.querySelector("body").style.backgroundColor="white";
  } else {
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
  }
 
  console.log("currMode");



});*/

// lacture 9


/*const student={
    fullName:"abhay singh",
    marks:60,
    printMarks: function(){
        console.log("marks=",this.marks);
    },
};*/

// class

/*class toyotaCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }


stop(){
    console.log("stop");
}

//setBrand(brand){
  //  this.brand=brand;
//}

}*/

/*let fortuner=new toyotaCar("fortuner",10);
console.log(fortuner);*/

//fortuner.setBrand("fortuner");

/*let lexus=new toyotaCar("lexus",12);
console.log(lexus);*/

//lexus.setBrand("lexus");


// inheritance

/*class person{
    constructor(){
        this.species ="homo sapiens";
    }
    eat(){
        console.log("eat");
    }

sleep(){
    console.log("sleep");
}

work(){
    console.log("do nothing");
}

}

class Engineer extends person {
    work(){
        console.log("solve problem,build something");
    }
}

let abhayObj=new Engineer();*/

// super keyword

/*class person{
    constructor(){
        console.log("enter parent constructor");
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}

class Engineer extends person{
    constructor(branch){
        console.log("enter child  constructor");
        super();
        this.branch=branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("solve problem, build something");
    }
}

 let engObj = new Engineer("chemical eng");*/


 //practice q1

 /*let DATA ="secret information";

 class User {
    constructor(name,email){
        this.name=name;
        this.this=email;

    }

    viewData (){
        console.log("data=",DATA);
    }
 }

let student1 = new User("abhay","abhay@gmail.com");
let student2 = new User("srii","shri@gmail.com");*/



 //practice q2

 /*let DATA ="secret information";

 class User {
    constructor(name,email){
        this.name=name;
        this.this=email;

    }

    viewData (){
        console.log("data=",DATA);
    }
 }

 class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA ="some new value";
    }
 }


let student1 = new User("abhay","abhay@gmail.com");
let student2 = new User("srii","shri@gmail.com");


let admin1=new Admin("admin","jasdj@gmail.com");*/


// lecture 12 // asynchronous

/*console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},4000); //timeout


console.log("three");
console.log("four");*/

//callback hell  function

/*function getData(dataId , getNextData){
    setTimeout(()=>{
    console.log("data",dataId);
    if (getNextData){
        getNextData();
    }
},2000);
}*/

//this is callback hell function

/*getData(1,()=>{
    console.log("getting data2....");
    getData(2,()=>{
        console.log("getting data3....");
        getData(3,()=>{
            console.log("getting data4....");
            getData(4);
        });

    });
});*/

// promises function
 
/*function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        },4000);
    });
}

console.log("fetching data1......");
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
});*/


// async await....

/*async function hello(){
    console.log("hello");
}

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            },2000);
    });
}


async function getAllData(){
    console.log("getting data.....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
}*/


// fetch API stand for application programming interface

const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts =async()=>{
    console.log("getting data.....");
    let response =await fetch(URL);
    console.log(response);
    let data =await response.json();
    factPara.innerText=data[1].text;
}; 

btn.addEventListener("click",getFacts);




















