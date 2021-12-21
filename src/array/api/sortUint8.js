import sort from './sort.js';

const sortUint8 = (array) => {
	const k = 1; // TODO make it depend on array.length ?
	const M = 2 ** 8;
	// TODO avoid copying back and forth
	const tuples = Array.prototype.map.call(array, (x) => [(x & 0xff) >>> 0]);
	const output = sort(k, M, tuples);
	return Array.prototype.map.call(output, ([d]) => d >>> 0);
};

export default sortUint8;
