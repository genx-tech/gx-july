"use strict";

const testSuite = require("@genx/test");
const { zipAndFlat } = require("..");
const _ = require('lodash');

testSuite(
    function (suite) {      
        suite.testCase("zip and flat", async function () {
            const testees = {
                'zipAndFlat': (data) => zipAndFlat(data.a1, data.a2),
                'lodash.flatten.zip': (data) => _.flatten(_.zip(data.a1, data.a2))
            };

            const data = {
                a1: [ 'a', 'b', 'c', 'd', 'e', 'f'],
                a2: [ 1, 2, 3, 4, 5, 6 ]
            }

            await suite.benchmark_(testees, data);
        });
    },
    { verbose: true }
);
