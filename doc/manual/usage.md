# Usage

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

First, require the polyfill at the entry point of your application
```js
await import( 'regenerator-runtime/runtime.js' );
// or
import 'regenerator-runtime/runtime.js' ;
```

Then, import the library where needed
```js
const radixsort = await import( '@integer-sorting/radix-sort' ) ;
// or
import * as radixsort from '@integer-sorting/radix-sort' ;
```
