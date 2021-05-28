var config={};
// module.exports.databaseOptions = {
//     host     : 'localhost',
//     database : 'samarpan',
//     user     : 'root',
//     password : 'root'
//   };

  config.databaseOptions = {
    host     : 'localhost',
    database : 'samarpan',
    user     : 'root',
    password : 'root',
    multipleStatements: true 
	
  }

config.app_name = "samarpan";
config.node_port = 3536;

module.exports=config
