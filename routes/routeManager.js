const users=require('./users');
const category=require('./category');
function setRoutes(app)
{
  app.use('/api/v1/users', users);
  app.use('/api/v1/category', category);
}
module.exports=setRoutes;
