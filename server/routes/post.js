var express = require('express');
var router = express.Router();
var db = require('../../database');
var postContr = require('../../database/controllers/post.js');

router.get("/all", (req, res) => {
    postContr.getAllPosts((err, data) => {
        if (err) {
            res.status(500).send(JSON.stringify(err));
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    })
});

router.get("/:id", (req, res) => {
    postContr.getPost(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(JSON.stringify(err));
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    })
});

router.post("/", (req, res) => {
    postContr.createPost(req.body.title, (err, data) => {
        if (err) {
            res.status(500).send(JSON.stringify(err));
        } else {
            res.status(200).send(JSON.stringify(data));
        }
    })
});

router.delete("/all", (req, res) => {
    postContr.deleteAllPosts((err) => {
        if (err) {
            res.status(500).send(JSON.stringify(err));
        } else {
            res.status(200).send();
        }
    })
})

router.delete("/:id", (req, res) => {
    postContr.deletePost(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(JSON.stringify(err));
        } else {
            res.status(200).send();
        }
    })
});

module.exports = router;