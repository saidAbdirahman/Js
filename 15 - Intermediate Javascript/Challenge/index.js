function isLeap(year){
    var year = 2000
    
    if (year % 4 === 0) {
        if(year % 100===0){
            if(year % 400 === 0){
                return 'It is a leap year'
            }else{
                alert('It is not a leap year')
            }
        }else{
            alert('Not divsible by 100 its not leapyear')

        }
    }else{
        alert('Not divsible by 4 its not leapyear')
    }

}

alert(isLeap())