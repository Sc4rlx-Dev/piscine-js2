function multiply(a , b) {
    let res = 0
    let flag_a = false, flag_b = false

    if( a < 0) {flag_a = true ; a = -a} 
    if( b < 0) {flag_b = true ; b = -b}

    for(let i = 1 ; i <= b ; i++ ) {
        res += a
    }
    if(flag_a != flag_b){ return -res }
return res
}

function divide(a, b) {
    let sign = 1
    if(a < 0){ a *= -1 ; sign *= -1 }
    if(b < 0){ b *= -1 ; sign *= -1 }

    let p = 0
    let q = 0

    while(p + b <= a){
        q++
        p = multiply(q , b)
    }

return q * sign
}

function modulo(a , b) {
    let q = divide(a, b)
    let p = multiply(q, b)
    return a - p
}

