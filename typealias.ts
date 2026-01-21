//Type ALIAS:

type dataSampleType = string | number | boolean

interface Product{
    name:dataSampleType;
    desc: dataSampleType;
    price: dataSampleType;
    discount: dataSampleType;
}

const sampleProduct: Product = {
    name : "Apple",
    desc : true,
    price : 200,
    discount : false
}
console.log(sampleProduct.price)


/*const newStudent: Student ={
    name:"Mango",
    age:22
}
console.log(`student name is ${newStudent.name}`)
console.log(`student name is ${student.name}`);
    desc : dataSampleType;
    price : dataSampleType ;
    price: dataSampleType;
    discount : string | number | boolean;*/
