const readline =require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// Define Gradeoutput function to compute grades//
function Gradeoutpout( name = "Ephy", marks = 50){
// initialze variables to hold marks and grade//
let grade;
// validate marks entered if between o and 100//
if (marks <0 || marks >100 ){
return('Enter student marks between o and 100')} 
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
    //prompt user to enter students's marks //
    rl.question('enter Student name:',(name)=> { 
        rl.question("enter student's marks:",(marks)=>{
            marks=parseInt(marks)
            const [grade, studentName] = Gradeoutpout(name,marks)
        if (marks <0 || marks >100 )
            console.log('Enter student marks between o and 100')
        else{
            console.log (`${studentName}, has gotten ${grade}`)}
        rl.close()
        })
    })


