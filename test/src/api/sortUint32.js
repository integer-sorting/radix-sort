import test from 'ava';
import {sorted} from '@iterable-iterator/sorted';
import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {shuffle, randrange} from '@randomized/random';
import {increasing} from '@total-order/primitive';

import sortUint32 from '../../../src/array/api/sortUint32.js';

const macro = (t, data) => {
	const actual = sortUint32(data);
	const expected = Uint32Array.from(sorted(increasing, data));
	t.deepEqual(actual, expected);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortUint32(${repr(data)})`;

test(macro, []);
test(macro, [1, 2, 3, 4]);
test(macro, [1, 4, 3, 1]);
test(macro, [4, 2, 3, 1]);
test(macro, [4, 3, 2, 1]);

test(macro, [1_587_856_490, 840_468_336]);
test(macro, [840_468_336, 1_587_856_490]);
test(
	macro,
	[
		1_587_856_490, 840_468_336, 799_932_746, 2_771_697_529, 446_980_404,
		3_347_471_014,
	],
);

const N = 1 << 17;
const longShuffledInput = list(range(N));
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = list(map(() => randrange(2 ** 32) >>> 0, range(N)));
test(macro, longRandomInput);
