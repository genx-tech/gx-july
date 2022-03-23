import eachAsync_ from "../collection/eachAsync_";
import filterAsync_ from "../collection/filterAsync_";
import findAsync_ from "../collection/findAsync_";
import findKeyAsync_ from "../collection/findKeyAsync_";
import findKey from "../collection/findKey";
import sleep_ from '../lang/sleep_';
import { toPath, makePath } from '../object';

describe('collection', () => {
   const array = [ 10, 20, 30, 40 ];
   const obj = {
       k1: 100,
       k2: 200,
       k3: 300,
       k4: 400,
   };

   it('eachAsync_:array', async () => {
    const r = await eachAsync_(array, async (a) => {
        await sleep_(50);
        return a*2;
    });

    r.should.be.eql([20, 40, 60, 80]);
});

it('eachAsync_:object', async () => {
    const r = await eachAsync_(obj, async (v,k) => {
        await sleep_(50);
        return v+100;
    });

    r.should.be.eql({
        k1: 200,
       k2: 300,
       k3: 400,
       k4: 500,
    });
});

    it('filterAsync_:array', async () => {
        const r = await filterAsync_(array, async (a) => {
            await sleep_(50);
            return a > 20;
        });

        r.should.be.eql([30, 40]);
    });

    it('filterAsync_:object', async () => {
        const r = await filterAsync_(obj, async (v,k) => {
            await sleep_(50);
            return k !== 'k3' && v < 400;
        });

        r.should.be.eql({
            k1: 100,
            k2: 200
        });
    });

    it('findAsync_:array', async () => {
        const r = await findAsync_(array, async (a) => {
            await sleep_(50);
            return a > 20;
        });

        r.should.be.exactly(30);
    });

    it('findKeyAsync_:array', async () => {
        const r = await findKeyAsync_(array, async (a) => {
            await sleep_(50);
            return a > 20;
        });

        r.should.be.exactly(2);
    });


    it('findKey:array', async () => {
        const r = findKey(array, (a) => a > 20);

        r.should.be.exactly(2);
    });

    it('findAsync_:object', async () => {
        const r = await findAsync_(obj, async (v,k) => {
            await sleep_(50);
            return k !== 'k3' && v > 200;
        });

        r.should.be.exactly(400);
    });

    it('findKeyAsync_:object', async () => {
        const r = await findKeyAsync_(obj, async (v,k) => {
            await sleep_(50);
            return k !== 'k3' && v > 200;
        });

        r.should.be.exactly('k4');
    });

    it('findKey:object', async () => {
        const r = findKey(obj, (v,k) =>  k !== 'k3' && v > 200);

        r.should.be.exactly('k4');
    });

    it('to path', () => {
        let a = toPath('a.b.10.d');
        a.should.be.eql(['a', 'b', '10', 'd' ]);

        a = toPath(null);
        a.should.be.eql([]);

        a = toPath([ 'a', 'b', 'c' ]);
        a.should.be.eql([ 'a', 'b', 'c' ]);
    });

    it('make path', () => {
        let a = makePath(20, 'a.b.10.d');
        a.should.be.eql([20, 'a', 'b', '10', 'd' ]);

        a = makePath(null, ['a', 'b', 'c']);
        a.should.be.eql(['a', 'b', 'c']);

        a = makePath([ 'a', 'b', 'c' ], ['d']);
        a.should.be.eql([ 'a', 'b', 'c', 'd' ]);
    });
});