function first(arr){
    return arr[0]
}
function last(arr){
    return arr[arr.length - 1]
}
function kiss(arg) {
    return [last(arg), first(arg)];
}

// console.log(kiss("test"))