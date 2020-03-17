const Post = sequelize.define('Post', {
  title: {
      type: Sequelize.STRING,
      allowNull: false
  },
  date: {
      type: Sequelize.DATE,
      allowNull: false
  },
  comments: {
    type: Sequelize.JSON,
    allowNull: false
  }
});

module.exports = {
  Post : Post
}