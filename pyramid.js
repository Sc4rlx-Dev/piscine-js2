function pyramid(str, n) {
    let res = ''
    for (let i = 1; i <= n; i++) {
        const s = " ".repeat(n - i) * str.length
        const ch = str.repeat(2 * i - 1)
        res += s + ch + (i < n ? '\n' : '')
    }
return res
}


