'use strict';

const testSuite = require('@genx/test');
const _ = require('lodash');
const fastDeepEqual = require('fast-deep-equal');

testSuite(
    function (suite) {
        suite.testCase(
            'lodash isEqual vs fast-deep-equal',
            async function () {
                const testees = {
                    'lodash.isEqual': (data) => {
                        data.forEach((item) => {
                            _._isEqual(item.value1, item.value2);
                        });
                    },
                    'fast-deep-equal': (data) => {
                        data.forEach((item) => {
                            fastDeepEqual(item.value1, item.value2);
                        });
                    },           
                };

                const data = [
                    {
                        description: 'equal numbers',
                        value1: 1,
                        value2: 1,
                        equal: true,
                    },
                    {
                        description: 'not equal numbers',
                        value1: 1,
                        value2: 2,
                        equal: false,
                    },
                    {
                        description: 'number and array are not equal',
                        value1: 1,
                        value2: [],
                        equal: false,
                    },
                    {
                        description: '0 and null are not equal',
                        value1: 0,
                        value2: null,
                        equal: false,
                    },
                    {
                        description: 'equal strings',
                        value1: 'a',
                        value2: 'a',
                        equal: true,
                    },
                    {
                        description: 'big object',
                        value1: {
                            prop1: 'value1',
                            prop2: 'value2',
                            prop3: 'value3',
                            prop4: {
                                subProp1: 'sub value1',
                                subProp2: {
                                    subSubProp1: 'sub sub value1',
                                    subSubProp2: [
                                        1,
                                        2,
                                        { prop2: 1, prop: 2 },
                                        4,
                                        5,
                                    ],
                                },
                            },
                            prop5: 1000,
                            prop6: new Date(2016, 2, 10),
                        },
                        value2: {
                            prop5: 1000,
                            prop3: 'value3',
                            prop1: 'value1',
                            prop2: 'value2',
                            prop6: new Date('2016/03/10'),
                            prop4: {
                                subProp2: {
                                    subSubProp1: 'sub sub value1',
                                    subSubProp2: [
                                        1,
                                        2,
                                        { prop2: 1, prop: 2 },
                                        4,
                                        5,
                                    ],
                                },
                                subProp1: 'sub value1',
                            },
                        },
                        equal: true,
                    },
                ];

                await suite.benchmark_(testees, data);
            }
        );
    },
    { verbose: true }
);
