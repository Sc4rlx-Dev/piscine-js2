const deepCopy = arg => Array.isArray(arg)
  ? arg.map(a => Array.isArray(a) ? deepCopy(a) : (a instanceof RegExp ? new RegExp(a) : a))
  : arg 

const ob = v => v && typeof v === 'object' && !Array.isArray(v)

const replica = (t, ...ss) => (
    ss.forEach(s => Object.keys(s).forEach(k => { const v = s[k]
        t[k] = Array.isArray(v) ? deepCopy(v) : ob(v)
        ? (ob(t[k]) ? replica(t[k], v) : deepCopy(v)) : v
    })),t
)
