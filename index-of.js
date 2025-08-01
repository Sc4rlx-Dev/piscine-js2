function indexOf(arr , match , index) {
    if(!index){ index = 0 }
    for(let i = index ; i <= arr.length ; i++){
        if(arr[i] == match){
            return i
        }
    }
return -1
}
function lastIndexOf(arr , match) {
    for(let i = arr.length; i >= 0; i--){
        if(arr[i] == match){
            return i
        }
    }
}


function includes(a , b ) {
    return indexOf(a,b) != -1 ? true : false
}


