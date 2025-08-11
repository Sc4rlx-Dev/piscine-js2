function map(arr , fucn){
    return arr.reduce((res,v,i)=>(res.push(fucn(v,i,arr)),res),[])
}

function flat(arr , n = 1){
    const f = []
    for(const elem of arr){
        if(Array.isArray(elem) && n > 0 ){ f.push(...flat(elem, n - 1))}
        else { f.push(elem) }
    }
return f
}

function flatMap(arr, func) {
    return flat(map(arr, func), 1)
}