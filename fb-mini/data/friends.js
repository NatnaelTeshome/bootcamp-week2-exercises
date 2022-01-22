const casual = require('casual')
const userData = require('./users')

casual.define('friends', ({requestorId, requestedId}) => ({
    id: casual.uuid,
    requestorId,
    requestedId,
    status: casual.random_element(['accepted', 'rejection', 'sent'])
}))

const friendData = []

for (let i = 0; i < 20; ++i){
    let requestorId;
    let requestedId;
    do {
        requestorId = casual.random_element(userData).id
        requestedId = casual.random_element(userData).id
    } while(requestorId === requestedId)
    
    friendData.push(casual.friends({requestorId, requestedId}))
}

console.log(friendData)
module.exports = friendData