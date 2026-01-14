const mainForm=document.getElementById("myForm")
const userName=document.getElementById('nameInput')
const inputName=document.getElementById("name")

mainForm.addEventListener('submit',function(e){//when i click on submit , ikt calls to the function:e
e.preventDefault()//to prevent the page from refreshing when the name is being enetred

const myUserName= userName.value

})
