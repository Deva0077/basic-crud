const express = require('express');  //for express reuirement
const app = express();

app.use(express.json()); //for accepting json request


app.listen(3000,() => {
    console.log("server start successfully....!");
})

var emp =[{                   //Created one array of emp to perform crud on same
    "id" : 1,
    "name":"Devendra",
    "design":"Developer"
}];


//Get Api
app.get('/emp',(req,resp) =>{
    resp.send({
        massage:"Data fetch successfully...",
        data:emp
    })

})

//Post Api
app.post('/emp',(req,resp) =>{
    var name = req.body.name;
    var design = req.body.design;

    if(name)
    {
        emp.push({

            id:(emp.length + 1),
            name:name,
            design:design
    
        })
        resp.send({
            massage:"Data added successfully..."
        })
    }
    else{
        resp.send({
            success:"fail",
            masssage:"There is null value in name",
            Error:[{
                field:name,
                massage:"name Cannot be null"
            }]
        })
    }

})

//Delete data Api

app.delete('/emp/:id',(req,resp) =>{
    var id = req.params.id;
    var newEmp = emp.filter(el => el.id != id);
    emp = newEmp; 

    resp.send({
        success: "True",
        massage:"Record deleted Successfully"
    })
})

//Update Api

app.put('/emp/:id',(req,resp) => {
    var id = req.params.id;
    var name = req.body.name;
    var design = req.body.design;

    if(name){
        var index = emp.findIndex(el => el.id == id);

        emp[index] = {
            ...emp[index],
            name:name,
            design:design
        }
        //myArray[objIndex].name = "Laila"
        console.log(index);
      
        resp.send({
            success:"ture",
            massage:"Record updated successfully.."

           
        })
    }
    else {
        resp.send({
            success:"fail",
            masssage:"There is null value in name",
            Error:[{
                field:name,
                massage:"name Cannot be null"
            }]
        })
    
    }
    
})