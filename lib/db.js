const {Sequelize} = require('sequelize');
// You can choose to connect to sqlite here if you wish to
// Also, if you are using mysql on your local machine you need to update the credentials below
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:hello06!@localhost/questions', {logging: false});



module.exports = {sequelize};