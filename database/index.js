const Sequelize = require('sequelize');

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

const Post = sequelize.define('posts', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  rank: {
      type: Sequelize.INTEGER
  },
  displayRank: {
    type: Sequelize.INTEGER
  }
});

sequelize.sync({
  // force: true
});

module.exports = {
    sequelize: sequelize,
    Post
};