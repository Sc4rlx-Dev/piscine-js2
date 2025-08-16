const mapCurry = (fn) => (a) => { return Object.fromEntries(Object.entries(a).map(fn)) }
const defaultCurry =  (a) => (b) => ({...a , ...b})
const reduceCurry = (fn) => (o, i) => { return Object.entries(o).reduce(fn, i) }
const filterCurry = (fn) => (o) => { return Object.fromEntries(Object.entries(o).filter(fn)) }
const reduceScore = (p, i = 0) => Object.values(p).reduce((s, v) => v.isForceUser ? s + v.pilotingScore + v.shootingScore : s, i)
const mapAverage = mapCurry(([k, v]) => [k, { ...v, averageScore: (v.pilotingScore + v.shootingScore) / 2 }])
const filterForce = filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)

