const request = require('request');
const dao = require('../../common/dao.js');
const $sql = require('./productsql.js');

class productController{
	static async productById(ctx){
		let params = ctx.request.body;
		let result = await dao.toDo($sql.productById,[params.product_id]);
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
	static async productAll(ctx){
		let params = ctx.request.body;
		let pageSize = params.pageSize;
		let pageNo = (params.pageNo-1)*pageSize;
		let type = params.type;
		let result,count;
		if(type){
			result = await dao.toDo($sql.productAllType,[type,pageNo,pageSize]);
			count = await dao.toDo($sql.productCountType,[type]);
		}else{
			result = await dao.toDo($sql.productAll,[pageNo,pageSize]);
			count = await dao.toDo($sql.productCount,[]);
		}
		
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
	static async getProductAll(ctx){

		let result = await dao.toDo($sql.productAll,[1,10]);
		let count = await dao.toDo($sql.productCount,[]);
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
	static async productAdd(ctx){
		let params = ctx.request.body;
		let now = new Date();
		let create_time = now.getTime();
		let result = await dao.toDo($sql.productAdd,[params.product_name,params.product_price,params.product_desc,params.product_img,params.product_type,create_time])
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
	static async productDelete(ctx){
		let params = ctx.request.body;
		let result = await dao.toDo($sql.productDelete,[params.product_id])
		console.log(result)
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
	static async productUpdate(ctx){
		let params = ctx.request.body;
		let result = await dao.toDo($sql.productUpdate,[params.product_name,params.product_price,params.product_desc,params.product_img,params.product_type,params.product_id])
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
	static async uploadImg(ctx){
		let params = ctx.request.body;
		let id = params.product_id;
		let result = await dao.toDo($sql.productById,[id]);
		let sql = ""
		if(result.data.swiper_imgs || result.data.detail_imgs){
			
		}
		// let result = await dao.toDo()
	};
	static async saveImg(ctx){
		let params = ctx.request.body;
		let result = await dao.toDo($sql.saveImg,[params.detail_imgs,params.swiper_imgs,params.product_id]);
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
	}
	
// 	static async saveImg(ctx){
// 		let params = ctx.request.body;
// 		let result = await dao.toDo($sql.saveImg,[params.detail_imgs,params.swiper_imgs,params.product_id]);
// 		if(result){
// 			ctx.body = {
// 				success:true,
// 				msg:'成功'
// 			}
// 		}else{
// 			ctx.body = {
// 				success:false,
// 				msg:'失败'
// 			}
// 		}
// 	}
}
module.exports = productController;