export const debounce = (fn, timeout) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { 
            fn.apply(this, args) 
        }, timeout)
    }
}

export const opDebounce = (func , dl , op ={ leading : false}) => {
    if(!op.leading){return debounce(func , dl)}
    let t

    return (...args) => {
        const c = !t 
        console.log(t)
        clearTimeout(t)
        t = setTimeout(() => {
            t = null
        },dl)
        if(c) func.apply(this, args)
    }
}

// const debounced = debounce((msg) => console.log(msg), 500)

// debounced("call 1");
// debounced("call 2");
// debounced("call 3");



