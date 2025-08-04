function groupPrice(price) {
    const g = /([a-zA-Z$]+)(\d+)\.(\d+)/g
    let res = []
    let match

    while ((match = g.exec(price)) !== null) {
        const m = match[0] 
        const dlr = match[2]    
        const cnt = match[3]     
        
        res.push([m, dlr, cnt])
    }    
return res
}
// console.log(groupPrice('The price of the cereals is $4.00.'), [['$4.00', '4', '00']])
// console.log(groupPrice('the total is USD19.98'), [['USD19.98', '19', '98']])