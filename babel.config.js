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
    presets: ['@babel/env'],
    ignore: ['**/__test__/**'],
};
