function sunnySunday(date) {
  const c = [ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const d = Math.floor((date - new Date("0001-01-01")) / 86400000)
  const i = d % 6
  return c[i]
}

