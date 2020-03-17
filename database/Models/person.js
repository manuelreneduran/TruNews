const Person = sequelize.define('Person', {
  firstName: {
      type: Sequelize.STRING,
      allowNull: false
  },
  lastName: {
      type: Sequelize.STRING,
      allowNull: true
  },
});

module.exports = {
  Person
}