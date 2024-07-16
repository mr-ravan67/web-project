// word and keyword

// word vah chiz hota hai jiska meaning nhi hota hai js main interprator ya compiler jis chiz ko na samjh paye jaise name ,is ,am,man ,like that that's type of word are not understand by complier that is called word.
// keyword ka matlb vah chiz jiska matlb js me hota hai jaise "if , else,for,etc " they are called keyword 

// variable and constant 
// 'var 'const' let'

// the variable means the value change 
// constant is the the value not change 

/*var dulha="nikku";
var dulhan="sri"; //  variable me changing kr skate hai  

// through the check use console to put the output :- dulha + "weds" + dulhan and press enter then show the value and we change the dulha or dulhan value then simply write :- dulha ="nikku" or dulhan ="nikki"

const dulha ="abhi";
const dulhan="shri";*/ // in constant has not change the value

//like the variable use the same code for this but this coe has not working because this is constant

// hositing   - variable and function are hoisted which means their declaration is moved on the top of code 


// types in js is 2 type :-  ("1") is primitive  and reference

 // primitives  = number , string , null , undefined, boolean.
 // reference = {} [] () '  aisi koe v value jisko copy karne pr real copy nahi hota , balki us main value ka reference pass ho jata hai , use hum reference value kahte hai ,aur jiska copy karne par real copy ho jaye wo value primitive type hoti hai .

/*var a=[1,2,3,4];
 var b=a;

 b.pop();*/  //this is exmple of reference jb ham kuch change karege b tb a me v chaging hoga aur a me changing karege to b me hoga 

 // conditionals  -- if else else-if 

 // if( 'es bracket me keval true ya flase he aayega eska matlb ye nhi  ke bs true ya false he aayega ..aap chahe to eske ander kuch yesa likh skte h jiska matlb true ya false ho ')

/*if (23>10);
if (22<10);//es ko apply kr ke check kr ke dekh kste hai
  
// if else ko es trh se use karege

if(23<10){ // then there output are false that time else are working
 }
else{
    // agr if ka jo value deye hai aur vh true hota hai tb else nhi chalega 
}*/

// else-if ka use tb karte hai jb aap ke pass ak se jayde raste ho tb

/*if (11>12){

}
else if (12>13){

}
else if(13>14){

}
else{

}*/

// es condition me jb if nhi chalega .tb ham check karege else if ko agr phir  v nhi chal rha h tb ham phir check karege else if ko agr phir v nhi chalta h tb else ko check karege aur tb vh chal jayega ... pr agr es sb ke bich me koe chal jata tb hota ye ke vhe pe stop ho jata

// loops--for while
// loop ka matlb repeat
//example 
// 1 1 1 1 1 1 1 1 1 ye v loop hai es me print repeat ho raha hai smae
// 1 2 3 4 5 6 7 8 9  ye dono loops hai es me number print ho rhe hai..

// 3 baar "harsh" ko print krna hoga tbb us time ham loops ka use nhi karge kyu hamko 3 baar he karna hai bina loops ke aasani se ho jayega 
// 30 baar "harsh " ko print karna hoga to ham loop ka use karge ex.  console.log("harsh"); 

//for( start;end;change) //it's means that 
// 0 -10 

/*for (var i = 0; i < 11; i++) {
    console.log(i);   // value ko print krne ke liye ham uske krte hai 
}

for(var i=25; i<50; i++){
    console.log(i);
}*/

// both loop ka working as well


// function  mainly teen kaam ke liye use  hota hai 

// 1) jab aapka code aap turant nhi . future main me chalana chahte ho 
// 2) jab aapka code aap reuse karna chate ho tb 
// 3) jab aap code chalana chate ho har baar with different data 

// function ka matlb aap kuvh code ko likh kar koe namm de skte ho and baad me usey use kr skte ho  with that name as many times

// example 
/*function chickenBanao(){
console.log("chicken karido ");
console.log ("coocker ko garam karo");
console.log("pyaj dalo tel dalo");
console.log("aur phir usme masala dalo");
console.log("phir usme pani dalo aur");
console.log("phir usko band kr do 2 seete tk");
}
// yese nhi chalega function uske liye niche usko print krne ko boloege 

chickenBanao();*/

// argument = real value jo ham dete hai function chalate wakt 
// parameter = variable jime value store hoti hai argument wali


// arrays = group of values

//var arr=[ 11,12,13,14,56];

// in arrys the position of number represent with 0 index to infinte its depend upno the total number 

// push pop shift  unshift

// push ka mtlb add value es liye use krte hai push like that

/*var arr=[1,2,3,5,6,7];
arr.push(8);*/

// pop ko use kr te hai arr se ak member ko hatane ke liye

/*var arr=[2,3,3,45,5,6,7,8];
arr.pop();*/

//unshift ko use karte hai staring me ak number ko jodne ke liye

/*var arr=[1,2,3,4,5,6];
arr.unshift(0);*/

//shift  ko use karte hai staring me ak number ko hata dete hai

/*var arr=[1,2,3,4,5,6];
arr.shift();*/

// splice es ko use krte hai jb hame arr ke bich me se kisi value ko hatana hota hai

/*var arr=[1,2,3,4,5,6];
arr.splice(2,1);*/

//object  == ek se jada bande ki baat ki to hua array , ak bande ke bare mein sari baat ki to hua object.

//object hai ak bande ki details ko hold krna in a key value pair 

// 1) blank obj 
//var a = {};

// 2) filled obj 
/*var a = {
    name:"abhay singh",
    age:23,
    email:"7081074767abhay@gamil.com",
}

// agr hamko kisi ke value ko acces krna h jaise name , age to hame value dene hogi

a.age*/

// updating object props
/*var a = {
    name:"abhay singh",
    age:23,
    email:"7081074767abhay@gamil.com",
    contact:"7081074767",

}

// jab hamko kuch update krna hoga object me se to ham 

a.age=24*/


