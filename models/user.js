const environment     = process.env.NODE_ENV || 'development';    // set environment
const configuration   = require('../knexfile.js')[environment];   // pull in correct db with env configs
const database        = require('knex')(configuration);           // define database based on above
const bcrypt          = require('bcrypt')                         // bcrypt will encrypt passwords to be saved in db
const crypto          = require('crypto')                         // built-in encryption node module


const signup = (request, response) => {
  const user = request.body
  console.log(request.body);
  hashPassword(user.password)
    .then((hashedPassword) => {
      delete user.password
      user.password_digest = hashedPassword
    })
    .then(() => createToken())
    .then(token => user.token = token)
    .then(() => createUser(user))
    .then(user => {
      delete user.password_digest
      response.status(201).json({ token: user.token, username: user.username })
    })
    .catch((err) => console.error(err))
}

const signin = (request, response) => {
  const userReq = request.body
  let user

  findUser(userReq, response)
    .then(foundUser => {
      user = foundUser
      return checkPassword(userReq.password, foundUser, response)
    })
    .then((res) => createToken())
    .then(token => updateUserToken(token, user))
    .then((data) => {
      delete user.password_digest
      response.status(200).json(data)
    })
    .catch((err) => console.error(err))
}

const signinByToken = (request, response) => {
  const userReq = request.body;
  findUserByToken(userReq)
    .then(res => {
      response.status(200).json(res)
    })
}

const findUser = (userReq, res) => {
  return database.raw("SELECT * FROM users WHERE username = ?", [userReq.username])
    .then((data) => data.rows[0])
    .catch(err => res.json('Username not found'))
}

const findUserByToken = (userReq) => {
  return database.raw("SELECT * FROM users WHERE token = ?", [userReq.token])
    .then((data) => data.rows[0])
}


const checkPassword = (reqPassword, foundUser, res) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password_digest, (err, response) => {
        if (err) {
          reject(err)
        }
        else if (response) {
          resolve(response)
        } else {
          reject(res.status(200).json({ error: 'Wrong password' }))
        }
    })
  )
}

const updateUserToken = (token, user) => {
  return database.raw("UPDATE users SET token = ? WHERE id = ? RETURNING id, username, token", [token, user.id])
    .then((data) => data.rows[0])
}

// check out bcrypt's docs for more info on their hashing function
const hashPassword = (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash)
    })
  )
}

const createUser = (user) => {
  return database.raw(
    "INSERT INTO users (username, password_digest, token, created_at) VALUES (?, ?, ?, ?) RETURNING id, username, created_at, token",
    [user.username, user.password_digest, user.token, new Date()]
  )
  .then((data) => data.rows[0])
  .catch((err) => {
    return err;
  })
}

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'))
    })
  })
}

const authenticate = (userReq) => {
  findByToken(userReq.token)
    .then((user) => {
      if (user.username == userReq.username) {
        return true
      } else {
        return false
      }
    })
}

const findByToken = (token) => {
  return database.raw("SELECT * FROM users WHERE token = ?", [token])
    .then((data) => data.rows[0])
}

module.exports = {
  signup, signin, authenticate, signinByToken
}