import assert from 'assert';

/**
 * O(n) time.
 *
 * @param {Int32Array} ch The cumulative histogram of the input.
 * @param {(a: ArrayLike<number>, i: number) => number} f The input array to sort.
 * @param {Int32Array|Uint32Array} input The array to permute.
 * @param {number} i Inclusive left boundary of the array.
 * @param {number} j Non-inclusive right boundary of the array.
 * @param {Int32Array|Uint32Array} output The resulting array.
 */
const _rank = (ch, f, input, i, j, output) => {
	assert(i >= 0 && j <= input.length);
	assert(i >= 0 && j <= output.length);
	for (; i < j; ++i) {
		assert(f(input, i) >= 0 && f(input, i) < ch.length);
		assert(ch[f(input, i)] >= -1 && ch[f(input, i)] < input.length - 1);
		output[++ch[f(input, i)]] = input[i];
	}
};

export default _rank;
