function match(c , a) { return c === "*" || Number(c) === a }


function matchCron(str , date) {
    const f = str.split(' ')
    const [m, h, dm, mo, dw] = f
    const [minute, hour, dayOfMonth, month, dayOfWeek] = [date.getMinutes(), date.getHours(), date.getDate(), date.getMonth() + 1, date.getDay() === 0 ? 7 : date.getDay()]
    
return match(m, minute) && match(h, hour) && match(dm, dayOfMonth) && match(mo, month) && match(dw, dayOfWeek)
}



// console.log(matchCron('* * * * 3', new Date('2020-05-30 18:09:00')))
