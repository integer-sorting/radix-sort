import assert from 'assert';
import zeros from './zeros.js';
import reset from './reset.js';
import _cumulativeHistogram from './_cumulativeHistogram.js';
import _rank from './_rank.js';

/**
 * O(kM + kN) time where k is the number of arrays, M is the radix, and
 * N is the length of each array. The product kN corresponds to the input size.
 *
 * @param {number} k
 * @param {number} M
 * @param {number} N
 * @param {ArrayLike<(a: Int32Array, i: number) => number>} tuples
 * @param {Int32Array} input
 * @param {Int32Array} aux
 */
const _lsb_stable = (k, M, N, tuples, input, aux) => {
	console.debug('stable', k, M, N, tuples);
	assert(tuples.length === k);
	const ch = zeros(M + 1); // O(M)
	const view = new Int32Array(ch.buffer, ch.byteOffset + 4, M);
	for (let i = 0; ; ) {
		const f = tuples[i];
		ch[0] = -1;
		view[0] = -1;
		_cumulativeHistogram(f, input, 0, N, view); // O(N)
		console.debug('stable step', f, ch);
		assert(ch[0] === -1);
		_rank(ch, f, input, 0, N, aux); // O(N)
		if (++i === k) return aux;
		reset(view); // O(M)
		const t = input;
		input = aux;
		aux = t;
	}
};

export default _lsb_stable;
