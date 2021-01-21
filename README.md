# @genx/july

Gen-X High Performance JavaScript Utility Library for both Node.js and browser

## Installation

```sh
npm install @genx/july
```

## Usage

```js
import { remap } from '@genx/july';

// ...
const source = {
    key1: {
        key1_1: {
            key1_1_1: 20,
            key1_1_2: 'test2',
            key1_1_3: 30,
        },
    },
    key2: true,
    key3: 30,
    key4: 'test',
    key5: ['a', 'b'],
};

const remapped = remap(source, {
    key1: [
        'tkey1',
        {
            key1_1: [
                'key1_1',
                {
                    key1_1_1: 'tkey1_1_1',
                    key1_1_3: 'tkey1_1_3',
                },
            ],
        },
    ],
    key3: 'tkey3',
    key5: 'tkey5',
});

mapped.should.be.eql({
    tkey1: {
        key1_1: {
            tkey1_1_1: 20,
            tkey1_1_3: 30,
        },
    },
    tkey3: 30,
    tkey5: ['a', 'b'],
});
```

## High Benchmark Guidelines

-   Use spread operator instead of Array.concat and Array.push

https://www.measurethat.net/Benchmarks/Show/11247/0/array-concat-vs-spread-operatorfgfgf

-   For readonly traversing, use forEach and map instead of "for" and "for .. of"

https://www.measurethat.net/Benchmarks/Show/11264/0/for-vs-foreach-vs-some-vs-every-vs-forof-vs-map

-   For mutation traversing, use every instead of others

https://www.measurethat.net/Benchmarks/Show/11265/0/for-vs-foreach-vs-some-vs-every-vs-forof-vs-map-with-mu

-   Object lookup 2.5x faster than Map

https://www.measurethat.net/Benchmarks/Show/11262/0/map-vs-objects

-   Use fast-deep-equal for deep compare, 10x faster than lodash

https://www.npmjs.com/package/fast-deep-equal

## License

MIT
