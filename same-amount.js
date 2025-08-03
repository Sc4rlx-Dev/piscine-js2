function sameAmount(str , re1 , re2) {
    let r1 = new RegExp(re1, 'g')
    let r2 = new RegExp(re2, 'g')
    let count1 = (str.match(r1) || []).length
    let count2 = (str.match(r2) || []).length
    return count1 === count2

}
