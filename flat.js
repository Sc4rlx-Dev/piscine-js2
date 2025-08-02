function flat(arr , n = 1){
    const f = []
    for(const elem of arr){
        if(Array.isArray(elem) && n > 0 ){ f.push(...flat(elem, n - 1))}
        else { f.push(elem) }
    }
return f
}