

function bmiCalc(weight,height){
   
    var bmiCal = Math.round(weight/(Math.pow(height,2)))
    return bmiCal
}
var bmire = bmiCalc(65,1.8)
console.log('Your bmi is ' + bmire)