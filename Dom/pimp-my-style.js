import { styles } from "../pimp-my-style.data.js"

let i = 0 , flag = true , len = styles.length

export const pimp = () => {
    const button = document.querySelector('button') 
    if(!button) return 

    flag ? (button.classList.remove("unpinp") , button.classList.add(styles[i]) , i++ , i == len ? (flag = false , button.classList.add("unpimp")) : null)
    : ( i-- , button.classList.remove(styles[i]) , i == 0 ? (flag = true , button.classList.remove("unpimp")) : null) 
}



