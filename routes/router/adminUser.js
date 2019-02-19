const router = require('koa-router')()
const user = require('../../controller/api.user/user')

router.post('/api/login', user.login);

module.exports = router;