import alloc from './alloc.js';
import load from './load.js';

export default function* digits(tuples, i, j, s, t) {
	const buffer = alloc(j - i);
	for (--t; s <= t; --t) {
		// O(kN) where k = t - s
		load(t, tuples, i, j, buffer);
		yield buffer;
	}
}
