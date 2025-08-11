function every(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) { return false }
    }
return true
}

function some(arr, func) {
    return !every(arr, (el, i, a) => !func(el, i, a))
}

function none(arr, func) {
    return every(arr, (el, i, a) => !func(el, i, a))
}
