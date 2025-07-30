function getAcceleration(obj) {
  if ('f' in obj && 'm' in obj) {
    return obj.f / obj.m
  }
  if ('Δv' in obj && 'Δt' in obj) {
    return obj.Δv / obj.Δt
  }
  if ('d' in obj && 't' in obj) {
    return (2 * obj.d) / (obj.t * obj.t)
  }
  return 'impossible'
}


// console.log(getAcceleration({ f: 10, m: 5 }))          
// console.log(getAcceleration({ Δv: 100, Δt: 50 }))      
// console.log(getAcceleration({ d: 10, t: 2 }))           
// console.log(getAcceleration({ f: 0, m: 5 }))            
// console.log(getAcceleration({}))                      
