import _lsb_stable from '../core/_lsb_stable.js';

const k = 4; // TODO make it depend on array.length
const M = 2 ** 8; // TODO another good option is k = 3 M = 2**11
const f0 = (array, i) => ((array[i] ^ 0x80_00_00_00) >> 0) & 0xff;
const f1 = (array, i) => ((array[i] ^ 0x80_00_00_00) >> 8) & 0xff;
const f2 = (array, i) => ((array[i] ^ 0x80_00_00_00) >> 16) & 0xff;
const f3 = (array, i) => ((array[i] ^ 0x80_00_00_00) >> 24) & 0xff;
const tuples = [f0, f1, f2, f3];

/**
 * Sorts an Int32Array destructively.
 *
 * @param {Int32Array} array
 */
const _sortInt32 = (array) => {
	const N = array.length;
	const aux = new Int32Array(N);
	return _lsb_stable(k, M, N, tuples, array, aux);
};

export default _sortInt32;
