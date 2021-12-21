import permute from './permute.js';
import sortTuplesByLength from './sortTuplesByLength.js';
import sortFixedLengthTuples from './sortFixedLengthTuples.js';

const sortArbitraryTuples = (M, tuples, output) => {
	const N = tuples.length;
	const [ch, permutation] = sortTuplesByLength(tuples);
	permute(permutation, tuples, 0, N, output, 0); // O(N)
	const groups = ch.length - 1;
	console.debug('sortArbitraryTuples', ch, groups);
	for (let g = 1; g < groups; ++g) {
		const i = ch[g - 1];
		const j = ch[g];
		sortFixedLengthTuples(g, M, output, tuples, i, j); // TODO this modifies the input array
	}

	return tuples;
};

export default sortArbitraryTuples;
