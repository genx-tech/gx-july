import { join } from "../string/url";

describe('url', () => {
    it('manage url', () => {
        const base = "/abc";
        const extra = "def/";
        const empty_base = "";
        const empty_extra = "";

        const a = join(base,extra);
        const b = join(empty_base, extra);
        const c = join(base, empty_extra);

        a.should.be.eql(base + "/" + extra);
        b.should.be.eql(extra);
        c.should.be.eql(base);
    });
});