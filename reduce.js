function reduce(arr, fn, acc) {
    let res = acc !== undefined ? acc : arr[0]
    let start = acc !== undefined ? 0 : 1

    for (let i = start; i < arr.length; i++) { res = fn(res, arr[i]) }
return res
}

function reduceRight(arr, fn, acc) {
    return reduce(arr.slice().reverse(), fn, acc)
}

function fold(arr, fn, ac) {
    return reduce(arr, fn, ac)
}

function foldRight(arr, fn, acc) {
    return reduceRight(arr, fn, acc)
}

