const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  created_at: casual.moment,
  updated_at:casual.moment,
  password: casual.password,
  username: casual.username,
  firstname: casual.first_name,
  lastname: casual.last_name,
  bio: casual.short_description,
  profile_picture_url: casual.url,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
