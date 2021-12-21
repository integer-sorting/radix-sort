import assert from 'assert';
import histogram from './histogram.js';
import accumulate from './accumulate.js';

/**
 * O(M+N) time where N=j-i and M = ch.length - offset.
 */
const cumulativeHistogram = (array, i, j, ch, offset) => {
	assert(Number.isInteger(offset));
	assert(i >= 0 && i <= j && j <= array.length);
	histogram(array, i, j, ch, offset); // O(N)
	accumulate(ch, offset, ch.length); // O(M)
};

export default cumulativeHistogram;
