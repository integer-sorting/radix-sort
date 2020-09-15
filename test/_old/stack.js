/**
 * In-place, stable implementation of radix-sort for a stack.
 *
 * @param {function} lsb takes two arguments `(key, shift)` and returns the least
 * significant bit of `key` shifted to the right by `shift` places.
 * @param {array} main The input stack..
 * @param {int} hi An empty stack.
 * @param {int} lo An empty stack.
 * @param {int} si The number of places the keys are shifted before
 * computing the LSB.
 * @param {int} sj `sj-si` gives the number of symbols considered by the
 * sorting algorithm.
 *
 */

export function stack(lsb, main, hi, lo, si, sj) {
	if (si >= sj) {
		return;
	}

	while (!main.empty()) {
		const key = main.pop();

		if (lsb(key, si) === 0) {
			lo.push(key);
		} else {
			hi.push(key);
		}
	}

	while (!hi.empty()) {
		main.push(hi.pop());
	}

	while (!lo.empty()) {
		main.push(lo.pop());
	}

	stack(lsb, main, hi, lo, si + 1, sj);
}
