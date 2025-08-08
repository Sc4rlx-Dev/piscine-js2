function dayOfTheYear(date) {
    const stryr = new Date(date.getFullYear(), 0, 1)
    const d = date - stryr
    const dy = 1000 * 60 * 60 * 24
    return Math.floor(d / dy) + 1
}