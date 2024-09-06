/* var houseKeeper ={
    yearsOfExp:12,
    name:"xaawo",
    age:19,
    didYouWork:true,
    

    } */
   

 function HouseKeeper(yearsOfExp,name,age,didYouWork) {
    this.yearsOfExp = yearsOfExp
    this.name = name
    this.age = age
    this.didYouWork = didYouWork,
    this.clean = function (){ 
        alert(`${this.name} is cleaning the house`)
    }
    }

var houseKeeper1 = new HouseKeeper(12,"xawo",19,true)

console.log(houseKeeper1.name)
console.log(houseKeeper1.age)
console.log(houseKeeper1.didYouWork)