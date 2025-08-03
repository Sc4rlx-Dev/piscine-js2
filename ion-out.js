function ionOut(str) {
    const r = /\b[a-zA-Z]+t/g
    let res = []
    let m = r.exec(str)

    while(m != null){
        res.push(m[0])
        m = r.exec(str)
    }
return res
}
