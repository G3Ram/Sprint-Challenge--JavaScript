'use strict'

/**
 * Dependencies
 */

const test = require('ava')
const prototypes = require('../challenges/prototypes')

/**
 * Constants
 */

const CuboidMaker = prototypes.CuboidMaker

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
