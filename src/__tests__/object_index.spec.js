import { isPlainObject } from "../object/index";
describe('isplainobject', function() {
    it('Check a variable whether is plain object.',function() {
        const a = 1;
        const b = "a";
        const c = [1];
        const d = {"1":1};

        const after_a = isPlainObject(a);
        const after_b = isPlainObject(b);
        const after_c = isPlainObject(c);
        const after_d = isPlainObject(d);

        after_a.should.be.eql(false);
        after_b.should.be.eql(false);
        after_c.should.be.eql(false);
        after_d.should.be.eql(true);
    });
});