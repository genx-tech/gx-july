import get from "../object/get";
import set from "../object/set";

describe('get_set', () => {
    it('get', () => {
        const obj = {
            key1: {
                key2: {
                    key3: 10
                },
                key4: 20
            },
            key5: {
                key2: 20
            }
        };

        should.not.exist(get(null));
        get(null, null, 'default').should.be.exactly('default');
        get(obj, 'key5.key1', 'default').should.be.exactly('default');

        get(obj, 'key5').should.be.eql({
            key2: 20
        });
        get(obj, 'key5.key2').should.be.exactly(20);
        get(obj, 'key1.key2.key3').should.be.exactly(10);
        get(obj, 'key1.key4').should.be.exactly(20);
        
    });

    it('set', () => {
        const obj = {
            key1: {
                key2: {
                    key3: 10
                },
                key4: 20
            },
            key5: {
                key2: 20
            }
        };

        should.not.exist(set(null));
        set(obj).should.be.eql(obj);

        set(obj, 'key1.key3', 100).should.be.eql({
            key1: {
                key2: {
                    key3: 10
                },
                key4: 20,
                key3: 100
            },
            key5: {
                key2: 20
            }
        });

        
        set(obj, 'key1.key2', 100).should.be.eql({
            key1: {
                key2: 100,
                key4: 20,
                key3: 100
            },
            key5: {
                key2: 20
            }
        });

        
        set(obj, 'key1.key2.key3', 0).should.be.eql({
            key1: {
                key2: {
                    key3: 0
                },
                key4: 20,
                key3: 100
            },
            key5: {
                key2: 20
            }
        });

        set(obj, 'key1', null).should.be.eql({
            key1: null,
            key5: {
                key2: 20
            }
        });
        
    });
});