const planet = {
    earth: 31557600,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

function dogYears(pname, age) {
if(pname == 'earth') {return parseFloat((age / 31557600 * 7 ).toFixed(2))}
return parseFloat(((age / planet.earth ) * 7 / planet[pname]).toFixed(2))
}


console.log(dogYears('earth' , 1000000000))
console.log(dogYears('mercury' , 2134835688))
