const Config=require('../../Config/config');
const Sequelize = require('sequelize');
var connection=new Sequelize(Config.postgres.db, Config.postgres.user, Config.postgres.password, {
  // the sql dialect of the database
  // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
  dialect: 'postgres',

  // custom host; default: localhost
  host: Config.postgres.host,

  // custom port; default: dialect default
  port: Config.postgres.port,

  // custom protocol; default: 'tcp'
  // postgres only, useful for Heroku
  protocol: 'tcp',

  // disable logging; default: console.log
  logging: false,
  omitNull: true,

  // a flag for using a native library or not.
  // in the case of 'pg' -- set this to true will allow SSL support
  // - default: false
  native: false,

  // similar for sync: you can define this to always force sync for models
  sync: { force: true },

  // pool configuration used to pool database connections
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  }
});
module.exports=connection;
