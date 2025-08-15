function pick(obj, k) {
    const res = {} , l = Array.isArray(k) ? k : (typeof k == 'string'  ? [k] : [])
    if (obj == null) return res

    for (const k of l) {
        if (typeof k === 'string' && obj[k] != undefined) {
            res[k] = obj[k]
        }
    }
return res
}

function omit(obj, k) {
    if (obj == null) return {}
    const e = new Set(Array.isArray(k) ? k : (typeof k === 'string' ? [k] : [])) , inc = Object.keys(obj).filter(k => !e.has(k))
    return pick(obj, inc)
}
