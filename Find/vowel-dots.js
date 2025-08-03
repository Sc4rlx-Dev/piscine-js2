var vowels = /[aouieAOUIE]/

function vowelDots(str){
    let res = ""
    let i = 0
    while(i < str.length ){
        res += str[i]
        let m = vowels.exec(str[i])
        if(m !== null){        
            res += '.'
        }
    i++
    }
return res
}


