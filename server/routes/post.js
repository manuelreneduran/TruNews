var express = require('express');
var router = express.Router();
var db = require('../../database');

router.get("/all", function(req, res) {
    db.Post.findAll()
        .then( posts => {
            res.status(200).send(JSON.stringify(posts));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    db.Post.findByPk(req.params.id)
        .then( post => {
            res.status(200).send(JSON.stringify(post));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    db.Post.create({
        title: req.body.title,
        id: req.body.id
        })
        .then( post => {
            res.status(200).send(JSON.stringify(post));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
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