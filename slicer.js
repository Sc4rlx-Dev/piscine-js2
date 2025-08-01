function slice(arg , startindex ,opIndex){
    let res = []
    let len = opIndex
    if(startindex < 0 && opIndex < 0){
        len = arg.length + opIndex
        startindex = arg.length + startindex
    }
    if(!startindex && !opIndex){return arg}
    if(!opIndex){ len = arg.length}
    if(opIndex < 0) { len = arg.length + opIndex}
    if(startindex < 0){ startindex = len + startindex }
    
    for(let i = startindex ; i < len ; i++){
        res.push(arg[i])
    }

    if(typeof arg == "string"){
        res = res.join("")
    }
return res
}

// test = [1, 2, 3, 4, 5, 6]

// console.log(slice(test, -3, -1), [4, 5])
// console.log(test.slice( -3, -1), [4, 5])
// const s = "The quick brown fox jumps over the lazy dog."


// console.log(s.slice(31));
// console.log(slice(s, 31));
// // Expected output: "the lazy dog."

// console.log(s.slice(4, 19));
// console.log(slice(s, 4, 19));
// // Expected output: "quick brown fox"

// console.log(s.slice(-4));
// console.log(slice(s, -4));
// // Expected output: "dog."

// console.log(slice(s, -9, -5));
// console.log(s.slice(-9, -5));
// Expected output: "lazy"


// const a = ["ant", "bison", "camel", "duck", "elephant"]
// console.log(slice(a, 2));
// console.log(a.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(slice(a, 2, 4));
// console.log(a.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(slice(a, 1, 5));
// console.log(a.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(slice(a, -2));
// console.log(a.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(slice(a, 2, -1));
// console.log(a.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(slice(a));
// console.log(a.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// console.log(slice(a , -2 , -3))
// console.log(a.slice(-2 , -3))

