import {identity} from '../function/callback'
/**
 * @param  {identity'} 'unit
 * @param  {} function(
 * @param  {} {it('identity.'
 * @param  {} asyncfunction(
 * @param  {} {constafter_identity1=identity(1
 * @param  {} ;constafter_identity2=identity("1"
 * @param  {1}} ;constafter_identity3=identity({"a"
 */
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