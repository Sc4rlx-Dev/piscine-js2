function NASA(i) { return (i % 3 === 0 && i % 5 === 0) ? "NASA" : null }
function NA(i)   { return (i % 3 === 0) ? "NA" : null }
function SA(i)   { return (i % 5 === 0) ? "SA" : null }

function nasa(N , i = 1) {
    if(i > N) return
    let res = NASA(i) || NA(i) || SA(i) || i
    console.log(res)
    return nasa(N , i + 1) 
}

// nasa(15)