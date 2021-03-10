const path = require('path')
const {i18n} = require('./next-i18next.config')

module.exports = {
    i18n,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    env: {
        SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT || 'http://localhost:5000/graphql'
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.graphql$/,
            exclude: /node_modules/,
            use: [options.defaultLoaders.babel, {loader: 'graphql-let/loader'}]
        })

        config.module.rules.push({
            test: /\.graphqls$/,
            exclude: /node_modules/,
            use: ['graphql-let/schema/loader']
        })

        config.module.rules.push({
            test: /\.ya?ml$/,
            type: 'json',
            use: 'yaml-loader'
        })

        return config
    }
}
