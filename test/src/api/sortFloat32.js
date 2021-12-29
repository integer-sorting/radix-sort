import test from 'ava';
import {sorted} from '@iterable-iterator/sorted';
import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {increasing} from '@total-order/primitive';

import {sortFloat32} from '../../../src/index.js';

import {entropy} from '../_fixtures.js';

const seed = [123, 456];
const {shuffle, randomFloat32} = entropy(seed);

const macro = (t, data) => {
	const actual = sortFloat32(data.slice());
	const expected = Float32Array.from(sorted(increasing, data));
	t.deepEqual(actual, expected);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortFloat32(${repr(data)})`;

test(macro, []);
test(macro, [1.25, -2.5, -3.125, 4.375]);

const N = 1 << 17;
const longShuffledInput = list(range(Math.trunc(-N / 2), Math.trunc(N / 2)));
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = Float32Array.from(range(N), randomFloat32);
test(macro, longRandomInput);
