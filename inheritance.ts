interface Student{
    name: string;
    age: number;
    height?: string
}
interface player extends Student{
    playerId : string
}

const captain:player = {
    name: "Apple",
    age : 25,
    height: "165 cm",
    playerId: "Player123"
}
console.log(`student name is ${captain.name} and ${captain.height} with id ${captain.playerId}`)


