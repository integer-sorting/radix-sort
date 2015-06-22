
let _stable = function ( split ) {

	/**
	 * In-place implementation of radix sort. NOT STABLE.
	 *
	 * @param {function} lsb takes two arguments `(key, shift)` and returns the least
	 * significant bit of `key` shifted to the right by `shift` places.
	 * @param {array} a The input array.
	 * @param {int} ai Input array left offset.
	 * @param {int} aj Input array right offset.
	 * @param {array} b The counting array.
	 * @param {int} bi Counting array left offset.
	 * @param {int} bj Counting array right offset.
	 * @param {array} c The output array.
	 * @param {int} ci Output array left offset.
	 * @param {int} cj Output array right offset.
	 * @param {int} si The number of places the keys are shifted before
	 * computing the LSB.
	 * @param {int} sj `sj-si` gives the number of symbols considered by the
	 * sorting algorithm.
	 */

	let stable = function ( lsb , a , ai , aj , b , bi , bj , c , ci , cj , si , sj ) {

		if ( si >= sj ) return ;

		split( x => lsb( x , si ) , a , ai , aj , b , bi , bj , c , ci ) ;

		// reset the counting buffer

		for ( let bk = bi ; bk < bj ; ++bk ) b[bk] = 0 ;

		// sort according to remaining symbols

		stable( lsb , c , ci , cj , b , bi , bj , a , ai , aj , si + 1 , sj ) ;

	} ;

	return stable ;

} ;

exports._stable = _stable ;
