import sortUint16 from './sortUint16.js';

const sortInt16 = (array) => {
	const shift = -(2 ** 15);
	// TODO avoid copying back and forth
	const data = Array.prototype.map.call(array, (x) => x - shift);
	const output = sortUint16(data);
	return Array.prototype.map.call(output, (x) => x + shift);
};

export default sortInt16;
