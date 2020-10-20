import test from 'ava';
import {sorted, range, list, map} from '@aureooms/js-itertools';
import {shuffle, randrange} from '@aureooms/js-random';
import {increasing} from '@aureooms/js-compare';

import sortInt8 from '../../../src/array/api/sortInt8';

const macro = (t, data) => {
	const result = sortInt8(data.slice());
	const expected = sorted(increasing, data);
	t.deepEqual(expected, result);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortInt8(${repr(data)})`;

test(macro, []);
test(macro, [1, -2, -3, 4]);

const N = 1 << 17;
const longShuffledInput = list(
	Int8Array.from(range(Math.trunc(-N / 2), Math.trunc(N / 2)))
);
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = list(map(() => randrange(-(2 ** 7), 2 ** 7), range(N)));
test(macro, longRandomInput);
