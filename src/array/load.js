import assert from 'assert';

const load = (s, tuples, i, j, buffer) => {
	assert(buffer.length >= j - i);
	for (let pt = 0; i < j; ++i) {
		const tuple = tuples[i];
		assert(s >= 0 && s < tuple.length);
		// Assert(0 <= tuple[s] && tuple[s] < M);
		buffer[pt++] = tuple[s];
	}
};

export default load;
