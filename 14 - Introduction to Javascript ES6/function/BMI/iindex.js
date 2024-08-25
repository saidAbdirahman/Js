

function bmiCalc(weight,height){
   
    var bmiCal = Math.round(weight/(Math.pow(height,2)))
    return bmiCal
}
var bmi = bmiCalc(65,1.8)
console.log('Your bmi is ' + bmi)