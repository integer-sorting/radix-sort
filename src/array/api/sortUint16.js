import sort from './sort.js';

const sortUint16 = (array) => {
	const k = 2; // TODO make it depend on array.length
	const M = 2 ** 8;
	// TODO avoid copying back and forth
	const tuples = Array.prototype.map.call(array, (x) => [
		(x & 0xff_00) >>> 8,
		(x & 0xff) >>> 0,
	]);
	const output = sort(k, M, tuples);
	return Array.prototype.map.call(output, ([c, d]) => ((c << 8) | d) >>> 0);
};

export default sortUint16;
