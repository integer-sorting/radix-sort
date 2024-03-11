import test from 'ava';

import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {sorted} from '@iterable-iterator/sorted';
import {shuffle, randrange} from '@randomized/random';
import {increasing} from '@total-order/primitive';

import sortUint16 from '../../../src/array/api/sortUint16.js';

const macro = (t, data) => {
	const result = sortUint16(data.slice());
	const expected = sorted(increasing, data);
	t.deepEqual(expected, result);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortUint16(${repr(data)})`;

test(macro, []);
test(macro, [1, 2, 3, 4]);

const N = 1 << 17;
const longShuffledInput = list(Uint16Array.from(range(N)));
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = list(map(() => randrange(2 ** 16) >>> 0, range(N)));
test(macro, longRandomInput);
