module.exports = function (api) {
    let isProduction = api.env(['production']);

    return {        
        presets: [
            [
                '@babel/env',
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
