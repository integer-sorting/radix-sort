const loadLengths = (tuples, i, N, buffer) => {
	let maxLength = 0;
	for (; i < N; ++i) {
		const tuple = tuples[i];
		buffer[i] = tuple.length;
		maxLength = Math.max(maxLength, tuple.length);
	}

	return maxLength + 1;
};

export default loadLengths;
