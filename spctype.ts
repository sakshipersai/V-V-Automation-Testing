//special types:

function studentName(name:string){
    console.log("student name is:",name)
}
studentName("Amit");

function addNumbers(a:number,b:number){

    return a+b;
}

addNumbers(20,30)
console.log(addNumbers)

//undefined  type:

let stadium: undefined;
stadium
console.log(stadium);



//never type
function failedToConnect():never{
    throw new Error("Connection failed!")
}

/*const DBConnect =()=>{
    try{
         

        console.log("Db connected!!")
     } 
     
     catch(error)
     {
     
     failedToConnect()
    }

    }
