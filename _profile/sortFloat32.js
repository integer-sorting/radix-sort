// eslint-disable-next-line import/no-unassigned-import
import 'regenerator-runtime/runtime.js';
import process from 'node:process';

import {range} from '@iterable-iterator/range';
import {entropy} from '../test/src/_fixtures.js';

import {sortFloat32} from './dist/profile/index.js';

const seed = [123, 456];
const {randomFloat32} = entropy(seed);

const hideBin = (x) => x.slice(2);
const [m, N] = hideBin(process.argv).map((x) => Number.parseInt(x, 10));

console.log(`m ${m}`);
console.log(`N ${N}`);

console.time('input');
const input = Float32Array.from(range(N), randomFloat32);
console.timeEnd('input');

console.time('sort');
for (let i = 0; i < m; ++i) sortFloat32(input);
console.timeEnd('sort');
