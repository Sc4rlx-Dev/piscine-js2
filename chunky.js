function chunk (arr , n) {
    let [p1, p2] = [[], []]
    p1 = arr.slice(0 , n) ; p2 = arr.slice(n , arr.length)
return [p1 , p2]
}