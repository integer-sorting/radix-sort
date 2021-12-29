import assert from 'assert';

/**
 * O(N) time where N = j - i;
 */
const _histogram = (f, input, i, j, output) => {
	assert(Number.isInteger(i));
	assert(Number.isInteger(j));
	assert(i >= 0);
	for (; i < j; ++i) {
		const key = f(input, i);
		assert(key >= 0 && key < output.length);
		++output[key];
	}
};

export default _histogram;
