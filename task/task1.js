import express  from "express";
const app=express();

const students = [ 
    {
        id: 1,
        name: "hasnaa",
    },
    {
        id: 2,
        name: "sara",
    },
    {
        id: 3,
        name: "reham",
    },
    {
        id: 4,
        name: "hager",
    },
    {
        id: 5,
        name: "hossam",
    },
]

const studentsFunction = (request,response)=>{
    let output = '<ul>'
    for(let i  = 0 ; i<students.length ; i++ ){
        
        output+='<li>'+ students[i].name + '</li>'
    }

    output+='</ul>'
   
    response.send(output)
    
};
app.get("/students" ,studentsFunction)
console.log("ssss");
app.listen(9000);