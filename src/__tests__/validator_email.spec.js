import isEmail from '../validators/isEmail';

const cases = [
    [ 'abc@email.com', true ],
    [ '', false ],
    [ null, false ],
    [ 20, false ],
    [ '@abc.com', false ],
    [ 'abc.com', false ],
    [ 'user@abc', false ],
];

const cases2 = [
    [ 'abc@email.com', true ],
    [ 'abc@email.1233231', false ],
];

describe('validators:email', () => {
    it('isEmail', () => {
        cases.forEach(c => {
            const r = isEmail(c[0]);
            if (c[1]) {
                r.should.be.ok();
            } else {
                r.should.not.be.ok();
            }
        })
    });    

    it('isEmail-precise', () => {
        cases2.forEach(c => {
            const r = isEmail(c[0], true);
            if (c[1]) {
                r.should.be.ok();
            } else {
                r.should.not.be.ok();
            }
        })
    });    
});
