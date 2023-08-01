<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# itermsum

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which iteratively computes a moving sum.

<section class="intro">

For a window of size `W`, the moving sum is defined as

<!-- <equation class="equation" label="eq:moving_sum" align="center" raw="s = \sum_{i=0}^{W-1} x_i" alt="Equation for the moving sum."> -->

```math
s = \sum_{i=0}^{W-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} x_i" data-equation="eq:moving_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@649f1d940ae76f02c3c2fc97e52f59b452e2e15f/lib/node_modules/@stdlib/stats/iter/msum/docs/img/equation_moving_sum.svg" alt="Equation for the moving sum.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
itermsum = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-msum@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var itermsum = require( 'path/to/vendor/umd/stats-iter-msum/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-msum@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.itermsum;
})();
</script>
```

#### itermsum( iterator, W )

Returns an [iterator][mdn-iterator-protocol] which iteratively computes a moving sum. The `W` parameter defines the number of iterated values over which to compute the moving sum.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 2.0, 1.0, 3.0, -7.0, -5.0 ] );
var it = itermsum( arr, 3 );

// Fill the window...
var s = it.next().value; // [2.0]
// returns 2.0

s = it.next().value; // [2.0, 1.0]
// returns 3.0

s = it.next().value; // [2.0, 1.0, 3.0]
// returns 6.0

// Window begins sliding...
s = it.next().value; // [1.0, 3.0, -7.0]
// returns -3.0

s = it.next().value; // [3.0, -7.0, -5.0]
// returns -9.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the function returns `NaN` for **at least** `W-1` future invocations. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all previously iterated values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-msum@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator for iteratively computing a moving sum:
var it = itermsum( rand, 3 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    if ( typeof v.value === 'number' ) {
        console.log( 'sum: %d', v.value );
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/mmean`][@stdlib/stats/iter/mmean]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving arithmetic mean.</span>
-   <span class="package-name">[`@stdlib/stats-iter/sum`][@stdlib/stats/iter/sum]</span><span class="delimiter">: </span><span class="description">compute the sum of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-msum.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-msum

[test-image]: https://github.com/stdlib-js/stats-iter-msum/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-iter-msum/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-msum/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-msum?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-msum.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-msum/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-msum/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-iter-msum/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-iter-msum/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-iter-msum/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-msum/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/mmean]: https://github.com/stdlib-js/stats-iter-mmean/tree/umd

[@stdlib/stats/iter/sum]: https://github.com/stdlib-js/stats-iter-sum/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
