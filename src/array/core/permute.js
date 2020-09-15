import assert from 'assert';

const permute = (permutation, array, ai, aj, output, oi) => {
	console.debug('permute', permutation, array, ai, aj, output, oi);
	assert(Number.isInteger(ai));
	assert(Number.isInteger(aj));
	assert(Number.isInteger(oi));
	const N = aj - ai; // Only used in assert
	const oj = oi + N; // Only used in assert
	assert(ai >= 0 && aj <= array.length);
	assert(permutation.length >= N);
	assert(oi >= 0 && oj <= output.length);
	for (let i = 0; i < N; ++i) {
		assert(permutation[i] >= 0 && permutation[i] < N);
		output[oi + permutation[i]] = array[ai + i];
	}
};

export default permute;
