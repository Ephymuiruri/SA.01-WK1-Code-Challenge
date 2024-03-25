// function to calculate by how much drivers overspeed //
function speedCheck(speed){
    //initialize a variable to hold demerit points//
    let demeritPoints
    // check if speed is above limit and assign demerit points if above speed of 70 /
    if (speed<70){
        return "OK"
    }else{        
       demeritPoints = (speed - 70)/5
    console.log(demeritPoints)
     demeritPoints=Math.round(demeritPoints)
    }
    //check if overspeeding was too high and suspend license //
    if (demeritPoints > 12){
        return "License suspended"
    }else {
        return (`points: ${demeritPoints}`)
    }  
}
console.log(speedCheck(80))

