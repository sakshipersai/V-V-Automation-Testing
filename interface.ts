interface Student{
    name: string;
    age: number;
    height?: string
}
const student:Student={

    name :"John",
    age :19
    
}

const newStudent: Student ={
    name:"Mango",
    age:22
}
console.log(`student name is ${newStudent.name}`)
console.log(`student name is ${student.name}`)