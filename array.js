//const arr = [1, "Esther", true , [123]]

let student1 = "sara"
let student2 = "Samad"
let student3 = "Godwin"


let students = ["sara" , "Godwin" , "Samad" , "john"]
console.log(students[0])
console.log(students.length)
students[3] = "success"
console.log(students)


//adding elements to an array
students.push("Ada") //adds items to the end of the array
console.log(students)

students.unshift("uzoma") //adds items to the beginning of the array
console.log(students)

//removing elements
students.pop() // removes the last item in the array
console.log(students)
students.shift() //removes the first item in the array
console.log(students)

//includes , indexOf
console.log(students.includes("Mohh")) // includes will give u false or true 
console.log(students.indexOf("sara"))  // indexOf will give u 0 when the item u are loking for is ther or -1 when the item u are looking for is not there

//reverse , sort , slice, splice
students.reverse()
console.log("this is reversed:" ,students)
students.sort()
console.log("this is sorted:" ,students)

console.log("this is sliced:" ,students.slice(1, 3)) //returns a new array with the sliced element
console.log("this is spliced:" ,students.splice(1, 2))//removes the element from the array
console.log("this is the array:" ,students)//

//higher order array metods
//map , filter , reduce , forEach , find , findIndex , some , every

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = number.map((num) => num * 2)
const double = number.map((num) => {
    return num *2 
})