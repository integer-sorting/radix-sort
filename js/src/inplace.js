
let _inplace = function ( split ) {

	/**
	 * In-place implementation of radix sort. NOT STABLE.
	 *
	 * @param {function} msb takes two arguments `(key, shift)` and returns the most
	 * significant bit of `key` shifted to the left by `shift` places.
	 * @param {array} a The input array.
	 * @param {int} ai Input array left offset.
	 * @param {int} aj Input array right offset.
	 * @param {int} si The number of places the keys are shifted before
	 * computing the LSB.
	 * @param {int} sj `sj-si` gives the number of symbols considered by the
	 * sorting algorithm.
	 */

	let inplace = function ( msb , a , ai , aj , si , sj ) {

		if ( si >= sj ) return ;

		let pivot = split( x => msb( x , si ) , a , ai , aj ) ;

		// sort according to remaining symbols

		inplace( msb , a , ai , pivot , si + 1 , sj ) ;
		inplace( msb , a , pivot + 1 , aj , si + 1 , sj ) ;

	} ;

	return inplace ;

} ;

exports._inplace = _inplace ;
