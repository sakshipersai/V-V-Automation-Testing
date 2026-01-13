//push()=("add one or more elements to the end of an array")
//pop()=("remove the last element from the array and return that element")
//shift=("remove the first element from an array and returns that element")



let sports =["cricket"],"football"]
sports.push("tennis")
console.log(sports+"<br>")

let sports=["cricket","football","tennis",222]
let result = sports.pop()
console.log(sports+"<br>")
console.log("deleted element checking"+result)


let sports=["cricket","football","tennis",222]
sports.shift()
let result=sports.shift()
console.log(sports)
console.log("deleted element checking"+result)



let sports=["cricket","football","tennis",222]
sports.unshift("swimming")
console.log(sports)
console.log("deleted element checking"+result)



