var { blah } = require('../../database/index.js');

const createPost = (title, cb) => {
  blah.create({
    title,
    rank: 0,
    displayRank: 0
    })
    .then( post => {
        cb(null, post);
    })
    .catch( err => {
        cb(err);
  })
}

const getAllPosts = (cb) => {
  console.log("function " + db)
  Posts.findAll()
    .then( posts => {
        cb(null, posts);
    })
    .catch( err => {
        cb(err)
    });
}

const getPost = (id, cb) => {
  Posts.findByPk(id)
    .then( post => {
        cb(null, post);
    })
    .catch( err => {
        cb(err);
    });
}

const deletePost = (id, cb) => {
  Posts.destroy({
    where: {
        id
    }
    })
    .then( () => {
        cb(null)
    })
    .catch( err => {
        cb(err)
    });
}

const deleteAllPosts = (cb) => {
  Posts.destroy({
    truncate: true
    })
    .then( () => {
        cb(null)
    })
    .catch( err => {
        cb(err);
})
}

module.exports = { createPost, getAllPosts, getPost, deletePost, deleteAllPosts }