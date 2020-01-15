"use strict";
const splitNum = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert.deepEqual (actual, expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

assertWithInfo (
    splitNum (123)
  , [1, 2, 3]
  , 'The result array for 123 should contain all the integer digits'
)

assertWithInfo (
    splitNum (100)
  , [1, 0, 0]
  , 'The result array for 100 should contain all the integer trailing zero digits'
)

assertWithInfo (
    splitNum ()
  , []
  , 'The result array for no arguments should be empty'
)

assertWithInfo (
    splitNum ('Hello, World!')
  , []
  , 'The result array for an argument that not a number should be empty'
)

assertWithInfo (
    splitNum (123.123)
  , [1, 2, 3]
  , 'The result array for a float number should contain all the integer digits'
)

assertWithInfo (
    Array.from (splitNum.lazy (123))
  , [1, 2, 3]
  , 'The lazy result array for 123 should contain all the integer digits'
)

assertWithInfo (
    Array.from (splitNum.lazy (100))
  , [1, 0, 0]
  , 'The lazy result array for 100 should contain all the integer trailing zero digits'
)

assertWithInfo (
    Array.from (splitNum.lazy ())
  , []
  , 'The lazy result array for no arguments should be empty'
)

assertWithInfo (
    Array.from (splitNum.lazy ('Hello, World!'))
  , []
  , 'The lazy result array for an argument that not a number should be empty'
)

assertWithInfo (
    Array.from (splitNum.lazy (123.123))
  , [1, 2, 3]
  , 'The lazy result array for a float number should contain all the integer digits'
)


