const config = {}

config.redisStore = {
  url: process.env.REDIS_STORE_URI,
  secret: process.env.REDIS_STORE_SECRET
},
config.postgres={
  host:'173.249.63.83',
  port:'5432',
  db:'db_KisanWorld',
  user:'postgres',
  password:'password'
}

module.exports = config
