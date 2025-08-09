function longWords(arr) { return arr.every( (a) => { return (typeof a == 'string' && a.length >= 5) })}

function oneLongWord(arr) { return arr.some( (a) => { return (typeof a == 'string' )&& a.length >= 10 }) }

function noLongWords(arr) { return arr.every( (a) => {return (typeof a == 'string') && a.length < 7 }) }
