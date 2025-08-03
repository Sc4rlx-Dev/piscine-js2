const add4 = '+4'
const mul2 = '*2'


function findExpression(n) {
    let q = [[1, "1"]]
    let seen = new Set([1])
    
    while (q.length > 0) {
      let [val, expr] = q.shift()

      if (val + 4 === n) return expr + " " + add4
      if (!seen.has(val + 4) && val + 4 <= n * 2) {
        seen.add(val + 4)
        q.push([val + 4, expr + " " + add4])
      }

      if (val * 2 === n) return expr + " " + mul2
      if (!seen.has(val * 2) && val * 2 <= n * 2) {
        seen.add(val * 2)
        q.push([val * 2, expr + " " + mul2])
      }
    }
return undefined
}

// console.log(findExpression(8))
// console.log(findExpression(7))
