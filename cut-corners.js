
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

    let sign = 1;
    if (a < 0) { a = -a; sign = -sign; }
    if (b < 0) { b = -b; sign = -sign; }

    let q = 0;
    while (a >= b) {
        a -= b;
        q++;
    }

    return sign * q;
}


function modulo(a, b) {
    return a - multiply(divide(a, b), b);
}
