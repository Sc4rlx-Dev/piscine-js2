function isLeapYear(date) {
    const year = new Date(date).getFullYear()
    return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)
}

function countLeapYears(date) {
    let c = 0
    for(let i = 1 ; i < new Date(date).getFullYear(); i++){
        if(isLeapYear(new Date(i , 0 , 1))){
            c++
        }
    }
return c
}








