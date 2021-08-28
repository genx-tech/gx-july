

describe('Test suite name', function () {
    it('Test case name', async function () {
        const a = 1,
            b = 2;

        const add_ = (l, r) => new Promise((resolve) => {
            setTimeout(() => {
                resolve(l+r);
            }, 100);
        });
        
        const c = await add_(a, b);

        c.should.be.exactly(3);
    });
});
