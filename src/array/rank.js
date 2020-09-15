import assert from 'assert';

/**
 * O(n) time.
 *
 * @param {Array} ch The cumulative histogram of the input.
 * @param {Array} array The input array to sort.
 * @param {Number} i Inclusive left boundary of the array.
 * @param {Number} j Non-inclusive right boundary of the array.
 * @param {Array} permutation The output permutation.
 */
const rank = (ch, array, i, j, permutation) => {
	assert(i >= 0 && j <= array.length);
	assert(i >= 0 && j <= permutation.length);
	for (; i < j; ++i) {
		assert(array[i] >= 0 && array[i] < ch.length);
		assert(ch[array[i]] >= 0 && ch[array[i]] < permutation.length);
		permutation[i] = ch[array[i]]++;
	}
};

export default rank;
