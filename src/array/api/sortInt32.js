import _sortInt32 from './_sortInt32.js';

/**
 * Sorts an array of int32 non-destructively.
 *
 * @param {number[]|Int32Array} array
 * @return {Int32Array}
 */
const sortInt32 = (array) => {
	const copy = Int32Array.from(array, (x) => x | 0);
	return _sortInt32(copy);
};

export default sortInt32;
