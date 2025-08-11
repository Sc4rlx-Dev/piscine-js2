export const generateLetters = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0, pixel = 11 , len = chars.length; i <= 119; i++ , pixel++){
        const c = document.createElement('div') ; document.body.append(c)
        c.textContent = chars[Math.floor(Math.random() * len)]
        c.style.fontSize = `${pixel}px`
        c.style.fontWeight = i < 40 ? 300 : i < 80 ? 400 : 600
    }
}