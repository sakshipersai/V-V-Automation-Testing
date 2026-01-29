/*var test = new Set();
test.add(20)
test.add(30)
test.add(40)
    test.add(90)
    console.log(test)

*/


a1=[60,70,80,90]
console.log(a1)

let s1 ="pune"

const test = new Set(s1);
//status= test.delete('e')              //delete a char from a name 
// console.log(status   )


//console.log     (test.size)    //know the size

//s1.clear(/)                       //clear the array
//console.log(test.size) 




/*for(ele of test){
    console.log(ele)
}                                              //ele means element and this is uwed to print each char in the word
    */

/*
test.forEach(function of (ele) {
    console.log(ele)
})                                           //this also does the same

*/


test.forEach(function (ele,index,s){
    console.log(ele)
    console.log(index)
    console.log(s)
})
console.log(test.entries())