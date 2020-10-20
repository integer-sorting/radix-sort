import test from 'ava';
import {sorted, range, list} from '@aureooms/js-itertools';
import {shuffle} from '@aureooms/js-random';
import {increasing} from '@aureooms/js-compare';

import sortFloat32 from '../../../src/array/api/sortFloat32';

const randomFloat32 = () => {
	const sign = Math.random() < 0.5 ? 1 : -1;
	const base = (Math.random() - 0.5) * 100;
	const exponent = (Math.random() - 0.5) * 100;
	return sign * Math.exp(base, exponent);
};

const macro = (t, data) => {
	const result = sortFloat32(data.slice());
	const expected = Float32Array.from(sorted(increasing, data));
	t.deepEqual(expected, result);
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
