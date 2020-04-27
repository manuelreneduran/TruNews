const environment = process.env.NODE_ENV || "development"; // set environment
const configuration = require("../knexfile.js")[environment]; // pull in correct db with env configs
const database = require("knex")(configuration); // define database based on above
const bcrypt = require("bcrypt"); // bcrypt will encrypt passwords to be saved in db
const crypto = require("crypto"); // built-in encryption node module

const signup = (request, response) => {
  const user = request.body;
  hashPassword(user.password)
    .then((hashedPassword) => {
      delete user.password;
      user.password_digest = hashedPassword;
    })
    .then(() => createToken())
    .then((token) => (user.token = token))
    .then(() => createUser(user, response))
    .then((user) => {
      delete user.password_digest;
      response.status(201).json({ token: user.token, username: user.username });
    })
    .catch((err) => console.error(err));
};

const signin = (request, response) => {
  const userReq = request.body;
  let user;

  findUser(userReq, response)
    .then((foundUser) => {
      user = foundUser;
      return checkPassword(userReq.password, foundUser, response);
    })
    .then(() => createToken())
    .then((token) => updateUserToken(token, user))
    .then((data) => {
      delete user.password_digest;
      response.status(200).json(data);
    })
    .catch((err) => console.error(err));
};

const signinByToken = (request, response) => {
  const userReq = request.body;
  findUserByToken(userReq).then((res) => {
    response.status(200).json(res);
  });
};

const findUser = (userReq, res) => {
  return database
    .raw("SELECT * FROM users WHERE username = ?", [userReq.username])
    .then((data) => data.rows[0])
    .catch((err) => res.json("Username not found"));
};

const findUserByToken = (userReq) => {
  return database
    .raw("SELECT * FROM users WHERE token = ?", [userReq.token])
    .then((data) => data.rows[0]);
};

const checkPassword = (reqPassword, foundUser, res) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
      if (err) {
        reject(err);
      } else if (response) {
        resolve(response);
      } else {
        reject(res.status(200).json({ error: "Wrong password" }));
      }
    })
  );
};

const updateUserToken = (token, user) => {
  return database
    .raw(
      "UPDATE users SET token = ? WHERE id = ? RETURNING id, username, token",
      [token, user.id]
    )
    .then((data) => data.rows[0]);
};

// check out bcrypt's docs for more info on their hashing function
const hashPassword = (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    })
  );
};

const createUser = (user, res) => {
  return database
    .raw(
      "INSERT INTO users (username, password_digest, token, created_at, saved_articles) VALUES (?, ?, ?, ?, array[]::jsonb[]) RETURNING id, username, created_at, token, saved_articles",
      [user.username, user.password_digest, user.token, new Date()]
    )
    .then((data) => data.rows[0])
    .catch((err) => {
      console.log(err);
      res.status(200).json({ error: "Username exists" });
    });
};

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString("base64"));
    });
  });
};

const authenticate = (userReq) => {
  findByToken(userReq.token).then((user) => {
    if (user.username == userReq.username) {
      return true;
    } else {
      return false;
    }
  });
};

const findByToken = (token) => {
  return database
    .raw("SELECT * FROM users WHERE token = ?", [token])
    .then((data) => data.rows[0]);
};

const saveArticle = (req, res) => {
  const userReq = req.body;
  updateSavedArticles(userReq.article, userReq.username)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => console.log(err));
};

const getSavedArticles = (req, res) => {
  return database
    .raw("SELECT saved_articles FROM users WHERE username = ?", [
      req.body.username,
    ])
    .then((data) => {
      console.log(data.rows[0]);
      res.status(200).json(data.rows[0]);
    })
    .catch((err) => console.log(err));
};

const updateSavedArticles = (article, username) => {
  return database
    .raw(
      "UPDATE users SET saved_articles = array_append(saved_articles, ?) WHERE username = ? RETURNING username, saved_articles",
      [article, username]
    )
    .then((data) => data.rows[0])
    .catch((err) => console.log(err));
};

const deleteSavedArticle = (req, res) => {
  const article = req.body.article;
  const username = req.body.username;
  const url = req.body.article.url;
  // `select position-1 from users, jsonb_array_elements(value->'title') with ordinality arr(elem, position) WHERE elem = 'https://www.nytimes.com/2020/04/16/nyregion/michael-che-nycha-rent-coronavirus.html';`

  return database
    .raw(`select saved_articles from users u where username = ?`, [username])
    .then((data) => {
      const newArticles = data.rows[0].saved_articles.filter((ele) => {
        return ele.url !== url;
      });
      // newJSON = JSON.stringify;
      console.log("here are new articles " + JSON.stringify(newArticles));
      return newArticles;
    })
    .then((data) => {
      if (data.length !== 0) {
        return database.raw(
          "UPDATE users SET saved_articles = ARRAY [?::jsonb] WHERE username = ? RETURNING username, saved_articles",
          [data, username]
        );
      } else {
        return database.raw(
          "UPDATE users SET saved_articles = ARRAY []::jsonb[] WHERE username = ? RETURNING username, saved_articles",
          [username]
        );
      }
    })
    .then((data) => {
      console.log("success delete? " + data.rows[0])
      res.status(200).json(data.rows[0])
    })
    .catch((err) => console.log(err))

  return database
    .raw
    // [
    //   article.url, article.url, username
    // ]
    ()
    .then((data) => {
      console.log("data" + JSON.stringify(data));
      // res.status(200).json(data.rows[0]);
    })
    .catch((err) => console.log("error deleting article: " + err));
};

module.exports = {
  signup,
  signin,
  authenticate,
  signinByToken,
  saveArticle,
  getSavedArticles,
  deleteSavedArticle,
};
