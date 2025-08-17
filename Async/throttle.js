function throttle(func , dl){
    let d
    return (...args) => {
        if (d == true) return
        func(...args)
        d = true ; setTimeout(() => {
            d = false
        },dl)
    }
}


function opThrottle (func, dl, op = {}){    
    let t = null, tr = null , l = null 
    return function (...args) {
        if (t) return (l = this, tr = args)
        op.leading ? func.apply(this, args) : (l = this, tr = args)
        
        const dwn = () => { op.trailing && tr ? ( func.apply(l, tr) , l = null,tr = null,t = setTimeout(dwn, dl) ) : ( t = null )}
        t = setTimeout(dwn, dl)
    }
}