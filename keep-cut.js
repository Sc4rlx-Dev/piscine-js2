function cutFirst(str) { return str.slice(2) }
function cutLast(str) { return str.slice(0 , -2)}
function cutFirstLast(str) {return cutLast(cutFirst(str))}
function keepFirst(str) {return str.slice(0 , 2)}
function keepLast(str) {return str.slice(-2)}
function keepFirstLast(str) {return str.length > 2 ? keepFirst(str) + keepLast(str) : str}

