function select(arr, fn, f = true) {
  const res = []
  for (const [i, e] of arr.entries()) {
    if (f ? fn(e, i, arr) : !fn(e, i, arr)) { res.push(e) }
  }
  return res
}

function filter(arr, fn) { return select(arr, fn, true)}
function reject(arr, fn) { return select(arr, fn, false)}
function partition(arr , fn) { return [filter(arr, fn) , reject(arr , fn)]}

