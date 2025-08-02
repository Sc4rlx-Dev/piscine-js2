function pyramid(str, n) {
    let res = ''
    for (let i = 1; i <= n; i++) {
        const s = " ".repeat(n - i)
        const ch = str.repeat(2 * i - 1)
        res += s + ch + '\n'
    }
return res
}
