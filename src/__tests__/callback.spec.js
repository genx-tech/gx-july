import {identity} from '../function/callback'

describe('unit:identity', function() {
    it('identity.',async function () {


        const after_identity1 = identity(1);
        const after_identity2 = identity("1");
        const after_identity3 = identity({"a":1});
        const after_identity4 = identity([1]);
        const after_identity5 = identity('1');

        after_identity1.should.be.eql(1);
        after_identity2.should.be.eql("1");
        after_identity3.should.be.eql({"a":1});
        after_identity4.should.be.eql([1]);
        after_identity5.should.be.eql('1');
    });
});