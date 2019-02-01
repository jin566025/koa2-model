const mysql = require('mysql');
const $db = require('../config/db.js');
const $util = require('../config/util.js');
const pool = mysql.createPool($util.extend({},$db.mysql));

class dao{
	static toDo(sql,params){
		return new Promise((resolve,reject)=>{
			pool.getConnection((err,connection)=>{
				connection.query(sql,params,(err,res)=>{
					if(res){
						resolve(res);
					}else{
						reject(err)
					}
					
					connection.release();
				})
			})
		})
	}
}
module.exports = dao