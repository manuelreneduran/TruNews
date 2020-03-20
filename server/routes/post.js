var express = require('express');
var router = express.Router();
var db = require('../../database');

router.get("/all", (req, res) => {
    db.Post.findAll()
        .then( posts => {
            res.status(200).send(JSON.stringify(posts));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", (req, res) => {
    db.Post.findByPk(req.params.id)
        .then( post => {
            res.status(200).send(JSON.stringify(post));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.post("/", (req, res) => {
    db.Post.create({
        title: req.body.title,
        vote: 0,
        rank: 0,
        displayRank: 0
        })
        .then( post => {
            res.status(200).send(JSON.stringify(post));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/all", (req, res) => {
    db.Post.destroy({
        truncate: true
    })
    .then( () => {
        res.status(200).send();
    })
    .catch( err => {
        res.status(500).send(JSON.stringify(err))
    })
})

router.delete("/:id", (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;