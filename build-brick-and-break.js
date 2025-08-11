export const build = (n) =>{
    for (let i = 0 ; i <= n ; i++){
        const b = document.createElement('div') ; b.id = `brick-${i}`
        if(i % 3 == 2) b.dataset.foundation = 'true'
        document.body.appendChild(b)
    }
}

export const repair = (...ids) => {
    ids.forEach(i => {
        const b = document.getElementById(i) 
        if(!b) return
        b.dataset.repaired = b.dataset.foundation == 'true' ? 'in progress' : 'true'
    })
}

export const destroy = () => {
    const Lb = document.querySelector('div:last-of-type')
    if(Lb) Lb.remove()
}