var obj = { T: 'A', A: 'U', G: 'C', C: 'G' }
var obj2 = { A: 'T', U: 'A', C: 'G', G: 'C' }

function RNA (str) {
    let dna = ''
    for(const i of str){ dna += obj[i] }
    return dna
}
function DNA (str) {
    let rna = ''
    for(const i of str){ rna += obj2[i]}
return rna
}
