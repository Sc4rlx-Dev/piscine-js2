
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function addWeek(date) {
    const d = new Date('0001-01-01')
    const dif = Math.floor((date.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
    const ind = dif % 7
    return week[ind]
}

function firstDayWeek(wk, yr) {
  let fst = new Date(yr + "-01-01")
  let day1 = addWeek(fst)
  let date = new Date(fst)
  
  if (wk != 1) {
    while (day1 != "Monday") {
      date.setDate(date.getDate() - 1)
      day1 = addWeek(date)
    }
    for (let i = 0; i < wk - 1; i++) {
      date.setDate(date.getDate() + 7)
    }
  }
  let dat = date.toISOString().slice(0 , 10).split('-')
  let rev = dat.reverse()
return `${rev[0]}-${rev[1]}-${rev[2]}`
}

// console.log(firstDayWeek(52,'1000'))



