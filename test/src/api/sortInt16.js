import test from 'ava';
import {sorted} from '@iterable-iterator/sorted';
import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {shuffle, randrange} from '@randomized/random';
import {increasing} from '@total-order/primitive';

import sortInt16 from '../../../src/array/api/sortInt16';

const macro = (t, data) => {
	const result = sortInt16(data.slice());
	const expected = sorted(increasing, data);
	t.deepEqual(expected, result);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortInt16(${repr(data)})`;

test(macro, []);
test(macro, [1, -2, -3, 4]);

const N = 1 << 17;
const longShuffledInput = list(
	Int16Array.from(range(Math.trunc(-N / 2), Math.trunc(N / 2)))
);
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = list(
	map(() => randrange(-(2 ** 15), 2 ** 15), range(N))
);
test(macro, longRandomInput);
