function split(str , sep) {
    let tmp = ''
    let buf = []
    for(let i = 0; i < str.length ; i++){
        if(str[i] === sep){
            buf.push(tmp)
            tmp = ''
        } else {
            tmp += str[i]
        }
    }
    buf.push(tmp)
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