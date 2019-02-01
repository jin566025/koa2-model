const product = {
	productById:'select * from product where product_id=?',
	productAllType:'select * from product limit ?,? where type=',
	productAll:'select * from product order by product_id desc limit ?,?',
	productCountType:'select count(*) as total from product where type=?',
	productCount:'select count(*) as total from product',
	productAdd:'INSERT INTO `product` (`product_name`,`product_price`,`product_desc`,`product_img`,`product_type`,`create_time`) VALUES(?,?,?,?,?,?)',
	productDelete:'delete from product where product_id=?',
	productUpdate:'UPDATE `product` SET `product_name`=?, `product_price`=?, `product_desc`=?, `product_img`=?,`product_type`=? where product_id=?',
	uploadImg:'UPDATE `product` SET `detail_imgs`=?,`swiper_imgs`=?',
	saveImg:'UPDATE `product` SET  `detail_imgs`=?,`swiper_imgs`=? where product_id=?',
}
module.exports = product