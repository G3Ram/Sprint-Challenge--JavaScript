'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const functions = require('../challenges/functions')

/**
 * Constants
 */

const consume = functions.consume
const add = functions.add
const multiply = functions.multiply
const greeting = functions.greeting

/**
 * Assertions
 */

test("Does 2 + 2 == 4?", t => {
  t.is(consume(2, 2, add), 4)
})

test("Does 10 * 16 == 160?", t => {
  t.is(consume(10, 16, multiply), 160)
})

test("Greeting for Mary Poppins", t => {
  t.is(consume("Mary", "Poppins", greeting), "Hello Mary Poppins, nice to meet you!")
})
