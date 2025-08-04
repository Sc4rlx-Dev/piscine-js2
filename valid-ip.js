function findIP(text) {
    const r = /(\d+).(\d+).(\d+).(\d+)/
    const m = text.match(r)
    return m ? m : []
} 
