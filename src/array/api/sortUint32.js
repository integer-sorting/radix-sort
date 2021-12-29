import _sortUint32 from './_sortUint32.js';

/**
 * Sorts an array of uint32 non-destructively.
 *
 * @param {number[]|Uint32Array} array
 * @return {Uint32Array}
 */
const sortUint32 = (array) => {
	const copy = Uint32Array.from(array, (x) => x >>> 0);
	return _sortUint32(copy);
};

export default sortUint32;
