import sortUint32 from './sortUint32.js';

const sortInt32 = (array) => {
	const shift = -(2 ** 31);
	// TODO avoid copying back and forth
	const data = Array.prototype.map.call(array, (x) => x - shift);
	const output = sortUint32(data);
	return Array.prototype.map.call(output, (x) => x + shift);
};

export default sortInt32;
