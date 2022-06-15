'use strict';

const testSuite = require('@genx/test');
const { parse } = require('csv-parse');
const { parse: parseSync } = require('csv-parse/sync');

const { simpleCsvParser } = require('..');

async function csvParse_(strArray, delimiter) {
    return new Promise((resolve, reject) => {
        const records = [];
        // Initialize the parser
        const parser = parse({
            delimiter,
        });
        // Use the readable stream api to consume records
        parser.on('readable', function () {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        });

        // Catch any error
        parser.on('error', function (err) {
            reject(err);
        });

        // Test that the parsed records matched the expected records
        parser.on('end', function () {
            resolve(records);
        });

        // Write data to the stream
        strArray.forEach((str) => {
            parser.write(str + '\n');
        });

        // Close the readable stream
        parser.end();
    });
}

async function csvParse2_(str, delimiter) {
    return new Promise((resolve, reject) => {
        const records = [];
        // Initialize the parser
        const parser = parse({
            delimiter,
        });
        // Use the readable stream api to consume records
        parser.on('readable', function () {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        });

        // Catch any error
        parser.on('error', function (err) {
            reject(err);
        });

        // Test that the parsed records matched the expected records
        parser.on('end', function () {
            resolve(records);
        });

        // Write data to the stream
        parser.write(str);

        // Close the readable stream
        parser.end();
    });
}

testSuite(
    function (suite) {
        suite.testCase('csvparser', async function () {
            const testees = {
                'csv-parse': (data) => csvParse_(data),
                'csv-parse/sync': (data) => parseSync(data.join('\n')),
                'simpleCsvParser': (data) => data.map(line => simpleCsvParser(line)),
            };

            const data = [
                'root,x,0,0,root,/root,/bin/bash',
                'someone,x,1022,1022,,/home/someone,/bin/bash'
            ];

            const result = await testees['csv-parse'](data);
            const result2 = await testees['csv-parse/sync'](data);
            const result3 = testees['simpleCsvParser'](data);

            result.should.be.eql(result2);
            result.should.be.eql(result3);

            await suite.benchmark_(testees, data);
        });

        suite.testCase('csvparser multi-lines', async function () {
            const testees = {
                'csv-parse': (data) => csvParse2_(data),
                'csv-parse/sync': (data) => parseSync(data),
                'simpleCsvParser': (data) => data.split('\n').map(line => simpleCsvParser(line)),
            };

            const data = [
                'root,x,0,0,root,/root,/bin/bash',
                'someone,x,1022,1022,,/home/someone,/bin/bash',
                'root,x,0,0,root,/root,/bin/bash',
                'someone,x,1022,1022,,"/home/someone",/bin/bash',
                'root,x,0,0,root,/root,/bin/bash',
                'someone,x,1022,1022,,"/home/,someone",/bin/bash',
                'root,x,0,0,root,/root,/bin/bash',
                'someone,x,1022,1022,,/home/someone,/bin/bash',
            ].join('\n');

            const result = await testees['csv-parse'](data);
            //console.log(result);
            const result2 = await testees['csv-parse/sync'](data);
            const result3 = testees['simpleCsvParser'](data);

            result.should.be.eql(result2);
            result.should.be.eql(result3);

            await suite.benchmark_(testees, data);
        });
    },
    { verbose: true }
);
