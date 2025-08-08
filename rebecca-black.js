
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function addWeek(date) {
    const d = new Date('0001-01-01')
    const dif = Math.floor((date.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
    const ind = dif % 7
    return week[ind]
}

function isFriday(date) {
    return addWeek(new Date(date)) == 'Friday'
}

function isWeekend(date) {
    const d = addWeek(new Date(date)) 
    return d == 'Saturday' || d == 'Sunday' 
}

function isLeapYear(date) {
    const year = new Date(date)
    return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0).getFullYear()
}

function isLastDayOfMonth(date) {
    const d = new Date(date)
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1 , 0).getDate()
    return d.getDate() == lastDay
}



// console.log(isLastDayOfMonth('2020-02-29'))
