
function get(src, path) {
    const keys = path.split('.')
    if (!src || typeof path !== 'string') return undefined
    let acc = src
    for (const k of keys) {
        acc = acc[k]
    }
return acc
}


// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// // get(src, path)
// console.log(get(src, path)) // -> 'peekaboo'

