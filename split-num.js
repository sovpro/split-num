splitNum.lazy = splitLazy
module.exports = splitNum

function splitNum (value) {
  let num = Math.abs (value)
  if (isNaN (num)) return []
  let pow = Math.log10 (num) >>> 0
  let mod ;
  let rem ;
  let i = 0
  let split = new Array (pow + 1)
  while (pow >= 0) {
    mod = 10 ** pow--
    rem = num % mod
    split[i++] = (num - rem) / mod
    num = rem
  }
  return split
}

function* splitLazy (value) {
  let num = Math.abs (value)
  if (isNaN (num)) return
  let pow = Math.log10 (num) >>> 0
  let mod ;
  let rem ;
  while (pow >= 0) {
    mod = 10 ** pow--
    rem = num % mod
    yield (num - rem) / mod
    num = rem
  }
}
