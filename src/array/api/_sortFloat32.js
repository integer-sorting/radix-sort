import _sortUint32 from './_sortUint32.js';

// http://www.codercorner.com/RadixSortRevisited.htm
// http://stereopsis.com/radix.html
const floatFlip = (f) => {
	const mask = (f >> 31) | (0x80_00_00_00 | 0);
	return f ^ mask;
};

const iFloatFlip = (f) => {
	const mask = ~(f >> 31) | (0x80_00_00_00 | 0);
	return f ^ mask;
};

/**
 * Sorts a Float32Array in-place.
 *
 * @param {Float32Array} array
 */
const _sortFloat32 = (array) => {
	const N = array.length;
	const view = new Uint32Array(array.buffer, array.byteOffset, N);
	for (let i = 0; i < N; ++i) view[i] = floatFlip(view[i]);
	const out = _sortUint32(view);
	for (let i = 0; i < N; ++i) out[i] = iFloatFlip(out[i]);
	return new Float32Array(out.buffer, out.byteOffset, out.length);
};

export default _sortFloat32;
