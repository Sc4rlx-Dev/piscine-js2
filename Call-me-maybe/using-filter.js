function filterShortStateName(arr) { return arr.filter(w => w.length < 7)}
function filterStartVowel(arr) { return arr.filter(w => /^[aeiouAEIOU]/.test(w))}
function filter5Vowels(arr) { return arr.filter(w => (w.match( /[aeiou]/g) ).length >= 5)}
function filter1DistinctVowel(arr) {return arr.filter(w => { const v=w.match(/[aeiou]/gi) ; return v.every(c=>c.toLowerCase()==v[0].toLowerCase())})}
function multiFilter(arr) { return arr.filter(o => o.capital.length >= 8  && !/^[aeiou]/i.test(o.name) && /[aeiou]/i.test(o.tag) && o.region != 'South')}
