var r = /\d+/g

function groupPrice(price){
    let full = [[price]]
    
    for(let match = r.exec(price) ; match != null ; match = r.exec(price)){
        full[0].push(match[0])
    }
return full
}

// console.log(groupPrice("USD12.13"))