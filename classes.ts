//class area and object area 
//object is stored in the heap area 
// to declarre variable and methods, classes are uzed


class Employee{
    name : string; //name id are properties, 
    age : number 
    department : string;



constructor(name:string, age:number,department:string){
    this.name = name;
    this.age= age;
    this.department= department;
}

employeeDetails(){
    console.log(`Empploye name is ${this.name} from ${this.department}`)
}
}

const employee = new Employee("Amit",25,"Testing")
employee.employeeDetails()



