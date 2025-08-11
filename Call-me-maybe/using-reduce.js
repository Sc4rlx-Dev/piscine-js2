function adder(arr , o = 0){ return arr.reduce((a , c) => a + c, o)}
function sumOrMul(arr, o = 0) {  return arr.reduce((a, n) => { if (n % 2) return a + n ; return a * n }, o)}
function funcExec(arr, o = 0) { return arr.reduce((acc, fn) => fn(acc), o)}



