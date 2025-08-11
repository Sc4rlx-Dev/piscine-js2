export const build = (n) => {
    let i = 1
    const int = setInterval(() => {
        if (i>n) { clearInterval(int) ; return}
        const br = document.createElement("div") ; br.id = `brick-${i}`
        if (i % 3 === 2) { br.dataset.foundation = 'true' }
        document.body.appendChild(br)
        i++
    }, 100)
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