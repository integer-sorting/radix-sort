[js-radixsort](http://aureooms.github.io/js-radixsort)
==

radixsort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

[![NPM license](http://img.shields.io/npm/l/aureooms-js-radixsort.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-radixsort/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-radixsort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-radixsort)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-radixsort.svg?style=flat)](http://bower.io/search/?q=aureooms-js-radixsort)
[![Build Status](http://img.shields.io/travis/aureooms/js-radixsort.svg?style=flat)](https://travis-ci.org/aureooms/js-radixsort)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-radixsort.svg?style=flat)](https://coveralls.io/r/aureooms/js-radixsort)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-radixsort.svg?style=flat)](https://david-dm.org/aureooms/js-radixsort#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-radixsort.svg?style=flat)](https://david-dm.org/aureooms/js-radixsort#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-radixsort.svg?style=flat)](https://codeclimate.com/github/aureooms/js-radixsort)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-radixsort.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-radixsort)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-radixsort.svg?style=flat)](https://github.com/aureooms/js-radixsort/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-radixsort.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-radixsort)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-radixsort
# or
jspm install npm:aureooms-js-radixsort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-radixsort
```

### bower
```terminal
bower install aureooms-js-radixsort
```

### ender
```terminal
ender add aureooms-js-radixsort
```

### jam
```terminal
jam install aureooms-js-radixsort
```

### spm
```terminal
spm install aureooms-js-radixsort --save
```

### npm
```terminal
npm install aureooms-js-radixsort --save
```

## Require
### jspm
```js
let radixsort = require( "github:aureooms/js-radixsort" ) ;
// or
import radixsort from 'aureooms-js-radixsort' ;
```
### duo
```js
let radixsort = require( "aureooms/js-radixsort" ) ;
```

### component, ender, spm, npm
```js
let radixsort = require( "aureooms-js-radixsort" ) ;
```

### bower
The script tag exposes the global variable `radixsort`.
```html
<script src="bower_components/aureooms-js-radixsort/js/dist/radixsort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-radixsort" ] , function ( radixsort ) { ... } ) ;
```
