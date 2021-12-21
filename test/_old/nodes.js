/**
 * In-place, stable implementation of radix-sort for singly linked lists.
 *
 * @param {function} lsb takes two arguments `(key, shift)` and returns the least
 * significant bit of `key` shifted to the right by `shift` places.
 * @param {array} head The first node of the input list.
 * @param {int} hi A next pointer ({ next : null }).
 * @param {int} lo A next pointer ({ next : null }).
 * @param {int} si The number of places the keys are shifted before
 * computing the LSB.
 * @param {int} sj `sj-si` gives the number of symbols considered by the
 * sorting algorithm.
 *
 */

export function nodes(lsb, head, hi, lo, si, sj) {
	if (si >= sj) {
		return head;
	}

	let _lo = lo;
	let _hi = hi;

	while (head !== null) {
		if (lsb(head.value, si) === 0) {
			_lo.next = head;
			_lo = head;
		} else {
			_hi.next = head;
			_hi = head;
		}

		head = head.next;
	}

	if (lo.next === null) {
		head = hi.next;
		hi.next = null;
	} else {
		_lo.next = hi.next;
		head = lo.next;
		lo.next = null;
		hi.next = null;
	}

	return nodes(lsb, head, hi, lo, si + 1, sj);
}
