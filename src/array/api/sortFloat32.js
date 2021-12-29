import _sortFloat32 from './_sortFloat32.js';

/**
 * Sorts an array of uint32 out-of-place.
 *
 * @param {number[]|Float32Array} array
 * @return {Float32Array}
 */
const sortFloat32 = (array) => {
	// TODO avoid copying when passed a Float32Array
	// but be careful to take into account byteOffset, byteLength, and length
	const copy = Float32Array.from(array);
	return _sortFloat32(copy);
};

export default sortFloat32;
