const targetLTSVersion = '12.0';

module.exports = function (api) {
    let isProduction = api.env(['production']);

    return {
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
                    targets: {
                        node: targetLTSVersion,
                    },
                    exclude: ['@babel/plugin-transform-regenerator'],
                },
            ],
        ],
        plugins: [
            [
                'contract',
                {
                    strip: isProduction,
                    envStrip: true,
                },
            ],
            '@babel/plugin-proposal-class-properties',
        ],
    };
};
