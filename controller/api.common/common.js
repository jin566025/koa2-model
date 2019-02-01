const multiparty = require("multiparty");
// const co = require('co');
// const OSS = require('ali-oss');

// const client = new OSS({
//     // region: 'oss-cn-qingdao',
// 	// region: 'oss-cn-hangzhou.aliyuncs.com',
//     accessKeyId: 'LTAIBcDd9sXlrZV1',
//     accessKeySecret: 'FAH7GFfzZ0F5EiR24IOYdHSzW9F6nh',
// 	bucket: 'jinstore',
// 	region: 'oss-cn-hangzhou'
// });

class commonController{
	static async upToLocal(ctx){
		let form = new multiparty.Form({uploadDir:'./public/images/' });

		let result = ()=>{
			return new Promise((resolve,reject)=>{
				form.parse(ctx.req,function(err,fields,files){
					if(err){throw err; return;}
					let url = files.file[0].path.substring(7)
					
					resolve(url)
				});
			})
		}
		let url = await result();
		ctx.body = {
			success:true,
			url:url
		}
	}
// 	static async upImg(ctx){
// 		let alioss_upfile = function(){
// 			return new Promise((resolve,reject)=>{
// 				let form = new formidable.IncomingForm();
// 				form.parse(ctx.req,(err,fields,files)=>{
// 					if (err) { throw err; return; }
// 					
// 					let date = new Date();
// 					let time = '' + date.getFullYear() + date.getMonth() + 1 + date.getDate();
// 					let filepath = time + '/' + date.getTime();
// 					let fileext = files.file.name.split('.');
// 					let upfile = files.file.path;
// 					var newfile = filepath + '.' + fileext[1];
// 					//ali-oss
// 					co(function*() {
// 						client.useBucket('p-adm-test'); //自定义项
// 						let result = yield client.put(newfile, upfile);
// 						console.log('文件上传成功!', result.url);
// 						ctx.body = {
// 							success:true,
// 							url:result.url,
// 							msg:'成功'
// 						}
// 					}).catch(function(err) {
// 						console.log(err);
// 					});
// 				})
// 			})
// 		}
// 		let resutl = await alioss_upfile 
// 	}
}

module.exports = commonController;