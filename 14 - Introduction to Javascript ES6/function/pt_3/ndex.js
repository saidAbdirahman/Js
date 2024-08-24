function getMilk(money,costOfBottles){
    //instructions
    console.log('buy' + calcBottles(money,costOfBottles) + 'bottles of milk')
    //instructions
    return changeMoney(money,costOfBottles)
}

function calcBottles(startingMoney,bottles){
    var numberOfBottles = Math.floor(startingMoney/bottles)
    return numberOfBottles
}
function changeMoney(startingMoney,bottles){
    var change = startingMoney % bottles
    return change
}
console.log('Hello master, here is your ' + getMilk(5,1.5) + ' change.')