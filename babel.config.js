//babel config for node.js app
const targetLTSVersion = '14';

const isBabelRegister = (caller) =>
    !!(caller && caller.name === '@babel/register');

module.exports = function (api) {
    const isProduction = api.env(['production']);
    const isRegister = api.caller(isBabelRegister);

    const targets = {
        targets: {
            node: targetLTSVersion,
        },
    };

    const plugins = [];

    if (isProduction) {
        plugins.push('source-map-support');
    }

    plugins.push(
        ...[
            [
                '@babel/plugin-proposal-decorators',
                {
                    decoratorsBeforeExport: true,
                },
            ],
            '@babel/plugin-proposal-class-properties',
        ]
    );

    const opts = {
        ...(isRegister ? {} : targets),
        sourceMaps: isProduction ? true : 'inline',
        presets: [
            [
                '@babel/env',
                {
                    ...targets,
                },
            ],
        ],
        comments: false,
        ignore: ['node_modules'],
        plugins,
    };

    return opts;
};
