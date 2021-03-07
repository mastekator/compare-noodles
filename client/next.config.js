const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    env: {
        SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT || 'http://localhost:5000/graphql'
    }
}
