function outer(){
    let outervar="i am outside";

function inner(){
    console.log(outervar);
}
inner();
}
outer();