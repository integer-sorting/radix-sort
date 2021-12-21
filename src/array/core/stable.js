import assert from 'assert';
import {_identity} from '@combinatorics/permutation';
import alloc from './alloc.js';
import zeros from './zeros.js';
import reset from './reset.js';
import cumulativeHistogram from './cumulativeHistogram.js';
import rank from './rank.js';
import permute from './permute.js';
import compose from './compose.js';

/**
 * O(kM + kN) time where k is the number of arrays, M is the radix, and
 * N is the length of each array. The product kN corresponds to the input size.
 */
const stable = (M, current, rest) => {
	console.debug('stable', M, current, rest);
	assert(current !== undefined);
	const N = current.length;
	const permutation1 = alloc(N);
	_identity(permutation1, N); // TODO Not needed if rest is empty (k=1)
	const ch = zeros(M + 1); // O(M)
	// eslint-disable-next-line no-constant-condition
	while (true) {
		// Repeated k times.
		cumulativeHistogram(current, 0, N, ch, 1); // O(N)
		console.debug('stable step', current, ch);
		assert(ch[0] === 0);
		const permutation2 = alloc(N);
		rank(ch, current, 0, current.length, permutation2); // O(N)
		compose(permutation2, permutation1);
		const {value: next, done} = rest.next();
		if (done) {
			return permutation1;
		}

		assert(next.length === N);
		permute(permutation1, next, 0, N, current, 0);
		reset(ch); // O(M)
	}
};

export default stable;
