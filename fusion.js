export const fusion = (a, b) => {
    const res = { ...a }

    for (const k in b) {
        const av = res[k]
        const bv = b[k]
        console.log(av ,bv)
        res[k] = Array.isArray(av) && Array.isArray(bv) ? [...av, ...bv]
        : typeof av === 'object' && av !== null && !Array.isArray(av) && typeof bv === 'object' && bv !== null && !Array.isArray(bv) ? fusion(av, bv)
        : typeof (av && bv) === 'number' ? av + bv
        : typeof (av && bv) === 'string' ? `${av} ${bv}`
        : bv
    }
return res
}

// console.log(fusion({ arr: [1, 2 , 3] }, { arr: [4] }))
console.log(fusion({ a: { b: 1 } }, { a: 1 }).a, 1)

// console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
// -> { arr: [ 1, '2', 2 ] }

// console.log(fusion({ str: "salem" }, { str: "alem" }))
// -> { str: 'salem alem' }

// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }))
// -> { a: 20, b: 10, c: 1 }

// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }))// -> { a: 11, x: [], b: { c: 'Salem alem' } }