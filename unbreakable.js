function split(str, sep) {
    let buf = []
    let start = 0
    let i

    while ((i = str.indexOf(sep, start)) !== -1) {
        buf.push(str.slice(start, i))
        start = i + sep.length
    }
    buf.push(str.slice(start))
return buf
}

function join(arr , sep) {
    let res = ''
    if(!sep){sep = ','}

    for(let i = 0 ; i < arr.length; i++){
        res += arr[i]
        if(i < arr.length - 1){ res += sep}
    }
return res
}