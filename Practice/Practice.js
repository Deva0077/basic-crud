
// Veriable creation 
//let, const, var
//-----------------------------let---------------------
/*
let a=10;
let b=20;

let temp=a;
a=b;
b=temp;

console.log(a);
console.log(b);

*/

//-------------------------var----------------------------
/*
var String1="Hello";
var String2="Hii";
var String3="";

String3 = String1 + String2;
console.log(String3);

*/
//------------------------Const----------------------------
/*
 const a=[0,1,2,3,4,21,6,7,8];
 a.entries();
 console.log(a);
 
*/

//############For Loop###########
/*
var array=[10,2,3,8,7,9];
for (let i = 0; i < array.length; i++) 
{
    console.log(array[i]+" "+i);
}

//reverse for loop

var a=[10,2,3,8,7,9];
for(let i = a.length-1; i > 0 ; i--)
{
    console.log(array[i]+" ")
}

*/

//#####################__ForEach__##################
/*

const a=[11,2,3,9,8,7,1];
a.forEach(function (v,i) {
    console.log(v+" "+i);
});

*/

//###################### __Map__###################

/*
  const person=new Map([["Devendra",10000],
   ["kalpesh",120000],
   ["Rahul",30000],
   ]);
   console.log(person.entries());
   console.log (person.set("v",1200));
   person.forEach(function (check,i){
    
    console.log(check,i)
   });

   */

//################__Reduce__##################
/*
  const number=[11,2,6];
  let sum=0;
  for(n of number)
  {
    console.log(n+" ");
    sum=sum+n;

  }
 console.log(sum);

 */
/*
 var number=[11,22,33];
 let v=number.reduce((accomulator,currentvalue)=>{
    return accomulator+currentvalue;
 });
console.log(v);

let sum=0;
for(n of number)
{
    sum=sum+n;
}
console.log(sum);

*/
//once again we see how its works
/*
const a=[10,20];
let i=a.reduce((sum,currentvalue) =>{
    return sum+currentvalue;
})
console.log(i);

*/

//##################__Filter__#######################
//this is used to stored the filtered data in new array
/*

let number=[10,20,-30];
let a=number.filter((value)=>{
    return value>=0;
});
console.log(a);

*/

//###################### Switch Case ################
/*
let day=5;

switch(day)
{
    case 1:
        console.log("Moneday");
        break;
    case 2:
        console.log("Moneday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;  
    case 7:
        console.log("saturday");
        break;    

}

*/

//###########################__Templet literal__#############################
/*
let firstName="Devendra";
let lastName="patil";

let text=`Welcome,
${firstName} ${lastName}!

       Nice to meet you and enjoy your day...! `;

console.log(text);

*/

//Second Example

let firstname="Devendra";
let last="Bhai";   

 





