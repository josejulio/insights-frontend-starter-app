
/* global require, module, __dirname */
const { resolve } = require('path');
const config = require('@redhat-cloud-services/frontend-components-config');
const { config: webpackConfig, plugins } = config({
    rootFolder: resolve(__dirname, '../'),
    debug: true,
    https: true
});
/* eslint-disable no-console */
console.log('----------------------');
console.log('webpackConfig', webpackConfig);
console.log('----------------------');


// Add tsx rule
const rules = [ ...webpackConfig.module.rules ];
rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: '/node_modules/'
});

module.exports = {
    ...webpackConfig,
    plugins,
    module: {
        rules
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
    }
};
