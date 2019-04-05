'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const object_arrays = require('../challenges/objects-arrays')

/**
 * Constants
 */

const tyrannosaurus = object_arrays.tyrannosaurus
const stegosaurus = object_arrays.stegosaurus
const velociraptor = object_arrays.velociraptor

/**
 * Assertions
 */

test("How much did tyrannosaurus weigh?", t => {
  t.is(tyrannosaurus.weight, "7000kg")
})

test("What was the diet of a velociraptor?", t => {
  t.is(velociraptor.diet, "carnivorous")
})

test("How long was a stegosaurus?", t => {
  t.is(stegosaurus.length, "9m")
})

test("What time period did tyrannosaurus live in?", t => {
  t.is(tyrannosaurus.period, "Late Cretaceious")
})

test("What noise does a tyrannosaurus make?", t => {
  t.is(tyrannosaurus.roar(), "RAWERSRARARWERSARARARRRR!")
})
