function isValid(date) { return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)}

function isAfter(d1 , d2) { return Date.parse(d1) > Date.parse(d2) ? true : false}

function isBefore(d1 , d2) { return !isAfter(d1 , d2)}

function isFuture(date) { return isValid(date) && isAfter(date, new Date()) }

function isPast(date) { return !isFuture(date) }



// console.log(new Date())


// const date = new Date(1488370835081); // Replace NaN with a valid timestamp
// console.log(isValid(date))
// console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11)))
// console.log(isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11)))
 