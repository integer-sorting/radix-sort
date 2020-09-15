import test from 'ava';
import {sorted, range, list, map} from '@aureooms/js-itertools';
import {shuffle, randrange} from '@aureooms/js-random';
import {increasing} from '@aureooms/js-compare';

import sortUint32 from '../../../src/array/api/sortUint32';

const macro = (t, data) => {
	const result = sortUint32(data.slice());
	const expected = sorted(increasing, data);
	t.deepEqual(expected, result);
};

const repr = (data) =>
	data.length >= 20
		? `[${data.slice(0, 9)},..,${data.slice(-9)}]`
		: JSON.stringify(data);

macro.title = (title, data) => title || `sortUint32(${repr(data)})`;

test(macro, []);
test(macro, [1, 2, 3, 4]);

const N = 1 << 17;
const longShuffledInput = list(range(N));
shuffle(longShuffledInput, 0, N);
test(macro, longShuffledInput);

const longRandomInput = list(map(() => randrange(2 ** 32) >>> 0, range(N)));
test(macro, longRandomInput);
