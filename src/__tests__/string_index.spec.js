import { ensureEndsWith, ensureStartsWith, dropIfEndsWith, replaceAll} from "../string/index";


describe.only('string index', () => {
    it('Replace all occurance of "search" with "replacement" in a string.', () => {
        const a = "abc";
        const b = "a";
        const c = "aaa";
        const d = "";

        const ensure_ends_with_a = ensureEndsWith(a,"a");
        const ensure_ends_with_b = ensureEndsWith(b,"a");
        const ensure_ends_with_c = ensureEndsWith(c,"a");
        const ensure_ends_with_d = ensureEndsWith(d,"");
        
        ensure_ends_with_a.should.be.eql("abca");
        ensure_ends_with_b.should.be.eql("a");
        ensure_ends_with_c.should.be.eql("aaa");
        ensure_ends_with_d.should.be.eql("");

        const ensure_starts_with_a = ensureStartsWith(a,"c");
        const ensure_starts_with_b = ensureStartsWith(b,"a");
        const ensure_starts_with_c = ensureStartsWith(c,"a");
        const ensure_starts_with_d = ensureStartsWith(d,"");

        ensure_starts_with_a.should.be.eql("cabc");
        ensure_starts_with_b.should.be.eql("a");
        ensure_starts_with_c.should.be.eql("aaa");
        ensure_starts_with_d.should.be.eql("");

        const drop_if_ends_with_a = dropIfEndsWith(a,"c");
        const drop_if_ends_with_b = dropIfEndsWith(b,"a");
        const drop_if_ends_with_c = dropIfEndsWith(c,"a");
        try {
            const drop_if_ends_with_d = dropIfEndsWith(d,"");
        } catch (error) {
            done(error);
        }
        
        drop_if_ends_with_a.should.be.eql("c");
        drop_if_ends_with_b.should.be.eql("a");
        drop_if_ends_with_c.should.be.eql("a");
        

        const replaceAll_a = replaceAll(a,"a","b");
        const replaceAll_b = replaceAll(b,"a","b");
        const replaceAll_c = replaceAll(c,"a","b");
        const replaceAll_d = replaceAll(d,"a","b");
        

        replaceAll_a.should.be.eql("bbc");
        replaceAll_b.should.be.eql("b");
        replaceAll_c.should.be.eql("bbb");
        replaceAll_d.should.be.eql("");
    });
});