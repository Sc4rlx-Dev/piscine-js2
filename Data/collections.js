function arrToSet(arr) { return new Set(arr) }

function arrToStr(arr) { return arr.join("") }

function setToArr(set) { return Array.from(set) }

function setToStr(set) { return [...set].join('')}

function strToArr(str) { return [...str]}

function strToSet(str) {return new Set(strToArr(str))}

function mapToObj(map) { return Object.fromEntries(map)}

function objToArr(obj) { return Object.values(obj)}

function objToMap(obj) {return new Map(Object.entries(obj))}

function arrToObj(arr) {return {...arr}} 

function strToObj(str) { return Object.assign({}, [...str])}

function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase() }

function superTypeOf(arg) {
    if (arg instanceof Map) return 'Map'
    if (arg instanceof Set) return 'Set'
    if (arg === undefined ) return 'undefined'
    if (arg === null ) return 'null'
    if(typeof arg == 'object') {if (Array.isArray(arg)) return 'Array'}

    let cap  = typeof arg
    cap = capitalize(cap)
return cap
}
