function invert(obj) {
    const k = Object.keys(obj) , v = Object.values(obj) , inv = {}
    for (let i = 0; i < k.length; i++) {
        inv[v[i]] = k[i]
    }
return inv
}
