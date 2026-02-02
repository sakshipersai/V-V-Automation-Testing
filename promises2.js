const Register = () =>{

    RETURN NEW Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Please Register");
                resolve("failed")
            
            
        }, 3000);
    })
}

t
Register().catch(err) => console.log(err)