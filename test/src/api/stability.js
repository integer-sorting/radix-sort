import test from 'ava';
import {
	list,
	all,
	map,
	sorted,
	range,
	enumerate,
	nrepeat
} from '@aureooms/js-itertools';
import {quasilexicographical, increasing} from '@aureooms/js-compare';
import {randint} from '@aureooms/js-random';

import sort from '../../../src/array/api/sort';

const isStable = (t, k, M, data) => {
	t.true(k >= 0);
	const result = sort(k, M, data.slice());
	t.true(data.length <= 1 || all(map((tuple) => tuple.length >= k, data)));
	const lex = quasilexicographical(increasing);
	const expected = sorted(lex, data);
	t.deepEqual(expected, result);
};

const repr = (data) =>
	data.length >= 20
		? `[${JSON.stringify(data.slice(0, 9)).slice(1, -1)},..,${JSON.stringify(
				data.slice(-9)
		  ).slice(1, -1)}]`
		: JSON.stringify(data);

isStable.title = (title, k, M, data) =>
	title || `sort(${k}, ${M}, ${repr(data)}) is stable`;

test(isStable, 0, 0, []);
test(isStable, 0, 0, list(map((x) => [x], range(1000))));
test(
	isStable,
	1,
	1,
	list(map(([a, b]) => [b, a], enumerate(nrepeat(0, 1000))))
);
test(
	isStable,
	2,
	2,
	list(map((i) => [randint(0, 2), randint(0, 2), i], range(1000)))
);
