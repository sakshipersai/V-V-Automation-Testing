class Parent{
    getMobile(){
        console.log("iPhone")
    }
}
class child extends Parent{

    getMobile(){
        console.log("Android")
    }
}

let obj = new child();
obj.getMobile();