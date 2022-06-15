"use strict";

const testSuite = require("@genx/test");
const _ = require('lodash');

testSuite(
    function (suite) {      
        suite.testCase("lodash each vs object.entries.forEach", async function () {
            const testees = {
                'lodash.each': (data) => _.each(data, (v, k) => v++),
                'lodash.forOwn': (data) => _.forOwn(data, (v, k) => v++),
                'object.entries.forEach': (data) => Object.entries(data).forEach(([v, k]) => v++),
            };

            const data = _.fill(Array(1000), 1).reduce((r, v, i) => (r[`k${i}`] = v, r), {});

            await suite.benchmark_(testees, data);
        });
    },
    { verbose: true }
);
