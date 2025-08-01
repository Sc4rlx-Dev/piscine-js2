function trunc(n) {
    sign = 1
    let count = 0
    if(n < 0){
        sign = - 1
        n *= -1
    }
    for(i = 0 ; i < n - 1 ; i++){
        count ++
    }
return count * sign
}
function round() {}
function ceil() {}
function floor() {}



// console.log(trunc(-0.123))

// Using Math.trunc
// console.log(Math.trunc(13.6));
// console.log(Math.trunc(-13.6));
// console.log(Math.trunc(0.123));
// console.log(Math.trunc(-0.123));

// // Using Math.round
// console.log(Math.round(13.6));
// console.log(Math.round(13.4));
// console.log(Math.round(-13.6));
// console.log(Math.round(-13.4));

// // Using Math.floor
// console.log(Math.floor(13.4));
// console.log(Math.floor(13.6));
// console.log(Math.floor(-13.4));
// console.log(Math.floor(-13.6));

// // Using Math.ceil
// console.log(Math.ceil(13.4));
// console.log(Math.ceil(13.6));
// console.log(Math.ceil(-13.4));
// console.log(Math.ceil(-13.6));
