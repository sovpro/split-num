"use strict";
splitNum.lazy = splitLazy
module.exports = splitNum

const pow10s = new Array (
  Math.ceil (Math.log10 (Number.MAX_VALUE))
).fill (0).map ((_, i) => Math.pow (10, i))

function splitNum (value) {
  let num = Math.abs (value)
  if (isNaN (num)) return []
  if (num === 0) return [0]
  let pow = Math.trunc (Math.log10 (num))
  let fac ;
  let val ;
  let i = 0
  let split = new Array (pow + 1)
  while (pow >= 0) {
    fac = pow10s[pow--]
    val = Math.trunc (num / fac)
    split[i++] = val
    num -= val * fac
  }
  return split
}

function* splitLazy (value) {
  let num = Math.abs (value)
  if (isNaN (num)) return
  if (num === 0) return (yield 0)
  let pow = Math.trunc (Math.log10 (num))
  let fac ;
  let val ;
  while (pow >= 0) {
    fac = pow10s[pow--]
    val = Math.trunc (num / fac)
    yield val
    num -= val * fac
  }
}
