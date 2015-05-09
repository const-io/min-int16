/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	CONST = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-const-min-int16', function tests() {

	it( 'should export a number', function test() {
		expect( CONST ).to.be.a( 'number' );
	});

	it( 'should equal -32768', function test() {
		assert.strictEqual( CONST, -1*Math.pow(2,15) );
	});

});
