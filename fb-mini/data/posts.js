const casual = require('casual')
const userData = require('./users')

casual.define('posts', ({posterId}) => ({
    id: casual.uuid,
    posterId,
    message: casual.string,
    created_at: casual.moment,
    updated_at:casual.moment,
}))

const postData = []

for (let i = 0; i < 20; ++i){
    const posterId = casual.random_element(userData).id
    postData.push(casual.posts({posterId}))
}

module.exports = postData