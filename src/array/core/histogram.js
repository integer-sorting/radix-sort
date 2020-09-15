import assert from 'assert';

/**
 * O(N) time where N = j - i;
 */
const histogram = (array, i, j, output, offset) => {
	assert(Number.isInteger(offset));
	assert(i >= 0 && j <= array.length);
	for (; i < j; ++i) {
		const key = offset + array[i];
		assert(key >= 0 && key < output.length);
		++output[key];
	}
};

export default histogram;
