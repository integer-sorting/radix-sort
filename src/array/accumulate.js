import assert from 'assert';

/**
 * O(M) time where M=j-i.
 */
const accumulate = (array, i, j) => {
	assert(i >= 0 && j <= array.length);
	for (++i; i < j; ++i) {
		array[i] += array[i - 1];
	}
};

export default accumulate;
