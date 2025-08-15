function filterKeys(obj, func) {
    return Object.fromEntries( Object.entries(obj).filter(([k, v]) => func(k, v, obj)))

}

function mapKeys(obj, func) {
    return Object.fromEntries( Object.entries(obj).map(([k, v]) => [func(k, v, obj) ,v]))
}

function reduceKeys(obj, func, iv) {
    let acc = iv
    for (const k of Object.keys(obj)) {
        if (acc === undefined) acc = k
        else acc = func(acc, k, obj[k], obj)
    }
    return acc
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// // output: { protein: 20 }

// console.log(mapKeys(nutrients, (k) => `-${k}`))
// // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// // output: carbohydrates, protein, fat