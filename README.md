MIN INT16
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Minimum signed 16-bit integer.


## Installation

``` bash
$ npm install const-min-int16
```


## Usage

``` javascript
var MIN_INT16 = require( 'const-min-int16' );
```

#### MIN_INT16

Minimum signed 16-bit integer.

``` javascript
MIN_INT16 === (-1 * Math.pow(2,15));
```


## Examples

``` javascript
var MIN_INT16 = require( 'const-min-int16' );

console.log( MIN_INT16 );
// returns -32768
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015-2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-min-int16.svg
[npm-url]: https://npmjs.org/package/const-min-int16

[build-image]: http://img.shields.io/travis/const-io/min-int16/master.svg
[build-url]: https://travis-ci.org/const-io/min-int16

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/min-int16/master.svg
[coverage-url]: https://codecov.io/github/const-io/min-int16?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/min-int16.svg
[dependencies-url]: https://david-dm.org/const-io/min-int16

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/min-int16.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/min-int16

[github-issues-image]: http://img.shields.io/github/issues/const-io/min-int16.svg
[github-issues-url]: https://github.com/const-io/min-int16/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io
