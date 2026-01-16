/*const mainForm =document.getElementById("myForm")
const userName =document.getElementById("nameInput")
const inputName =document.getElementById("name")

mainForm.addEventListener('submit',function(e){
e.preventDefault()

const myUserName= userName.value
inputName.textContent = myUserName
mainForm.reset()
})*/
/*
const userInput = document.getElementById("nameInput")

userInput.addEventListener("focus",function(event){
    event.target.style.background = "pink"

    
        userInput.addEventListener("focus",function(event){
        event.target.style.background = ' '
})
*/

const myNewColors = document.getElementById("myColors");
const myNewBox = document.getElementById("box");

myNewColors.addEventListener("change",function(){
    myNewBox.style.background = myNewColors.value
})
