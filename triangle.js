function triangle(str, n) {
    let tr = str
    let res = ''

    for (let i = 1; i <= n; i++) {
        res += tr + (i < n  ? '\n' : '')
        tr += str
    }
return res
}
