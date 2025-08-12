export function compose() {
    document.addEventListener('keydown', (event) => {
        const key = event.key

        if (key.length === 1 && key >= 'a' && key <= 'z') {
            const note = document.createElement('div')
            note.classList.add('note')
            note.textContent = key
            document.body.appendChild(note)
            return
        }

        if (key === 'Backspace') {
            const notes = document.querySelectorAll('.note')
            if (notes.length > 0) {
                notes[notes.length - 1].remove()
            }
            return
        }

        if (key === 'Escape') {
            document.querySelectorAll('.note').forEach(n => n.remove())
        }
    })
}
