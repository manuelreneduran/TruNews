const { createPost } = require('./controllers/post.js')
const loremIpsum = require("lorem-ipsum").loremIpsum;

const seedDb = (num) => {
  const title = loremIpsum();
  for (var i = 0; i < 100; i++) {
    createPost(title)
  }
}

module.exports = { seedDb };