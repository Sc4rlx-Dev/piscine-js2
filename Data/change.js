const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}


function get(v) {
    return sourceObject[v] 
}

function set(k , v) {
  sourceObject[k] = v
return sourceObject[k]
}

// console.log(get('str'))
// console.log(set('num' , 2))