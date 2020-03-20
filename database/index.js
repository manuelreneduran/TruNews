const Sequelize = require('sequelize');
const { seedDb } = require('./seed.js');

const sequelize = new Sequelize
(
  process.env.DB_SCHEMA || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'docker',
  {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      dialectOptions: {
          ssl: process.env.DB_SSL == "true"
      }
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Posts = sequelize.define('posts', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  rank: {
      type: Sequelize.STRING
  },
  displayRank: {
    type: Sequelize.STRING
  }
});
sequelize.sync({
  force: true
})
  .catch(err => {
    console.log("db error: " + err)
  })


module.exports = {
    sequelize: sequelize,
    Posts: Posts
};