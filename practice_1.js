console.log("hello World");

// JS practice...//

// OPERATORS //

// Arthmetic Operators // 

 a = 200;
 b = 400; 
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 console.log(a++);
 console.log(++b);


// Assignment Operators // 


var a = 150;
var b = 260;
console.log(a+=b);
 console.log(a-=b);
 console.log(a*= b);
 console.log(a/= b);
 console.log(a%= b);

 var c = 66;
 c+=44;
 console.log(c);


// Relational / Comparisional Operators // 


var d = 20;
var e = 30; 

console.log(d == e);
console.log( d != e);
console.log( d > e);
console.log( d >=e);
console.log( d <e);
console.log( d <= e);

// Bitwise Operators // 

console.log( d| e);
console.log( d^e);

console.log( d<<e);
console.log( d>>e);

// Logical Operators//

//console.log( d && e);//
//console.log( d || e);//
//console.log( d ! e);//


// Statements and Loops // 
// IF-Else loops //\
var x=20;

if(x>30){

    console.log("true");

}else{

    console.log("false");

}

console.log
//IF Else If Loops // 

const number =0;

if(number>0){

console.log("number is greater than 0");

}else if(number<0){

console.log("number is lesser than 0");

}else{

console.log("number is 0");

}


//switch statement// 

const marks=85;
let Branch;
switch (true){
    case marks>=90:
    Branch="computer science";
    break;
    case marks>=80:
    Branch="mechanical engineering";
    break;
    case marks>=70:
    Branch="ECE";
    break;
    case marks>= 60:
    Branch="civil";
    break;
    default:
    Branch="Bio Technology";
    break;


}

console.log(Branch);


//Loops// 


//for loop - if we know exact number of iterations//
for (i=3; i<=5; i++){
    console.log(i);
}

//while loop - if we don't know exact number of iterations, it executes only when condition is true..//

var i=1; 
while(i<=30){
    console.log(i);
    i=i+2;
}


//do while//

var i=1;
do{
    console.log(i);
    i++;
}while(i>=40);


// Comparision Operators // 

var g=30;

var h=20;

if(g==h){

console.log("true");

}else {

console.log("false");

}


// Arrays // 

// 1.Creating Array //

var students=["yogendar", "harish", "sai"];

for(i=0;i<students.length;i++){

console.log(students[i]); }


let names = [];
console.log(names);
let courses = ['html','css','JS'];
console.log(courses);

// 2. Creating Array Directly using new keyword // 

let perlu = new Array();
perlu[0] = 'chiru';
perlu[1]= 'pawan';
perlu[2] = 'nagi'; 
console.log(perlu);


// 1.Accessing elements of an Array // 

console.log(courses[0]);

console.log(courses[1]);

console.log(courses[2]);


// 2. Accessing the First Element of Array// 

let firstItem=courses[0];

console.log(firstItem); 

// 3. Accessing the last Elemrnt of Array // 
 
let lastItem=courses[courses.length-1];

console.log(lastItem); 

// 4.Modyfying the Array Items // 

courses[2]="angular";

console.log(courses); 

// 5. adding elements like PUSH or UNSHIFT//

courses.push("PHP");
courses.unshift("Note PAd");
console.log(courses);

// 6. Removing elements by using Pop, shift, Splice // 

courses.pop();
courses.shift();
courses.splice(1,2);
console.log(courses);

// 7.Array Length // 

let course=["html","css","js","react"];

let len=course.length;

console.log(len);


// 8. Increase and Decrease the Array Length // 

course.length = 5;
console.log(course);
course.length = 2; 
console.log(course);

//JavaScript Date// 

let TodayDate = new Date();
console.log(TodayDate);



// javascript functions //



function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  //

//Javascript Functions//


let names = {
    fname: "Tarun",
    lname: "Damarasingi"
}
console.log(names.fname);


function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);


