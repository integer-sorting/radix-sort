import test from 'ava';
import {sorted, range, list, map} from '@aureooms/js-itertools';
import {shuffle, randrange} from '@aureooms/js-random';
import {increasing} from '@aureooms/js-compare';

import sortInt32 from '../../../src/array/api/sortInt32';

const macro = (t, data) => {
	const result = sortInt32(data.slice());
	const expected = sorted(increasing, data);
	t.deepEqual(expected, result);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortInt32(${repr(data)})`;

test(macro, []);
test(macro, [1, -2, -3, 4]);

const N = 1 << 17;
const longShuffledInput = list(range((-N / 2) | 0, (N / 2) | 0));
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = list(
	map(() => randrange(-(2 ** 31), 2 ** 31), range(N))
);
test(macro, longRandomInput);
