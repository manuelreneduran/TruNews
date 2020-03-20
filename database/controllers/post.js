var db = require('../../database');

const createPost = (title, cb) => {
  db.Post.create({
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

const getAllPosts = (title, cb) => {
  db.Post.findAll()
    .then( posts => {
        cb(null, posts);
    })
    .catch( err => {
        cb(err)
    });
}

const getPost = (id, cb) => {
  db.Post.findByPk(id)
    .then( post => {
        cb(null, post);
    })
    .catch( err => {
        cb(err);
    });
}

const deletePost = (id, cb) => {
  db.Post.destroy({
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
  db.Post.destroy({
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