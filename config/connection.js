const Sequelize = require('sequelize');
// gets neccesarry info for sequalize from .env
require('dotenv').config();

let sequelize;
//if theres a jawsdb initializes swqualize there if not then at localhost
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;

