function validationForm(){

    const userName= document.getElementById("username").value ;
    const password= document.getElementById("password").value ;

    if(userName=="" || password==""){
        alert("Please Enter username and passoword");
        return false;
    }
    
    alert("Form is submitted Username is:" +userName +"password is:"+password);
    return true;
    
}