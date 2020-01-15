# Split Number

Split an integer number into an array or iterator of digits.

[![Build status for Node.js 8.x and newer](https://github.com/sovpro/split-num/workflows/Node.js%208.x%20and%20newer%20/badge.svg?branch=master)](https://github.com/sovpro/split-num/commits/master)

## Split into an array

```js
let num = 123
let split_num = splitNum (123)
```

## Split into an iterator

```js
let num = 123
let split_iter = splitNum.lazy (123)
for (let digit of split_iter) {
  // ... do stuff with digit
}
```
