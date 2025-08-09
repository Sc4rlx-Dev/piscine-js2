function citiesOnly(arr){ return arr.map(a => a.city)}
function upperCasingStates(arr){return arr.map(a => a.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' '))}
function fahrenheitToCelsius(arr){return arr.map(a => `${Math.floor((parseFloat(a) - 32) * 5 / 9)}°C`)}
function trimTemp(arr) { return arr.map(a => ({ ...a, temperature : a.temperature.replace(/\s/g , '') }))}
function tempForecasts(arr) { return trimTemp(arr).map(o => `${fahrenheitToCelsius([o.temperature])[0].replace('°C', '°Celsius')} in ${o.city}, ${upperCasingStates([o.state])[0]}`)}






// console.log(
// (tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ])))
 // -> ['38°Celsius in Pasadena, California']



// console.log(trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]))



// const arr = [
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ]
// const arr = ['alabama', 'new jersey']
// const arr = ['68°F', '59°F', '25°F']



// =>   [
//           { city: 'Los Angeles', temperature: '101°F' },
//           { city: 'San Francisco', temperature: '84°F' },
//      ] 