const request = require('request');
const jwt = require('jsonwebtoken');
const createToken = require('../../common/createToken.js');
const dao = require('../../common/dao.js');
const $sql = require('./usersql.js');

class userController{
	static async login(ctx){
		let params = ctx.request.body;
		let username = params.username;
		let password = params.password;
		let result = await dao.toDo($sql.login,[username]);
		console.log(result)
		if(!result){
			ctx.body = {
				success:false,
				code:200,
				msg:'用户不存在'
			}
		}else if(result[0].password===password){
			let token = createToken(username);
			let id = result[0].id;
			let datas = await dao.toDo($sql.insertToken,[token,id]);
			if(datas){

				ctx.body = {
					success:true,
					code:0,
					msg:'成功',
					token:token,
					notoken:false,
					id:id
				}

			}else{
				ctx.body = {
					success:false,
					code:200,
					msg:'失败'
				}
			}
		}else{
			ctx.body = {
				success:false,
				code:200,
				msg:'密码错误'
			}
		}
	};
	static async wxLogin(ctx){
		let params = ctx.request.body;
		let nickname = params.nickname;
		let token = createToken(nickname);
		ctx.body = {
			success:true,
			code:0,
			msg:'成功',
			token:token
		}
	}
}
module.exports =  userController;