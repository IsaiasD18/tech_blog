const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tech_blog_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;