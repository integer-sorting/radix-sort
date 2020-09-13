[@aureooms/js-radixsort](https://aureooms.github.io/js-radixsort)
==

Radixsort code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

[![License](https://img.shields.io/github/license/aureooms/js-radixsort.svg)](https://raw.githubusercontent.com/aureooms/js-radixsort/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-radixsort.svg)](https://www.npmjs.org/package/@aureooms/js-radixsort)
[![Build](https://img.shields.io/travis/aureooms/js-radixsort/master.svg)](https://travis-ci.org/aureooms/js-radixsort/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-radixsort.svg)](https://david-dm.org/aureooms/js-radixsort)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-radixsort.svg)](https://david-dm.org/aureooms/js-radixsort?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-radixsort.svg)](https://github.com/aureooms/js-radixsort/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-radixsort.svg)](https://www.npmjs.org/package/@aureooms/js-radixsort)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-radixsort.svg)](https://codeclimate.com/github/aureooms/js-radixsort/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-radixsort.svg)](https://codeclimate.com/github/aureooms/js-radixsort/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-radixsort/master.svg)](https://codecov.io/gh/aureooms/js-radixsort)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-radixsort.svg)](https://codeclimate.com/github/aureooms/js-radixsort/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-radixsort//badge.svg)](https://aureooms.github.io/js-radixsort//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-radixsort)](https://bundlephobia.com/result?p=@aureooms/js-radixsort)

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
jspm install npm:@aureooms/js-radixsort
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-radixsort
```

### bower
```terminal
bower install @aureooms/js-radixsort
```

### ender
```terminal
ender add @aureooms/js-radixsort
```

### jam
```terminal
jam install @aureooms/js-radixsort
```

### spm
```terminal
spm install @aureooms/js-radixsort --save
```

### npm
```terminal
npm install @aureooms/js-radixsort --save
```

## Require
### jspm
```js
let radixsort = require( "github:aureooms/js-radixsort" ) ;
// or
import radixsort from '@aureooms/js-radixsort' ;
```
### duo
```js
let radixsort = require( "aureooms/js-radixsort" ) ;
```

### component, ender, spm, npm
```js
let radixsort = require( "@aureooms/js-radixsort" ) ;
```

### bower
The script tag exposes the global variable `radixsort`.
```html
<script src="bower_components/@aureooms/js-radixsort/js/dist/radixsort.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-radixsort" ] , function ( radixsort ) { ... } ) ;
```
