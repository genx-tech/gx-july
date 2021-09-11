# @genx/july

Gen-X High Performance JavaScript Utility Library for both Node.js and browser

## Installation

```sh
npm install @genx/july
```

## Usage

```js
import { text, naming, url } from '@genx/july';

//3.5x faster than String.replaceAll
text.replaceAll('abcdabcd', 'a', 'b');

naming.pascalCase('agency-client'); //AgencyClient

//https://www.some.com?key=value2&key2=value3
url.appendQuery('https://www.some.com?key=value', {
    key: 'value2',
    key2: 'value3',
});
```

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

```js
import { _, eachAsync_, filterAsync_, findAsync_ } from '@genx/july';
// _: lodash
// eachAsync_: like _.each() with async function support
// filterAsync_: like _.filter() with async function support
// findAsync_: like _.find() with async function support
```

## High Benchmark Guidelines

-   Object.hasOwnProperty > Object in (almost the same)

-   Object traversing, lodash.each > for...in > Object.entries.forEach

https://www.measurethat.net/Benchmarks/Show/11499/0/lodash-each-vs-objectentriesforeach-vs-forin

-   Use spread operator instead of Array.concat and Array.push

https://www.measurethat.net/Benchmarks/Show/11501/0/array-concat-vs-spread-operator-vs-push-many
https://www.measurethat.net/Benchmarks/Show/11500/1/array-concat-vs-spread-operator-vs-push-1

-   For readonly traversing, use forEach and map instead of "for" and "for .. of"

https://www.measurethat.net/Benchmarks/Show/11264/0/for-vs-foreach-vs-some-vs-every-vs-forof-vs-map

-   For mutation traversing, use every instead of others, use native every (2.5x faster) instead of lodash every

https://www.measurethat.net/Benchmarks/Show/11265/0/for-vs-foreach-vs-some-vs-every-vs-forof-vs-map-with-mu

-   Object lookup 2.5x faster than Map

https://www.measurethat.net/Benchmarks/Show/11262/0/map-vs-objects

-- fast-deep-equal 4x faster than lodash.isEqual (under node), lodash.isEqual (~2x) > fast-deep-equal (in browser)

https://www.npmjs.com/package/fast-deep-equal
https://www.measurethat.net/Benchmarks/Show/11503/0/lodashisequal-vs-fast-deep-equallodash

## License

MIT
