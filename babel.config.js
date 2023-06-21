module.exports = function(api) {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                modules: 'auto',
                targets: {
                    browsers: ['defaults']
                },
                useBuiltIns: 'entry'
            }
        ],
        ["@babel/preset-react", {"runtime": "automatic"}],
        '@babel/preset-flow'
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
        'macros'
    ];

    return {
        presets,
        plugins
    };
};
