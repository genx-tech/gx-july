import flattenObject from "../object/flattenObject";

describe('flattenObject', () => {

    const obj1 = {
        a: {
            b: {
                c: {
                    d: 10,
                    e: 20
                },
                f: 30
            },
            g: 40
        },
        h: 50
    };

    it('flattenObject 1', () => {
        const obj2 = flattenObject(obj1, '-');

        obj2.should.be.eql({
            "a-b-c-d": 10,
            "a-b-c-e": 20,
            "a-b-f": 30,
            "a-g": 40,
            "h": 50
        });
        
    });

    it('flattenObject 2', () => {
        const obj2 = flattenObject(obj1);

        obj2.should.be.eql({
            "a.b.c.d": 10,
            "a.b.c.e": 20,
            "a.b.f": 30,
            "a.g": 40,
            "h": 50
        });
        
    });

});