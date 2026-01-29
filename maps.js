//key and value pairs    key:value



const test= new Map([["apple",50],["Mango",60],["Grapes",70]]);
test.set("sweet",90)
console.log(test)
console.log(test.get("Mango"))
console.log(test.has("apple"))
console.log(...test.entries())
console.log(test.size)


//set method: inserting
//get method: getting
//... means spread, pulls all the records from array