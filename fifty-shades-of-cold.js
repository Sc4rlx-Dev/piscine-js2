import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {
    const s = document.createElement('style')
    let cs = ''
    colors.forEach( c => { cs += `.${c}{background:${c};}`})
    s.textContent = cs
    document.head.appendChild(s)
}

export function generateColdShades() {
    const key = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy' , 'purple']
    const coldColors = colors.filter(c => key.includes(c))

    coldColors.forEach(sh => {
        const d = document.createElement('div')
        d.className = sh
        d.textContent = sh
        document.body.appendChild(d)
    })
}   


export function choseShade(sh) {
    const all = document.querySelectorAll('div')
    all.forEach(d => { d.className = sh })
}
