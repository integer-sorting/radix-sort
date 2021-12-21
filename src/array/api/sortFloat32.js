import sortUint32 from './sortUint32.js';

// http://www.codercorner.com/RadixSortRevisited.htm
// http://stereopsis.com/radix.html
const floatFlip = (f) => {
	const mask = -(f >>> 31) | 0x80_00_00_00;
	return f ^ mask;
};

const iFloatFlip = (f) => {
	const mask = ((f >>> 31) - 1) | 0x80_00_00_00;
	return f ^ mask;
};

const sortFloat32 = (array) => {
	// TODO avoid copying when passed a Float32Array
	// but be careful to take into account byteOffset, byteLength, and length
	const buffer = Float32Array.from(array).buffer;
	const view = new Uint32Array(buffer);
	const N = array.length;
	for (let i = 0; i < N; ++i) view[i] = floatFlip(view[i]);
	const output = Uint32Array.from(sortUint32(view));
	for (let i = 0; i < N; ++i) output[i] = iFloatFlip(output[i]);
	return new Float32Array(output.buffer);
};

export default sortFloat32;
