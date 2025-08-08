function dayOfTheYear(date) {
    const s = Date.UTC(date.getUTCFullYear(), 0, 1)
    const cur = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
    const ms = 1000 * 60 * 60 * 24
    return Math.floor((cur - s) / ms) + 1
}


// console.log(dayOfTheYear('0001-01-01'))