var week = [    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
                'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
]

function addWeek(date) {
    const d = new Date('0001-01-01')
    const dif = Math.floor((date.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
    const ind = dif % 14
    return week[ind]
}



function timeTravel({ date, h = 0, m = 0, s = 0 }) {
    const nDate = new Date(date)
    nDate.setHours(h) ; nDate.setMinutes(m) ; nDate.setSeconds(s)
    return nDate
}



// console.log(addWeek(new Date('0001-01-01')))
// console.log(addWeek(new Date('0001-01-02')))
// console.log(addWeek(new Date('0001-01-07')))
// console.log(addWeek(new Date('0001-01-08')))
// console.log(addWeek(new Date('0001-01-09')))

console.log(timeTravel({ date: new Date('2020-05-29 23:25:22'), hour: 21, minute: 22, second: 10 }))
