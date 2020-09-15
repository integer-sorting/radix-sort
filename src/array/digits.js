import alloc from './alloc';
import load from './load';

export default function* digits(tuples, i, j, s, t) {
	const buffer = alloc(j - i);
	for (--t; s <= t; --t) {
		// O(kN) where k = t - s
		load(t, tuples, i, j, buffer);
		yield buffer;
	}
}
