/*first lecture*/

const profile = {
    name: "shradhakhapra",
    followings: 4,
    followers: 596,
    posts:195,
    follow: true,
    message: false,
};
console.log(profile);

/*second lecture*/

=== is strict operator for equality. && is used as and operator and || is used as an or operator.
! is used for nagation. 
if(age>18){you cannot vote.}
    js can read anything in above curve brackets.
    = is assignment operator and += is used for equality and ++ is used for increment.
 if(){ } else{}
 modulus or % gives us reminder of two numbers after divison operation.
 in JS 2**3 means 2 raise to the power of 3 means 8
 let num = 7
if (num%2 === 0){
    console.log(num, "is even")
}else{
    console.log(num "is odd)
}
if else is used two check two conditions but we can use multiple else if,
else if and else if blocks to check multiple statements and at the last 
we write only "else".


 

for using if for only one statement do not use else. 

ternary operators
a ? b : c
if a is true then b will execute an if a is false then c will execute

alert and prompt alter only gives message but prompt can also take an input
 


/*second lecture*/ loops and strings


for(let i=5; i<=4; i++){
    console.log(My College)
} 
let sum = 0;
for( i=1; i<5; i++){
    sum = sum + 1;
    }
    console.log( "sum is : ", sum);

    let i = 0;
    while(  i<=5 ){
        console.log( " sum is : " , sum);
         i++
        }
in do while loop the code must runs at least one time as        

let i = 20;
do{
    console.log("Apna Colege ")
    i++;
}while(i<=10);
at end ; is compulsory



for-of is used to add loop on strings and arrays as

let str = "ApnaCollege";
for(let i of str){
    console.log("i =", i);
}

let str = "JavaScript";
let size = 0;
for(let i of str){
    console.log(i);
    size++
}
console.log(size)

//for in is used for objects and arrays

const car = {
    name: 'Volvo',
    price : '50 lacs',
    model: 2021
}
for(let i in car){
    console.log("key is ",i , "value =", car[i] )
}

let i=0;
for(i=1 ; i<=100 ; i++ && i%2==0){
    console.log(i)
}

let gameNum = 14; 
let userNum=prompt("Enter the number");
  while (gameNum != userNum) {
    prompt("You entered wrong number. Guess again.")
}; 
console.log('Congratulations! You entered the right number');


<!--strings-->
   str.length
  let str = "This is a string."
  let specialStr = `This is a string.` 
   <!-- template literals -->
    let obj = {
        price : 10,
        item : "pen"
    }
let output = `The price of ${obj.item} is ${obj.price} rupees.`;
console.log(output)

`` is another way to write a string and ${} is used to write a placeholder or 
obj.key values 
in ${} the number after calculations becomes a string.
/n is escape character means to make a new line within a string
same /t is used for a tab space
 <!--Special Strings Methods-->

 str.toUpperCase() creates a new string and makes change sin it
 str.toLowerCase() strings are immutable in JS
str.trim()  remove white spaces from start and end
str.slice( , )
str1.concat(str2)  or       str1 + str2
str.replace(searchval,newval)   str.replaceAll()
str.charAt(idx)   idx = index

let str1 = prompt("Enter your full name.");
str1 = str1.toLowerCase;
let str2 = str1.length;
console.log("@" + str1 + str2);



<!-- Lecture-3   (Arrays) -->
let arr = [1,2,3,4]
arr[1] = "2"     for replacing or updation of aaray
array is mutable but strings are immutable.
 <!-- loops over an array -->

let heroes = ["ironMan","spiderMan","Hulk"]

  for(let idx=0; idx<heroes.length; idx++ ){
    console.log(heroes[idx])
  }
above method is used to get indices of array


let marks = [85,97,44,37,76,60];
let sum = 0;
for(val of marks ){
      sum = sum + val;
}
let avg = sum/marks.length;
console.log(`Average marks of the class is ${avg}.`);










