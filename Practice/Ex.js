const arr = [
    { name: "Aakash",age: 25,city: "Pune"},
    {name: "Narendra",age: 22,city: "Pune"},
    {name: "Nawaz", age: 24,city: "Pune" },
    {name: "Rahul",age: 27,city: "Mumbai"},
    {name: "Mrunal",age: 29,city: "Mumbai"}
   ];

  
  
  console.log(" Filter :: Pealpe whose city Pune")
   for(let i=0; i < arr.length; i++)
   {
     if(arr[i].city="pune")
     {
       console.log(arr[i].name);
     }
   }
  
  
 console.log( "Filter 2 : People who whose age in <= 25 ");

  for(let i=0; i < arr.length; i++)
   {
     if(arr[i].age <= 25)
     {
       console.log(arr[i].name);
     }
   }
  
  console.log("Filter 3 : People who live in Mumbai and age is grater than 25")
  for(let i=0; i < arr.length; i++)
   {
     if(arr[i].city = "Mumbai" && arr[i].age > 25)
     {
       console.log(arr[i].name);
     }
   }
  
 console.log("Sort 1 : By name") ;
 
 function compareName( a, b ) {
    if ( a.name < b.name )
    {
      return -1;
    }
    if ( a.name > b.name )
    {
      return 1;
    }
    return 0;
  }
 console.log(arr.sort(compareName));
 
  
 console.log("Sor 2 : By city") ;
  function compareCity( c, d ) {
    if ( c.city < d.city )
    {
      return c.city;
    }
    if ( c.city > d.city )
    {
      return d.city;
    }
    return 0;
  }
  console.log(arr.sort(compareCity));
  
  
console.log("// Sort 3 : By age");

function compareAge(obj) {
    console.log( 'Age Objects ::', obj);
    return obj.sort((a,b) => a.age - b.age)
}
console.log(compareAge(arr));
  
console.log("Sort 4 : Add new field salary for each mumbai = 25000 and pune 15000")
  
let arr2 =[];
    arr.map(ele =>{
        let newObj= null;
        if(ele.city =="Pune"){
            newObj = {...ele, salary: 20000}

        }else{
            newObj = {...ele, salary: 25000}
        }
        arr2.push(newObj)

    }); 
    console.log(arr2)
