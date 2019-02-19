// const router = require('koa-router')()
// const product = require('./router/product');
// const common = require('./router/common');
const adminUser = require('./router/adminUser');
const model = require('./router/model');
//这里替换掉
module.exports = function(app){
// 	app.use(product.routes()).use(product.allowedMethods())
// 	app.use(common.routes()).use(common.allowedMethods())
	app.use(adminUser.routes()).use(adminUser.allowedMethods())

	//app.use(model.routes()).use(model.allowedMethods())
	
	//这里也替换掉
}
