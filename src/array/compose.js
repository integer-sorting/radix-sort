import assert from 'assert';

const compose = (sigma, tau) => {
	console.debug('compose', sigma, tau);
	const N = sigma.length;
	assert(sigma.length === tau.length);
	for (let i = 0; i < N; ++i) {
		tau[i] = sigma[tau[i]];
	}
};

export default compose;
