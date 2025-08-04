var ru = /(https?:\/\/[^\s]+)/g
var rq = /\?([^#]+)/g

function getURL(str) {
    let arr = []
    for(let m = ru.exec(str) ; m !== null ; m = ru.exec(str)){
        arr.push(m[0])
    }
    return arr
}


function greedyQuery(str) {
    let arr = []
    for(let q = rq.exec(str) ; q !== null ; q = rq.exec(str)){
        arr.push(q[0])
    }
    return arr
}

function notSoGreedy(str) {
    let arr = []
    for(let m = ru.exec(str) ; m !== null ; m = ru.exec(str)){
        let qM = rq.exec(m[0])
        if(qM){
            qP = qM[1].split('&')
            if (qP.length == 2 || qP.length == 3) {
                console.log(qP)
                arr.push(qP)
            }
        } 
    }
return arr
}
