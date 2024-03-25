function Gradeoutpout( name = "Ephy", marks = 50){
//get user input from the form created in html file.//

// initialze variables to hold marks and grade//
let grade;
// validate marks entered if between o and 100//

if (marks <0 || marks >100 ){
return('enter student marks between o and 100')} 
console.log(marks)

//calculate and assign correct grade to marks entered//
    if (marks >79){
    grade = "A"
    }
    else if(marks>=60){
        grade="B"
    }
    else if(marks>=49){
        grade="C"
    }
    else if(marks>=40){
        grade = "D"
    }
    else{
        grade ="E"
    }
    // return grade t Global Scope
    return [grade, name]
}
console.log(Gradeoutpout("Elva", 190))

