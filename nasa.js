function NASA(i) { return (i % 3 === 0 && i % 5 === 0) ? "NASA" : null }
function NA(i)   { return (i % 3 === 0) ? "NA" : null }
function SA(i)   { return (i % 5 === 0) ? "SA" : null }

function nasa(N , i = 1) {
    if(i > N) return ""
    const res = NASA(i) || NA(i) || SA(i) || i
    const rest = nasa(N , i + 1) 
    return i ===  N  ? `${res}` : `${res} ${rest}`
}

console.log(nasa(15))