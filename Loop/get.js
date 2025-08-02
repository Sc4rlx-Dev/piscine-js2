
function get(src, path) {
    const keys = path.split('.')
    let acc = src
    for (const k of keys) {
        if (acc == undefined || acc == null){return undefined}
        acc = acc[k]
    }
return acc
}

// console.log(get({ nested: { key: 'value' } }, 'nx.nx') === undefined)



