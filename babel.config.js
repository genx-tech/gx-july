//babel config for node.js app
const targetLTSVersion = '16';

const isBabelRegister = (caller) => !!(caller && caller.name === '@babel/register');

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

    plugins.push(...['@babel/plugin-proposal-class-properties', 'add-module-exports']);

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
