function split(str, sep) {
    if(sep === ""){return [...str]}
    let arr = []
    let i = 0 
    while( i < str.length) {
        let index = str.indexOf(sep , i)
        if(index === -1) {
            arr.push(str.slice(i))
            break;
        }
        arr.push(str.slice(i , index))
        i = index + sep.length
    }
    if (str.slice(-sep.length) === sep) arr.push("")
return arr
}
console.log(split('ee,ff,g,', ','), ['ee', 'ff', 'g', ''])

function join(arr , sep) {
    let res = ''
    if(!sep){sep = ','}

    for(let i = 0 ; i < arr.length; i++){
        res += arr[i]
        if(i < arr.length - 1){ res += sep}
    }
return res
}
