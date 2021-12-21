import assert from 'assert';
import sortFixedLengthTuples from '../core/sortFixedLengthTuples.js';
import sortArbitraryTuples from '../core/sortArbitraryTuples.js';

const sort = (k, M, tuples) => {
	assert(Number.isInteger(k));
	assert(Number.isInteger(M));
	console.debug('sort', k, tuples);
	if (k === 0) {
		return tuples;
	}

	const N = tuples.length;
	if (N <= 1) {
		return tuples;
	}

	// eslint-disable-next-line unicorn/no-new-array
	const output = new Array(N);
	if (k >= 1) {
		return sortFixedLengthTuples(k, M, tuples, output, 0, N);
	}

	return sortArbitraryTuples(M, tuples, output);
};

export default sort;
