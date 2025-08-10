function currify(fn, ar = fn.length) {
    const curr = (...args) => {
        return args.length >= ar ? fn(...args) : (...nxt) => curr(...args, ...nxt)
    }
return curr
}