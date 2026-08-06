//if ....else

    let age = 40

    if(age >= 18) {
        console.log("you can vote")
    }
    else{
        console.log("you can't vote")
    }



    let score = 30;
    if(score >= 90) {
        console.log("Grade A")
    }
    else if(score >= 80) {
        console.log("Grade B")
    }
    else if(score >= 70) {
        console.log("Grade C")
    }
    else{
        console.log("Grade F - Please revise!")
    }



    let gender = "male"
    if(gender === "female") {
        console.log("you are aa female , use the lady's restroom")
    }
    else if(gender === "non-binary") {
        console.log("use the non-binary restroom")
    }
    else if(gender === "trans") {
        console.log("use the trans restroom")
    }
    else{
        console.log("you are a male , use the male restroom")
    }


    //loops
    //for(start; condition ; increment) {
    //    //loop
    //}

    for(let i=0; i<10; i++){
        console.log(i)
    }

    let arrofNames = ["james", "jane", "joe", "jim", "jess", "esther"]
    console.log(arrofNames.length)
    for(let names = 0; names <arrofNames.length; names++) {
        console.log("TECHCRUSH " + "" + arrofNames[names])
    }

    for(let x = 0;  x<=36;  x++) {
        console.log(x*2)
    }

    
    //while loop
    let loginAttempts = 0
    while(loginAttempts <= 3){
        console.log(`attempt number ${loginAttempts}`)
        loginAttempts++
    }
        
 
    let scores = [20 , 12 , 25 , 15];
    for(let newScore = 0; newScore < scores.length; newScore++){
        console.log(scores[newScore] + 20)
    }
    
    for(let x = 0; x<= 12; x++) {
        console.log(x*3)
    }
