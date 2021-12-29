import assert from 'assert';
import alloc from './alloc.js';
import load from './load.js';
import Digits from './Digits.js';
import stable from './stable.js';
import permute from './permute.js';

/**
 * O(kM + kN) time where k is the number of digits per tuple, M is the radix, and
 * N = j - i is the number of tuples. The product kN corresponds to the input size.
 */
const sortFixedLengthTuples = (k, M, tuples, output, i, j) => {
	console.debug('sortFixedLengthTuples', k, M, tuples, output, i, j);
	assert(k >= 1);
	const N = j - i;
	assert(N >= 2);
	const first = alloc(N);
	load(k - 1, tuples, i, j, first);
	const rest = new Digits(tuples, i, j, 0, k - 1);
	const permutation = stable(M, first, rest); // O(kN + kM)
	console.debug(permutation, tuples);
	permute(permutation, tuples, i, j, output, i); // O(N)
	return output;
};

export default sortFixedLengthTuples;
