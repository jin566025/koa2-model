// const router = require('koa-router')()
// const product = require('./router/product');
// const common = require('./router/common');
const user = require('./router/user');
const model = require('./router/model');
const SundayLookRecord = require('./router/SundayLookRecord');const comment_image = require('./router/comment_image');const comment_reply = require('./router/comment_reply');const coupon = require('./router/coupon');const dept = require('./router/dept');const dict = require('./router/dict');const draw = require('./router/draw');const fire_excel_order_record = require('./router/fire_excel_order_record');const fire_excel_record = require('./router/fire_excel_record');const fire_invoice = require('./router/fire_invoice');const fire_order = require('./router/fire_order');const fire_pintuan_record = require('./router/fire_pintuan_record');const fire_video = require('./router/fire_video');const goods_comment = require('./router/goods_comment');const login_log = require('./router/login_log');const lucky_value = require('./router/lucky_value');const menu = require('./router/menu');const notice = require('./router/notice');const operation_log = require('./router/operation_log');const productType = require('./router/productType');const pt_reply = require('./router/pt_reply');const recommend = require('./router/recommend');const relation = require('./router/relation');const role = require('./router/role');const sunday_address = require('./router/sunday_address');const sunday_advertisement = require('./router/sunday_advertisement');const sunday_advertisement_fire = require('./router/sunday_advertisement_fire');const sunday_advertisement_zone = require('./router/sunday_advertisement_zone');const sunday_collection = require('./router/sunday_collection');const sunday_comment_fire = require('./router/sunday_comment_fire');const sunday_goods = require('./router/sunday_goods');const sunday_member = require('./router/sunday_member');const sunday_pay = require('./router/sunday_pay');const sunday_pay_config = require('./router/sunday_pay_config');const sunday_product = require('./router/sunday_product');const sunday_product_category = require('./router/sunday_product_category');const sunday_product_fire = require('./router/sunday_product_fire');const sunday_product_new = require('./router/sunday_product_new');const sunday_score = require('./router/sunday_score');const sunday_score_record = require('./router/sunday_score_record');const sunday_upload = require('./router/sunday_upload');const sunday_upload_fire = require('./router/sunday_upload_fire');const topic = require('./router/topic');const topic_union = require('./router/topic_union');const wei_xin_config = require('./router/wei_xin_config');const wei_xin_menu = require('./router/wei_xin_menu');const wei_xin_message = require('./router/wei_xin_message');const wei_xin_message_detail = require('./router/wei_xin_message_detail');const wei_xin_message_key_word = require('./router/wei_xin_message_key_word');const wei_xin_user = require('./router/wei_xin_user');
module.exports = function(app){
// 	app.use(product.routes()).use(product.allowedMethods())
// 	app.use(common.routes()).use(common.allowedMethods())
	app.use(user.routes()).use(user.allowedMethods())

	// app.use(model.routes()).use(model.allowedMethods())
	
	app.use(SundayLookRecord.routes()).use(SundayLookRecord.allowedMethods());app.use(comment_image.routes()).use(comment_image.allowedMethods());app.use(comment_reply.routes()).use(comment_reply.allowedMethods());app.use(coupon.routes()).use(coupon.allowedMethods());app.use(dept.routes()).use(dept.allowedMethods());app.use(dict.routes()).use(dict.allowedMethods());app.use(draw.routes()).use(draw.allowedMethods());app.use(fire_excel_order_record.routes()).use(fire_excel_order_record.allowedMethods());app.use(fire_excel_record.routes()).use(fire_excel_record.allowedMethods());app.use(fire_invoice.routes()).use(fire_invoice.allowedMethods());app.use(fire_order.routes()).use(fire_order.allowedMethods());app.use(fire_pintuan_record.routes()).use(fire_pintuan_record.allowedMethods());app.use(fire_video.routes()).use(fire_video.allowedMethods());app.use(goods_comment.routes()).use(goods_comment.allowedMethods());app.use(login_log.routes()).use(login_log.allowedMethods());app.use(lucky_value.routes()).use(lucky_value.allowedMethods());app.use(menu.routes()).use(menu.allowedMethods());app.use(notice.routes()).use(notice.allowedMethods());app.use(operation_log.routes()).use(operation_log.allowedMethods());app.use(productType.routes()).use(productType.allowedMethods());app.use(pt_reply.routes()).use(pt_reply.allowedMethods());app.use(recommend.routes()).use(recommend.allowedMethods());app.use(relation.routes()).use(relation.allowedMethods());app.use(role.routes()).use(role.allowedMethods());app.use(sunday_address.routes()).use(sunday_address.allowedMethods());app.use(sunday_advertisement.routes()).use(sunday_advertisement.allowedMethods());app.use(sunday_advertisement_fire.routes()).use(sunday_advertisement_fire.allowedMethods());app.use(sunday_advertisement_zone.routes()).use(sunday_advertisement_zone.allowedMethods());app.use(sunday_collection.routes()).use(sunday_collection.allowedMethods());app.use(sunday_comment_fire.routes()).use(sunday_comment_fire.allowedMethods());app.use(sunday_goods.routes()).use(sunday_goods.allowedMethods());app.use(sunday_member.routes()).use(sunday_member.allowedMethods());app.use(sunday_pay.routes()).use(sunday_pay.allowedMethods());app.use(sunday_pay_config.routes()).use(sunday_pay_config.allowedMethods());app.use(sunday_product.routes()).use(sunday_product.allowedMethods());app.use(sunday_product_category.routes()).use(sunday_product_category.allowedMethods());app.use(sunday_product_fire.routes()).use(sunday_product_fire.allowedMethods());app.use(sunday_product_new.routes()).use(sunday_product_new.allowedMethods());app.use(sunday_score.routes()).use(sunday_score.allowedMethods());app.use(sunday_score_record.routes()).use(sunday_score_record.allowedMethods());app.use(sunday_upload.routes()).use(sunday_upload.allowedMethods());app.use(sunday_upload_fire.routes()).use(sunday_upload_fire.allowedMethods());app.use(topic.routes()).use(topic.allowedMethods());app.use(topic_union.routes()).use(topic_union.allowedMethods());app.use(user.routes()).use(user.allowedMethods());app.use(wei_xin_config.routes()).use(wei_xin_config.allowedMethods());app.use(wei_xin_menu.routes()).use(wei_xin_menu.allowedMethods());app.use(wei_xin_message.routes()).use(wei_xin_message.allowedMethods());app.use(wei_xin_message_detail.routes()).use(wei_xin_message_detail.allowedMethods());app.use(wei_xin_message_key_word.routes()).use(wei_xin_message_key_word.allowedMethods());app.use(wei_xin_user.routes()).use(wei_xin_user.allowedMethods());
}
