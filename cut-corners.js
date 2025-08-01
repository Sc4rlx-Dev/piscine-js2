
function trunc(n) {
    const res = n - modulo(n , 1)
    return res === 0 && n < 0 ? -0 : res
}

function floor(n) { return n < 0 && n !== trunc(n) ? trunc(n) - 1 : trunc(n)}

function ceil(n) { return n > 0 && n !== trunc(n) ? trunc(n) + 1 : trunc(n) }

function round(n) { return floor( n + 0.5) }



// Using Math.trunc
// console.log(Math.trunc(13.6));
// console.log(trunc(13.6));
// console.log(Math.trunc(-13.6));
// console.log(trunc(-13.6));
// console.log(Math.trunc(0.123));
// console.log(trunc(0.123));
// console.log(Math.trunc(-0.123));
// console.log(trunc(-0.123));

// // Using Math.round
// console.log(Math.round(13.6));
// console.log(round(13.6));
// console.log(Math.round(13.4));
// console.log(round(13.4));
// console.log(Math.round(-13.6));
// console.log(round(-13.6));
// console.log(Math.round(-13.4));
// console.log(round(-13.4));

// // Using Math.floor
// console.log(Math.floor(13.4));
// console.log(floor(13.4));
// console.log(Math.floor(13.6));
// console.log(floor(13.6));
// console.log(Math.floor(-13.4));
// console.log(floor(-13.4));
// console.log(Math.floor(-13.6));
// console.log(floor(-13.6));

// // Using Math.ceil
// console.log(Math.ceil(13.4));
// console.log(ceil(13.4));
// console.log(Math.ceil(13.6));
// console.log(ceil(13.6));
// console.log(Math.ceil(-13.4));
// console.log(ceil(-13.4));
// console.log(Math.ceil(-13.6));
// console.log(ceil(-13.6));


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
    if(a < 0){ a = multiply(a, -1); sign = multiply(sign, -1) }
    if(b < 0){ b = multiply(b, -1); sign = multiply(sign, -1) }

    let p = 0
    let q = 0

    while(p + b <= a){
        q++
        p = multiply(q , b)
    }

return multiply(q , sign)
}

function modulo(a , b) {
    let q = divide(a, b)
    let p = multiply(q, b)
    return a - p
}
