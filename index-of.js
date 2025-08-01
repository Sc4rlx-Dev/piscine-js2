function indexOf(arr , match) {
    for(let i = 0 ; i <= arr.length ; i++){
        if(arr[i] == match){
            return i
        }
    }
}
function lastIndexOf(arr , match) {
    for(let i = arr.length; i >= 0; i--){
        if(arr[i] == match){
            return i
        }
    }
}


function includes(a , b ) {
    return indexOf(a,b) != undefined ? true : false
}





