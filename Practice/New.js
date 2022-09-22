
//practice on Map 
//***********************************************************
// const vehicle = new Map([["Platina",65000],
//  ["Duke",150000],
//  ["Hunk",200000],

//  ]);
//  console.log(vehicle.entries());
//  vehicle.set("Pleseure",150000);
//  console.log(vehicle.entries());
//  vehicle.set("bullet",220000);
//  console.log(vehicle.entries());
//  console.log(vehicle.get("Duke"));
//  vehicle.delete("Hunk");
//  console.log(vehicle.entries());
//  console.log(vehicle.size);


//sort Method && Reverse Method
//**************************************************//
//Keep in mind sort method only usefull in string not for  number
//  const array=[10,60,20,1,0,36,98,9,3,6];
//  for(let i=0 ; i < array.length; i++)
//  {
//     for(let j=i+1; j< array.length; j++)
//     {
//         if(array[i] < array[j])
//         {
//           var temp = array[i];
//           array[i] = array[j];
//           array[j] = temp;
//         }

//     }
//  }
//  console.log(array);

/*
const a= ["Devendra","Rahul","Narendra","Akash","yash","salman"];
a.sort();
console.log(a);
a.reverse();
console.log(a);
*/


//forech Method 
/*
const a=[0,2,9,7,3,5,6,44];
a.forEach(function(v) {
    console.log(v);
});
*/
/*
var array=["Abc","def","ghi","jkl","mno","pqr"];
var sum=0;
array.forEach(function(value) {

    sum=sum+value;
    
});
console.log(sum);

*/

//Arrow Function 
//********************************************* */
/*
function callMe()
{
    console.log("Good Afternoon Bhai Chai Pilo")
}
callMe();

cllMeOnce = () =>
{
    console.log("Hello bhai 1 bar call karlo")
}
cllMeOnce();

//********************************************************** */


//Spread Operator ...abc,...def
/*
const array1=[1,2,3];
const array2=[4,5,6];

const combine3=[...array1,...array2];
console.log(combine3);
*/


//****************************************************** */
//Promises function
/*
const a= new Promise((resolve, reject)=>{

    let a=1+1;
    if(a==3)
    {
        resolve("successfully...")
    }
    else{
        reject("unsuccessfully...")
    }

});

a.then((massage)=>{
    console.log("succ");
}).catch((massage)=>{
    console.log("not");
})

*/

// js Objects

const person={};
person.firstname="Devendra";
person.lastname="patil";
person.gender="male";
person.mobileNo="8806130085";
console.log(person.firstname,person.lastname,person.gender);

const fruits={name:"Apple",
  colour:"GreyDark",
  Price:250,
};
console.log(fruits);

//function in our object

 const obj={firstname:"deva",
 lastname:"patil",
 Location:"Chitodgad",
 contact:"8806130085",
 Add:function()
 {
    return this.firstname+" "+this.lastname+" "+"Location is"+this.Location;
 }
 }
 obj.forEach(function (v) {
    console.log(v);
    
 });















 