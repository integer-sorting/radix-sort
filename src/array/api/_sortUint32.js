import _lsb_stable from '../core/_lsb_stable.js';

const k = 4; // TODO make it depend on array.length
const M = 2 ** 8; // TODO another good option is k = 3 M = 2**11
const f0 = (array, i) => (array[i] >> 0) & 0xff;
const f1 = (array, i) => (array[i] >> 8) & 0xff;
const f2 = (array, i) => (array[i] >> 16) & 0xff;
const f3 = (array, i) => (array[i] >> 24) & 0xff;
const tuples = [f0, f1, f2, f3];

/**
 * Sorts an array of uint32 in-place.
 *
 * @param {Uint32Array} array
 */
const _sortUint32 = (array) => {
	const N = array.length;
	const input = new Int32Array(array.buffer, array.byteOffset, N);
	const aux = new Int32Array(N);
	const output = _lsb_stable(k, M, N, tuples, input, aux);
	return new Uint32Array(output.buffer, output.byteOffset, N);
};

export default _sortUint32;
