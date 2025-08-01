
function trunc(n) {
    let str = n + ''
    let res = ''
    
    for (let i = 0 ; i < str.length ; i++) {
        let c = str[i]
        if (c === '.') break;
        res += c
    } 
return +res
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
