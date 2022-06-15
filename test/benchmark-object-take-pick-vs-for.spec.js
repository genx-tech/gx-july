"use strict";

const testSuite = require("@genx/test");
const _ = require('lodash');

function take(object, n) {
    n == null && (n = 1);

    let i = 0;
    return _.pickBy(object, () => i++<n);    
}

const takeByFor = (object, n) => {
    n == null && (n=1);

    let result = {}, i = 0;

    for (let k in object) {
        if (i++ < n) {
            result[k] = object[k];
        } else {
            break;
        }
    }

    return result;
}

testSuite(
    function (suite) {      
        suite.testCase("take by _.pick vs take by for...in", async function () {
            const testees = {
                'take': (data) => take(data, 8),
                'takeByFor': (data) => takeByFor(data, 8)
            };

            const data = {
                key1: 'value',
                key2: 'value',
                key3: 'value',
                key4: 'value',
                key5: 'value',
                key6: 'value',
                key7: 'value',
                key8: 'value',
                key9: 'value',
                key10: 'value',
                key11: 'value',
                key12: 'value',
                key13: 'value',
                key14: 'value',
                key15: 'value',
            };

            console.log(take(data, 5));

            take(data, 5).should.be.eql(takeByFor(data, 5));

            await suite.benchmark_(testees, data);
        });
    },
    { verbose: true }
);
