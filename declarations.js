const escapeStr = "`\\/\"'" 
const arr = [4 , '2']
const obj = {
    str : "oussama",
    num : 1 ,
    bool : false,
    undef : undefined
} 

const nested = {
    arr : [4 , undefined , '2'] ,
    obj : {
        str : "Sc4rlx",
        num : 1,
        bool : true,
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)


// nested.arr[0] = 5
// console.log(nested)