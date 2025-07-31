function arrToSet(arr) { return new Set(arr) }

function arrToStr(arr) { return arr.toString() }

function setToArr(set) { return Array.from(set) }

function setToStr(set) { return [...set].join(',')}

function strToArr(str) { return str.split(',')}

function strToSet(str) {return new Set(strToArr(str))}

function mapToObj(map) { return Object.fromEntries(map)}

function objToArr(obj) { return Object.entries(obj)}

function objToMap(obj) {return new Map(objToArr(obj))}

function arrToObj(arr) {return Object.fromEntries(arr)} //{...arr}

function strToObj(str) {return JSON.parse(str)}

function superTypeOf(arg) {
    if (arg instanceof Map) return 'map'
    if (arg instanceof Set) return 'set'
    return arg === null ? 'null' : typeof arg
}

