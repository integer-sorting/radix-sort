import assert from 'assert';

const permuteInPlace = (permutation, array) => {
	assert(permutation.length === array.length);
	const N = permutation.length;
	for (let i = 0; i < N; ++i) {
		// Exhaust all cycles
		let j = permutation[i];
		while (j !== i) {
			const aj = array[j];
			array[j] = array[i];
			array[i] = aj;
			const l = j;
			j = permutation[j];
			permutation[l] = l;
		}
	}
};

export default permuteInPlace;
