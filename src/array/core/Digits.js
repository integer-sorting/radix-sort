import alloc from './alloc.js';
import load from './load.js';

export default class Digits {
	constructor(tuples, i, j, s, t) {
		this.s = s;
		this.t = t;
		this.tuples = tuples;
		this.i = i;
		this.j = j;
		this.buffer = alloc(j - i);
	}

	next() {
		if (this.t <= this.s) return {done: true};
		// O(kN) where k = t - s
		load(--this.t, this.tuples, this.i, this.j, this.buffer);
		return {done: false, value: this.buffer};
	}
}
