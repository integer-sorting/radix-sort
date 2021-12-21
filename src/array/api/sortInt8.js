import sortUint8 from './sortUint8.js';

const sortInt8 = (array) => {
	const shift = -(2 ** 7);
	// TODO avoid copying back and forth
	const data = Array.prototype.map.call(array, (x) => x - shift);
	const output = sortUint8(data);
	return Array.prototype.map.call(output, (x) => x + shift);
};

export default sortInt8;
