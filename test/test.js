'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MIN_INT16 = require( './../lib' );


// TESTS //

tape( 'the main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof MIN_INT16, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals -2**15', function test( t ) {
	t.equal( MIN_INT16, -pow(2,15), 'equals -1 * 2**15' );
	t.end();
});
