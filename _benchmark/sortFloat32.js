// eslint-disable-next-line import/no-unassigned-import
import 'regenerator-runtime/runtime.js';
import {increasing} from '@total-order/primitive';
import {isSorted} from '@comparison-sorting/is-sorted';
import {sorted} from '@iterable-iterator/sorted';
import {copy} from '@array-like/copy';
import {fillfn} from '@array-like/fill';
import {alloc} from '@array-like/alloc';
import totalOrder from 'total-order';

import Benchmark from 'benchmark';

import radixsortPackage from 'radixsort';
import {entropy} from '../test/src/_fixtures.js';

import {sortFloat32} from '../dist/index.cjs';

const isSameSet = (A, B) =>
	totalOrder(sorted(increasing, A), sorted(increasing, B)) === 0;

const radixsort = radixsortPackage.radixsort();

const N = 1 << 16;

const seed = [123, 456];
const {randomFloat32} = entropy(seed);

let treference = new Float32Array(N);
fillfn(treference, 0, N, randomFloat32);
const reference = alloc(N);
copy(treference, 0, N, reference, 0);
treference = null;
Object.freeze(reference);

// Copy to normal array.
const a = alloc(N);
const ta = new Float32Array(N);
copy(reference, 0, N, a, 0);
copy(reference, 0, N, ta, 0);

const output = {};

const setup = function () {};

const onCycle = function (event) {
	console.log(String(event.target));
};

const onComplete = function () {
	const fastest = Benchmark.filter(
		this.filter((x) => x.name.slice(0, 3) !== 'NOP'),
		'fastest',
	).map((x) => x.name);
	if (fastest.length >= 2) console.log(`Fastest are ${fastest.join(', ')}`);
	else console.log(`Fastest is ${fastest[0]}`);
};

new Benchmark.Suite('Radix sort benchmark')
	.add(
		'npm/radixsort',
		function () {
			output[this.name] = radixsort(ta.slice());
		},
		{setup},
	)
	.add(
		'npm/@integer-sorting/radix-sort',
		function () {
			output[this.name] = sortFloat32(ta);
		},
		{setup},
	)
	.on('cycle', onCycle)
	.on('complete', onComplete)
	.run({async: false});

const isCorrect = (title, output) => {
	console.assert(
		isSorted(increasing, output, 0, output.length),
		`The output of ${title} is not sorted.`,
	);
	console.assert(
		isSameSet(reference, output),
		`The output of ${title} does not contain the correct elements.`,
	);
};

console.log('Checking output of', Object.keys(output));
for (const [title, out] of Object.entries(output)) isCorrect(title, out);
