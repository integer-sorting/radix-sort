import {_fisheryates, _shuffle, _randint, _randrange} from '@randomized/random';
import {
	splitmix64,
	nextInt32,
	nextUint32,
	nextFloat64,
} from '@entropy-source/pseudo-random';

export const entropy = (seed) => {
	const prng = splitmix64(seed);
	const random = () => nextFloat64(prng);
	const randint = _randint(random);
	const randrange = _randrange(randint);
	const sample = _fisheryates(randint);
	const shuffle = _shuffle(sample);

	const randomInt32 = () => nextInt32(prng);
	const randomUint32 = () => nextUint32(prng);

	const randomFloat32 = () => {
		const sign = random() < 0.5 ? 1 : -1;
		const base = (random() - 0.5) * 100;
		const exponent = (random() - 0.5) * 100;
		return sign * Math.exp(base, exponent);
	};

	return {
		prng,
		random,
		randint,
		randrange,
		sample,
		shuffle,
		randomInt32,
		randomUint32,
		randomFloat32,
	};
};
