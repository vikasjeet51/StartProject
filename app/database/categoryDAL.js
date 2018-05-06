const dbConnect=require('./DBConnect');
var categoryHelper={};
categoryHelper.getMainCategories= function ()
{
  return new Promise(function(resolve, reject) {
        // Do async job
        dbConnect.query("select * from schema_kw.get_categories(:id)",{
        replacements: { id: 2}}).then(myTableRows => {
          //console.log( myTableRows);
          console.log('done');
          resolve(myTableRows);
        })
        });
  //dbConnect.authenticate().then(()=>{console.log('connected')}).catch(err=>{console.err('connection failed',err)})
};

categoryHelper.createMainCategory= function (objCategories,CreatedBy,ModifiedBy)
{
  return new Promise(function(resolve, reject) {
        // Do async job
        dbConnect.query("INSERT INTO schema_KW.maincategory( maincategoryname, Description,CreatedBy, ModifiedBy)"+
        "VALUES ('"+objCategories.Title+"', '"+objCategories.Description+"',"+CreatedBy+","+ModifiedBy+")")
        .then(myTableRows => {
          console.log('done');
          resolve(myTableRows);
        })
        });
  //dbConnect.authenticate().then(()=>{console.log('connected')}).catch(err=>{console.err('connection failed',err)})
};

module.exports=categoryHelper;
