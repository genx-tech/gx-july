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
        presets: [['@babel/env']],
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
