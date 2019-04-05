'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const classes = require('../challenges/classes')

/**
 * Constants
 */

const CuboidMaker = classes.CuboidMaker
const CubeMaker = classes.CubeMaker

/**
 * Assertions
 */

test("Volume of a cuboid length: 4, width: 5, height: 5 is 100", t => {
  const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 })

  t.is(cuboid.volume(), 100)
})

test("Surface area of a cuboid length: 4, width: 5, height: 5 is 130", t => {
  const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 })

  t.is(cuboid.surfaceArea(), 130)
})

test("Volume of a cube length: 4, width: 4, height: 4 is 64", t => {
  const cube = new CubeMaker({ length: 4, width: 4, height: 4 })

  t.is(cube.volume(), 64)
})

test("Surface area of a cube length: 4, width: 4, height: 4 is 96", t => {
  const cube = new CubeMaker({ length: 4, width: 4, height: 4 })

  t.is(cube.surfaceArea(), 96)
})
