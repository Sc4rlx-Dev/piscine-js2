const deepCopy = arg => Array.isArray(arg) ? arg.map(a => Array.isArray(a) ? deepCopy(a) : a) : { ...arg }
