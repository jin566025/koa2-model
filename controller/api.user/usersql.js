const user = {
	login:'select * from admin_user where username=?',
	insertToken:'update `admin_user` set `token`=? where `id`=? '
}
module.exports = user