# Split Number

Split an integer number into an array or iterable value of single-digit numbers.

[![Build status for Node.js 4.x and newer](https://github.com/sovpro/split-num/workflows/Node.js%204.x%20and%20newer%20/badge.svg?branch=master)](https://github.com/sovpro/split-num/commits/master)

## Split into an array

```js
let split_num = splitNum (123)
```

## Split into an iterable value

```js
let split_iterable = splitNum.lazy (123)
for (let digit of split_iterable) {
  // ... do stuff with digit
}
```
