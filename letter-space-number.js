function letterSpaceNumber(str) {
    let arr = [], r = /\w\s\d\b/g, ex
    while((ex = r.exec(str)) !== null){ arr.push(ex[0]) }
return arr
}
