import assert from 'assert';
import _histogram from './_histogram.js';
import accumulate from './accumulate.js';

/**
 * O(M+N) time where N=j-i and M = ch.length.
 */
const _cumulativeHistogram = (f, input, i, j, ch) => {
	assert(Number.isInteger(i));
	assert(Number.isInteger(j));
	assert(i >= 0 && i <= j);
	_histogram(f, input, i, j, ch); // O(N)
	accumulate(ch, 0, ch.length); // O(M)
};

export default _cumulativeHistogram;
