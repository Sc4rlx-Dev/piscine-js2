
function trunc(n) {
    let res = 0
    let step = 1

    if(n > 0){
        for (step = 1; step + res <= n; step *= 2) {}
        for(; step >= 1; step /= 2) {
            if(res + step <= n) { res = res + step }
        }
    }else{
        for( ; res - step >= n ; step *= 2) {}
        for(; step >= 1; step /= 2) {
            if(res - step >= n) { res -= step }
        }
    }
return res
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

