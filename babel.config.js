module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/env',
                    {
                        useBuiltIns: 'usage',
                        corejs: { version: '3.8', proposals: true },
                    },
                ],
            ],
        },
    },
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                corejs: { version: '3.8', proposals: true },
                targets: {
                    "node": "current"
                }
            },
        ],
    ],
    ignore: ['**/__test__/**'],
};
