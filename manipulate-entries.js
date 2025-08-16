export const filterEntries = (obj, func) => Object.fromEntries(Object.entries(obj).filter(func))
export const mapEntries = (obj, func) => Object.fromEntries(Object.entries(obj).map(func))

export const reduceEntries = (obj, func, acc) => {
    const entries = Object.entries(obj)
    if (entries.length === 0) return acc
    if (acc !== undefined) return entries.reduce((a, e) => func(a, e), acc)
    return entries.slice(1).reduce((a, e) => func(a, e), entries[0])
}

export const totalCalories = (cart) => {
    const total = Object.entries(cart).reduce((s, [i, g]) => {
        return s + (nutritionDB[i].calories * g) / 100 }, 0)
    return +total.toFixed(2)
}

export const lowCarbs = (cart) =>
    filterEntries(cart, ([n, g]) => (nutritionDB[n].carbs * g) / 100 < 50)

export const cartTotal = (cart) =>
    mapEntries(cart, ([n, g]) => {
        const mult = g / 100
        const T = mapEntries(nutritionDB[n], ([n, v]) => [ n, +(v * mult).toFixed(3),])
        return [n, T]
})

// // small database with nutrition facts, per 100 grams
// // prettier-ignore
// const nutritionDB = {
//   tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//   oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//   onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//   garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//   paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//   sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//   orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }

const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('is with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
