import assert from 'assert';

const permuteInPlace = (permutation, array) => {
	assert(permutation.length === array.length);
	const N = permutation.length;
	for (let i = 0; i < N; ++i) {
		// Exhaust all cycles
		let j = permutation[i];
		while (i !== j) {
			let temporary = array[j];
			array[j] = array[i];
			array[i] = temporary;
			temporary = j;
			j = permutation[j];
			permutation[j] = temporary;
		}
	}
};

export default permuteInPlace;
