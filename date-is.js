function isValid(date) {
    if (typeof date === 'number') return !isNaN(new Date(date).getTime())
    if (date instanceof Date) return !isNaN(date.getTime())
    return false
}

function isAfter(d1, d2) {
    const date1 = (d1 instanceof Date ? d1 : new Date(d1))
    const date2 = (d1 instanceof Date ? d2 : new Date(d2))
    return date1.getTime() > date2.getTime()
}

function isBefore(d1, d2) {
    const date1 = (d1 instanceof Date ? d1 : new Date(d1))
    const date2 = (d1 instanceof Date ? d2 : new Date(d2))
    return date1.getTime() < date2.getTime()
}

function isFuture(date) { return isValid(date) && isAfter(date, new Date()) }

function isPast(date) { return isValid(date) && isBefore(date, new Date()) }


// const date = new Date()


// const date = new Date(1488370835081); // Replace NaN with a valid timestamp
// console.log(isValid(date))
// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11)))
// console.log(isBefore(new Date(1987, 1, 11), new Date(1989, 6, 10)))
 