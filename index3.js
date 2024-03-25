//function to get pay details for employee //
function salary (basicSalary,benefits){
    //Initialize variables to hold input and expected output //
let taxedIncome= basicSalary+benefits
let payee, NHIF, NSSF;
// calculate tax payment based on salary bracket//
switch(true){
      case taxedIncome<= 24000:
        payee= 0.1*taxedIncome
        break
      case taxedIncome<= 32333:
        payee=0.25*taxedIncome
        break
        case taxedIncome<=500000:
            payee=0.3*taxedIncome
            break
            case taxedIncome<=800000:
                payee=0.325*taxedIncome
                break
                default:
                payee=0.35*taxedIncome
                break
}
// calculate NHIF payment based on salary bracket//
switch(true){
    case taxedIncome<=5999:
    NHIF=150
    break
    case taxedIncome<=7999:
    NHIF=300
    break 
    case taxedIncome<=11999:
    NHIF=400
    break
    case taxedIncome<=14999:
    NHIF=500
    break
    case taxedIncome<=19999:
    NHIF=600
    break
    case taxedIncome<=24999:
    NHIF=750
    break
    case taxedIncome<=29999:
    NHIF=850
    break
    case taxedIncome<=34999:
    NHIF=39999
    break
    case taxedIncome<=39999:
    NHIF=950
    break
    case taxedIncome<=44999:
    NHIF=1000
    break
    case taxedIncome<=49999:
    NHIF=1100
    break
    case taxedIncome<=59999:
    NHIF=1200
    break
    case taxedIncome<=69999:
    NHIF=1300
    break
    case taxedIncome<=79999:
    NHIF=1400
    break
    case taxedIncome<=89999:
    NHIF=1500
    break
    case taxedIncome<=99999:
    NHIF=1600
    break
    default:
        NHIF=1700

}
// place salary bracket in either tier1 or tier to but both contribute 6% to NSSF//
if (taxedIncome<=7000){
    NSSF=0.06*taxedIncome
}else if(taxedIncome<=36000){
    NSSF=0.06*taxedIncome
} else{
   NSSF=0.06*36000
}
//Net salary after all deductions//
let netSalary=( taxedIncome-(payee+NHIF+NSSF) )

    return {taxedIncome, 
    NHIF, 
    payee,
    NSSF, 
    netSalary}
}
console.log(salary(30000,25000))