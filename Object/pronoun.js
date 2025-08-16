
function pronoun(str) {
    const res = {}
    const tokens = str.split(/\s+/).filter(Boolean)
    function clean(w) { return w.toLowerCase().replace(/^[^a-z]+|[^a-z]+$/g, '')}
    function isPronoun(w) { return w === 'i' || w === 'you' || w === 'he' || w === 'she' || w === 'it' || w === 'they' || w === 'we'}
    for (let i = 0; i < tokens.length; i++) {
        const w = clean(tokens[i])
        if (!w) continue
        const key = w === 'i' ? 'i'
            : w === 'you' ? 'you'
            : w === 'he' ? 'he'
            : w === 'she' ? 'she'
            : w === 'it' ? 'it'
            : w === 'they' ? 'they'
            : w === 'we' ? 'we'
            : null
        if (!key) continue
        if (!res[key]) res[key] = { word: [], count: 0 }
        res[key].count++
        const nextRaw = tokens[i + 1]
        if (nextRaw) {
            const next = clean(nextRaw)
            if (next && !isPronoun(next) && !res[key].word.includes(next)) {
                res[key].word.push(next)
            }
        }
    }
    return res
}


// const p = new Set(['i', 'you', 'he', 'she', 'it', 'they', 'we'])
// const cl = /^[^a-z]+|[^a-z]+$/gi;     
// const st = /^[^a-zA-Z]+|[^a-zA-Z]+$/g;   

// function pronoun(str) {
//     if (typeof str !== 'string' || str.length === 0) return {}
//     const res = {} , t = str.split(/\s+/) , len = t.length

//     for (let i = 0; i < len; i++) {
//         const r = t[i]
//         if (!r) continue

//         const c = r.toLowerCase().replace(cl, '')
//         if (!p.has(c)) continue

//         let e = res[c]
//         if (!e) e = res[c] = { word: [], count: 0 }
//         e.count++

//         if (i + 1 < len) {
//             const nextr = t[i + 1]
//             if (nextr) {
//                 const nxt = nextr.toLowerCase().replace(cl, '')
//                 if (nxt && !p.has(nxt)) {
//                     const cp = nextr.replace(st, '')
//                     if (cp) e.word.push(cp)
//                 }
//             }
//         }
//     }
//     return res
// }

const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

// { you: { word: [ 'can' ], count: 2 } }
console.log(pronoun(ex))