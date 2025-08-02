function reverse(arr) {
    let res = []
    for(let i = arr.length - 1 ; i >= 0  ; i--){ res.push(arr[i]) }
    if (typeof arr == 'string'){res = res.join('')}
return res
}
