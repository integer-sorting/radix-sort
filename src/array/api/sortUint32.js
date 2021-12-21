import sort from './sort.js';

const sortUint32 = (array) => {
	const k = 4; // TODO make it depend on array.length
	const M = 2 ** 8; // TODO another good option is k = 3 M = 2**11
	// TODO avoid copying back and forth
	const tuples = Array.prototype.map.call(array, (x) => [
		(x & 0xff000000) >>> 24,
		(x & 0xff0000) >>> 16,
		(x & 0xff00) >>> 8,
		(x & 0xff) >>> 0
	]);
	const output = sort(k, M, tuples);
	return Array.prototype.map.call(
		output,
		([a, b, c, d]) => ((a << 24) | (b << 16) | (c << 8) | d) >>> 0
	);
};

export default sortUint32;
