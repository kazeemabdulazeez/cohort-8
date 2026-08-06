//declare
//functions without parameters
function greetings(){
    console.log("HELLO WORLD")
}

greetings()



//functions with parameters
function welcome(name){
    console.log(`welcome to class MR/MISS/MRS ${name}`)
}

welcome("Azeez")

function add () {
    let x = 4;
    let y = 6;
    console.log("the addition of x and y")
    return x + y , x * y
}
console.log(add())


function addition (x , y) {
    return x + y
}
console.log(addition(9 , 10))


function ageCheck(age){
    return age >= 18
}
let estherAge = ageCheck(15)
console.log(estherAge)


function ageCheck(age){
    if(age <= 18){
        return "please GET OUT .....YOU ARE UNDERAGED"
    }
    else{
        return "buy one bottle for me Egbon!!"
    }
}
let sarahAge = ageCheck(30)
console.log(estherAge)

//write a function that check if lucky 4 is equal to 4
//***if it is qual to 4 , return "CONGRATULATIONS" ,
//* else return "TRY AGAIN" */



function Luckyfour(luckyNumber)  {
    if (luckyNumber === 4) {
        return "CONGRATULATIONS";
    }
    else {
        return "TRY AGAIN";
    }
}
console.log(Luckyfour(4));
console.log(Luckyfour(7));

//scope
//global scope
let score = 75;

function gradingSystem(){
    if (score >= 50){
        return "PASSED!"
    }
    else{
        return "FAILED!!!!"
    }
}
function deliveryFee() {
    let fee = 5000
    return fee
}

/* write a function that grades a student score , if the score is 
1: 70-100 display "A"
2: 50-69 display "B"
3: 0-49 display "F"
*/



//ARROW FUNCTIONS
const minus = (num) =>{
    return num - 5
}
let result = minus(75)