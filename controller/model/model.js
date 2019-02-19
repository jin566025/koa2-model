const dao = require('../../common/dao.js');

class model{
	static async findOne(ctx){
		let params = ctx.request.body;
		let result = await dao.toDo('select * from model where id=?',[params.id]);
		if(result){
			ctx.body = {
				success:true,
				msg:'成功',
				data:result[0]
			}
			
		}else{
			ctx.body = {
				success:false,
				msg:'失败'
			}
		}
	};
	static async findAll(ctx){
		let params = ctx.request.body;
		let pageSize = params.pageSize;
		let pageNo = (params.pageNo-1)*pageSize;
		let keyArray = []
		for(let key in params){
			if(key!=='pageSize' && key!=='pageNo'  && key!=='like'){
				keyArray.push({key:key,value:params[key]})
			}
		}
		let zanwei = ``;
		let countSql = `select count(*) as total from model `;
		let sqlstr=`where `;
		let sqlArray = [pageNo,pageSize];
		let countSqlArray = [];
		let zanweiArray=[];
		if(keyArray.length>0){
			keyArray.map((item,index)=>{
				zanweiArray.push(item.value);
				countSqlArray.push(item.value);
				if(index==keyArray.length-1){
					sqlstr = sqlstr+`${item.key}=? `
				}else{
					sqlstr = sqlstr+`${item.key}=?  and  `
				}
				
			})
			zanwei = zanwei+sqlstr
			countSql = countSql+sqlstr
		}
		
		if(params.like){
			let like = params.like;
			let likeKey,likeValue;
			for(let k in like){
				likeKey = k;
				likeValue = like[k];
			}
			if(keyArray.length>0){
				zanwei = zanwei + ` and ${likeKey} like "%${likeValue}%" `
			}else{
				zanwei = `where ${likeKey} like "%${likeValue}%" `
			}
		}
		let sql = `select * from model ${zanwei} order by id desc limit ?,? `;
		sqlArray = [...zanweiArray,...sqlArray]
		let result = await dao.toDo(sql,sqlArray);
		let count = await dao.toDo(countSql,countSqlArray);
		if(result){
			ctx.body = {
				success:true,
				msg:'成功',
				data:result,
				total:count[0].total
			}
		}else{
			ctx.body = {
				success:false,
				msg:'失败'
			}
		}
	};
	static async remove(ctx){
		let params = ctx.request.body;
		let result = await dao.toDo('delete from model where id=?',[params.id]);
		if(result){
			ctx.body = {
				success:true,
				msg:'成功'
			}
		}else{
			ctx.body = {
				success:false,
				msg:'失败'
			}
		}
	};
	static async add(ctx){
		let params = ctx.request.body;
		let now = new Date();
		let createTime = now.getTime();
		let sql = "insert into model set "
		let sqlkey = "";
		let values = [];
		for(let key in params){
			sqlkey = sqlkey+key+"=?,"
			values.push(params[key])
		}
		sqlkey=sqlkey.substring(0,sqlkey.length-1);
		sql = sql+sqlkey;
		let result = await dao.toDo(sql,values)
		if(result){
			ctx.body = {
				success:true,
				msg:'成功'
			}
		}else{
			ctx.body = {
				success:false,
				msg:'失败'
			}
		}
	};
	static async update(ctx){
		let params = ctx.request.body;
		let sql = "update model set "
		let sqlkey = "";
		let values = [];
		for(let key in params){
			if(key!=="id"){
				sqlkey = sqlkey+key+"=?,";
				values.push(params[key])
			}
		}
		sqlkey=sqlkey.substring(0,sqlkey.length-1)
		sql =  sql+sqlkey+" where id=?";
		values.push(params.id)
		let result = await dao.toDo(sql,values)
		if(result){
			ctx.body = {
				success:true,
				msg:'成功'
			}
		}else{
			ctx.body = {
				success:false,
				msg:'失败'
			}
		}
	};
}
module.exports = model;