function flow(fn) {
    const flowed = (...args) => {
      let res = fn[0](...args)
      for (let i = 1; i < fn.length; i++) {
          res = fn[i](res)
      }
      return res
    }
return flowed
}


